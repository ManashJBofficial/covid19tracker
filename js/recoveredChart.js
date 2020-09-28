fetch("https://api.covid19india.org/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let state = [];

    let recovered = [];

    for (let i = 0; i <= 37; i++) {
      state.push(data.statewise[i].state);
      recovered.push(data.statewise[i].recovered);
    }

    state.shift();
    recovered.shift();

    let myChart = document.getElementById("recoveredData").getContext("2d");

    let recoveredData = new Chart(myChart, {
      type: "line",
      data: {
        labels: state,
        datasets: [
          {
            label: "Recovered Cases Statewise",
            data: recovered,
            backgroundColor: "#4ea96b",
            minBarLength: 100,
            borderColor: "#0b903f",
            pointBackgroundColor: "yellow",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: "#9370DB",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: "#9370DB",
            fontSize: 14,
            fontfamily: "sans-serif",
          },
        },
      },
    });
  })
  .catch(function () {
    console.log("error");
  });
