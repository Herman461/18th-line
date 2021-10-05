//BuildSlider

let sliders = document.querySelectorAll('._swiper');

if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-build')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-build');
      }
      if (slider.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   sliders_build_callback();
}

function sliders_build_callback() {}

const mainslider = new Swiper('.mainslider__body', {
   // effect: 'fade',
   // autoplay: {
   // 	delay: 3000,
   // 	disableOnInteraction: false,
   // },
   pagination: {
      el: '.footer-mainslider__progressbar',
      type: 'progressbar',
   },
	navigation: {
      nextEl: '.footer-mainslider__arrow_r',
      prevEl: '.footer-mainslider__arrow_l',
   },
   // observer: true,
   // observeParents: true,
   // slidesPerView: 1,
   // spaceBetween: 0,
   // autoHeight: true,
   // speed: 800,
   // touchRatio: 0,
   // simulateTouch: false,
   // loop: true,
   // preloadImages: false,
   // lazy: true,
   // // Dotts
   // pagination: {
   // 	el: '.slider-quality__pagging',
   // 	clickable: true,
   // },
   // // Arrows

   // breakpoints: {
   // 	320: {
   // 		slidesPerView: 1,
   // 		spaceBetween: 0,
   // 		autoHeight: true,
   // 	},
   // 	768: {
   // 		slidesPerView: 2,
   // 		spaceBetween: 20,
   // 	},
   // 	992: {
   // 		slidesPerView: 3,
   // 		spaceBetween: 20,
   // 	},
   // 	1268: {
   // 		slidesPerView: 4,
   // 		spaceBetween: 30,
   // 	},
   // },
   // on: {
   // 	lazyImageReady: function () {
   // 		ibg();
   // 	},
   // },
   // // And if we need scrollbar
   // scrollbar: {
   // 	el: ".swiper-scrollbar",
   // },
});

const mainsliderAllSlides = document.querySelector('.fraction-mainslider__total');
const mainsliderCurrentSlide = document.querySelector('.fraction-mainslider__current');
mainsliderAllSlides.innerHTML = mainslider.slides.length;

mainslider.on('slideChange', function () {
   let currentSlide = ++mainslider.realIndex;
   mainsliderCurrentSlide.innerHTML = currentSlide;
});

const popularProductsSlider = new Swiper('.popular-products__body', {
   pagination: {
      el: '.popular-products__slider-line .slider-line__progressbar',
      type: 'progressbar',
   },
	navigation: {
      nextEl: '.slider-line__arrow_next',
      prevEl: '.popular-products__slider-line .slider-line__arrow_prev',
   },
	slidesPerView: 3,
	spaceBetween: 30,
});

const popularProductsAllSlides = document.querySelector('.popular-products__slider-line .slider-line__total');
const popularProductsCurrentSlide = document.querySelector('.popular-products__slider-line .slider-line__current');
popularProductsAllSlides.innerHTML = 9 < popularProductsSlider.slides.length - 2 ? (popularProductsSlider.slides.length - 2) : "0" + (popularProductsSlider.slides.length - 2);

popularProductsSlider.on('slideChange', function () {
   let currentSlide = ++popularProductsSlider.realIndex;
   popularProductsCurrentSlide.innerHTML = 9 < currentSlide ? currentSlide : "0" + currentSlide;
});

