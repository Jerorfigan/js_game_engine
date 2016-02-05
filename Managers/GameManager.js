if(!window.sft) window.sft = {};

(function(){
	var GameManager = function(){
		this.objMgr = new window.sft.ObjectManager();
		this.initGameManager = new window.sft.InitGameManager(this.objMgr);
		this.initGameManager.initGame();
	};

	GameManager.prototype.draw = function(){
		var drawList = this.objMgr.getAllWithAttr("renderAttr");
		drawList.forEach(function(obj){ obj.renderAttr.render(); });
	};

	GameManager.prototype.update = function(){
		var updateList = this.objMgr.getAllWithAttr("updateAttr");
		updateList.forEach(function(obj){ obj.updateAttr.update(); });
	};

	window.sft.GameManager = GameManager;
})();