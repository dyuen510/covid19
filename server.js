const queryURL = 'https://corona.lmao.ninja/states';

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    for ( let i = 0; i <= response.length; i++) {
        console.log(response[i]);
        let state = $('<h3>').text(response[i].state);
        let cases = $('<p>').text('Total Cases: ' + response[i].cases);
        let todayCases = $('<p>').text('Number of Cases Today: ' + response[i].todayCases);
        let deaths = $('<p>').text('Total Deaths: ' + response[i].deaths);
        let todayDeaths = $('<p>').text('Number of Deaths Today: ' + response[i].todayDeaths);
        let active = $('<p>').text('Active Cases: ' + response[i].active);
        let display = $('<div class = "displayContent">').append(state, cases, todayCases, deaths, todayDeaths, active)
        $('.content').append(display);
        console.log(state)
    }
        
})


