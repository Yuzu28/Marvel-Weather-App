$(document).ready(function () {
    localStorage.clear();
    $( ".index" ).hover(function() {
        $('.background, .logo, .hero-toggle, .home').removeClass("transition").addClass("blur");
    });
    $( ".index" ).mouseout(function() {
        $('.background, .logo, .hero-toggle, .home').addClass("transition").removeClass("blur");
    });
    $( ".hero-toggle, .home" ).hover(function() {
        $('.background, .logo, .index').removeClass("transition").addClass("blur");
    });
    $( ".hero-toggle, .home" ).mouseout(function() {
        $('.background, .logo, .index').addClass("transition").removeClass("blur");
    });
    var publickey = 'a054b45fb805b78dc23c2437a3780e43';
    var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
    var ts = new Date().getTime();
    var stringToHash = ts + privatekey + publickey;
    var hash = md5(stringToHash);
    var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Storm';
    var stormURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    $.getJSON( stormURL )
    .done(function( response ) {
        var stormURL = response.data.results[0].urls[1].url;
        var stormName = response.data.results[0].name;
        localStorage.setItem('stormURL', JSON.stringify(stormURL));
        localStorage.setItem('stormName', JSON.stringify(stormName));
        var publickey = 'a054b45fb805b78dc23c2437a3780e43';
        var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = md5(stringToHash);
        var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Iceman';
        var iceURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
        $.getJSON( iceURL )
        .done(function( response ) {
            var iceURL = response.data.results[0].urls[1].url;
            var iceName = response.data.results[0].name;
            localStorage.setItem('iceURL', JSON.stringify(iceURL));
            localStorage.setItem('iceName', JSON.stringify(iceName));
            var publickey = 'a054b45fb805b78dc23c2437a3780e43';
            var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
            var ts = new Date().getTime();
            var stringToHash = ts + privatekey + publickey;
            var hash = md5(stringToHash);
            var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Thor';
            var thorURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
            $.getJSON( thorURL )
            .done(function( response ) {
                var thorURL = response.data.results[0].urls[1].url;
                var thorName = response.data.results[0].name;
                localStorage.setItem('thorURL', JSON.stringify(thorURL));
                localStorage.setItem('thorName', JSON.stringify(thorName));
                var publickey = 'a054b45fb805b78dc23c2437a3780e43';
                var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
                var ts = new Date().getTime();
                var stringToHash = ts + privatekey + publickey;
                var hash = md5(stringToHash);
                var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=human%20torch';
                var torchURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
                $.getJSON( torchURL )
                .done(function( response ) {
                    var torchURL = response.data.results[0].urls[1].url;
                    var torchName = response.data.results[0].name;
                    localStorage.setItem('torchURL', JSON.stringify(torchURL));
                    localStorage.setItem('torchName', JSON.stringify(torchName));
                    const lat = (Math.floor(Math.random()*180) - 90);
                    const lon = (Math.floor(Math.random()*360) - 180);
                    $('.index').on('click', (e) => {
                        $(this).off('mouseout');
                        $('.index').removeClass('unbind').removeClass('fadeEffect').addClass('active').html('CALCULATING...');
                        setTimeout(function () {
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
                        }, 2800);
                    });
                });
            });
        });
    });
});
    