"use strict";
class Img360 {
    constructor($mainContainer, imageArray) {
        this.$mainContainer = $mainContainer;
        this.imageArray = imageArray;
    }
    prevImage() {
        console.log('PREV IMAGE');
    }
    nextImage() {
        console.log('NEXT IMAGE');
    }
}
