if(!window.sft) window.sft = {};

window.onload = function(){
    // Setup polyfill for window.requestAnimationFrame
    (function() {
        var lastTime = 0;

        function requestAnimPolyfill(func) {
            var currTime = (new Date()).getTime();
            var timeToWait = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { func(currTime + timeToWait); }, timeToWait);
            lastTime = currTime + timeToWait;
            return id;
        }

        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimPolyfill;
    })();

    // Setup and kick off game driver
    (function () {
        var Driver = function () {
            window.sft.Settings = new window.sft.Settings();
            this.lastUpdateTimeInMilliseconds = 0;
            this.gameManager = new window.sft.GameManager();
        };

        Driver.prototype.loop = function (currTimeInMilliseconds) {
            if(currTimeInMilliseconds - this.lastUpdateTimeInMilliseconds > window.sft.Settings.targetFramePeriodInMilliseconds){
                this.gameManager.update();
                this.gameManager.draw();
                this.lastUpdateTimeInMilliseconds = currTimeInMilliseconds;
            }

            var thisObj = this;
            window.requestAnimationFrame(function(){
                Driver.prototype.loop.apply(thisObj, arguments);
            });
        };

        window.sft.Driver = new Driver();
        window.sft.Driver.loop(0);
    }());
};