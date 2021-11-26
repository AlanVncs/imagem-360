interface Img360Props {
	$mainContainer: Element
	imageArray: string[]
	autoplaySpeed: number
}

class Img360 {
	$mainContainer: Element
	imageArray: string[]
	autoplaySpeed: number
	private index: number = 0
	private $imgArray: HTMLImageElement[] = []
	private autoPlayTask: number = 0
	private autoPlayingActive: boolean = false

	constructor(options: Img360Props) {
		this.$mainContainer = options.$mainContainer
		this.imageArray = options.imageArray
		this.autoplaySpeed = options.autoplaySpeed || 200

		this.imageArray.forEach((image, index) => {
			const $img = document.createElement('img')
			this.$imgArray.push($img)
			$img.src = image
			if (index != 0) {
				$img.style.display = 'none'
			}
			this.$mainContainer.appendChild($img)
		})
	}

	isAutoPdddlaying() {
		return this.autoPlayingActive
	}

	startAutoplay() {
		this.autoPlayTask = setInterval(() => {
			this.nextImage()
		}, this.autoplaySpeed)
		this.autoPlayingActive = true
	}

	stopAutoplay() {
		if (this.autoPlayTask != 0) {
			clearInterval(this.autoPlayTask)
			this.autoPlayingActive = false
		}
	}

	prevImage() {
		this.$imgArray[this.index].style.display = 'none'
		if (this.index == 0) {
			this.index = this.imageArray.length - 1
		} else {
			this.index -= 1
		}
		this.$imgArray[this.index].style.display = 'block'
	}

	nextImage() {
		this.$imgArray[this.index].style.display = 'none'
		if (this.index == this.imageArray.length - 1) {
			this.index = 0
		} else {
			this.index += 1
		}
		this.$imgArray[this.index].style.display = 'block'
	}
}
