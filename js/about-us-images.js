function createCarousel(container) {
    let currentSlide = 0;
  
    function showSlide(index) {
        const slides = container.getElementsByClassName('carousel-image');
        const slidesArray = Array.from(slides);
        if (index >= slides.length) {
            currentSlide = 0;
          } else if (index < 0) {
              currentSlide = slides.length - 1;
          } else {
              currentSlide = index;
          }
          
          slidesArray.forEach((slide, i) => {
              if (i === currentSlide) {
                  slide.classList.add('active');
              } else {
                  slide.classList.remove('active');
              }
          });
      }
      
      function nextSlide() {
          showSlide(currentSlide + 1);
      }
      
      function initCarousel(startIndex = 0) {
          showSlide(startIndex);
          setInterval(nextSlide, 2000); // Change slide every 2 seconds
    }
  
    return {
      initCarousel
  };
  }
document.addEventListener('astro:after-swap', () => {
      const carousels = document.querySelectorAll('.carousel-slide');
      carousels.forEach(container => {
          const carousel = createCarousel(container);
          carousel.initCarousel();
      });
  });
document.addEventListener('astro:before-swap', () => {
      const carousels = document.querySelectorAll('.carousel-slide');
      carousels.forEach(container => {
          const carousel = createCarousel(container);
          carousel.initCarousel();
      });
  });
document.addEventListener('astro:after-render', () => {
      const carousels = document.querySelectorAll('.carousel-slide');
      carousels.forEach(container => {
          const carousel = createCarousel(container);
          carousel.initCarousel();
      });
  });
document.addEventListener('astro:before-render', () => {
      const carousels = document.querySelectorAll('.carousel-slide');
      carousels.forEach(container => {
          const carousel = createCarousel(container);
          carousel.initCarousel();
      });
  });
document.addEventListener('astro:page-load', () => {
      const carousels = document.querySelectorAll('.carousel-slide');
      carousels.forEach(container => {
          const carousel = createCarousel(container);
          carousel.initCarousel();
      });
  });