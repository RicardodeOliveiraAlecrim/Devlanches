const i = 0
const images = []
const time = 1000;

images[0] = home2.jpg
images[1] = home3.jpg
images[2] = home1.jpg

function changeImg() {
  document.slide.src = images[i];

  if(i < images.lenght - 1 ){
    i++
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
  
}

windows.onload = changeImg