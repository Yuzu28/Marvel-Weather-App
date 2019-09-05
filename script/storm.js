$(document).ready(function () {
    var stormURL = JSON.parse(localStorage.getItem('stormURL'));
    var location = JSON.parse(localStorage.getItem('location'));
    var coordinates = JSON.parse(localStorage.getItem('coordinates'));
    var temperature = JSON.parse(localStorage.getItem('temperature'));
    var conditions = JSON.parse(localStorage.getItem('conditions'));
    if(conditions !== 'Rain'&&conditions !== 'Clouds') {    
        $('.weather-html').css('display','none');
    } else if (location === `, undefined`) {
        var location = 'The Middle of Nowhere';
        $('.weather-html').html(`${location.bold().fontcolor('purple')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('purple')}`);
    } else {
        $('.weather-html').html(`${location.bold().fontcolor('purple')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('purple')}`);
    }
    $( ".getweather" ).hover(function() {
        $('#storm-logo, .accordContainer, .background, .hero-toggle, .home').removeClass("transition").addClass("blur");
    });
    $( ".getweather" ).mouseout(function() {
        $('#storm-logo, .accordContainer, .background, .hero-toggle, .home').addClass("transition").removeClass("blur");
    });
    $( ".hero-toggle, .home" ).hover(function() {
        $('.weather-report, #storm-logo, .accordContainer, .background').removeClass("transition").addClass("blur");
    });
    $( ".hero-toggle, .home" ).mouseout(function() {
        $('.weather-report, #storm-logo, .accordContainer, .background').addClass("transition").removeClass("blur");
    });
    function accord(){
        $('#iframe').attr('src',`${stormURL}`);
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
        ["“To me, my X-Men! Hold the line! Not one mutant dies here today... not one!”", "https://i.pinimg.com/736x/5e/fc/fd/5efcfd48942d6ca199a0f04f491e48b6.jpg"],
        ["“Am I not beautiful, Lord Doom? And terrible? Do you not fear me? You should.”", "https://i.pinimg.com/736x/53/b5/e6/53b5e66adbea0b1b7dcaedfa9dc60b6d.jpg" ],
        ["“If Thor is considered a God for only controlling lightning, then I think I deserve a promotion.”", "https://www.fightersgeneration.com/nx/chars/storm-by-gregland.jpg"],
        ["“Just as I thought, a boy playing a man's game. You were wrong about me, Shinobi... you were wrong about everything.”", "http://images2.fanpop.com/image/photos/10000000/Storm-marvel-superheroines-10049983-900-1278.jpg"],
        ["“My victory I took for granted. This response is unexpected. I've never felt anything like it. It's glorious. And I want more!”", "https://i.pinimg.com/736x/92/bd/f1/92bdf176f9e556a82f20b7bbcddef598--storm-marvel-storm-xmen.jpg"],
        ["“You do not understand TRUE power!”", "http://images5.fanpop.com/image/photos/30600000/Storm-women-of-the-x-30612783-719-1111.jpg"],
        ["“A storm is gathering, fear its fury!”", "https://i.pinimg.com/originals/87/c9/fd/87c9fd159e28b72f753b8fe0fa48765f.png"],
        ["“Let my fury rain down upon evil!”", "https://i.pinimg.com/736x/b2/17/6b/b2176b4d582c5eb18df0d6eae744a3e1.jpg"],
        ["“By the Goddess, that felt GOOD!“", "https://static.comicvine.com/uploads/original/6/64880/4675619-3721740208-storm.jpg"],
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