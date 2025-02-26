// Sayfa kaydırıldığında baloncuk butonunun tekrar görünür olmasını sağlar
window.onscroll = function() {
    const balloon = document.getElementById('balloon');
    
    // Eğer sayfa yukarıda ise, baloncuk yeniden görünür olmalı
    if (window.scrollY === 0) {
      balloon.style.display = 'flex'; // Baloncuk görünür hale gelir
    }
  };
  
  // Baloncuk butonuna tıklandığında, sayfayı yukarı kaydırır ve kaybolur
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
    const balloon = document.getElementById('balloon');
    balloon.style.display = 'none'; // Baloncuk kaybolur
  }