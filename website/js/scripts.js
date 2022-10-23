
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const headeMain = document.getElementById('headeMain');

btn.addEventListener('click' , ()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  console.log(screen.width + ' - screen width ');
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    if(screen.width > 780 ){
      document.getElementById("logo").style.height = "90px";
      headeMain.classList.add('headeMain');
    }

   // headeMain.style.transition="All 0.25s";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
   // document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.height = "120px";
    headeMain.classList.remove('headeMain');
    //headeMain.style.transition="All 0.25s";
  }
}
//$('html').css("scroll-behavior", "smooth");

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 100);


});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);//


/*
  * Replace all SVG images with inline SVG
  */
