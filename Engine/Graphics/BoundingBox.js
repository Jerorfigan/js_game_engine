if(!window.sft) window.sft = {};

(function(){
	var BoundingBox = function(topLeft, bottomRight){
		this._topLeft = topLeft;
		this._bottomRight = bottomRight;
	};

	// Getters / Setters
	BoundingBox.prototype.topLeft = function(newTopLeft){ if(!!newTopLeft){ this.topLeft = newTopLeft; }else{ return window.sft.util.objects.clone(this.topLeft); }};
	BoundingBox.prototype.bottomRight = function(newBottomRight) { if(!!newBottomRight){ this.bottomRight = newBottomRight; }else{ return window.sft.util.objects.clone(this.bottomRight); }};

	BoundingBox.prototype.toString = function(){ return "Top Left: " + this._topLeft.toString() + " Bottom Right: " + this._bottomRight.toString(); };

	window.sft.BoundingBox = BoundingBox;
})();