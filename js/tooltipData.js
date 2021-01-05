async function allStates() 
{
  let url= "https://api.covid19india.org/data.json";
  let response = await fetch(url);
  let data = await response.json()
  return data;
}
allStates() 
    .then(function (data) {
      for (let i = 0; i < data.statewise.length; i++) {

        if (data.statewise[i].statecode == "AN") {
            let anAct = data.statewise[i].active;
            let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
            document.getElementById("anAct").innerHTML = txt + anAct;       
        }
        if (data.statewise[i].statecode == "TG") {
          let telAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "telAct"
          ).innerHTML =  txt + telAct ;
        }
        if (data.statewise[i].statecode == "AP") {
          let apAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "apAct"
          ).innerHTML =  txt + apAct ;
        }
        if (data.statewise[i].statecode == "AR") {
          let arAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "arAct"
          ).innerHTML =  txt + arAct ;
        }
        if (data.statewise[i].statecode == "AS") {
          let asAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "asAct"
          ).innerHTML =  txt + asAct ;
        }
        if (data.statewise[i].statecode == "BR") {
          let brAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "brAct"
          ).innerHTML =  txt + brAct ;
        }
        if (data.statewise[i].statecode == "CH") {
          let chAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "chAct"
          ).innerHTML =  txt + chAct ;
        }
        if (data.statewise[i].statecode == "CT") {
          let ctAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "ctAct"
          ).innerHTML =  txt + ctAct ;
        }
        if (data.statewise[i].statecode == "DN") {
          let dnAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "dnAct"
          ).innerHTML =  txt + dnAct ;
        }
        if (data.statewise[i].statecode == "DN") {
          let dn2Act = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "dn2Act"
          ).innerHTML =  txt + dn2Act ;
        }
        if (data.statewise[i].statecode == "DL") {
          let dlAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "dlAct"
          ).innerHTML =  txt + dlAct ;
        }
        if (data.statewise[i].statecode == "GA") {
          let gaAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "gaAct"
          ).innerHTML =  txt + gaAct ;
        }
        if (data.statewise[i].statecode == "GJ") {
          let gjAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "gjAct"
          ).innerHTML =  txt + gjAct ;
        }
        if (data.statewise[i].statecode == "HR") {
          let hrAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "hrAct"
          ).innerHTML =  txt + hrAct ;
        }
        if (data.statewise[i].statecode == "HP") {
          let hpAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "hpAct"
          ).innerHTML =  txt + hpAct ;
        }
        if (data.statewise[i].statecode == "JH") {
          let jhAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "jhAct"
          ).innerHTML =  txt + jhAct ;
        }
        if (data.statewise[i].statecode == "KA") {
          let kaAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "kaAct"
          ).innerHTML =  txt + kaAct ;
        }
        if (data.statewise[i].statecode == "KL") {
          let klAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "klAct"
          ).innerHTML =  txt + klAct ;
        }
        if (data.statewise[i].statecode == "LD") {
          let ldAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "ldAct"
          ).innerHTML =  txt + ldAct ;
        }
        if (data.statewise[i].statecode == "MP") {
          let mpAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "mpAct"
          ).innerHTML =  txt + mpAct ;
        }
        if (data.statewise[i].statecode == "MH") {
          let mhAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "mhAct"
          ).innerHTML =  txt + mhAct ;
        }
        if (data.statewise[i].statecode == "MN") {
          let mnAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "mnAct"
          ).innerHTML =  txt + mnAct ;
        }
        if (data.statewise[i].statecode == "ML") {
          let mlAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "mlAct"
          ).innerHTML =  txt + mlAct ;
        }
        if (data.statewise[i].statecode == "MZ") {
          let mzAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "mzAct"
          ).innerHTML =  txt + mzAct ;
        }
        if (data.statewise[i].statecode == "NL") {
          let nlAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "nlAct"
          ).innerHTML =  txt + nlAct ;
        }
        if (data.statewise[i].statecode == "OR") {
          let orAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "orAct"
          ).innerHTML =  txt + orAct ;
        }
        if (data.statewise[i].statecode == "PY") {
          let pyAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "pyAct"
          ).innerHTML =  txt + pyAct ;
        }
        if (data.statewise[i].statecode == "PB") {
          let pbAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "pbAct"
          ).innerHTML =  txt + pbAct ;
        }
        if (data.statewise[i].statecode == "RJ") {
          let rjAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "rjAct"
          ).innerHTML =  txt + rjAct ;
        }
        if (data.statewise[i].statecode == "SK") {
          let skAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "skAct"
          ).innerHTML =  txt + skAct ;
        }
        if (data.statewise[i].statecode == "TN") {
          let tnAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "tnAct"
          ).innerHTML =  txt + tnAct ;
        }
        if (data.statewise[i].statecode == "TR") {
          let trAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "trAct"
          ).innerHTML =  txt + trAct ;
        }
        if (data.statewise[i].statecode == "UP") {
          let upAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "upAct"
          ).innerHTML =  txt + upAct ;
        }
        if (data.statewise[i].statecode == "UT") {
          let utAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "utAct"
          ).innerHTML =  txt + utAct ;
        }
        if (data.statewise[i].statecode == "WB") {
          let wbAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "wbAct"
          ).innerHTML =  txt + wbAct ;
        }
        if (data.statewise[i].statecode == "JK") {
          let jkAct = data.statewise[i].active;
          let sta = data.statewise[i].state;
          let txt = 'State: &nbsp;'+ sta +'\n' + 'Active: &nbsp;';
          document.getElementById(
            "jkAct"
          ).innerHTML =  txt + jkAct ;
        }

    }
    }).then(function (data) {
      document.getElementById("loading").style.display = 'none';
    })
    .catch(function () {
      console.log("error");
    });

 

   