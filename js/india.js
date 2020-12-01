async function india() 
{
  let url= "https://api.covid19api.com/country/india";
  let response = await fetch(url);
  let data = await response.json()
  return data;
}


india() 
        .then(function (data) {
  let n=data.length;
  for(let i=0;i<n;i++){
    let indiaActive = data[n-1].Active;
      document.getElementById('indiaActive').innerHTML = indiaActive;
    let indiaConfirmed = data[n-1].Confirmed;
      document.getElementById('indiaConfirmed').innerHTML = indiaConfirmed;
    let indiaRecovered = data[n-1].Recovered;
      document.getElementById('indiaRecovered').innerHTML = indiaRecovered;
    let indiaDeceased = data[n-1].Deaths;
      document.getElementById('indiaDeceased').innerHTML = indiaDeceased;        
  }
            
        })
        .catch(function () {
            console.log('error');
        });
