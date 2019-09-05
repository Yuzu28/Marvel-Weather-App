$(document).ready(function () {
var iceURL = JSON.parse(localStorage.getItem('iceURL'));
var location = JSON.parse(localStorage.getItem('location'));
var coordinates = JSON.parse(localStorage.getItem('coordinates'));
var temperature = JSON.parse(localStorage.getItem('temperature'));
var conditions = JSON.parse(localStorage.getItem('conditions'));
if(conditions !== 'Snow') {
    $('.weather-html').css('display','none');
} else if (location === ', undefined') {
    var location = 'The Middle of Nowhere';
    $('.weather-html').html(`${location.bold().fontcolor('rgb(77, 192, 238)')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('rgb(77, 192, 238)')}`);
} else {
    $('.weather-html').html(`${location.bold().fontcolor('rgb(77, 192, 238)')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('rgb(77, 192, 238)')}`);
}
$( ".getweather" ).hover(function() {
    $('#ice-logo, .accordContainer, .background, .hero-toggle, .home').removeClass("transition").addClass("blur");
});
$( ".getweather" ).mouseout(function() {
    $('#ice-logo, .accordContainer, .background, .hero-toggle, .home').addClass("transition").removeClass("blur");
});
$( ".hero-toggle, .home" ).hover(function() {
    $('.weather-report, #ice-logo, .accordContainer, .background').removeClass("transition").addClass("blur");
});
$( ".hero-toggle, .home" ).mouseout(function() {
    $('.weather-report, #ice-logo, .accordContainer, .background').addClass("transition").removeClass("blur");
});
function accord(){
    $('#iframe').attr('src',`${iceURL}`);
    var accordions = document.querySelectorAll(".accordion");
    var accordcontent = document.querySelectorAll(".accordion-content");
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function() {
            var newColor = $(this).css('color');
            accordions.forEach((accord) => {
                accord.classList.remove('is-open');
                accord.style.color = '#333';
            })
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                this.style.color = '#333';
            } else {
                this.style.color = newColor;
            }
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                accordcontent.forEach((accord) => {
                    accord.style.maxHeight = null;
                    this.classList.add('is-open');
                });
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}
accord();
var content = [
    ["“I need you to chill out!”", "https://boundingintocomics.com/files/2019/03/2019.03.22-01.48-boundingintocomics-5c943f06ebc3e.png" ],
    ["“An Iceman never kisses and tells.”", "https://i.pinimg.com/originals/68/4d/5a/684d5a1f3a0c14239a73d5f6e4c914df.jpg"],
    ["“Right now, I kinda need some time to be alone -- and think.”", "https://i.pinimg.com/originals/30/e5/df/30e5df1ebb73a8701c952f89fe21c44f.jpg"],
    ["“Teamwork. You gotta love it.”", "http://1.bp.blogspot.com/-W8NDWkq0EXI/Ti5yzWhboAI/AAAAAAAABo0/flZ8YFpZz9Q/s1600/Iceman.JPG"],
    ["“Was a time people laughed at my jokes.”", "https://i.pinimg.com/originals/36/56/a4/3656a4944fb272fbb5cc00d1230977ab.jpg"],
    ["“I am pulling the most totally bizarre vibes off the others.”", "https://vignette.wikia.nocookie.net/marveldatabase/images/c/c7/Iceman_Vol_3_8_Textless.jpg/revision/latest?cb=20170920001844"],
    ["“Oh. Hey. Kitty. Four hours in a jet with my favorite ex-girlfriend. Yaaaay.”", "https://vignette.wikia.nocookie.net/marveldatabase/images/2/2d/Robert_Drake_%28Earth-TRN517%29_from_Marvel_Contest_of_Champions_001.jpg/revision/latest?cb=20170401112148"],
    ["“ Sinister won't be bothering us for a long time”", "https://pm1.narvii.com/5812/c444bcfba3f67ef170e8af4613e6515ddf5037f3_hq.jpg"],
    ["“ I got rejected from the likes of Eugene”", "https://scontent-cdg2-1.cdninstagram.com/vp/a2cccbee8de1401023086e68252c6fc7/5DB9381B/t51.2885-15/e35/20968900_102885273776231_5923734721321238528_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&ig_cache_key=MTU4NDI4ODg5NDIyNzQxNzA2MQ%3D%3D.2"],
];
// set counter to 1
var count = 1;
$("#imgtog").click(function(){
    // check is end of array reached and start from beginning
    count == content.length ? count = 0 : "";
    // fade h4 out
    $(".quote").fadeOut(800, function() {
      // use counter to get the correct index of array to change the h4 to the relevent quote
      $(".quote").html(content[count][0]);
      // use counter to get the correct index of array to change the h4 to the relevent image source
      $("#mainProductImage").css('backgroundImage',`url(${content[count][1]})`);
      // fade h1 back in after everything else is done
      $(".quote").fadeIn(800);
      // increment count by 1
      count++;
    });
});
$('.getweather').on('click', (e) => {
    const lat = (Math.floor(Math.random()*180) - 90);
    const lon = (Math.floor(Math.random()*360) - 180);
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2f4580c1da2a1471787ee4c356181fd1`;
    $.getJSON ( weatherURL )
    .done(function( response ) {
        var location = `${response.name}, ${response.sys.country}`;
        var coordinates = `Latitude: ${response.coord.lat}, Longitude: ${response.coord.lon}`;
        var fartemp = Math.round(((response.main.temp - 273.15) * (9/5)) + 32);
        var temperature = `${fartemp}°F`;
        var conditions = `${response.weather[0].main}`;
        localStorage.setItem('location', JSON.stringify(location));
        localStorage.setItem('coordinates', JSON.stringify(coordinates));
        localStorage.setItem('temperature', JSON.stringify(temperature));
        localStorage.setItem('conditions', JSON.stringify(conditions));
        if (conditions === 'Rain' ||conditions === 'Clouds') {
            window.location.href="storm.html";
        } else if (conditions === 'Snow') {
            window.location.href="iceman.html";
        } else if (conditions === 'Thunderstorm') {
            window.location.href="thor.html";
        } else {
            window.location.href="torch.html";
        }
    });
});
});
