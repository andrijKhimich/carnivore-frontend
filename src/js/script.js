'use strict'
const wrapper = document.querySelector('.main-wrapper');
const horizontalLines = document.querySelectorAll('.line-hrz.js-show');
const verticalLines = document.querySelectorAll('.line-vert.js-show');
const headerHidden = document.querySelector('.header.hidden');
const performanceHidden = document.querySelector('.performance.hidden');
const titleHidden = document.querySelector('.site-title.hidden');
const hiddenBanner = document.querySelector('.hero-img.hidden');


function openTabItem() {
  const tabLink = document.querySelectorAll('.tab__title');
  const tabContent = document.querySelectorAll('.tab__content');
  [].forEach.call(tabLink, function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < tabLink.length; i++) {
        tabLink[i].classList.remove('open');
      }
      this.classList.add('open');
      for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('open');
      }
      document.getElementById(e.target.href.split('#')[1]).className += ' open';
    });
  });
}

openTabItem();


const burger = document.querySelector('.humburger');
const menu = document.querySelector('.nav');

function openMenu() {
  burger.classList.add('active');
  menu.classList.add('active');

}

function closeMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');

}

function accordionToggle() {
  const accordionLink = document.getElementsByClassName("faq-accordion__link");
  let i;

  for (i = 0; i < accordionLink.length; i++) {
    accordionLink[i].addEventListener("click", function (event) {
      event.preventDefault();
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}




function showOnLoad() {
  wrapper.classList.remove('js-fadeIn');
}

svg4everybody();

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  showOnLoad();
  burger.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $('.custom-select').niceSelect();

  accordionToggle();
});



function initCalendar() {
  const elem = document.querySelector('#inline');
  const datepicker = new Datepicker(elem, {});
}

function initCalendarInput() {
  const elem = document.querySelector('input[name="datepicker"]');
  const datepicker = new Datepicker(elem, {});
}

const calendar = document.querySelector('.calendar');
if (calendar) {
  initCalendar();
  initCalendarInput();
}