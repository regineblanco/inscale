// new WOW().init();


var slideTimeout;

$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });


    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['VideoHome', 'InsideUs', 'InFolio', 'InProduct', 'InPeople', 'InTouch'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Inside Us','InsideUs2', 'InFolio', 'InProcess', 'InPeople', 'InProduct','Direction', 'Contact Us'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 2000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        // fixedElements: '.headerTest',
        normalScrollElements: '.coba',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : true,
        // sectionsColor : ['#ccc', '#fff'],
        paddingTop: '',
        paddingBottom: '',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slideMain',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){
            if (index == 4) {
                slideTimeout = setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 5000);
            } else {
              clearInterval(slideTimeout);
            }
            //  if(index == 1){
            // document.getElementById('foo').innerHTML = '';
            // document.getElementById('foo').style.color = "#000";
            // document.getElementById('fooDes').style.color = "#000";
            // } 
            // else 

            //  if(index == 2){
            // document.getElementById('foo').innerHTML = '/INSIDE US';
            // document.getElementById('foo').style.color = "#fff";
            // document.getElementById('fooDes').style.color = "#fff";
            // } else

            //  if(index == 3){
            // document.getElementById('foo').innerHTML = '/INSIDE US';
            // document.getElementById('foo').style.color = "#fff";
            // document.getElementById('fooDes').style.color = "#fff";
            // } else

            // if(index == 4){
            // document.getElementById('foo').innerHTML = '/INFOLIO';
            // document.getElementById('foo').style.color = "#fff";
            // document.getElementById('fooDes').style.color = "#fff";
            // } else

            // if(index == 5){
            // document.getElementById('foo').innerHTML = '/INPROCESS';
            // document.getElementById('foo').style.color = "#000";
            // document.getElementById('fooDes').style.color = "#000";
            // } else

            // if(index == 6){
            // document.getElementById('foo').innerHTML = '/INPEOPLE';
            // document.getElementById('foo').style.color = "#000";
            // document.getElementById('fooDes').style.color = "#000";
            // } else

            // if(index == 7){
            // document.getElementById('foo').innerHTML = '/INPRODUCT';
            // document.getElementById('foo').style.color = "#000";
            // document.getElementById('fooDes').style.color = "#000";
            // } else

            // if(index == 8){
            // document.getElementById('foo').innerHTML = '/DIRECTION';
            // document.getElementById('foo').style.color = "#000";
            // document.getElementById('fooDes').style.color = "#000";
            // } else

            // if(index == 9){
            // document.getElementById('foo').innerHTML = '/CONTACT US';
            // document.getElementById('foo').style.color = "#000";
            // document.getElementById('fooDes').style.color = "#000";
            // } 

            // else {
            // document.getElementById('foo').innerHTML = '';
            // } 

            

        },
        afterRender: function(){


          // setInterval(function () {
          //       $.fn.fullpage.moveSlideRight();
          //   }, 1000);
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});


// new WOW().init();





    //STICKY HEADER IF THEY WANT TO
// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){  
//     // $('header').addClass("hidden");
//     $('header').hide("slow");
//     $('div#header2').show('slow');
//   }
//   else{
//     // $('header').removeClass("hidden");
//     $('header').show("slow");
//     $('div#header2').hide('slow');


//   }
// });

$(document).on('click', '#moveRight', function(){
  $.fn.fullpage.moveSlideRight();
});

$(document).on('click', '#moveLeft', function(){
  $.fn.fullpage.moveSlideLeft();
});



// $.fn.fullpage({
//     afterLoad: function(anchorLink, index){
        
//         if(anchorLink == 'InsideUs'){
//             // $('#fp-nav2').find('li').addClass('active');
//             alert("First slide loaded");
//         }
//     }
// });

// var url = window.location.href;

// if (url.search("#VideoHome") >= 0) {
//     $('#fp-nav2').find('li').addClass('active');}

//     else {
//        $('#fp-nav2').find('li').removeClass('active');}
 





// Loads the IFrame Player API code asynchronously.
                //   var tag = document.createElement('script');
                //   tag.src = "https://www.youtube.com/player_api";
                //   var firstScriptTag = document.getElementsByTagName('script')[0];
                //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                //   // Replaces the 'ytplayer' element with an <iframe> and
                //   // YouTube player after the API code downloads.
                //   var player;
                //   function onYouTubePlayerAPIReady() {
                //     player = new YT.Player('ytplayer', {
                //         height: '400',
                //         width: '100%',
                //         videoId: '0qYtvn9_OzM',
                //         playerVars: {
                //           autoplay: 1,
                //           controls: 0,

                //           loop: 1,

                //           disablekb: 1,
                //           hl: 'ru-ru',
                //           loop: 1,
                //           modestbranding: 1,
                //           showinfo: 0,
                //           autohide: 1,
                //           color: 'white',
                //           iv_load_policy: 3,
                //           theme: 'light',
                //           rel: 0
                //         },
                //         events: {
                //             'onReady': onPlayerReady,
                //         }
                //     });
                //   }

                // function onPlayerReady(event){
                //     player.mute();
                // }

// $("#myCar").vc3dEye({
//   imagePath:"img/360/",
//   totalImages:100,
//   imageExtension:"jpg"
// });

$('.carousel').carousel({
  interval: 2000,
  pause: 'none'
})

$('.carouselx').carousel({
  interval: 10000,
  pause: 'none'
})


// $(window).load(function(){
//  $('.shit').find('img').each(function(){
//   var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
//   $(this).addClass(imgClass);
//  })
// })

// jQuery('.haha').coverImage();

$(".paddRemove").each(function(){
    // Uncomment the following if you need to make this dynamic
    var refH = $(this).height();
    var refW = $(this).width();
    var refRatio = refW/refH;
    
    // Hard coded value...
    var refRatio = 3174/1936;
    
    var imgH = $(this).children("img").height();
    var imgW = $(this).children("img").width();
    
    if ( (imgW/imgH) < refRatio ) { 
        $(this).addClass("portrait");
    } else {
        $(this).addClass("landscape");
    }
})

$(window).on('load', function(){
      var win = $(this);
      if (win.width() < 768) { 

      $('#peoPles').addClass('coba');

      }
    else
    {
        $('#peoPles').removeClass('coba');
    }
});

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 768) { 

      $('#peoPles').addClass('coba');

      }
    else
    {
        $('#peoPles').removeClass('coba');
    }
});







