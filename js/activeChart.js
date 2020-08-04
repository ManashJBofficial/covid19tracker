fetch('https://api.covid19india.org/data.json')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        let state = [];

        let active = [];


        for (let i = 0; i <= 37; i++) {
            state.push(data.statewise[i].state);

            active.push(data.statewise[i].active);

        }

        state.shift();

        active.shift();



        let myChart = document.getElementById('activeData').getContext('2d');

        let activeData = new Chart(myChart, {
            type: 'line',
            data: {
                labels: state,
                datasets: [{
                        label: "Active Cases Statewise",
                        data: active,
                        backgroundColor: "#ff4c4c",
                        minBarLength: 100,
                        borderColor: "#ff1919",
                        pointBackgroundColor: "#fff"

                    },


                ]
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