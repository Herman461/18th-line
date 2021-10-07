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

function addZero(num) {
   return num > 9 ? num : '0' + num;
}

const mainsliderAllSlides = document.querySelector('.fraction-mainslider__total');
const mainsliderCurrentSlide = document.querySelector('.fraction-mainslider__current');
mainsliderAllSlides.innerHTML = mainslider.slides.length;

mainslider.on('slideChange', function () {
   let currentSlide = ++mainslider.realIndex;
   mainsliderCurrentSlide.innerHTML = currentSlide;
});

const popularProductsAllSlides = document.querySelector(
   '.popular-products .slider-line__total',
);
const popularProductsCurrentSlide = document.querySelector(
   '.popular-products .slider-line__current',
);

const popularProductsSlider = new Swiper('.popular-products__body', {
   pagination: {
      el: '.popular-products .slider-line__progressbar',
      type: 'progressbar',
   },
   navigation: {
      nextEl: '.popular-products .slider-line__arrow_next',
      prevEl: '.popular-products .slider-line__arrow_prev',
   },
   spaceBetween: 25,
   breakpoints: {
      992: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      630: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      380: {
         slidesPerView: 1.3,
      },
   },
   on: {
      init: function () {
         popularProductsAllSlides.innerHTML = addZero(
            Math.ceil(this.slides.length - this.params.slidesPerView + 1),
         );
      },
      slideChange: function () {
         let currentSlide = ++this.realIndex;
         popularProductsCurrentSlide.innerHTML = addZero(currentSlide);
      },
      resize: function () {
         popularProductsAllSlides.innerHTML = addZero(
            Math.ceil(this.slides.length - this.params.slidesPerView + 1),
         );
      },
   },
});

const ourProjectsAllSlides = document.querySelector('.our-projects .slider-line__total');
const ourProjectsCurrentSlide = document.querySelector('.our-projects .slider-line__current');

const ourProjectsSlider = new Swiper('.our-projects__body', {
   slidesPerView: 1,
   direction: 'horizontal',
   pagination: {
      el: '.our-projects .slider-line__progressbar',
      type: 'progressbar',
   },
   navigation: {
      nextEl: '.our-projects .slider-line__arrow_next',
      prevEl: '.our-projects .slider-line__arrow_prev',
   },
   spaceBetween: 27,
   on: {
      init: function () {
         ourProjectsAllSlides.innerHTML = addZero(
            Math.ceil(this.slides.length - this.params.slidesPerView + 1),
         );
      },
      slideChange: function () {
         let currentSlide = ++this.realIndex;
         ourProjectsCurrentSlide.innerHTML = addZero(currentSlide);
      },
      resize: function () {
         ourProjectsAllSlides.innerHTML = addZero(
            Math.ceil(this.slides.length - this.params.slidesPerView + 1),
         );
      },
   },
});

const ourPartnersAllSlides = document.querySelector('.our-partners .slider-line__total');
const ourPartnersCurrentSlide = document.querySelector('.our-partners .slider-line__current');

let ourPartnersSlider = new Swiper('.our-partners__body', {
	slidesPerColumn: 2,
	pagination: {
		el: '.our-partners .slider-line__progressbar',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.our-partners .slider-line__arrow_next',
		prevEl: '.our-partners .slider-line__arrow_prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 4,
			slidesPerColumn: 2,
		},
		600: {
			slidesPerView: 3,
			slidesPerColumn: 2,
		},
		414: {
			slidesPerView: 2,
			slidesPerColumn: 2,
		},
	},
	on: {
		init: function () {
			console.log(this);
			ourPartnersAllSlides.innerHTML = addZero(
				Math.ceil((this.slides.length / 2) - this.params.slidesPerView + 1),
			);
		},
		slideChange: function () {
			let currentSlide = ++this.realIndex;
			ourPartnersCurrentSlide.innerHTML = addZero(currentSlide);
		},
		resize: function () {
			console.log(this)
			ourPartnersAllSlides.innerHTML = addZero(
				Math.ceil((this.slides.length / 2) - this.params.slidesPerView + 1),
			);
		},
	},
});

const ourPartnersBody = document.querySelector('.our-partners__body');
const ourPartnersSliderLine = document.querySelector('.our-partners .slider-line');
if (window.matchMedia('(min-width: 991.98px)').matches) {
   ourPartnersBody.classList.add('disabled');
   ourPartnersSliderLine.classList.add('disabled');
	
}
window.addEventListener('resize', function () {
   if (window.matchMedia('(min-width: 991.98px)').matches) {
      ourPartnersBody.classList.add('disabled');
		ourPartnersSliderLine.classList.add('disabled');
   } else {
      if (ourPartnersBody.classList.contains('disabled')) {
         ourPartnersBody.classList.remove('disabled');
         ourPartnersSliderLine.classList.remove('disabled');
      }
   }

});
