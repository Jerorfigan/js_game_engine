if(!window.sft) window.sft = {};

(function(){
	var GameManager = function(){

	}

	GameManager.prototype.draw = function(){
		console.log("Frame drawn!");
	}

	GameManager.prototype.update = function(){
		console.log("Game state updated!");
	}

	GameManager.prototype.draw = function(){
		console.log("Frame drawn!");
	}

	window.sft.GameManager = GameManager;
})();