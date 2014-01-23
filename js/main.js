const LEFT = 37;
const TOP = 38;
const RIGHT = 39;
const DOWN = 40;

var levelArray;
var currentPlayerRow;
var currentPlayerCol;

$(document).ready(function() {
	$.post('loadLevel.php', { level: '1'}).done(function(data) {
		if (data.result) {
			drawLevel(data.levelInfo)
		}
	});
	
	$(document).keydown(function(e) { 
		if (!collision(e.keyCode)) {
			console.log("move");
		}
	});
});

function drawLevel(level) {
	console.log(level);
	/*
var maxCol = level.maxCol;
	var maxRow = level.maxRow;
*/
	var template = level.level;
	
	
	var currentRow = 0;
	var currentCol = 0;
	levelArray = new Array();
	levelArray[currentRow] = new Array();
	
	for (var i = 0, len = template.length; i < len; i++) {
		var cssClass = 'grid';
		if (template[i] == '#') {
			cssClass += ' wall';
		} else if (template[i] == '$') {
			cssClass += ' box';
		} else if (template[i] == '.') {
			cssClass += ' target';
		} else if (template[i] == '@') {
			cssClass += ' player';
			currentPlayerRow = currentRow;
			currentPlayerCol = currentCol;
		} else if (template[i] == '\n') {
			cssClass = 'clear';
		}
		
		
		if (template[i] == '\n') {
			currentCol = 0;
			currentRow++;
			levelArray[currentRow] = new Array();
		} else {
			levelArray[currentRow][currentCol] = template[i];
			currentCol++;
		}
		
		$('#screen').append('<div class="' + cssClass + '"></div>');
	}
}

function collision(direction) {
	if (direction == LEFT) {
		if (levelArray[currentPlayerRow][currentPlayerCol - 1] == ' ' || levelArray[currentPlayerRow][currentPlayerCol - 1] == '.') {
			movePlayer(direction);
		} else if (levelArray[currentPlayerRow][currentPlayerCol - 1] == '$') {
			if (!boxCollision()) {
				moveBox();
				movePlayer(direction);
			}
		} else {
			return true;
		}
		
	} else if (direction == RIGHT) {
		if (levelArray[currentPlayerRow][currentPlayerCol + 1] == ' ' || levelArray[currentPlayerRow][currentPlayerCol + 1] == '.') {
			movePlayer(direction);
		} else if (levelArray[currentPlayerRow][currentPlayerCol + 1] == '$') {
			if (!boxCollision()) {
				moveBox();
				movePlayer(direction);
			}
		} else {
			return true;
		}
		
	} else if (direction == TOP) {
		if (levelArray[currentPlayerRow - 1][currentPlayerCol] == ' ' || levelArray[currentPlayerRow - 1][currentPlayerCol] == '.') {
			movePlayer(direction);
		} else if (levelArray[currentPlayerRow - 1][currentPlayerCol] == '$') {
			if (!boxCollision()) {
				moveBox();
				movePlayer(direction);
			}
		} else {
			return true;
		}
		
	} else if (direction == DOWN) {
		if (levelArray[currentPlayerRow + 1][currentPlayerCol] == ' ' || levelArray[currentPlayerRow + 1][currentPlayerCol] == '.') {
			movePlayer(direction);
		} else if (levelArray[currentPlayerRow + 1][currentPlayerCol] == '$') {
			if (!boxCollision()) {
				moveBox();
				movePlayer(direction);
			}
		} else {
			return true;
		}
		
	} else {
		return true;
	}
}

function boxCollision() {
	return true;
}

function moveBox() {
	return false;
}

function movePlayer(direction) {
	if (direction == LEFT) {
		levelArray[currentPlayerRow][currentPlayerCol - 1] = '@';
		levelArray[currentPlayerRow][currentPlayerCol] = ' ';
	} else if (direction == RIGHT) {
		levelArray[currentPlayerRow][currentPlayerCol + 1] = '@';
		levelArray[currentPlayerRow][currentPlayerCol] = ' ';
	} else if (direction == TOP) {
		levelArray[currentPlayerRow - 1][currentPlayerCol] = '@';
		levelArray[currentPlayerRow][currentPlayerCol] = ' ';
	} else if (direction == DOWN) {
		levelArray[currentPlayerRow + 1][currentPlayerCol] = '@';
		levelArray[currentPlayerRow][currentPlayerCol] = ' ';
	}
	
	newLevel = Object();
	var levelString = '';
	
	for (var i = 0, len = levelArray.length; i < len; i++) {
		for (var j = 0, leng = levelArray[i].length; j < leng; j++) {
			levelString += levelArray[i][j];
		}
		
		if (i < len - 1) {
			levelString += "\n";
		}
	}
	newLevel.level = levelString;
	redraw(newLevel);
}

function redraw(newLevel) {
	$('#screen').empty();
	drawLevel(newLevel);
}