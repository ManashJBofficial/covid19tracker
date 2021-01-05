async function india() 
{
  // let url= "https://api.covid19api.com/country/india";
  let url = "https://coronavirus-19-api.herokuapp.com/countries";
  let response = await fetch(url);
  let data = await response.json()
  return data;
}


india() 
        .then(function (data) {
  let n=data.length;
  for(let i=0;i<n;i++){
    let indiaActive = data[2].active;
      document.getElementById('indiaActive').innerHTML = indiaActive;
    let indiaConfirmed = data[2].cases;
      document.getElementById('indiaConfirmed').innerHTML = indiaConfirmed;
    let indiaRecovered = data[2].recovered;
      document.getElementById('indiaRecovered').innerHTML = indiaRecovered;
    let indiaDeceased = data[2].deaths;
      document.getElementById('indiaDeceased').innerHTML = indiaDeceased;        
  }
            
        })
        .catch(function () {
            console.log('error');
        });
