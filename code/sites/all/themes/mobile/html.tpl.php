<head profile="<?php print $grddl_profile; ?>">
  <title><?php print $head_title; ?></title>
  <link rel="stylesheet" href="/sites/all/themes/mobile/touch/resources/css/sencha-touch.css" type="text/css">
  <script type="text/javascript" src="/sites/all/themes/mobile/touch/sencha-touch.js"></script>
  <script type="text/javascript" src="/sites/all/themes/mobile/js/app.js"></script>
  
  <style type="text/css" media="screen">
	   body {
	       background-color: #333;
	   }
	   .x-tabpanel > .x-panel-body .x-panel-body {
	       text-align: center;
	       font-weight: bold;
	       color: rgba(0,0,0,.2);
	       text-shadow: rgba(255,255,255,.2) 0 1px 0;
	   }
	   .x-phone .x-tabpanel > .x-panel-body .x-panel-body {
	       padding: 30px 20px;
	       font-size: 14px;
	   }
	   .x-phone p {
	       font-size: 16px;
	       line-height: 18px;
	   }
	   h1 {
	       font-weight: bold;
	   }
	   p {
	       font-size: 24px;
	       line-height: 30px;
	   }
	   .card2 .x-panel-body {
	       background-color: #5E99CC;
	   }
	   .card3 .x-panel-body {
	       background-color: #759E60;
	   }
	   .card4 .x-panel-body {
	       background-color: #9C744F;
	   }
	   .card5 .x-panel-body {
	       background-color: #926D9C;
	   }
.list-item-title
{
    float:left;
    width:80%;
    font-size:120%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  text-align:left;
  font-family:verdana;
}
.list-item-location{
  font-size:30px;
  float:right;
  margin-right:20px;
    width:15%;
  text-align:right;
  font-family:verdana;
  margin-top:13px;
}

.list-item-text
{
    float:left;
    color:black;
    width:80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:left;
  font-family:verdana;
  margin-top:15px;
}

.list-item-status .red{
  color:red;
  font-weight:bold;
}

.list-item-status .green{
  color:green;
}

.x-item-selected .list-item-status .red{
  color:white;
}

.x-item-selected .list-item-status .green{
  color:white;
}

.list-item-status
{
    float:left;
    color:#666666;
    width:80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:left;
    font-family:verdana;
}
.x-item-selected .list-item-title
{
  text-align:left;
  color:#ffffff;
}
.x-item-selected .list-item-text
{
  color:#ffffff;
}
.x-item-selected .list-item-status
{
  color:#ffffff !important;
}

.x-ticket-item{
  width:48%;
  float:left;
  padding:10px;
}

.x-list-item{
  font-size:14px;
}
.comments{
  padding:10px;
  font-size:18px;
}

.comment{
  padding-top:12px;
}

.comments p{
  font-size:18px;
}
.submitted{
  font-size:12px;
}

.x-ticket-body{
  padding:10px;
  float:left;
  width:100%;
}

.new{
  display:none;
}
.permalink{
  display:none;
}

.comments h3{
  display:none;
}

.links{
  display:none;
}
	</style>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
</body>
</html>