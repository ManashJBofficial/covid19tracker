fetch('https://api.covid19india.org/data.json')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        let state = [];
        let death = [];

        for (let i = 0; i <= 37; i++) {
            state.push(data.statewise[i].state);
            death.push(data.statewise[i].deaths);

        }

        state.shift();




        let myChart = document.getElementById('deathData').getContext('2d');

        let deathData = new Chart(myChart, {
            type: 'line',
            data: {
                labels: state,
                datasets: [{
                    label: "Death Cases Statewise",
                    data: death,
                    backgroundColor: "#CCCCCC",
                    minBarLength: 100,
                    borderColor: "#666666",
                    pointBackgroundColor: "ivory"

                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: '#fff'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: '#fff',
                        fontSize: 14,
                        fontfamily: 'sans-serif'
                    }
                }


            }
        })



    })






    .catch(function () {
        console.log('error');
    });