<!DOCTYPE html>
<html>
<?php
	include('config.php');
	include('functions.php');
	include('labels/' . getCurrentLanguage() . '.php');
?>
<head>
	<meta charset="UTF-8">
	<title>Sokoban</title>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<link rel="stylesheet" href="css/styles.css" type="text/css" media="all"/>
	
</head>

<body>
	<select id="levelSelect">
		<?php echo getSelect(); ?>
	</select>
	<input type="button" id="selectLevel" value="<?php echo getLabel('select_level', $labels) ?>"/>
	<div id="screen">
		
	</div>
	<script src="js/main.js"></script>
</body>
</html>