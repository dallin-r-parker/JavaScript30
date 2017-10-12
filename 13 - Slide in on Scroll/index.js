function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}



const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = e => {
  sliderImages.forEach(img => {
      const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
      const imgBtm = img.offsetTop + img.height;
      const isHalfShown = slideInAt > img.offsetTop;
      const isNotScrolledPast = window.scrollY < imgBtm;
      if(isHalfShown && isNotScrolledPast){
          img.classList.add('active')
      } else {
          img.classList.remove('active')
      }
  })
};


window.addEventListener('scroll', debounce(checkSlide));