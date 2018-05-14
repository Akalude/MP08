var slider = document.getElementById('slider');

var img = document.getElementsByClassName('animal');

var index = 0;

var numberimages = img.length;

var nextbutton = document.getElementById('next');

var backbutton = document.getElementById('back');


nextbutton.addEventListener("click", next);

backbutton.addEventListener("click", back);

HideAllImgs(img);

showImage(index);

function HideAllImgs() {

  [].forEach.call(img, function (imgel) {
    imgel.style.display = "none";
  });

}



function hideImage(index) {
  img[index].style.display = "none";
}

//hideImage(index);


function showImage(index) {
  img[index].style.display = "block";
}


function next() {
 hideImage(index);
  index = ( index + 1) % numberimages;
  // console.log(index);
  showImage(index);
}

function back () {
   hideImage(index);
  if (index == 0){
    index = numberimages - 1;
  } else{
    index = ( index - 1);
  }
  showImage(index);

  //console.log(index);
}
