
  window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const overlay = document.querySelector('.banner .overlay');
    const companyDesc = document.querySelector('.company-description');

    // Header animation
    setTimeout(() => {
      header.classList.add('show');
    }, 200);

    // Overlay animation
    setTimeout(() => {
      overlay.classList.add('show');
    }, 600);

    // Company Description animation on scroll
    window.addEventListener('scroll', () => {
  const companyDesc = document.querySelector('.company-description');
  

  const descRect = companyDesc.getBoundingClientRect();


  if (descRect.top < window.innerHeight - 100) {
    companyDesc.classList.add('show');
  }


});
  });

