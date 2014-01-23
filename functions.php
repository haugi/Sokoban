<?php

function getUserLevelFromCookie() {
	return 1;
}

function getSelect () {
	$currentLevel = getUserLevelFromCookie();
	
	$options = '';
	for ($i = 1; $i <= $currentLevel; $i++) {
		$options .= '<option value="' . $i . '">' . $i . '</option>';
	}
	
	return $options;
}

function getCurrentLanguage() {
	if (isset($_COOKIE['language'])) {
		return $_COOKIE['language'];
	} else {
		return 'en';
	}
}

function getLabel($labelID, $labels) {
	if (!empty($labels[$labelID])) {
		return $labels[$labelID];
	} else {
		return $labelID;
	}
}