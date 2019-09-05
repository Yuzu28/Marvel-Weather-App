$(document).ready(function () {
    var thorURL = JSON.parse(localStorage.getItem('thorURL'));
    var location = JSON.parse(localStorage.getItem('location'));
    var coordinates = JSON.parse(localStorage.getItem('coordinates'));
    var temperature = JSON.parse(localStorage.getItem('temperature'));
    var conditions = JSON.parse(localStorage.getItem('conditions'));
    if(conditions !== 'Thunderstorm') {
        $('.weather-html').css('display','none');
    } else if (location === `, undefined`) {
        var location = 'The Middle of Nowhere';
        $('.weather-html').html(`${location.bold().fontcolor('gold')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('gold')}`);
    } else {
        $('.weather-html').html(`${location.bold().fontcolor('gold')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('gold')}`);
    }
    $( ".getweather" ).hover(function() {
        $('#thor-logo, .accordContainer, .background, .hero-toggle, .home').removeClass("transition").addClass("blur");
    });
    $( ".getweather" ).mouseout(function() {
        $('#thor-logo, .accordContainer, .background, .hero-toggle, .home').addClass("transition").removeClass("blur");
    });
    $( ".hero-toggle, .home" ).hover(function() {
        $('.weather-report, #thor-logo, .accordContainer, .background').removeClass("transition").addClass("blur");
    });
    $( ".hero-toggle, .home" ).mouseout(function() {
        $('.weather-report, #thor-logo, .accordContainer, .background').addClass("transition").removeClass("blur");
    });
    function accord(){
        $('#iframe').attr('src',`${thorURL}`);
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
        [`"You people are so petty and tiny."`, "http://comicartcommunity.com/gallery/data/media/491/Thor_604.jpg" ],
        [`"Of course, it was Loki! It's always Loki!"`, "https://cdn.shopify.com/s/files/1/0727/1263/products/M0098-1_large_2x.jpg?v=1517688902"],
        [`"Waves are but water. Wind but air. And though lightning be fire...yet it must answer thunder's call."`, "https://cdn.shopify.com/s/files/1/0727/1263/products/M0100-1_1024x1024.jpg?v=1562448865"],
        [`"Damneth!!! I hope Storm doesn't get promoted over me... I can't go back to being a demi-god again..."`, "https://cafart.r.worldssl.net/images/Category_18502/subcat_37405/Thor%20new%20costume1colorsfinal3pt.jpg"],
        [`"Olympus shall know our wrath! Yea, and you shall learn why we be called AVENGERS!"`, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsZD78PGMJxxkzaBdTu5SBXPQHguZELnHMCZUd0TxM2cRewDR"],
        [`"A lightning storm in Japan? Mine. A hurricane off the coast of Barbados? Mine again. A brace of tornadoes in Kansas? Aye...mine."`, "https://static.tvtropes.org/pmwiki/pub/images/thor_marvelcomics_2239.jpg"],
        [`"Thou art mighty, beast...mighty enough to slay a god! But I am the Odinson...defender of Asgard...and master of Mjolnir!"`, "https://dreager1.files.wordpress.com/2012/12/marvel-comics-thor.jpg"],
        [`"My sire was ruler of the gods, rash Thurse! Odin was my father and the thunder and lightning are by birthright!"`, "https://i.pinimg.com/originals/aa/f2/c4/aaf2c4559408082cf0b0832b23ebae27.jpg"],
        [`"I am THOR! Son of Odin, god of thunder, who commands the lightning and the storm!"`, "https://static.comicvine.com/uploads/original/7/72524/2871351-thor_oliver_coipel.jpg"],
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