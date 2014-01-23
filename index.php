<!DOCTYPE html>
<html>
<?php
	include('config.php');
	include('functions.php');
	include('labels/' . getCurrentLanguage() . '.php');
?>
<head>
	<meta charset="UTF-8">
	<title>Adventure</title>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="jquery.gamequery-0.7.1.js"></script>
	<style>
		#screen {
			width: 400px;
			height: 400px;
			border: 1px solid black;
			margin-left: auto;
			margin-right: auto;
			overflow: hidden;
		}
		
		.grid {
			background-color: #CCCCCC;
			width: 20px;
			height: 20px;
			float: left;
		}
		
		.grey {
			background-color: #AAAAAA;
		}
		
		.wall {
			background-color: #000000;
		}
		
		.target {
			background-color: red;
		}
		
		.box {
			background-color: yellow;
		}
		
		.player {
			background-color: green;
		}
		
		.clear {
			clear: both;
		}
	</style>
	
</head>

<body>
	<select id="levelSelect">
		<?php echo getSelect(); ?>
	</select>
	<input type="button" id="selectLevel" value="<?php echo getLabel('select_level', $labels) ?>"/>
	<div id="screen">
		<?php
			/*
for ($rowScreen = 0; $rowScreen < 20; $rowScreen++) {
				for ($colScreen = 0; $colScreen < 20; $colScreen++) {
					if ($colScreen % 2) {
						echo '<div class="grid"></div>';
					} else {
						echo '<div class="grid grey"></div>';
					}
				}
				echo '<div class="clear"></div>';
			}
*/
		?>
	</div>
	<script src="js/main.js"></script>
</body>
</html>