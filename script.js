document.addEventListener('DOMContentLoaded', function () {
    const dinosaur = document.getElementById('dinosaur');
  
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      const dinosaurRect = dinosaur.getBoundingClientRect();
      const dinosaurX = dinosaurRect.left + dinosaurRect.width / 2;
      const dinosaurY = dinosaurRect.top + dinosaurRect.height / 2;
  
      const angle = Math.atan2(mouseY - dinosaurY, mouseX - dinosaurX);
      const angleDeg = angle * (180 / Math.PI);
  
      dinosaur.style.transform = `translateX(-50%) rotate(${angleDeg + 90}deg)`;
    });
  });
  