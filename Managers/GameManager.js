if(!window.sft) window.sft = {};

(function(){
	var GameManager = function(){
		this.objMgr = new window.sft.ObjectManager();
		this.initGameManager = new window.sft.InitGameManager(this.objMgr);
		this.initGameManager.initGame();
	};

	GameManager.prototype.draw = function(){
		var renderList = this.objMgr.getAllWithClassOrAttr("", "renderAttr");
		renderList.forEach(function(obj){ obj.renderAttr.render(); });
	};

	GameManager.prototype.update = function(){
		/* Update manager objects before basic objects, as managers will change the update behavior of basic objects */
		var managerUpdateList = this.objMgr.getAllWithClassOrAttr("manager", "updateAttr");
		managerUpdateList.forEach(function(obj){ obj.updateAttr.update(); });

		var basicObjUpdateList = this.objMgr.getAllWithClassOrAttr("basic", "updateAttr");
		basicObjUpdateList.forEach(function(obj){ obj.updateAttr.update(); });
	};

	window.sft.GameManager = GameManager;
})();