const queryURL = 'https://corona.lmao.ninja/v2/states';

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    for (let i = 0; i <= response.length; i++) {
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

const newsQueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid19&api-key=pqTAhnco7pVR9FUqC09qgrNtbfwV1CZH";

$.ajax({
    url: newsQueryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    for (var i = 0; i < 9; i++) {
        console.log(response);

        var p = $('<h3>').text('Title: ' + response.response.docs[i].headline.main);
        var c = $('<p class="des-item">').text(response.response.docs[i].snippet);

        var dBtn = $(`<a class="btn-link" target="_blank"><button> For more Go to link </button></a>`).text("For more Go to link");
        dBtn.attr("href", response.response.docs[i].web_url);

        var newsList = $('<div id ="news">').append(p, c, dBtn);
        $('.news').prepend(newsList);
    }


})


