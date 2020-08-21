var images = [];
// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var index = 0;

setClicks();
function setClicks(){
  if(modal){
    var parent = document.getElementById("setModal");
    if(parent){
      images = parent.getElementsByTagName("img");
      for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('onClick', 'openModalAt(' + i + ')');
      }
    }
  }
}


function next(){
  if(index+1< images.length)
  {
    openModalAt(index+1);
  }
  else {
    openModalAt(0);
  }
}

function prev(){
  if(index-1 > 0)
  {
    openModalAt(index-1);
  }
  else {
    openModalAt(images.length-1);
  }
}

function openModalAt(n){
  if(modal)
  {
    index = n;
    modal.style.display = "block";
    if(n <images.length && n > -1){
      modalImg.src = images[n].src;
      captionText.innerHTML = images[n].alt;
    }
  }
}

function closeModal(){
  modal.style.display = "none";
}
