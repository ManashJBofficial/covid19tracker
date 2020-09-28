fetch("https://api.covid19india.org/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let date = [];
    let totalconfirmed = [];
    let totalrecovered = [];
    let totaldeceased = [];
    let n = data.cases_time_series.length;

    for (let i = 0; i < n; i++) {
      date.push(data.cases_time_series[i].date);
      totalconfirmed.push(data.cases_time_series[i].totalconfirmed);
      totalrecovered.push(data.cases_time_series[i].totalrecovered);
      totaldeceased.push(data.cases_time_series[i].totaldeceased);
    }

    let myChart = document.getElementById("totalCases").getContext("2d");

    let totalCases = new Chart(myChart, {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Growth Rate of Total Confirmed Cases in India",
            data: totalconfirmed,
            backgroundColor: "#FF4C4C",
            minBarLength: 10,
            borderColor: "#FF4C4C",
            pointBackgroundColor: "#fff",
            fill: false,
            pointRadius: 0,
          },
          {
            label: "Growth Rate of Total Recovered Cases in India",
            data: totalrecovered,
            backgroundColor: "#7FEB45",
            minBarLength: 10,
            borderColor: "#7FEB45",
            pointBackgroundColor: "#fff",
            fill: false,
            pointRadius: 0,
          },
          {
            label: "Growth Rate of Total Death Cases in India",
            data: totaldeceased,
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
    // console.log('error');
  });
