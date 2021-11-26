class Img360 {
	$mainContainer: Element
	imageArray: string[]

	constructor($mainContainer: Element, imageArray: string[]) {
		this.$mainContainer = $mainContainer
		this.imageArray = imageArray
	}

	prevImage(){
		console.log('PREV IMAGE')
	}

	nextImage(){
		console.log('NEXT IMAGE')
	}
}