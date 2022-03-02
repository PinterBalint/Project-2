var modal1 = document.getElementById("myModal1");
var navbar = document.querySelector(".navbar");
var img1 = document.getElementById("img1");
var modalImg1 = document.getElementById("modalimg1");
var captionText1 = document.getElementById("caption1");
function OpenModal1(){
  modal1.style.display = "block";
  modalImg1.src = img1.src;
  captionText1.innerHTML = img1.alt;
  navbar.classList.remove("sticky-top");
  navbar.classList.add("d-none");
}

var span1 = document.getElementsByClassName("close1")[0];

span1.onclick = function() {
  modal1.style.display = "none";
  navbar.classList.add("sticky-top");
  navbar.classList.remove("d-none");
}


var modal2 = document.getElementById("myModal2");

var img2 = document.getElementById("img2");
var modalImg2 = document.getElementById("modalimg2");
var captionText2 = document.getElementById("caption2");
function OpenModal2(){
  modal2.style.display = "block";
  modalImg2.src = img2.src;
  captionText2.innerHTML = img2.alt;
  navbar.classList.remove("sticky-top");
  navbar.classList.add("d-none");
}

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() {
  modal2.style.display = "none";
  navbar.classList.add("sticky-top");
  navbar.classList.remove("d-none");
}



var modal3 = document.getElementById("myModal3");

var img3 = document.getElementById("img3");
var modalImg3 = document.getElementById("modalimg3");
var captionText3 = document.getElementById("caption3");
function OpenModal3(){
  modal3.style.display = "block";
  modalImg3.src = img3.src;
  captionText3.innerHTML = img3.alt;
  navbar.classList.remove("sticky-top");
  navbar.classList.add("d-none");
}

var span3 = document.getElementsByClassName("close3")[0];

span3.onclick = function() {
  modal3.style.display = "none";
  navbar.classList.add("sticky-top");
  navbar.classList.remove("d-none");
}