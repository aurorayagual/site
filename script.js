document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.querySelector('.main-content h2');
    welcomeMessage.style.opacity = 0;
  
    setTimeout(() => {
      welcomeMessage.style.opacity = 1;
    }, 500);
  });
  