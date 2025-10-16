// Galería - lightbox
function openLightbox(src) {
  let lightbox = document.getElementById('lightbox');
  let img = document.getElementById('lightbox-img');
  if(!lightbox){
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
      display:flex;position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.8);justify-content:center;align-items:center;z-index:1000;
    `;
    img = document.createElement('img');
    img.id = 'lightbox-img';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '20px';
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', () => lightbox.style.display = 'none');
  }
  img.src = src;
  lightbox.style.display = 'flex';
}

document.querySelectorAll('.photo-card img').forEach(img=>{
  img.addEventListener('click', ()=> openLightbox(img.src));
});
