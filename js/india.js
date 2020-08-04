function india() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {

            let indiaActive = data.statewise[0].active;
            document.getElementById('indiaActive').innerHTML = indiaActive;

            let indiaConfirmed = data.statewise[0].confirmed;
            document.getElementById('indiaConfirmed').innerHTML = indiaConfirmed;

            let indiaRecovered = data.statewise[0].recovered;
            document.getElementById('indiaRecovered').innerHTML = indiaRecovered;

            let indiaDeceased = data.statewise[0].deaths;
            document.getElementById('indiaDeceased').innerHTML = indiaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}