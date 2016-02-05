if(!window.sft) window.sft = {};

(function(){
	var _objects = {};
	var _objectsArry = [];

	var ObjectManager = function(){

	};

	ObjectManager.prototype.getAllWithAttr = function(attr){
		return _objectsArry.filter(function(obj){ return !!obj[attr]; });
	};

	ObjectManager.prototype.track = function(key, object){
		if(_objects[key]) throw "duplicate key";
		_objects[key] = object;
		_objectsArry.push(object);
	};

	ObjectManager.prototype.forget = function(key){
		if(!_objects[key]) throw "unknown key";
		_objectsArry = _objectsArry.filter(function(obj){ return obj != _objects[key]; });
		delete _objects[key];
	};

	window.sft.ObjectManager = ObjectManager;
})();