fetch("https://api.covid19india.org/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let date = [];
    let dailyconfirmed = [];
    let dailyrecovered = [];
    let dailydeceased = [];
    let n = data.cases_time_series.length;

    for (let i = 0; i < n; i++) {
      date.push(data.cases_time_series[i].date);
      dailyconfirmed.push(data.cases_time_series[i].dailyconfirmed);
      dailyrecovered.push(data.cases_time_series[i].dailyrecovered);
      dailydeceased.push(data.cases_time_series[i].dailydeceased);
    }

    let myChart = document.getElementById("dailyCases").getContext("2d");

    let dailyCases = new Chart(myChart, {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Growth Rate of Daily Confirmed Cases in India",
            data: dailyconfirmed,
            backgroundColor: "#FF4C4C",
            minBarLength: 10,
            borderColor: "#FF4C4C",
            pointBackgroundColor: "#fff",
            fill: false,
            pointRadius: 0,
          },
          {
            label: "Growth Rate of Daily Recovered Cases in India",
            data: dailyrecovered,
            backgroundColor: "#7FEB45",
            minBarLength: 10,
            borderColor: "#7FEB45",
            pointBackgroundColor: "#fff",
            fill: false,
            pointRadius: 0,
          },
          {
            label: "Growth Rate of Daily Death Cases in India",
            data: dailydeceased,
            backgroundColor: "#CCCCCC",
            minBarLength: 10,
            borderColor: "#CCCCCC",
            pointBackgroundColor: "#fff",
            fill: false,
            pointRadius: 0,
          },
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
    console.log("error");
  });
