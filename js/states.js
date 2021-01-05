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
        if (data.statewise[i].statecode == "MH") {
          let maharastraUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "maharastraUpdate"
          ).innerHTML = maharastraUpdate;

          let maharastraState = data.statewise[i].state;
          document.getElementById(
            "maharastraState"
          ).innerHTML = maharastraState;

          let maharastraActive = data.statewise[i].active;
          document.getElementById(
            "maharastraActive"
          ).innerHTML = maharastraActive;

          let maharastraConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "maharastraConfirmed"
          ).innerHTML = maharastraConfirmed;

          let maharastraRecovered = data.statewise[i].recovered;
          document.getElementById(
            "maharastraRecovered"
          ).innerHTML = maharastraRecovered;

          let maharastraDeceased = data.statewise[i].deaths;
          document.getElementById(
            "maharastraDeceased"
          ).innerHTML = maharastraDeceased;
        }
        if (data.statewise[i].statecode == "AP") {
          let apUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("apUpdate").innerHTML = apUpdate;

          let apState = data.statewise[i].state;
          document.getElementById("apState").innerHTML = apState;

          let apActive = data.statewise[i].active;
          document.getElementById("apActive").innerHTML = apActive;

          let apConfirmed = data.statewise[i].confirmed;
          document.getElementById("apConfirmed").innerHTML = apConfirmed;

          let apRecovered = data.statewise[i].recovered;
          document.getElementById("apRecovered").innerHTML = apRecovered;

          let apDeceased = data.statewise[i].deaths;
          document.getElementById("apDeceased").innerHTML = apDeceased;
        }
        if (data.statewise[i].statecode == "KA") {
          let karnatakaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "karnatakaUpdate"
          ).innerHTML = karnatakaUpdate;

          let karnatakaState = data.statewise[i].state;
          document.getElementById("karnatakaState").innerHTML = karnatakaState;

          let karnatakaActive = data.statewise[i].active;
          document.getElementById(
            "karnatakaActive"
          ).innerHTML = karnatakaActive;

          let karnatakaConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "karnatakaConfirmed"
          ).innerHTML = karnatakaConfirmed;

          let karnatakaRecovered = data.statewise[i].recovered;
          document.getElementById(
            "karnatakaRecovered"
          ).innerHTML = karnatakaRecovered;

          let karnatakaDeceased = data.statewise[i].deaths;
          document.getElementById(
            "karnatakaDeceased"
          ).innerHTML = karnatakaDeceased;
        }
        if (data.statewise[i].statecode == "TN") {
          let tamilUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("tamilUpdate").innerHTML = tamilUpdate;

          let tamilState = data.statewise[i].state;
          document.getElementById("tamilState").innerHTML = tamilState;

          let tamilActive = data.statewise[i].active;
          document.getElementById("tamilActive").innerHTML = tamilActive;

          let tamilConfirmed = data.statewise[i].confirmed;
          document.getElementById("tamilConfirmed").innerHTML = tamilConfirmed;

          let tamilRecovered = data.statewise[i].recovered;
          document.getElementById("tamilRecovered").innerHTML = tamilRecovered;

          let tamilDeceased = data.statewise[i].deaths;
          document.getElementById("tamilDeceased").innerHTML = tamilDeceased;
        }
        if (data.statewise[i].statecode == "UP") {
          let upUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("upUpdate").innerHTML = upUpdate;

          let upState = data.statewise[i].state;
          document.getElementById("upState").innerHTML = upState;

          let upActive = data.statewise[i].active;
          document.getElementById("upActive").innerHTML = upActive;

          let upConfirmed = data.statewise[i].confirmed;
          document.getElementById("upConfirmed").innerHTML = upConfirmed;

          let upRecovered = data.statewise[i].recovered;
          document.getElementById("upRecovered").innerHTML = upRecovered;

          let upDeceased = data.statewise[i].deaths;
          document.getElementById("upDeceased").innerHTML = upDeceased;
        }
        if (data.statewise[i].statecode == "DL") {
          let delhiUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("delhiUpdate").innerHTML = delhiUpdate;

          let delhiState = data.statewise[i].state;
          document.getElementById("delhiState").innerHTML = delhiState;

          let delhiActive = data.statewise[i].active;
          document.getElementById("delhiActive").innerHTML = delhiActive;

          let delhiConfirmed = data.statewise[i].confirmed;
          document.getElementById("delhiConfirmed").innerHTML = delhiConfirmed;

          let delhiRecovered = data.statewise[i].recovered;
          document.getElementById("delhiRecovered").innerHTML = delhiRecovered;

          let delhiDeceased = data.statewise[i].deaths;
          document.getElementById("delhiDeceased").innerHTML = delhiDeceased;
        }
        if (data.statewise[i].statecode == "WB") {
          let wbUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("wbUpdate").innerHTML = wbUpdate;

          let wbState = data.statewise[i].state;
          document.getElementById("wbState").innerHTML = wbState;

          let wbActive = data.statewise[i].active;
          document.getElementById("wbActive").innerHTML = wbActive;

          let wbConfirmed = data.statewise[i].confirmed;
          document.getElementById("wbConfirmed").innerHTML = wbConfirmed;

          let wbRecovered = data.statewise[i].recovered;
          document.getElementById("wbRecovered").innerHTML = wbRecovered;

          let wbDeceased = data.statewise[i].deaths;
          document.getElementById("wbDeceased").innerHTML = wbDeceased;
        }
        if (data.statewise[i].statecode == "OR") {
          let odishaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("odishaUpdate").innerHTML = odishaUpdate;

          let odishaState = data.statewise[i].state;
          document.getElementById("odishaState").innerHTML = odishaState;

          let odishaActive = data.statewise[i].active;
          document.getElementById("odishaActive").innerHTML = odishaActive;

          let odishaConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "odishaConfirmed"
          ).innerHTML = odishaConfirmed;

          let odishaRecovered = data.statewise[i].recovered;
          document.getElementById(
            "odishaRecovered"
          ).innerHTML = odishaRecovered;

          let odishaDeceased = data.statewise[i].deaths;
          document.getElementById("odishaDeceased").innerHTML = odishaDeceased;
        }
        if (data.statewise[i].statecode == "KL") {
          let keralaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("keralaUpdate").innerHTML = keralaUpdate;

          let keralaState = data.statewise[i].state;
          document.getElementById("keralaState").innerHTML = keralaState;

          let keralaActive = data.statewise[i].active;
          document.getElementById("keralaActive").innerHTML = keralaActive;

          let keralaConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "keralaConfirmed"
          ).innerHTML = keralaConfirmed;

          let keralaRecovered = data.statewise[i].recovered;
          document.getElementById(
            "keralaRecovered"
          ).innerHTML = keralaRecovered;

          let keralaDeceased = data.statewise[i].deaths;
          document.getElementById("keralaDeceased").innerHTML = keralaDeceased;
        }
        if (data.statewise[i].statecode == "TG") {
          let telanganaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "telanganaUpdate"
          ).innerHTML = telanganaUpdate;

          let telanganaState = data.statewise[i].state;
          document.getElementById("telanganaState").innerHTML = telanganaState;

          let telanganaActive = data.statewise[i].active;
          document.getElementById(
            "telanganaActive"
          ).innerHTML = telanganaActive;

          let telanganaConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "telanganaConfirmed"
          ).innerHTML = telanganaConfirmed;

          let telanganaRecovered = data.statewise[i].recovered;
          document.getElementById(
            "telanganaRecovered"
          ).innerHTML = telanganaRecovered;

          let telanganaDeceased = data.statewise[i].deaths;
          document.getElementById(
            "telanganaDeceased"
          ).innerHTML = telanganaDeceased;
        }
        if (data.statewise[i].statecode == "BR") {
          let biharUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("biharUpdate").innerHTML = biharUpdate;

          let biharState = data.statewise[i].state;
          document.getElementById("biharState").innerHTML = biharState;

          let biharActive = data.statewise[i].active;
          document.getElementById("biharActive").innerHTML = biharActive;

          let biharConfirmed = data.statewise[i].confirmed;
          document.getElementById("biharConfirmed").innerHTML = biharConfirmed;

          let biharRecovered = data.statewise[i].recovered;
          document.getElementById("biharRecovered").innerHTML = biharRecovered;

          let biharDeceased = data.statewise[i].deaths;
          document.getElementById("biharDeceased").innerHTML = biharDeceased;
        }
        if (data.statewise[i].statecode == "AS") {
          let assamUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("assamUpdate").innerHTML = assamUpdate;

          let assamState = data.statewise[i].state;
          document.getElementById("assamState").innerHTML = assamState;

          let assamActive = data.statewise[i].active;
          document.getElementById("assamActive").innerHTML = assamActive;

          let assamConfirmed = data.statewise[i].confirmed;
          document.getElementById("assamConfirmed").innerHTML = assamConfirmed;

          let assamRecovered = data.statewise[i].recovered;
          document.getElementById("assamRecovered").innerHTML = assamRecovered;

          let assamDeceased = data.statewise[i].deaths;
          document.getElementById("assamDeceased").innerHTML = assamDeceased;
        }
        if (data.statewise[i].statecode == "GJ") {
          let gujaratUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("gujaratUpdate").innerHTML = gujaratUpdate;

          let gujaratState = data.statewise[i].state;
          document.getElementById("gujaratState").innerHTML = gujaratState;

          let gujaratActive = data.statewise[i].active;
          document.getElementById("gujaratActive").innerHTML = gujaratActive;

          let gujaratConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "gujaratConfirmed"
          ).innerHTML = gujaratConfirmed;

          let gujaratRecovered = data.statewise[i].recovered;
          document.getElementById(
            "gujaratRecovered"
          ).innerHTML = gujaratRecovered;

          let gujaratDeceased = data.statewise[i].deaths;
          document.getElementById(
            "gujaratDeceased"
          ).innerHTML = gujaratDeceased;
        }
        if (data.statewise[i].statecode == "RJ") {
          let rajasthanUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "rajasthanUpdate"
          ).innerHTML = rajasthanUpdate;

          let rajasthanState = data.statewise[i].state;
          document.getElementById("rajasthanState").innerHTML = rajasthanState;

          let rajasthanActive = data.statewise[i].active;
          document.getElementById(
            "rajasthanActive"
          ).innerHTML = rajasthanActive;

          let rajasthanConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "rajasthanConfirmed"
          ).innerHTML = rajasthanConfirmed;

          let rajasthanRecovered = data.statewise[i].recovered;
          document.getElementById(
            "rajasthanRecovered"
          ).innerHTML = rajasthanRecovered;

          let rajasthanDeceased = data.statewise[i].deaths;
          document.getElementById(
            "rajasthanDeceased"
          ).innerHTML = rajasthanDeceased;
        }
        if (data.statewise[i].statecode == "MP") {
          let mpUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("mpUpdate").innerHTML = mpUpdate;

          let mpState = data.statewise[i].state;
          document.getElementById("mpState").innerHTML = mpState;

          let mpActive = data.statewise[i].active;
          document.getElementById("mpActive").innerHTML = mpActive;

          let mpConfirmed = data.statewise[i].confirmed;
          document.getElementById("mpConfirmed").innerHTML = mpConfirmed;

          let mpRecovered = data.statewise[i].recovered;
          document.getElementById("mpRecovered").innerHTML = mpRecovered;

          let mpDeceased = data.statewise[i].deaths;
          document.getElementById("mpDeceased").innerHTML = mpDeceased;
        }
        if (data.statewise[i].statecode == "HR") {
          let haryanaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("haryanaUpdate").innerHTML = haryanaUpdate;

          let haryanaState = data.statewise[i].state;
          document.getElementById("haryanaState").innerHTML = haryanaState;

          let haryanaActive = data.statewise[i].active;
          document.getElementById("haryanaActive").innerHTML = haryanaActive;

          let haryanaConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "haryanaConfirmed"
          ).innerHTML = haryanaConfirmed;

          let haryanaRecovered = data.statewise[i].recovered;
          document.getElementById(
            "haryanaRecovered"
          ).innerHTML = haryanaRecovered;

          let haryanaDeceased = data.statewise[i].deaths;
          document.getElementById(
            "haryanaDeceased"
          ).innerHTML = haryanaDeceased;
        }
        if (data.statewise[i].statecode == "CT") {
          let ctUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("ctUpdate").innerHTML = ctUpdate;

          let ctState = data.statewise[i].state;
          document.getElementById("ctState").innerHTML = ctState;

          let ctActive = data.statewise[i].active;
          document.getElementById("ctActive").innerHTML = ctActive;

          let ctConfirmed = data.statewise[i].confirmed;
          document.getElementById("ctConfirmed").innerHTML = ctConfirmed;

          let ctRecovered = data.statewise[i].recovered;
          document.getElementById("ctRecovered").innerHTML = ctRecovered;

          let ctDeceased = data.statewise[i].deaths;
          document.getElementById("ctDeceased").innerHTML = ctDeceased;
        }
        if (data.statewise[i].statecode == "PB") {
          let punjabUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("punjabUpdate").innerHTML = punjabUpdate;

          let punjabState = data.statewise[i].state;
          document.getElementById("punjabState").innerHTML = punjabState;

          let punjabActive = data.statewise[i].active;
          document.getElementById("punjabActive").innerHTML = punjabActive;

          let punjabConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "punjabConfirmed"
          ).innerHTML = punjabConfirmed;

          let punjabRecovered = data.statewise[i].recovered;
          document.getElementById(
            "punjabRecovered"
          ).innerHTML = punjabRecovered;

          let punjabDeceased = data.statewise[i].deaths;
          document.getElementById("punjabDeceased").innerHTML = punjabDeceased;
        }
        if (data.statewise[i].statecode == "JH") {
          let jharkhandUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "jharkhandUpdate"
          ).innerHTML = jharkhandUpdate;

          let jharkhandState = data.statewise[i].state;
          document.getElementById("jharkhandState").innerHTML = jharkhandState;

          let jharkhandActive = data.statewise[i].active;
          document.getElementById(
            "jharkhandActive"
          ).innerHTML = jharkhandActive;

          let jharkhandConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "jharkhandConfirmed"
          ).innerHTML = jharkhandConfirmed;

          let jharkhandRecovered = data.statewise[i].recovered;
          document.getElementById(
            "jharkhandRecovered"
          ).innerHTML = jharkhandRecovered;

          let jharkhandDeceased = data.statewise[i].deaths;
          document.getElementById(
            "jharkhandDeceased"
          ).innerHTML = jharkhandDeceased;
        }
        if (data.statewise[i].statecode == "JK") {
          let jkUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("jkUpdate").innerHTML = jkUpdate;

          let jkState = data.statewise[i].state;
          document.getElementById("jkState").innerHTML = jkState;

          let jkActive = data.statewise[i].active;
          document.getElementById("jkActive").innerHTML = jkActive;

          let jkConfirmed = data.statewise[i].confirmed;
          document.getElementById("jkConfirmed").innerHTML = jkConfirmed;

          let jkRecovered = data.statewise[i].recovered;
          document.getElementById("jkRecovered").innerHTML = jkRecovered;

          let jkDeceased = data.statewise[i].deaths;
          document.getElementById("jkDeceased").innerHTML = jkDeceased;
        }
        if (data.statewise[i].statecode == "UT") {
          let uttarakhandUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "uttarakhandUpdate"
          ).innerHTML = uttarakhandUpdate;

          let uttarakhandState = data.statewise[i].state;
          document.getElementById(
            "uttarakhandState"
          ).innerHTML = uttarakhandState;

          let uttarakhandActive = data.statewise[i].active;
          document.getElementById(
            "uttarakhandActive"
          ).innerHTML = uttarakhandActive;

          let uttarakhandConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "uttarakhandConfirmed"
          ).innerHTML = uttarakhandConfirmed;

          let uttarakhandRecovered = data.statewise[i].recovered;
          document.getElementById(
            "uttarakhandRecovered"
          ).innerHTML = uttarakhandRecovered;

          let uttarakhandDeceased = data.statewise[i].deaths;
          document.getElementById(
            "uttarakhandDeceased"
          ).innerHTML = uttarakhandDeceased;
        }
        if (data.statewise[i].statecode == "GA") {
          let goaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("goaUpdate").innerHTML = goaUpdate;

          let goaState = data.statewise[i].state;
          document.getElementById("goaState").innerHTML = goaState;

          let goaActive = data.statewise[i].active;
          document.getElementById("goaActive").innerHTML = goaActive;

          let goaConfirmed = data.statewise[i].confirmed;
          document.getElementById("goaConfirmed").innerHTML = goaConfirmed;

          let goaRecovered = data.statewise[i].recovered;
          document.getElementById("goaRecovered").innerHTML = goaRecovered;

          let goaDeceased = data.statewise[i].deaths;
          document.getElementById("goaDeceased").innerHTML = goaDeceased;
        }
        if (data.statewise[i].statecode == "PY") {
          let puducherryUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "puducherryUpdate"
          ).innerHTML = puducherryUpdate;

          let puducherryState = data.statewise[i].state;
          document.getElementById(
            "puducherryState"
          ).innerHTML = puducherryState;

          let puducherryActive = data.statewise[i].active;
          document.getElementById(
            "puducherryActive"
          ).innerHTML = puducherryActive;

          let puducherryConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "puducherryConfirmed"
          ).innerHTML = puducherryConfirmed;

          let puducherryRecovered = data.statewise[i].recovered;
          document.getElementById(
            "puducherryRecovered"
          ).innerHTML = puducherryRecovered;

          let puducherryDeceased = data.statewise[i].deaths;
          document.getElementById(
            "puducherryDeceased"
          ).innerHTML = puducherryDeceased;
        }
        if (data.statewise[i].statecode == "TR") {
          let tripuraUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("tripuraUpdate").innerHTML = tripuraUpdate;

          let tripuraState = data.statewise[i].state;
          document.getElementById("tripuraState").innerHTML = tripuraState;

          let tripuraActive = data.statewise[i].active;
          document.getElementById("tripuraActive").innerHTML = tripuraActive;

          let tripuraConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "tripuraConfirmed"
          ).innerHTML = tripuraConfirmed;

          let tripuraRecovered = data.statewise[i].recovered;
          document.getElementById(
            "tripuraRecovered"
          ).innerHTML = tripuraRecovered;

          let tripuraDeceased = data.statewise[i].deaths;
          document.getElementById(
            "tripuraDeceased"
          ).innerHTML = tripuraDeceased;
        }
        if (data.statewise[i].statecode == "HP") {
          let hpUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("hpUpdate").innerHTML = hpUpdate;

          let hpState = data.statewise[i].state;
          document.getElementById("hpState").innerHTML = hpState;

          let hpActive = data.statewise[i].active;
          document.getElementById("hpActive").innerHTML = hpActive;

          let hpConfirmed = data.statewise[i].confirmed;
          document.getElementById("hpConfirmed").innerHTML = hpConfirmed;

          let hpRecovered = data.statewise[i].recovered;
          document.getElementById("hpRecovered").innerHTML = hpRecovered;

          let hpDeceased = data.statewise[i].deaths;
          document.getElementById("hpDeceased").innerHTML = hpDeceased;
        }
        if (data.statewise[i].statecode == "CH") {
          let chandigarhUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "chandigarhUpdate"
          ).innerHTML = chandigarhUpdate;

          let chandigarhState = data.statewise[i].state;
          document.getElementById(
            "chandigarhState"
          ).innerHTML = chandigarhState;

          let chandigarhActive = data.statewise[i].active;
          document.getElementById(
            "chandigarhActive"
          ).innerHTML = chandigarhActive;

          let chandigarhConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "chandigarhConfirmed"
          ).innerHTML = chandigarhConfirmed;

          let chandigarhRecovered = data.statewise[i].recovered;
          document.getElementById(
            "chandigarhRecovered"
          ).innerHTML = chandigarhRecovered;

          let chandigarhDeceased = data.statewise[i].deaths;
          document.getElementById(
            "chandigarhDeceased"
          ).innerHTML = chandigarhDeceased;
        }
        if (data.statewise[i].statecode == "MN") {
          let manipurUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("manipurUpdate").innerHTML = manipurUpdate;

          let manipurState = data.statewise[i].state;
          document.getElementById("manipurState").innerHTML = manipurState;

          let manipurActive = data.statewise[i].active;
          document.getElementById("manipurActive").innerHTML = manipurActive;

          let manipurConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "manipurConfirmed"
          ).innerHTML = manipurConfirmed;

          let manipurRecovered = data.statewise[i].recovered;
          document.getElementById(
            "manipurRecovered"
          ).innerHTML = manipurRecovered;

          let manipurDeceased = data.statewise[i].deaths;
          document.getElementById(
            "manipurDeceased"
          ).innerHTML = manipurDeceased;
        }
        if (data.statewise[i].statecode == "AR") {
          let arUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("arUpdate").innerHTML = arUpdate;

          let arState = data.statewise[i].state;
          document.getElementById("arState").innerHTML = arState;

          let arActive = data.statewise[i].active;
          document.getElementById("arActive").innerHTML = arActive;

          let arConfirmed = data.statewise[i].confirmed;
          document.getElementById("arConfirmed").innerHTML = arConfirmed;

          let arRecovered = data.statewise[i].recovered;
          document.getElementById("arRecovered").innerHTML = arRecovered;

          let arDeceased = data.statewise[i].deaths;
          document.getElementById("arDeceased").innerHTML = arDeceased;
        }
        if (data.statewise[i].statecode == "ML") {
          let meghalayaUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "meghalayaUpdate"
          ).innerHTML = meghalayaUpdate;

          let meghalayaState = data.statewise[i].state;
          document.getElementById("meghalayaState").innerHTML = meghalayaState;

          let meghalayaActive = data.statewise[i].active;
          document.getElementById(
            "meghalayaActive"
          ).innerHTML = meghalayaActive;

          let meghalayaConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "meghalayaConfirmed"
          ).innerHTML = meghalayaConfirmed;

          let meghalayaRecovered = data.statewise[i].recovered;
          document.getElementById(
            "meghalayaRecovered"
          ).innerHTML = meghalayaRecovered;

          let meghalayaDeceased = data.statewise[i].deaths;
          document.getElementById(
            "meghalayaDeceased"
          ).innerHTML = meghalayaDeceased;
        }
        if (data.statewise[i].statecode == "NL") {
          let nagalandUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("nagalandUpdate").innerHTML = nagalandUpdate;

          let nagalandState = data.statewise[i].state;
          document.getElementById("nagalandState").innerHTML = nagalandState;

          let nagalandActive = data.statewise[i].active;
          document.getElementById("nagalandActive").innerHTML = nagalandActive;

          let nagalandConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "nagalandConfirmed"
          ).innerHTML = nagalandConfirmed;

          let nagalandRecovered = data.statewise[i].recovered;
          document.getElementById(
            "nagalandRecovered"
          ).innerHTML = nagalandRecovered;

          let nagalandDeceased = data.statewise[i].deaths;
          document.getElementById(
            "nagalandDeceased"
          ).innerHTML = nagalandDeceased;
        }
        if (data.statewise[i].statecode == "LA") {
          let ladakhUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("ladakhUpdate").innerHTML = ladakhUpdate;

          let ladakhState = data.statewise[i].state;
          document.getElementById("ladakhState").innerHTML = ladakhState;

          let ladakhActive = data.statewise[i].active;
          document.getElementById("ladakhActive").innerHTML = ladakhActive;

          let ladakhConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "ladakhConfirmed"
          ).innerHTML = ladakhConfirmed;

          let ladakhRecovered = data.statewise[i].recovered;
          document.getElementById(
            "ladakhRecovered"
          ).innerHTML = ladakhRecovered;

          let ladakhDeceased = data.statewise[i].deaths;
          document.getElementById("ladakhDeceased").innerHTML = ladakhDeceased;
        }
        if (data.statewise[i].statecode == "AN") {
          let anUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("anUpdate").innerHTML = anUpdate;

          let anState = data.statewise[i].state;
          document.getElementById("anState").innerHTML = anState;

          let anActive = data.statewise[i].active;
          document.getElementById("anActive").innerHTML = anActive;
          
          

          let anConfirmed = data.statewise[i].confirmed;
          document.getElementById("anConfirmed").innerHTML = anConfirmed;

          let anRecovered = data.statewise[i].recovered;
          document.getElementById("anRecovered").innerHTML = anRecovered;

          let anDeceased = data.statewise[i].deaths;
          document.getElementById("anDeceased").innerHTML = anDeceased;
        }
        if (data.statewise[i].statecode == "DN") {
          let dnUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("dnUpdate").innerHTML = dnUpdate;

          let dnState = data.statewise[i].state;
          document.getElementById("dnState").innerHTML = dnState;

          let dnActive = data.statewise[i].active;
          document.getElementById("dnActive").innerHTML = dnActive;

          let dnConfirmed = data.statewise[i].confirmed;
          document.getElementById("dnConfirmed").innerHTML = dnConfirmed;

          let dnRecovered = data.statewise[i].recovered;
          document.getElementById("dnRecovered").innerHTML = dnRecovered;

          let dnDeceased = data.statewise[i].deaths;
          document.getElementById("dnDeceased").innerHTML = dnDeceased;
        }
        if (data.statewise[i].statecode == "SK") {
          let sikkimUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("sikkimUpdate").innerHTML = sikkimUpdate;

          let sikkimState = data.statewise[i].state;
          document.getElementById("sikkimState").innerHTML = sikkimState;

          let sikkimActive = data.statewise[i].active;
          document.getElementById("sikkimActive").innerHTML = sikkimActive;

          let sikkimConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "sikkimConfirmed"
          ).innerHTML = sikkimConfirmed;

          let sikkimRecovered = data.statewise[i].recovered;
          document.getElementById(
            "sikkimRecovered"
          ).innerHTML = sikkimRecovered;

          let sikkimDeceased = data.statewise[i].deaths;
          document.getElementById("sikkimDeceased").innerHTML = sikkimDeceased;
        }
        if (data.statewise[i].statecode == "MZ") {
          let mizoramUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById("mizoramUpdate").innerHTML = mizoramUpdate;

          let mizoramState = data.statewise[i].state;
          document.getElementById("mizoramState").innerHTML = mizoramState;

          let mizoramActive = data.statewise[i].active;
          document.getElementById("mizoramActive").innerHTML = mizoramActive;

          let mizoramConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "mizoramConfirmed"
          ).innerHTML = mizoramConfirmed;

          let mizoramRecovered = data.statewise[i].recovered;
          document.getElementById(
            "mizoramRecovered"
          ).innerHTML = mizoramRecovered;

          let mizoramDeceased = data.statewise[i].deaths;
          document.getElementById(
            "mizoramDeceased"
          ).innerHTML = mizoramDeceased;
        }
        if (data.statewise[i].statecode == "LD") {
          let lakshadweepUpdate = data.statewise[i].lastupdatedtime;
          document.getElementById(
            "lakshadweepUpdate"
          ).innerHTML = lakshadweepUpdate;

          let lakshadweepState = data.statewise[i].state;
          document.getElementById(
            "lakshadweepState"
          ).innerHTML = lakshadweepState;

          let lakshadweepActive = data.statewise[i].active;
          document.getElementById(
            "lakshadweepActive"
          ).innerHTML = lakshadweepActive;

          let lakshadweepConfirmed = data.statewise[i].confirmed;
          document.getElementById(
            "lakshadweepConfirmed"
          ).innerHTML = lakshadweepConfirmed;

          let lakshadweepRecovered = data.statewise[i].recovered;
          document.getElementById(
            "lakshadweepRecovered"
          ).innerHTML = lakshadweepRecovered;

          let lakshadweepDeceased = data.statewise[i].deaths;
          document.getElementById(
            "lakshadweepDeceased"
          ).innerHTML = lakshadweepDeceased;
        }
      }
    }).then(function (data) {
      document.getElementById("loading").style.display = 'none';
    })
    .catch(function () {
      console.log("error");
    });

