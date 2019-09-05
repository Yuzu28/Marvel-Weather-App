$(document).ready(function () {
    var torchURL = JSON.parse(localStorage.getItem('torchURL'));
    var location = JSON.parse(localStorage.getItem('location'));
    var coordinates = JSON.parse(localStorage.getItem('coordinates'));
    var temperature = JSON.parse(localStorage.getItem('temperature'));
    var conditions = JSON.parse(localStorage.getItem('conditions'));
    if(conditions !== 'Clear') {
        $('.weather-html').css('display','none');
    } else if (location === `, undefined`) {
        var location = 'The Middle of Nowhere';
        $('.weather-html').html(`${location.bold().fontcolor('darkred')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('darkred')}`);
    } else {
        $('.weather-html').html(`${location.bold().fontcolor('darkred')}<br>${coordinates}<br>${temperature}<br>Condtions: ${conditions.toUpperCase().bold().fontcolor('darkred')}`);
    }
    $( ".getweather" ).hover(function() {
        $('#torch-logo, .accordContainer, .background, .hero-toggle, .home').removeClass("transition").addClass("blur");
    });
    $( ".getweather" ).mouseout(function() {
        $('#torch-logo, .accordContainer, .background, .hero-toggle, .home').addClass("transition").removeClass("blur");
    });
    $( ".hero-toggle, .home" ).hover(function() {
        $('.weather-report, #torch-logo, .accordContainer, .background').removeClass("transition").addClass("blur");
    });
    $( ".hero-toggle, .home" ).mouseout(function() {
        $('.weather-report, #torch-logo, .accordContainer, .background').addClass("transition").removeClass("blur");
    });
    function accord(){
        $('#iframe').attr('src',`${torchURL}`);
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
        ["“ Man, this has to be my third-worst breakup ever!”", "https://www.syfy.com/sites/syfy/files/wire/legacy/3170603-storm.jpg"],
        ["“Flame on!”", "https://www.superherodb.com/pictures2/portraits/10/100/362.jpg?t=1492410309" ],
        ["“Does anybody besides me ever get tired of feeling like the dumb kid in science class? ”", "https://fsa.zobj.net/crop.php?r=6_8cT6T-Dtg3I4JDrqkn0ru7W9oiaqESqbFvyM7wkjAIRq7M8t9ZCZHScXWfzFSgKmo-n0ohalZTLUGpS4oNb0u2D4ZEw_1f6tS-YNGG7sLzhiggkcilI3ELSTqtT_ufiQ1tgVM8ST_S5ypEtCbRIfOTPSwcwhvG_RQd7myq6Ck7PI5ROw8W2NoqT2Y"],
        ["“This is my house now. Welcome to the Negative Zone.”", "https://vignette.wikia.nocookie.net/marveldatabase/images/6/63/All-New_Invaders_Vol_1_4_Textless.jpg/revision/latest?cb=20140116231705"],
        ["“Johnny Storm... The Human Torch... ...not a thief... not a spoiled kid... not a quitter... ...a hero.”", "https://i.pinimg.com/originals/8d/80/90/8d809071659811bfedaf142a0e04e0bb.jpg"],
        ["“ I need to be alone ... to sort things out... to decide just what it is I am!”", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e1fc080-3860-4c9f-827b-6a93bb6dc87d/db95rw-cf219eba-7c22-4fca-bba6-d7bdfde93638.jpg/v1/fill/w_745,h_1072,q_70,strp/human_torch_by_nichollica_db95rw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI5NCIsInBhdGgiOiJcL2ZcLzVlMWZjMDgwLTM4NjAtNGM5Zi04MjdiLTZhOTNiYjZkYzg3ZFwvZGI5NXJ3LWNmMjE5ZWJhLTdjMjItNGZjYS1iYmE2LWQ3YmRmZGU5MzYzOC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ESMHDOzaiS5Qm5vGJZDPXqnZ8a26rgE7V68bq2cpOt8"],
        ["“Sometimes I feel without my powers, I'd be nothing”", "http://www.them6p.com/wp-content/uploads/2014/06/Hammond1.jpg"],
        ["“Man, Oh Man! That was a close one!”", "https://static1.comicvine.com/uploads/original/12/128032/5447024-6917399415-fanta.jpg"],
        ["“I once accidentally set this guy named John on fire ”", "http://comicbasics.com/wp-content/uploads/2017/09/Human-Torch.jpg"],
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
            if (conditions === 'Rain' ) {
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