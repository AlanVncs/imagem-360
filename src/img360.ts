interface Img360Props {
  $mainContainer: Element;
  imageArray: string[];
  autoplaySpeed: number;
  $buttonPrev: HTMLButtonElement;
  $buttonNext: HTMLButtonElement;
  $buttonAutoplay: HTMLButtonElement;
	$thumbContainer: Element
}

class Img360 {
  $mainContainer: Element;
	$thumbContainer: Element;
  imageArray: string[];
  autoplaySpeed: number;
  $buttonPrev: HTMLButtonElement;
  $buttonNext: HTMLButtonElement;
  $buttonAutoplay: HTMLButtonElement;
  private index: number = 0;
  private $imgArray: HTMLImageElement[] = [];
  private autoPlayTask: number = 0;
  private autoPlayingActive: boolean = false;

  constructor(options: Img360Props) {
    this.$mainContainer = options.$mainContainer;
		this.$thumbContainer = options.$thumbContainer
    this.imageArray = options.imageArray;
    this.autoplaySpeed = options.autoplaySpeed || 200;
    this.$buttonPrev = options.$buttonPrev;
    this.$buttonNext = options.$buttonNext;
    this.$buttonAutoplay = options.$buttonAutoplay;

    this.imageArray.forEach((image, index) => {
      const $img = document.createElement("img");
      this.$imgArray.push($img);
      $img.src = image;
      if (index != 0) {
        $img.style.display = "none";
      }
      this.$mainContainer.appendChild($img);
    });
		const $img = document.createElement("img");
		$img.src = this.imageArray[0];
		this.$thumbContainer.appendChild($img)
		this.setButtonsEnvents()
  }

  setButtonsEnvents() {
    this.$buttonPrev.addEventListener("click", () => {
      this.prevImage();
    });
    this.$buttonNext.addEventListener("click", () => {
      this.nextImage();
    });
    this.$buttonAutoplay.addEventListener("click", () => {
      if (this.isAutoPdddlaying()) {
        this.stopAutoplay();
        this.$buttonAutoplay.classList.remove("playing");
      } else {
				this.startAutoplay();
        this.$buttonAutoplay.classList.add("playing");
      }
    });
  }

  isAutoPdddlaying() {
    return this.autoPlayingActive;
  }

  startAutoplay() {
    this.autoPlayTask = setInterval(() => {
      this.nextImage();
    }, this.autoplaySpeed);
    this.autoPlayingActive = true;
  }

  stopAutoplay() {
    if (this.autoPlayTask != 0) {
      clearInterval(this.autoPlayTask);
      this.autoPlayingActive = false;
    }
  }

  prevImage() {
    this.$imgArray[this.index].style.display = "none";
    if (this.index == 0) {
      this.index = this.imageArray.length - 1;
    } else {
      this.index -= 1;
    }
    this.$imgArray[this.index].style.display = "block";
  }

  nextImage() {
    this.$imgArray[this.index].style.display = "none";
    if (this.index == this.imageArray.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    this.$imgArray[this.index].style.display = "block";
  }
}
