if(!window.sft) window.sft = {};

(function(){
	var InitGameManager = function(){
	};

	InitGameManager.prototype.initGame = function(){
		var circle = new window.sft.TestCircle(
			new window.sft.Point(300,300), 200);
		window.sft.objMgr.track("circle", circle);
		console.log("Game initialized");
	};

	window.sft.InitGameManager = InitGameManager;
})();