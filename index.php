<?php
if (!empty($_SERVER['HTTP_CLIENT_IP']))
    {
      $ipaddress = $_SERVER['HTTP_CLIENT_IP']."\r\n";
    }
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
    {
      $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR']."\r\n";
    }
else
    {
      $ipaddress = $_SERVER['REMOTE_ADDR']."\r\n";
    }

$file = fopen("hasil.txt","w+");
fputs($file,$ipaddress);
fclose($file);

?>
<html>
<head>
<title>Error 404</title>
</head>
<body>
<h1>Forbidden Error 404</h1>
<p>Error</p>
</body>
</html>