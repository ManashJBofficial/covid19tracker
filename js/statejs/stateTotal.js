function maharastra() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let mahaCon = data.statewise[1].confirmed;
      document.getElementById("mahaCon").innerHTML = mahaCon;

      let maharastraActive = data.statewise[1].active;
      document.getElementById("mahaAct").innerHTML = maharastraActive;

      let maharastraRecovered = data.statewise[1].recovered;
      document.getElementById("mahaRec").innerHTML = maharastraRecovered;

      let maharastraDeceased = data.statewise[1].deaths;
      document.getElementById("mahaDec").innerHTML = maharastraDeceased;
    })
    .catch(function () {
      console.log("error");
    });
}

function tamilNadu() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let tamilCon = data.statewise[3].confirmed;
      document.getElementById("tamilCon").innerHTML = tamilCon;

      let tamilAct = data.statewise[3].active;
      document.getElementById("tamilAct").innerHTML = tamilAct;

      let tamilRec = data.statewise[3].recovered;
      document.getElementById("tamilRec").innerHTML = tamilRec;

      let tamilDec = data.statewise[3].deaths;
      document.getElementById("tamilDec").innerHTML = tamilDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function delhi() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let delCon = data.statewise[6].confirmed;
      document.getElementById("delCon").innerHTML = delCon;

      let delAct = data.statewise[6].active;
      document.getElementById("delAct").innerHTML = delAct;

      let delRec = data.statewise[6].recovered;
      document.getElementById("delRec").innerHTML = delRec;

      let delDec = data.statewise[6].deaths;
      document.getElementById("delDec").innerHTML = delDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function karnataka() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let karCon = data.statewise[4].confirmed;
      document.getElementById("karCon").innerHTML = karCon;

      let karAct = data.statewise[4].active;
      document.getElementById("karAct").innerHTML = karAct;

      let karRec = data.statewise[4].recovered;
      document.getElementById("karRec").innerHTML = karRec;

      let karDec = data.statewise[4].deaths;
      document.getElementById("karDec").innerHTML = karDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function ap() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let apCon = data.statewise[2].confirmed;
      document.getElementById("apCon").innerHTML = apCon;

      let apAct = data.statewise[2].active;
      document.getElementById("apAct").innerHTML = apAct;

      let apRec = data.statewise[2].recovered;
      document.getElementById("apRec").innerHTML = apRec;

      let apDec = data.statewise[2].deaths;
      document.getElementById("apDec").innerHTML = apDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function up() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let upAct = data.statewise[5].active;
      document.getElementById("upAct").innerHTML = upAct;

      let upCon = data.statewise[5].confirmed;
      document.getElementById("upCon").innerHTML = upCon;

      let upRec = data.statewise[5].recovered;
      document.getElementById("upRec").innerHTML = upRec;

      let upDec = data.statewise[5].deaths;
      document.getElementById("upDec").innerHTML = upDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function gujarat() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let gujAct = data.statewise[13].active;
      document.getElementById("gujAct").innerHTML = gujAct;

      let gujCon = data.statewise[13].confirmed;
      document.getElementById("gujCon").innerHTML = gujCon;

      let gujRec = data.statewise[13].recovered;
      document.getElementById("gujRec").innerHTML = gujRec;

      let gujDec = data.statewise[13].deaths;
      document.getElementById("gujDec").innerHTML = gujDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function wb() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let wbAct = data.statewise[7].active;
      document.getElementById("wbAct").innerHTML = wbAct;

      let wbCon = data.statewise[7].confirmed;
      document.getElementById("wbCon").innerHTML = wbCon;

      let wbRec = data.statewise[7].recovered;
      document.getElementById("wbRec").innerHTML = wbRec;

      let wbDec = data.statewise[7].deaths;
      document.getElementById("wbDec").innerHTML = wbDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function telangana() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let telAct = data.statewise[9].active;
      document.getElementById("telAct").innerHTML = telAct;

      let telCon = data.statewise[9].confirmed;
      document.getElementById("telCon").innerHTML = telCon;

      let telRec = data.statewise[9].recovered;
      document.getElementById("telRec").innerHTML = telRec;

      let telDec = data.statewise[9].deaths;
      document.getElementById("telDec").innerHTML = telDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function rajasthan() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let rajAct = data.statewise[14].active;
      document.getElementById("rajAct").innerHTML = rajAct;

      let rajCon = data.statewise[14].confirmed;
      document.getElementById("rajCon").innerHTML = rajCon;

      let rajRec = data.statewise[14].recovered;
      document.getElementById("rajRec").innerHTML = rajRec;

      let rajDec = data.statewise[14].deaths;
      document.getElementById("rajDec").innerHTML = rajDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function bihar() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let bihAct = data.statewise[10].active;
      document.getElementById("bihAct").innerHTML = bihAct;

      let bihCon = data.statewise[10].confirmed;
      document.getElementById("bihCon").innerHTML = bihCon;

      let bihRec = data.statewise[10].recovered;
      document.getElementById("bihRec").innerHTML = bihRec;

      let bihDec = data.statewise[10].deaths;
      document.getElementById("bihDec").innerHTML = bihDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function haryana() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let harAct = data.statewise[15].active;
      document.getElementById("harAct").innerHTML = harAct;

      let harCon = data.statewise[15].confirmed;
      document.getElementById("harCon").innerHTML = harCon;

      let harRec = data.statewise[15].recovered;
      document.getElementById("harRec").innerHTML = harRec;

      let harDec = data.statewise[15].deaths;
      document.getElementById("harDec").innerHTML = harDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function assam() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let assAct = data.statewise[11].active;
      document.getElementById("assAct").innerHTML = assAct;

      let assCon = data.statewise[11].confirmed;
      document.getElementById("assCon").innerHTML = assCon;

      let assRec = data.statewise[11].recovered;
      document.getElementById("assRec").innerHTML = assRec;

      let assDec = data.statewise[11].deaths;
      document.getElementById("assDec").innerHTML = assDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function mp() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let mpAct = data.statewise[16].active;
      document.getElementById("mpAct").innerHTML = mpAct;

      let mpCon = data.statewise[16].confirmed;
      document.getElementById("mpCon").innerHTML = mpCon;

      let mpRec = data.statewise[16].recovered;
      document.getElementById("mpRec").innerHTML = mpRec;

      let mpDec = data.statewise[16].deaths;
      document.getElementById("mpDec").innerHTML = mpDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function odisha() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let odiAct = data.statewise[8].active;
      document.getElementById("odiAct").innerHTML = odiAct;

      let odiCon = data.statewise[8].confirmed;
      document.getElementById("odiCon").innerHTML = odiCon;

      let odiRec = data.statewise[8].recovered;
      document.getElementById("odiRec").innerHTML = odiRec;

      let odiDec = data.statewise[8].deaths;
      document.getElementById("odiDec").innerHTML = odiDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function jk() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let jkAct = data.statewise[20].active;
      document.getElementById("jkAct").innerHTML = jkAct;

      let jkCon = data.statewise[20].confirmed;
      document.getElementById("jkCon").innerHTML = jkCon;

      let jkRec = data.statewise[20].recovered;
      document.getElementById("jkRec").innerHTML = jkRec;

      let jkDec = data.statewise[20].deaths;
      document.getElementById("jkDec").innerHTML = jkDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function kerala() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let kerAct = data.statewise[12].active;
      document.getElementById("kerAct").innerHTML = kerAct;

      let kerCon = data.statewise[12].confirmed;
      document.getElementById("kerCon").innerHTML = kerCon;

      let kerRec = data.statewise[12].recovered;
      document.getElementById("kerRec").innerHTML = kerRec;

      let kerDec = data.statewise[12].deaths;
      document.getElementById("kerDec").innerHTML = kerDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function punjab() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let punAct = data.statewise[17].active;
      document.getElementById("punAct").innerHTML = punAct;

      let punCon = data.statewise[17].confirmed;
      document.getElementById("punCon").innerHTML = punCon;

      let punRec = data.statewise[17].recovered;
      document.getElementById("punRec").innerHTML = punRec;

      let punDec = data.statewise[17].deaths;
      document.getElementById("punDec").innerHTML = punDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function jharkhand() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let jhAct = data.statewise[19].active;
      document.getElementById("jhAct").innerHTML = jhAct;

      let jhCon = data.statewise[19].confirmed;
      document.getElementById("jhCon").innerHTML = jhCon;

      let jhRec = data.statewise[19].recovered;
      document.getElementById("jhRec").innerHTML = jhRec;

      let jhDec = data.statewise[19].deaths;
      document.getElementById("jhDec").innerHTML = jhDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function ct() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let ctAct = data.statewise[18].active;
      document.getElementById("ctAct").innerHTML = ctAct;

      let ctCon = data.statewise[18].confirmed;
      document.getElementById("ctCon").innerHTML = ctCon;

      let ctRec = data.statewise[18].recovered;
      document.getElementById("ctRec").innerHTML = ctRec;

      let ctDec = data.statewise[18].deaths;
      document.getElementById("ctDec").innerHTML = ctDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function uttarakhand() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let uttAct = data.statewise[21].active;
      document.getElementById("uttAct").innerHTML = uttAct;

      let uttCon = data.statewise[21].confirmed;
      document.getElementById("uttCon").innerHTML = uttCon;

      let uttRec = data.statewise[21].recovered;
      document.getElementById("uttRec").innerHTML = uttRec;

      let uttDec = data.statewise[21].deaths;
      document.getElementById("uttDec").innerHTML = uttDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function goa() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let goaAct = data.statewise[22].active;
      document.getElementById("goaAct").innerHTML = goaAct;

      let goaCon = data.statewise[22].confirmed;
      document.getElementById("goaCon").innerHTML = goaCon;

      let goaRec = data.statewise[22].recovered;
      document.getElementById("goaRec").innerHTML = goaRec;

      let goaDec = data.statewise[22].deaths;
      document.getElementById("goaDec").innerHTML = goaDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function tripura() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let triAct = data.statewise[24].active;
      document.getElementById("triAct").innerHTML = triAct;

      let triCon = data.statewise[24].confirmed;
      document.getElementById("triCon").innerHTML = triCon;

      let triRec = data.statewise[24].recovered;
      document.getElementById("triRec").innerHTML = triRec;

      let triDec = data.statewise[24].deaths;
      document.getElementById("triDec").innerHTML = triDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function puducherry() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let pudAct = data.statewise[23].active;
      document.getElementById("pudAct").innerHTML = pudAct;

      let pudCon = data.statewise[23].confirmed;
      document.getElementById("pudCon").innerHTML = pudCon;

      let pudRec = data.statewise[23].recovered;
      document.getElementById("pudRec").innerHTML = pudRec;

      let pudDec = data.statewise[23].deaths;
      document.getElementById("pudDec").innerHTML = pudDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function manipur() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let manAct = data.statewise[27].active;
      document.getElementById("manAct").innerHTML = manAct;

      let manCon = data.statewise[27].confirmed;
      document.getElementById("manCon").innerHTML = manCon;

      let manRec = data.statewise[27].recovered;
      document.getElementById("manRec").innerHTML = manRec;

      let manDec = data.statewise[27].deaths;
      document.getElementById("manDec").innerHTML = manDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function hp() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let hpAct = data.statewise[25].active;
      document.getElementById("hpAct").innerHTML = hpAct;

      let hpCon = data.statewise[25].confirmed;
      document.getElementById("hpCon").innerHTML = hpCon;

      let hpRec = data.statewise[25].recovered;
      document.getElementById("hpRec").innerHTML = hpRec;

      let hpDec = data.statewise[25].deaths;
      document.getElementById("hpDec").innerHTML = hpDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function ladakh() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let ladAct = data.statewise[31].active;
      document.getElementById("ladAct").innerHTML = ladAct;

      let ladCon = data.statewise[31].confirmed;
      document.getElementById("ladCon").innerHTML = ladCon;

      let ladRec = data.statewise[31].recovered;
      document.getElementById("ladRec").innerHTML = ladRec;

      let ladDec = data.statewise[31].deaths;
      document.getElementById("ladDec").innerHTML = ladDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function nagaland() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let nagAct = data.statewise[29].active;
      document.getElementById("nagAct").innerHTML = nagAct;

      let nagCon = data.statewise[29].confirmed;
      document.getElementById("nagCon").innerHTML = nagCon;

      let nagRec = data.statewise[29].recovered;
      document.getElementById("nagRec").innerHTML = nagRec;

      let nagDec = data.statewise[29].deaths;
      document.getElementById("nagDec").innerHTML = nagDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function ar() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let arAct = data.statewise[28].active;
      document.getElementById("arAct").innerHTML = arAct;

      let arCon = data.statewise[28].confirmed;
      document.getElementById("arCon").innerHTML = arCon;

      let arRec = data.statewise[28].recovered;
      document.getElementById("arRec").innerHTML = arRec;

      let arDec = data.statewise[28].deaths;
      document.getElementById("arDec").innerHTML = arDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function chandigarh() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let chaAct = data.statewise[26].active;
      document.getElementById("chaAct").innerHTML = chaAct;

      let chaCon = data.statewise[26].confirmed;
      document.getElementById("chaCon").innerHTML = chaCon;

      let chaRec = data.statewise[26].recovered;
      document.getElementById("chaRec").innerHTML = chaRec;

      let chaDec = data.statewise[26].deaths;
      document.getElementById("chaDec").innerHTML = chaDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function dn() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let dnAct = data.statewise[33].active;
      document.getElementById("dnAct").innerHTML = dnAct;

      let dnCon = data.statewise[33].confirmed;
      document.getElementById("dnCon").innerHTML = dnCon;

      let dnRec = data.statewise[33].recovered;
      document.getElementById("dnRec").innerHTML = dnRec;

      let dnDec = data.statewise[33].deaths;
      document.getElementById("dnDec").innerHTML = dnDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function meghalaya() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let megAct = data.statewise[30].active;
      document.getElementById("megAct").innerHTML = megAct;

      let megCon = data.statewise[30].confirmed;
      document.getElementById("megCon").innerHTML = megCon;

      let megRec = data.statewise[30].recovered;
      document.getElementById("megRec").innerHTML = megRec;

      let megDec = data.statewise[30].deaths;
      document.getElementById("megDec").innerHTML = megDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function sikkim() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let sikAct = data.statewise[34].active;
      document.getElementById("sikAct").innerHTML = sikAct;

      let sikCon = data.statewise[34].confirmed;
      document.getElementById("sikCon").innerHTML = sikCon;

      let sikRec = data.statewise[34].recovered;
      document.getElementById("sikRec").innerHTML = sikRec;

      let sikDec = data.statewise[34].deaths;
      document.getElementById("sikDec").innerHTML = sikDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function mizoram() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let mizAct = data.statewise[35].active;
      document.getElementById("mizAct").innerHTML = mizAct;

      let mizCon = data.statewise[35].confirmed;
      document.getElementById("mizCon").innerHTML = mizCon;

      let mizRec = data.statewise[35].recovered;
      document.getElementById("mizRec").innerHTML = mizRec;

      let mizDec = data.statewise[35].deaths;
      document.getElementById("mizDec").innerHTML = mizDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function an() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let anAct = data.statewise[32].active;
      document.getElementById("anAct").innerHTML = anAct;

      let anCon = data.statewise[32].confirmed;
      document.getElementById("anCon").innerHTML = anCon;

      let anRec = data.statewise[32].recovered;
      document.getElementById("anRec").innerHTML = anRec;

      let anDec = data.statewise[32].deaths;
      document.getElementById("anDec").innerHTML = anDec;
    })
    .catch(function () {
      console.log("error");
    });
}

function lakshadweep() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let ldAct = data.statewise[37].active;
      document.getElementById("ldAct").innerHTML = ldAct;

      let ldCon = data.statewise[37].confirmed;
      document.getElementById("ldCon").innerHTML = ldCon;

      let ldRec = data.statewise[37].recovered;
      document.getElementById("ldRec").innerHTML = ldRec;

      let ldDec = data.statewise[37].deaths;
      document.getElementById("ldDec").innerHTML = ldDec;
    })
    .catch(function () {
      console.log("errorr");
    });
}
