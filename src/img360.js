"use strict";
var Img360 = /** @class */ (function () {
    function Img360(options) {
        var _this = this;
        this.index = 0;
        this.$imgArray = [];
        this.autoPlayTask = 0;
        this.autoPlayingActive = false;
        this.$mainContainer = options.$mainContainer;
        this.imageArray = options.imageArray;
        this.autoplaySpeed = options.autoplaySpeed || 200;
        this.imageArray.forEach(function (image, index) {
            var $img = document.createElement('img');
            _this.$imgArray.push($img);
            $img.src = image;
            if (index != 0) {
                $img.style.display = 'none';
            }
            _this.$mainContainer.appendChild($img);
        });
    }
    Img360.prototype.isAutoPdddlaying = function () {
        return this.autoPlayingActive;
    };
    Img360.prototype.startAutoplay = function () {
        var _this = this;
        this.autoPlayTask = setInterval(function () {
            _this.nextImage();
        }, this.autoplaySpeed);
        this.autoPlayingActive = true;
    };
    Img360.prototype.stopAutoplay = function () {
        if (this.autoPlayTask != 0) {
            clearInterval(this.autoPlayTask);
            this.autoPlayingActive = false;
        }
    };
    Img360.prototype.prevImage = function () {
        this.$imgArray[this.index].style.display = 'none';
        if (this.index == 0) {
            this.index = this.imageArray.length - 1;
        }
        else {
            this.index -= 1;
        }
        this.$imgArray[this.index].style.display = 'block';
    };
    Img360.prototype.nextImage = function () {
        this.$imgArray[this.index].style.display = 'none';
        if (this.index == this.imageArray.length - 1) {
            this.index = 0;
        }
        else {
            this.index += 1;
        }
        this.$imgArray[this.index].style.display = 'block';
    };
    return Img360;
}());
