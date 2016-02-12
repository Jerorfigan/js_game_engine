if(!window.sft) window.sft = {};

(function(){
	var Point = function(x, y){
		this._x = x;
		this._y = y;
	};

	// Getters / Setters
	Point.prototype.x = function(newX){ if(!!newX){ this.x = newX; }else{ return this.x; }};
	Point.prototype.y = function(newY){ if(!!newY){ this.y = newY; }else{ return this.y; }};

	Point.prototype.toString = function(){ return "<" + this._x + "," + this._y + ">"; };

	window.sft.Point = Point;
})();