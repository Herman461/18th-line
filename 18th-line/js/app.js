"use strict";
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
let isMobile = {
	Android: function () {
		 return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		 return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		 return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		 return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
const iconMenu = document.querySelector('.top-menu__icon');

if (iconMenu) {
   const menuContent = document.querySelector('.menu__content');
	const topMenu = document.querySelector('.top-menu');
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuContent.classList.toggle('_active');
		topMenu.classList.toggle('_active');
   });
}

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

function ibg() {

	let ibg = document.querySelectorAll("._ibg");

	for (let index = 0; index < ibg.length; index++) {
		if (ibg[index].querySelector('img')) {
			ibg[index].style.backgroundImage = 'url(' + ibg[index].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
let spoilersArray = document.querySelectorAll("[data-spoilers]");

if (spoilersArray.length > 0) {
	// Получение обычный спойлеров
	const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
		return !item.dataset.spoilers.split(",")[0];
	})
	// Инициализация обычных спойлеров
	if (spoilersRegular.length > 0) {
		initSpoilers(spoilersRegular);
	}

	// Получение спойлеров с медиа запросами
	const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
		return item.dataset.spoilers.split(",")[0];
	})

	// Инициализация спойлеров с медиа запросами
	if (spoilersMedia.length > 0) {
		const breakpointsArray = [];

		spoilersMedia.forEach(item => {
			const params = item.dataset.spoilers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		})

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(item => {
			return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
		});

		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		})

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spoilersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			})
			matchMedia.addEventListener("change", function () {
				initSpoilers(spoilersArray, matchMedia)
			})
			initSpoilers(spoilersArray, matchMedia);
		})
	}

	// Инициализация
	function initSpoilers(spoilersArray, matchMedia = false) {
		spoilersArray.forEach(spoilersBlock => {
			spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
			if (matchMedia.matches || !matchMedia) {
				spoilersBlock.classList.add("_init");
				initSpoilerBody(spoilersBlock);
				spoilersBlock.addEventListener("click", setSpoilerAction);
			} else {
				spoilersBlock.classList.remove("_init");
				initSpoilerBody(spoilersBlock, false);
				spoilersBlock.removeEventListener("click", setSpoilerAction);
			}
		})
	}

	// Работа с контентом
	function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
		const spoilerTitles = spoilersBlock.querySelectorAll("[data-spoiler]");
		if (spoilerTitles.length > 0) {
			spoilerTitles.forEach(spoilerTitle => {
				if (hideSpoilerBody) {
					spoilerTitle.removeAttribute("tabindex");
					if (!spoilerTitle.classList.contains("_active")) {
						spoilerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spoilerTitle.setAttribute("tabindex", "-1");
					spoilerTitle.nextElementSibling.hidden = false;
				}
			})
		}
	}
	function setSpoilerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
			const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
			const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
			const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
			if (!spoilersBlock.querySelectorAll("._slide").length) {
				if (oneSpoiler && !spoilerTitle.classList.contains("_active")) {
					hideSpoilerBody(spoilersBlock);
				}
				spoilerTitle.classList.toggle("_active");
				_slideToggle(spoilerTitle.nextElementSibling, 500)
			}
			e.preventDefault();
		}
	}
	function hideSpoilerBody(spoilersBlock) {
		const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
		if (spoilerActiveTitle) {
			spoilerActiveTitle.classList.remove("_active");
			_slideUp(spoilerActiveTitle.nextElementSibling, 500)
		}
	}
}

