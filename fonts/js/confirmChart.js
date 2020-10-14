fetch("https://api.covid19india.org/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let state = [];
    let confirmed = [];

    for (let i = 0; i <= 37; i++) {
      state.push(data.statewise[i].state);
      confirmed.push(data.statewise[i].confirmed);
    }

    state.shift();
    confirmed.shift();

    let myChart = document.getElementById("chart").getContext("2d");

    let chart = new Chart(myChart, {
      type: "line",
      data: {
        labels: state,
        datasets: [
          {
            label: "Confirmed Cases Statewise",
            data: confirmed,
            backgroundColor: "#A0D2E7",
            minBarLength: 10,
            borderColor: "#3D60A7",
            pointBackgroundColor: "#fff",
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
