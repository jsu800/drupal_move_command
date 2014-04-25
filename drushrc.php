<?php
$conf = parse_ini_file("/srv/bindings/a42ecbb78b2346beae409c064de8b3ce/php-fpm.conf");
$_SERVER['PRESSFLOW_SETTINGS'] = $conf['env']['PRESSFLOW_SETTINGS'];
$options['l'] = "http://dev.move-it.gotpantheon.com";
initialize_pantheon();
