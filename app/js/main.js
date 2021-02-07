"use strict"


// jQuery

$(function(){

  // slick Slider

  $('.list-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.slider-arrows__left'),
    nextArrow: $('.slider-arrows__right'),
    responsive: [{
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }]
  });

})



// Js Vanila

document.addEventListener('DOMContentLoaded', function() {   
    
  // burger menu

  const burgerBtn = document.querySelector('.burger-wrap')
  const headerNav = document.querySelector('.header__nav')
  const html = document.querySelector('html')

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    headerNav.classList.toggle('active')
    html.classList.toggle('active')
  })

  
    // swipers

  // swiper for profitable
  new Swiper('.section-profitable__slider', {
    slidesPerView: 1,
    // arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })


  // swiper for insurance
  new Swiper('.insurance-swiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
          slidesPerView: 1
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1320: {
        slidesPerView: 4
      },
      1620: {
        slidesPerView: 5
      },
      1920: {
        slidesPerView: 6
      }
    }
  })
  

  
  // select 

  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header')
    let selectItem = document.querySelectorAll('.select__item')

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
        this.classList.toggle('active')
        this.querySelector('.select__icon').classList.toggle('active')
    }

    function selectChoose() {
        let text = this.innerHTML,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current')
        currentText.innerHTML = text
        select.classList.remove('is-active')
        select.querySelector('.select__icon').classList.toggle('active')
        select.querySelector('.select__header').classList.toggle('active')
    }

  };

  select()




  // slider range power

  const fader = document.querySelector('#fader')
  const output = document.querySelector('#volume')
  const blueLine = document.querySelector('.range__blue-line')
  
  fader.addEventListener('input', () => {
    
    if (window.innerWidth > 1450) {
     outputUpdate(fader.value)
    }
    if (window.innerWidth <= 1450) {
     outputUpdate(fader.value, 0.13, 0.135)
    }
    if (window.innerWidth <= 1300) {
      outputUpdate(fader.value, 0.12, 0.125)
    }
    if (window.innerWidth <= 1200) {
      outputUpdate(fader.value)
    }
    if (window.innerWidth <= 992) {
      outputUpdate(fader.value, 0.13, 0.135)
    }
    if (window.innerWidth <= 900) {
      outputUpdate(fader.value, 0.12, 0.125)
    }
    if (window.innerWidth <= 600) {
     outputUpdate(fader.value, 0.12, 0.12)
    }
    if (window.innerWidth <= 480) {
     outputUpdate(fader.value, 0.13, 0.13)
    }
    if (window.innerWidth <= 400) {
     outputUpdate(fader.value, 0.12, 0.12)
    }


    // outputUpdate(fader.value)
  })
      
  function outputUpdate(vol, left1 = 0.14, left2 = 0.14) {
    if (vol < 195) {
      output.value = Math.floor(vol / 3.9)
      output.style.left = vol * left1 + '%' 
      blueLine.style.width = vol * 0.175 + '%'
    }
            
    if (vol > 195 && vol < 295) {
      output.value = Math.ceil(vol / 4 + ((vol - 195) / 3.9))
      output.style.left = vol * left1 + '%'  
      blueLine.style.width = vol * 0.17 + '%'
    }

    if (vol > 295 && vol < 500) {
      output.value = Math.ceil(vol / 2.95 + ((vol - 295) / 0.88))
      output.style.left = vol * left1 + '%'  
      blueLine.style.width = vol * 0.165 + '%'
    }

    if (vol > 500 && vol < 600) {
      output.value = Math.ceil(vol / 1.25 + ((vol - 500) / 0.83))
      output.style.left = vol * left2 + '%' 
      blueLine.style.width = vol * 0.165 + '%'
    }
   
  }


  // btn's personal and taxi
  
  const btnPersonal = document.querySelector('.form-calc__personal-btn')
  const btnTaxi = document.querySelector('.form-calc__taxi-btn')
  
  btnPersonal.addEventListener('click', () => {
    btnPersonal.classList.remove('disabled')
    btnTaxi.classList.remove('active')
  })
  
  btnTaxi.addEventListener('click', () => {
    btnTaxi.classList.add('active')
    btnPersonal.classList.add('disabled')
  })
  

  // btn btn-more-section-ad

  const btnMoreSectionAd = document.querySelector('.btn-more-section-ad')
  const sectionAdRight = document.querySelector('.section-ad__right')
  const sectionAdRightMain = document.querySelector('.section-ad__right-main')
  const detailRight = document.querySelector('.detail-right')

  btnMoreSectionAd.addEventListener('click', () => {
    sectionAdRight.classList.add('active')
    sectionAdRightMain.style.display = 'none'
    detailRight.style.display = 'flex'
  })

  
  // triger presents in slider

  const triger = document.querySelectorAll('.triger')

  for (let i of triger) {
    i.addEventListener('click', function() {
      let elem = this.querySelectorAll('.triger__elem')
      for (let _ of elem) {
        _.classList.toggle('active')
      }
    })
  }


  // pagination slider

  const paginationCurrent = document.querySelectorAll('.pagination__current')
  const paginationAllPages = document.querySelectorAll('.pagination__all-pages')
  const arrowsLeft = document.querySelectorAll('.slider-arrows__left')
  const arrowsRight = document.querySelectorAll('.slider-arrows__right')

  paginationAllPages.forEach(elem => {
    elem.innerHTML = triger.length
  } )

  let count = 0

  setTimeout(() => {

    setInterval(() => {
      const currentSlider = document.querySelector('.slick-current')
      let numberSlider =  currentSlider.dataset.slickIndex

      if (count != Number(numberSlider) + 1) {
        paginationCurrent.forEach(elem => {
          elem.innerHTML = Number(numberSlider) + 1
        })
        count = Number(numberSlider) + 1
        if (Number(numberSlider) + 1 === triger.length) {
          arrowsLeft.forEach(elem => {
            elem.classList.add('active')
          })
          arrowsRight.forEach(elem => {
            elem.classList.add('active')
          })
        } else {
          arrowsLeft.forEach(elem => {
            elem.classList.remove('active')
          })
          arrowsRight.forEach(elem => {
            elem.classList.remove('active')
          })
        }
      }
      
    }, 600);  // проверяем каждые 600 мс не изменился ли слайд(через атрибут № слайдера)

    
  }, 10)  // запуск через 10мс чтобы DOM успел обновиться от slider slick



  // section-faq items

  const faqItems = document.querySelectorAll('.list-faq__item-title')
  const contentItems = document.querySelectorAll('.list-faq__item-content')

  for (let i of faqItems) {
    i.addEventListener('click', accordion)    
  }

  // animate content faq item
  function accordion() {
        
    let parent = this.parentElement
    let content = parent.querySelector('.list-faq__item-content')

    // add/remove class 'active' for item(content)
    // and add/remove class 'click', 'click-back' for title(cross)
    for (let item = 0; item < contentItems.length; item++) {
      if (contentItems[item] != content) {
        contentItems[item].classList.remove('active')
        
        // cross
        let itemTitle = contentItems[item].parentElement.querySelector('.list-faq__item-title')
        
        if (itemTitle.classList.contains('click')) {
          itemTitle.classList.add('click-back')
          itemTitle.classList.remove('click')
        } else itemTitle.classList.remove('click-back')
        
      } 
      else { 
        content.classList.toggle('active')

        // cross
        if (this.classList.contains('click')) {
          this.classList.add('click-back')
        } 
        else {
         this.classList.remove('click-back')
        }
        this.classList.toggle('click')
      }
    }    
  
  }



  // popups

  // common elements for popup
  const popups = document.querySelectorAll('.popup')

  // btns for open popup Callback
  const callBackBtns = document.querySelectorAll('.callback')

  // all crosses
  const crossesPopup = document.querySelectorAll('.cross-popup')

  // popup Callback
  const popupCallBack = document.querySelector('.popup-callback')
  
  // popup help
  const popupHelp = document.querySelector('.popup-help')

  // btn for popup help
  const btnHelp = document.querySelector('.help')

  // click for btns callback
  for (let btn of callBackBtns) {
    btn.addEventListener('click', openPopupCallback)
  }

  // click for btn help
  btnHelp.addEventListener('click', () => {
    popupHelp.classList.add('active')
    html.classList.add('active')
  })

  // click close all popups when press cross
  for (let cross of crossesPopup) {
    cross.addEventListener('click', () => {
      // arrow func for close all popups
      for (let popup of popups) {
        popup.classList.remove('active')
        html.classList.remove('active')

        // for popup detailRight btn-more-section-ad
        sectionAdRight.classList.remove('active')
        sectionAdRightMain.style.display = 'flex'
        detailRight.style.display = 'none'
      }
    })
  }

  // func for open popup callback
  function openPopupCallback() {
    popupCallBack.classList.add('active')
    html.classList.add('active')
  }

  // smooth move to block
  const btnCalculate = document.querySelectorAll('.calculate-online')
  const sectionCalculate = document.querySelector('.section-calculator')
  
  for (let btn of btnCalculate) {
    btn.addEventListener('click', () => {
      sectionCalculate.scrollIntoView({behavior: "smooth"})
    })
  }

  



})






