fetch("../data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let date = [];
    let dailyDeaths = [];  

    for (let i = 364; i <=454; i++) {
      date.push(data[i].date);
      dailyDeaths.push(data[i].deaths_mean_smoothed);    
    }

    let myChart = document.getElementById("dailyDea").getContext("2d");

    let dailyDea = new Chart(myChart, {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Daily Deaths Mean(smoothed)",
            data: dailyDeaths,
            backgroundColor: "#FF4C4C",
            minBarLength: 10,
            borderColor: "#FF4C4C",
            pointBackgroundColor: "#fff",
            fill: true,
           
          }
         
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: "#fff",
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
    console.log("Error");
  });
