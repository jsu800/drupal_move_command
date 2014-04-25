<?php

// Stub to support database resurrection on older codebases.
function resurrect_database() {
  if (!apc_exists('skip_resurrection_check') && strlen('10637') > 0) {
    $settings = json_decode($_SERVER['PRESSFLOW_SETTINGS'], TRUE);
    $db = $settings['databases']['default']['default'];

    $mysqli = @new mysqli($db['host'], $db['username'], $db['password'], $db['database'], $db['port']);

    if ($mysqli->connect_error) {
      // Don't return a 550; resurrect directly so Drush will work.
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, 'http://10.183.203.55:452/');

      $headers = array('X-Pantheon-Binding: 72e9ba52682e4c538016ae90bdd882d7',
                       'X-Pantheon-Service-Type: mysql');
      curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
      curl_setopt($ch, CURLOPT_HEADER, 0);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_TIMEOUT, 15);
      curl_exec($ch);
      $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
      if ($code != 418) {
        header('Content-Type: text/plain');
        echo('Failed to resurrect database. Got code: ' . $code . PHP_EOL);
        $error = curl_error($ch);
        if ($error != '') {
          echo('Got error: ' . $error . PHP_EOL);
        }
        die();
      }
      curl_close($ch);
    }
    else {
      $mysqli->close();
    }

    apc_store('skip_resurrection_check', TRUE, 60 * 60);
  }
}

// This function is guaranteed to be called after PRESSFLOW_SETTINGS are
// loaded into $_SERVER but before the application code runs.
function initialize_pantheon() {
  resurrect_database();
}

// If this is running in PHP-FPM, PRESSFLOW_SETTINGS will be initialized.
// If it's running in the CLI (Drush), the drushrc will call
// initialize_pantheon().
if (isset($_SERVER['PRESSFLOW_SETTINGS'])) {
  initialize_pantheon();
}
