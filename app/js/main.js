// if(document.querySelector('.wow')) new WOW().init();

document.querySelector('.header__recall .recall__head').onclick = function() {
	this.closest('.header__recall').classList.toggle('header__recall_active')
}

document.onclick = function (e) {
	if(e.target.closest('.header__recall') === null) {
		document.querySelector('.header__recall').classList.remove('header__recall_active')
	}
}

if(document.querySelector('.block-to-up')){
	document.querySelector('.block-to-up').onclick = function () {
		window.scrollTo(0, 0);
	}
}

document.querySelector('.header__burger').onclick = function () {
	document.querySelector('.header').classList.toggle('header_active')
}

document.querySelectorAll('.have-child').forEach(item => {
	item.onclick = function () {
		this.classList.toggle('have-child_active')
	}
})

document.querySelectorAll('.open-popup').forEach(item => {
	item.onclick = function () {
		if(this.getAttribute('data-popup')) {
			document.getElementById(item.getAttribute('data-popup')).classList.add('popup_active')
		} else {
			document.querySelector('.popup-form').classList.add('popup_active')
		}
	}
})

document.querySelectorAll('.popup__close, .popup__bgd').forEach(item => {
	item.onclick = function () {
		this.closest('.popup').classList.remove('popup_active')
	}
})

document.querySelectorAll('.footer__block h4').forEach(item => {
	item.onclick = function () {
		this.parentNode.classList.toggle('footer__block_active')
	}
})

document.querySelectorAll('.faq__list li').forEach(item => {
	let height = item.querySelector('.li__body').clientHeight
	item.querySelector('.li__body').style.height = '0px'

	item.onclick = function () {
		this.querySelector('.li__body').style.height = '0px';
		this.classList.toggle('li_active');

		if(this.classList.contains('li_active')){
			item.querySelector('.li__body').style.height = height+"px";
		}
	}
})

document.querySelectorAll('.select__head').forEach(item => {
	item.onclick = function () {
		this.parentNode.classList.toggle('select_active')
	}
})

document.querySelectorAll('.video').forEach(item => {
	item.onclick = function () {
		this.classList.toggle('video_active')
	}
})

document.querySelectorAll('.select__item').forEach(item => {
	item.onclick = function () {
		this.closest(".select").querySelector('.select__head span').textContent = this.textContent
		this.closest(".select").classList.toggle('select_active')
	}
})

document.querySelectorAll('.pagination__nums a').forEach(item => {
	item.onclick = function (e) {
		e.preventDefault();
		document.querySelector('.pagination__nums a.current').classList.remove('current')
		this.classList.add('current')
	}
})

document.querySelectorAll('.footer__share .share__head_open').forEach(item => {
	item.onclick = function () {
		this.closest('.footer__share').classList.toggle('footer__share_active')
	}
})

document.querySelectorAll('.banner__socials .li__head').forEach(item => {
	item.onclick = function () {
		this.closest('li').classList.toggle('li_active')
	}
})

document.querySelectorAll('.filter__type li').forEach(item => {
	item.onclick = function () {
		document.querySelector('.filter__type li.li_active').classList.remove('li_active')
		this.classList.toggle('li_active')
	}
})




document.querySelectorAll('.more-info__head').forEach(item => {
	item.onclick = function () {
		this.closest('.item__more-info').classList.toggle('item__more-info_active')
		this.closest('.catalog__item').classList.toggle('catalog__item_active')
		let height = this.closest('.item__more-info').querySelector('.more-info__body').clientHeight

		if(this.closest('.catalog__item').classList.contains('catalog__item_active')) {
			this.closest('.catalog__item').style.margin = "0 0 -"+(height+9)+"px"
			
			const lastItems = ".catalog__item:nth-last-child(1), .catalog__item:nth-last-child(2), .catalog__item:nth-last-child(3), .catalog__item:nth-last-child(4), .catalog__item:nth-last-child(5), .catalog__item:nth-last-child(6), .catalog__item:nth-last-child(7), .catalog__item:nth-last-child(8)"

			if(this.closest(lastItems)){
				document.querySelector('.catalog').style.paddingBottom = height+"px"
			}

		} else {
			this.closest('.catalog__item').style.margin = "0"
			document.querySelector('.catalog').style.paddingBottom = "0px"
		}
	}
})


if(window.innerWidth <= 768){
	new Swiper('.single__slider', {
		slidesPerView: 1.4,
		spaceBetween: 15,
		centeredSlides: true,
		initialSlide: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}

new Swiper('.catalog .item__slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
})
new Swiper('.slider__inner', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 5,
	centeredSlides: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 0,
	// },
	// speed: 7000,

	// effect: "coverflow",

	breakpoints: {
		500: {
			slidesPerView: 2,
			centeredSlides: true,
		},
		768: {
			slidesPerView: 3,
			centeredSlides: true,
		},
		1024: {
			slidesPerView: 4,
			centeredSlides: true,
		}
	}

});

const swiper_nav = new Swiper('.slider__nav', {
	slidesPerView: 4,
	spaceBetween: 11
})
const swiper_poster = new Swiper('.slider__poster', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: swiper_nav
	},
})

swiper_poster.on('slideChange', (e) => {

	document.querySelector('.swiper-numbers').innerHTML = `${e.activeIndex + 1} / ${e.slides.length}`

})
swiper_poster.on('init', (e) => {

	document.querySelector('.swiper-numbers').innerHTML = `${e.activeIndex + 1} / ${e.slides.length}`

})
swiper_poster.on('imagesReady', (e) => {

	document.querySelector('.swiper-numbers').innerHTML = `${e.activeIndex + 1} / ${e.slides.length}`

})


if(document.querySelector('.ul__hidden + button')){
	document.querySelector('.ul__hidden + button').onclick = (e) => {
		e.target.closest('button').classList.toggle('_active')
		e.target.closest('.params__item').querySelector('.ul__hidden').classList.toggle('ul__hidden_disabled')

		if(e.target.closest('.params__item').querySelector('.ul__hidden').classList.contains('ul__hidden_disabled')) {
			e.target.closest('button').querySelector('span').textContent = 'Показать меньше'
		} else {
			e.target.closest('button').querySelector('span').textContent = 'Показать больше'
		}
	}
}
if(document.querySelector('.li__hidden-text')){
	document.querySelector('.li__hidden-text button').onclick = (e) => {

		e.target.closest('button').classList.toggle('_active')
		e.target.closest('.li__hidden-text').classList.toggle('li__hidden-text_active')

		if(e.target.closest('.li__hidden-text').classList.contains('li__hidden-text_active')) {
			e.target.closest('button').querySelector('span').textContent = 'Показать меньше'
		} else {
			e.target.closest('button').querySelector('span').textContent = 'Показать больше'
		}
	}
}

new Swiper('.slider-cars__slider', {
	slidesPerView: 1.2,
	centeredSlides: true,
	spaceBetween: 15,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			centeredSlides: false,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 3,
			centeredSlides: false,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 4,
			centeredSlides: false,
			spaceBetween: 30,
		}
	}
})

Zoom(".zoomable");


if(document.querySelector('.single__params')) {
	document.addEventListener('scroll', function(e) {
		if(document.querySelector('.single__params').offsetTop < window.scrollY) {
			document.querySelector('.scroll-block').classList.add('scroll-block_active')
		} else {
			document.querySelector('.scroll-block').classList.remove('scroll-block_active')
		}
	})
}

document.addEventListener('scroll', function(e) {
	if(window.scrollY > 100) {
		document.querySelector('body').classList.add('header_scroll')
	} else {
		document.querySelector('body').classList.remove('header_scroll')
	}
})

document.querySelectorAll('.show-more').forEach(item => {
	item.onclick = function () {
		this.closest('.ul__hidden').classList.toggle('ul__hidden_disabled')
		if(this.closest('.ul__hidden').classList.contains('ul__hidden_disabled')) {
			item.querySelector('span').textContent = 'Показать меньше'
		} else {
			item.querySelector('span').textContent = 'Показать больше'
		}
	}
})

