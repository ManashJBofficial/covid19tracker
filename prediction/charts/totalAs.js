fetch("../data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let date = [];
    let totalDeath = [];
    
  
   

    for (let i = 364; i <=454; i++) {
      date.push(data[i].date);
      totalDeath.push(data[i].totdea_mean_smoothed);
      
     
    }
                                                                                                                                                     
    let myChart = document.getElementById("totalDea").getContext("2d");

    let totalDea = new Chart(myChart, {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Total Deaths Mean(smoothed)",
            data: totalDeath,
            backgroundColor: "#FF4C4C",
            minBarLength: 10,
            borderColor: "#FF4C4C",
            pointBackgroundColor: "#fff",
            fill: true,
            
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
    console.log("Error");
  });
