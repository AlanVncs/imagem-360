const Produto = {
  init: function () {
    Produto.slickImages();
  },
  slickImages: () => {
    const config = {
      thumbParent: ".product__thumbs-list",
      principalParent: ".product__images-list",
    };

    Produto.ProductImagesSlick(config);
  },
  ProductImagesSlick: ({ principalParent, thumbParent }) => {
    $(principalParent).slick({
      lazyLoad: "ondemand",
      slidesToShow: 1,
      slidesToShow: 1,
      arrows: false,
      infinite: false,
      dots: false,
      asNavFor: thumbParent,
    });

    $(thumbParent).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      arrows: true,
      dots: false,
      infinite: false,
      asNavFor: principalParent,
      vertical: true,
      focusOnSelect: true
    });
  },
};

Produto.init();


const imageArray = [
	'Filename_01.jpg',
	'Filename_02.jpg',
	'Filename_03.jpg',
	'Filename_04.jpg',
	'Filename_05.jpg',
	'Filename_06.jpg',
	'Filename_07.jpg',
	'Filename_08.jpg',
	'Filename_09.jpg',
	'Filename_10.jpg',
	'Filename_11.jpg',
	'Filename_12.jpg',
	'Filename_13.jpg',
	'Filename_14.jpg',
	'Filename_15.jpg',
	'Filename_16.jpg',
	'Filename_17.jpg',
	'Filename_18.jpg',
	'Filename_19.jpg',
	'Filename_20.jpg',
	'Filename_21.jpg',
	'Filename_22.jpg',
	'Filename_23.jpg',
	'Filename_24.jpg',
	'Filename_25.jpg',
	'Filename_26.jpg',
	'Filename_27.jpg',
	'Filename_28.jpg',
	'Filename_29.jpg',
	'Filename_30.jpg',
	'Filename_31.jpg',
	'Filename_32.jpg',
	'Filename_33.jpg',
	'Filename_34.jpg',
	'Filename_35.jpg',
	'Filename_36.jpg',
]

const $mainContainer = document.querySelector('#img360-container')

const img360 = new Img360($mainContainer, imageArray)

img360.prevImage()
