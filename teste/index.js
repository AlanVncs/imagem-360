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
