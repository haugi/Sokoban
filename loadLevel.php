<?php
	header('Content-type: application/json');
	
	if (isset($_POST['level'])) {
		$file = 'levels/level' . (int)$_POST['level'] . '.php';
		
		if (is_file($file)) {
			include($file);
			
			echo json_encode(array("result" => "true", "levelInfo" => array("maxRow" => $maxRow, "maxCol" => $maxCol, "level" => $levelTemplate)));
		} else {
			echo json_encode(array("result" => "false"));
		}
	} 
?>