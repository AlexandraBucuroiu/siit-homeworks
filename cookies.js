
(function ajaxApp($) {
    const apiKey = 'c7da641777760054e5ca6164eb47580a';
    const location = 'Brasov,ro';

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
        success: (res) => {

            $(document).ready(function () {
                $("#C").click(function () {
                    const currentTemp = (res.main.temp - 273.15).toFixed(1);
                    $('.js-temp').html(`Temperatura in Brasov este: ${currentTemp} &deg;C`);
                    console.log(currentTemp);
                });
                $("#F").click(function () {
                    const currentTemp = (res.main.temp).toFixed(1);
                    $('.js-temp').html(`Temperatura in Brasov este: ${currentTemp} &deg;F`);
                    console.log(currentTemp);
                });
            });

        }
    });

})(jQuery);




//------------------------------------------------------------------------------
document.addEventListener('change', handleLangChange);

function handleLangChange(e) {
    if (e.target.name === 'temp') {
        console.log(e.target.value);

        if (localStorage) {
            localStorage.setItem('temperature', e.target.value);
        } else {
            document.cookie = 'temperature=' + e.target.value;
        }
    }
}

(function () {
    let temperature;
    if (localStorage) {
        temperature = localStorage.getItem('temperature');
    } else {
        document.cookie.split('=')[1]; // ATENTIE!!!! Functioneaza cu doar un singur cookie, daca sunt mai multe nu o sa functioneze
    }

    if (temperature) {
        document.querySelector('#' + temperature).setAttribute('checked', true);
    }
})();





