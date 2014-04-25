<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<script>
  function update(){
    location.reload();
  }
  setInterval ( update, 300000 );
  </script>

      <?php print render($page['content']); ?>