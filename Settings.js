if(!window.sft) window.sft = {};

(function(){
	/*******************/
	/* Static Settings */
	/*******************/
	/*
		1. FPS Settings (Static)
	*/

	// 1. FPS Settings (Static)
	var TARGET_FRAME_RATE = 30;

	var Settings = function(){
		/********************/
		/* DYNAMIC SETTINGS */
		/********************/

		/*
			1. FPS Settings (Dynamic)
		*/
		this.targetFramePeriodInSeconds = 1/TARGET_FRAME_RATE;
		this.targetFramePeriodInMilliseconds = this.targetFramePeriodInSeconds * 1000;
	};

	window.sft.Settings = Settings;
})();