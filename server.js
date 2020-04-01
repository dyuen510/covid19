const queryURL = 'https://api.covid19api.com/live/country/US/status/confirmed';

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    for (let i = 0; i<= response.length; i++) {
        if(response[i].Province == 'California'){
            // console.log(response[i].Province);
            // console.log(response[i].Date);
            // console.log(response[i].Cases);
            // console.log(response[i].Status);
            let province = $('<p>').text('Province: ' + response[i].Province);
            let date = $('<p>').text('Date: ' + response[i].Date);
            let cases = $('<p>').text('Number of Cases Confirmed: ' + response[i].Cases);
            let status = $('<p>').text('Status: ' + response[i].Status);
            let display = $('<div class = "displayContent">').append(province, date, cases, status);
            $('.content').append(display);
        }

    }
})


