$(document).ready(function () {
    $(document).on('click', '.play', function(event) {
          $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            var random = Math.random()*100;
            random = Math.floor(random);
            document.getElementById('music').play();
            $('#person4').addClass('person4dance');
            $('#person7').addClass('person7big');
            $('#person28').addClass('person28big');
            $('#person17').addClass('person17turn');
            $('#person14').addClass('person14big');
            $('#person27').css('left', random + "%");
            $('#person27').addClass('tittut');
            $('#person4').sprite({fps: 5, no_of_frames: 2});  
            $('#person7').sprite({fps: 4, no_of_frames: 2});
            $('#person11').sprite({fps: 3, no_of_frames: 2});  
            $('#person12').sprite({fps: 4, no_of_frames: 2}); 
            $('#person14').sprite({fps: 2, no_of_frames: 2}); 
            $('#person17').sprite({fps: 4, no_of_frames: 2}); 
            $('#person28').sprite({fps: 4, no_of_frames: 3});
            $('#person24').sprite({fps: 4, no_of_frames: 2});
        }else{
            document.getElementById('music').pause();
            $('#person27').removeClass('tittut');
            $('#person4').removeClass('person4dance');
            $('#person7').removeClass('person7big');
            $('#person28').removeClass('person28big');
            $('#person17').removeClass('person17turn');
            $('#person14').removeClass('person14big');
            $('#person4').destroy();  
            $('#person7').destroy();
            $('#person11').destroy();  
            $('#person12').destroy(); 
            $('#person14').destroy(); 
            $('#person17').destroy(); 
            $('#person28').destroy();
            $('#person24').destroy();
        }
    });
console.log('Hello fellow javascripter!');
console.log('Looking for work? Send an email to nerd@fortnox.se');
console.log('Or run job()');


       
});
function job(){
    window.location = 'http://www.fortnox.se/om-fortnox/jobba-pa-fortnox/'
}


// Google Analytics for WordPress by Yoast v4.3.3 | http://yoast.com/wordpress/google-analytics/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-2582993-11']);
	            _gaq.push(['_setDomainName','fortnox.se'],['_trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();


           