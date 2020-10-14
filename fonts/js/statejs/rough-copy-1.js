function allStatesCounter() {
  fetch("https://api.covid19india.org/data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.statewise.length; i++) {
        if (data.statewise[i].statecode == "MH") {
          let mahaCon = data.statewise[i].confirmed;
          document.getElementById("mahaCon").innerHTML = mahaCon;

          let maharastraActive = data.statewise[i].active;
          document.getElementById("mahaAct").innerHTML = maharastraActive;

          let maharastraRecovered = data.statewise[i].recovered;
          document.getElementById("mahaRec").innerHTML = maharastraRecovered;

          let maharastraDeceased = data.statewise[i].deaths;
          document.getElementById("mahaDec").innerHTML = maharastraDeceased;
        }
        if (data.statewise[i].statecode == "AP") {
          let apCon = data.statewise[i].confirmed;
          document.getElementById("apCon").innerHTML = apCon;

          let apAct = data.statewise[i].active;
          document.getElementById("apAct").innerHTML = apAct;

          let apRec = data.statewise[i].recovered;
          document.getElementById("apRec").innerHTML = apRec;

          let apDec = data.statewise[i].deaths;
          document.getElementById("apDec").innerHTML = apDec;
        }
        if (data.statewise[i].statecode == "KA") {
          let karCon = data.statewise[i].confirmed;
          document.getElementById("karCon").innerHTML = karCon;

          let karAct = data.statewise[i].active;
          document.getElementById("karAct").innerHTML = karAct;

          let karRec = data.statewise[i].recovered;
          document.getElementById("karRec").innerHTML = karRec;

          let karDec = data.statewise[i].deaths;
          document.getElementById("karDec").innerHTML = karDec;
        }
        if (data.statewise[i].statecode == "TN") {
          console.log(data.statewise[i].state);
          let tamilCon = data.statewise[i].confirmed;
          document.getElementById("tamilCon").innerHTML = tamilCon;

          let tamilAct = data.statewise[i].active;
          document.getElementById("tamilAct").innerHTML = tamilAct;

          let tamilRec = data.statewise[i].recovered;
          document.getElementById("tamilRec").innerHTML = tamilRec;

          let tamilDec = data.statewise[i].deaths;
          document.getElementById("tamilDec").innerHTML = tamilDec;
        }
        if (data.statewise[i].statecode == "UP") {
          let upAct = data.statewise[i].active;
          document.getElementById("upAct").innerHTML = upAct;

          let upCon = data.statewise[i].confirmed;
          document.getElementById("upCon").innerHTML = upCon;

          let upRec = data.statewise[i].recovered;
          document.getElementById("upRec").innerHTML = upRec;

          let upDec = data.statewise[i].deaths;
          document.getElementById("upDec").innerHTML = upDec;
        }
        if (data.statewise[i].statecode == "DL") {
          let delCon = data.statewise[i].confirmed;
          document.getElementById("delCon").innerHTML = delCon;

          let delAct = data.statewise[i].active;
          document.getElementById("delAct").innerHTML = delAct;

          let delRec = data.statewise[i].recovered;
          document.getElementById("delRec").innerHTML = delRec;

          let delDec = data.statewise[i].deaths;
          document.getElementById("delDec").innerHTML = delDec;
        }
        if (data.statewise[i].statecode == "WB") {
          let wbAct = data.statewise[i].active;
          document.getElementById("wbAct").innerHTML = wbAct;

          let wbCon = data.statewise[i].confirmed;
          document.getElementById("wbCon").innerHTML = wbCon;

          let wbRec = data.statewise[i].recovered;
          document.getElementById("wbRec").innerHTML = wbRec;

          let wbDec = data.statewise[i].deaths;
          document.getElementById("wbDec").innerHTML = wbDec;
        }
        if (data.statewise[i].statecode == "OR") {
          let odiAct = data.statewise[i].active;
          document.getElementById("odiAct").innerHTML = odiAct;

          let odiCon = data.statewise[i].confirmed;
          document.getElementById("odiCon").innerHTML = odiCon;

          let odiRec = data.statewise[i].recovered;
          document.getElementById("odiRec").innerHTML = odiRec;

          let odiDec = data.statewise[i].deaths;
          document.getElementById("odiDec").innerHTML = odiDec;
        }
        if (data.statewise[i].statecode == "KL") {
          let kerAct = data.statewise[i].active;
          document.getElementById("kerAct").innerHTML = kerAct;

          let kerCon = data.statewise[i].confirmed;
          document.getElementById("kerCon").innerHTML = kerCon;

          let kerRec = data.statewise[i].recovered;
          document.getElementById("kerRec").innerHTML = kerRec;

          let kerDec = data.statewise[i].deaths;
          document.getElementById("kerDec").innerHTML = kerDec;
        }
        if (data.statewise[i].statecode == "TG") {
          let telAct = data.statewise[i].active;
          document.getElementById("telAct").innerHTML = telAct;

          let telCon = data.statewise[i].confirmed;
          document.getElementById("telCon").innerHTML = telCon;

          let telRec = data.statewise[i].recovered;
          document.getElementById("telRec").innerHTML = telRec;

          let telDec = data.statewise[i].deaths;
          document.getElementById("telDec").innerHTML = telDec;
        }
        if (data.statewise[i].statecode == "BR") {
          let bihAct = data.statewise[i].active;
          document.getElementById("bihAct").innerHTML = bihAct;

          let bihCon = data.statewise[i].confirmed;
          document.getElementById("bihCon").innerHTML = bihCon;

          let bihRec = data.statewise[i].recovered;
          document.getElementById("bihRec").innerHTML = bihRec;

          let bihDec = data.statewise[i].deaths;
          document.getElementById("bihDec").innerHTML = bihDec;
        }
        if (data.statewise[i].statecode == "AS") {
          let assAct = data.statewise[i].active;
          document.getElementById("assAct").innerHTML = assAct;

          let assCon = data.statewise[i].confirmed;
          document.getElementById("assCon").innerHTML = assCon;

          let assRec = data.statewise[i].recovered;
          document.getElementById("assRec").innerHTML = assRec;

          let assDec = data.statewise[i].deaths;
          document.getElementById("assDec").innerHTML = assDec;
        }
        if (data.statewise[i].statecode == "GJ") {
          let gujAct = data.statewise[i].active;
          document.getElementById("gujAct").innerHTML = gujAct;

          let gujCon = data.statewise[i].confirmed;
          document.getElementById("gujCon").innerHTML = gujCon;

          let gujRec = data.statewise[i].recovered;
          document.getElementById("gujRec").innerHTML = gujRec;

          let gujDec = data.statewise[i].deaths;
          document.getElementById("gujDec").innerHTML = gujDec;
        }
        if (data.statewise[i].statecode == "RJ") {
          let rajAct = data.statewise[i].active;
          document.getElementById("rajAct").innerHTML = rajAct;

          let rajCon = data.statewise[i].confirmed;
          document.getElementById("rajCon").innerHTML = rajCon;

          let rajRec = data.statewise[i].recovered;
          document.getElementById("rajRec").innerHTML = rajRec;

          let rajDec = data.statewise[i].deaths;
          document.getElementById("rajDec").innerHTML = rajDec;
        }
        if (data.statewise[i].statecode == "MP") {
          let mpAct = data.statewise[i].active;
          document.getElementById("mpAct").innerHTML = mpAct;

          let mpCon = data.statewise[i].confirmed;
          document.getElementById("mpCon").innerHTML = mpCon;

          let mpRec = data.statewise[i].recovered;
          document.getElementById("mpRec").innerHTML = mpRec;

          let mpDec = data.statewise[i].deaths;
          document.getElementById("mpDec").innerHTML = mpDec;
        }
        if (data.statewise[i].statecode == "HR") {
          let harAct = data.statewise[i].active;
          document.getElementById("harAct").innerHTML = harAct;

          let harCon = data.statewise[i].confirmed;
          document.getElementById("harCon").innerHTML = harCon;

          let harRec = data.statewise[i].recovered;
          document.getElementById("harRec").innerHTML = harRec;

          let harDec = data.statewise[i].deaths;
          document.getElementById("harDec").innerHTML = harDec;
        }
        if (data.statewise[i].statecode == "CT") {
          let ctAct = data.statewise[i].active;
          document.getElementById("ctAct").innerHTML = ctAct;

          let ctCon = data.statewise[i].confirmed;
          document.getElementById("ctCon").innerHTML = ctCon;

          let ctRec = data.statewise[i].recovered;
          document.getElementById("ctRec").innerHTML = ctRec;

          let ctDec = data.statewise[i].deaths;
          document.getElementById("ctDec").innerHTML = ctDec;
        }
        if (data.statewise[i].statecode == "PB") {
          let punAct = data.statewise[i].active;
          document.getElementById("punAct").innerHTML = punAct;

          let punCon = data.statewise[i].confirmed;
          document.getElementById("punCon").innerHTML = punCon;

          let punRec = data.statewise[i].recovered;
          document.getElementById("punRec").innerHTML = punRec;

          let punDec = data.statewise[i].deaths;
          document.getElementById("punDec").innerHTML = punDec;
        }
        if (data.statewise[i].statecode == "JH") {
          let jhAct = data.statewise[i].active;
          document.getElementById("jhAct").innerHTML = jhAct;

          let jhCon = data.statewise[i].confirmed;
          document.getElementById("jhCon").innerHTML = jhCon;

          let jhRec = data.statewise[i].recovered;
          document.getElementById("jhRec").innerHTML = jhRec;

          let jhDec = data.statewise[i].deaths;
          document.getElementById("jhDec").innerHTML = jhDec;
        }
        if (data.statewise[i].statecode == "JK") {
          let jkAct = data.statewise[i].active;
          document.getElementById("jkAct").innerHTML = jkAct;

          let jkCon = data.statewise[i].confirmed;
          document.getElementById("jkCon").innerHTML = jkCon;

          let jkRec = data.statewise[i].recovered;
          document.getElementById("jkRec").innerHTML = jkRec;

          let jkDec = data.statewise[i].deaths;
          document.getElementById("jkDec").innerHTML = jkDec;
        }
        if (data.statewise[i].statecode == "UT") {
          let uttAct = data.statewise[i].active;
          document.getElementById("uttAct").innerHTML = uttAct;

          let uttCon = data.statewise[i].confirmed;
          document.getElementById("uttCon").innerHTML = uttCon;

          let uttRec = data.statewise[i].recovered;
          document.getElementById("uttRec").innerHTML = uttRec;

          let uttDec = data.statewise[i].deaths;
          document.getElementById("uttDec").innerHTML = uttDec;
        }
        if (data.statewise[i].statecode == "GA") {
          let goaAct = data.statewise[i].active;
          document.getElementById("goaAct").innerHTML = goaAct;

          let goaCon = data.statewise[i].confirmed;
          document.getElementById("goaCon").innerHTML = goaCon;

          let goaRec = data.statewise[i].recovered;
          document.getElementById("goaRec").innerHTML = goaRec;

          let goaDec = data.statewise[i].deaths;
          document.getElementById("goaDec").innerHTML = goaDec;
        }
        if (data.statewise[i].statecode == "PY") {
          let pudAct = data.statewise[i].active;
          document.getElementById("pudAct").innerHTML = pudAct;

          let pudCon = data.statewise[i].confirmed;
          document.getElementById("pudCon").innerHTML = pudCon;

          let pudRec = data.statewise[i].recovered;
          document.getElementById("pudRec").innerHTML = pudRec;

          let pudDec = data.statewise[i].deaths;
          document.getElementById("pudDec").innerHTML = pudDec;
        }
        if (data.statewise[i].statecode == "TR") {
          let triAct = data.statewise[i].active;
          document.getElementById("triAct").innerHTML = triAct;

          let triCon = data.statewise[i].confirmed;
          document.getElementById("triCon").innerHTML = triCon;

          let triRec = data.statewise[i].recovered;
          document.getElementById("triRec").innerHTML = triRec;

          let triDec = data.statewise[i].deaths;
          document.getElementById("triDec").innerHTML = triDec;
        }
        if (data.statewise[i].statecode == "HP") {
          let hpAct = data.statewise[i].active;
          document.getElementById("hpAct").innerHTML = hpAct;

          let hpCon = data.statewise[i].confirmed;
          document.getElementById("hpCon").innerHTML = hpCon;

          let hpRec = data.statewise[i].recovered;
          document.getElementById("hpRec").innerHTML = hpRec;

          let hpDec = data.statewise[i].deaths;
          document.getElementById("hpDec").innerHTML = hpDec;
        }
        if (data.statewise[i].statecode == "CH") {
          let chaAct = data.statewise[i].active;
          document.getElementById("chaAct").innerHTML = chaAct;

          let chaCon = data.statewise[i].confirmed;
          document.getElementById("chaCon").innerHTML = chaCon;

          let chaRec = data.statewise[i].recovered;
          document.getElementById("chaRec").innerHTML = chaRec;

          let chaDec = data.statewise[i].deaths;
          document.getElementById("chaDec").innerHTML = chaDec;
        }
        if (data.statewise[i].statecode == "MN") {
          let manAct = data.statewise[i].active;
          document.getElementById("manAct").innerHTML = manAct;

          let manCon = data.statewise[i].confirmed;
          document.getElementById("manCon").innerHTML = manCon;

          let manRec = data.statewise[i].recovered;
          document.getElementById("manRec").innerHTML = manRec;

          let manDec = data.statewise[i].deaths;
          document.getElementById("manDec").innerHTML = manDec;
        }
        if (data.statewise[i].statecode == "AR") {
          let arAct = data.statewise[i].active;
          document.getElementById("arAct").innerHTML = arAct;

          let arCon = data.statewise[i].confirmed;
          document.getElementById("arCon").innerHTML = arCon;

          let arRec = data.statewise[i].recovered;
          document.getElementById("arRec").innerHTML = arRec;

          let arDec = data.statewise[i].deaths;
          document.getElementById("arDec").innerHTML = arDec;
        }
        if (data.statewise[i].statecode == "ML") {
          let megAct = data.statewise[i].active;
          document.getElementById("megAct").innerHTML = megAct;

          let megCon = data.statewise[i].confirmed;
          document.getElementById("megCon").innerHTML = megCon;

          let megRec = data.statewise[i].recovered;
          document.getElementById("megRec").innerHTML = megRec;

          let megDec = data.statewise[i].deaths;
          document.getElementById("megDec").innerHTML = megDec;
        }
        if (data.statewise[i].statecode == "NL") {
          let nagAct = data.statewise[i].active;
          document.getElementById("nagAct").innerHTML = nagAct;

          let nagCon = data.statewise[i].confirmed;
          document.getElementById("nagCon").innerHTML = nagCon;

          let nagRec = data.statewise[i].recovered;
          document.getElementById("nagRec").innerHTML = nagRec;

          let nagDec = data.statewise[i].deaths;
          document.getElementById("nagDec").innerHTML = nagDec;
        }
        if (data.statewise[i].statecode == "LA") {
          let ladAct = data.statewise[i].active;
          document.getElementById("ladAct").innerHTML = ladAct;

          let ladCon = data.statewise[i].confirmed;
          document.getElementById("ladCon").innerHTML = ladCon;

          let ladRec = data.statewise[i].recovered;
          document.getElementById("ladRec").innerHTML = ladRec;

          let ladDec = data.statewise[i].deaths;
          document.getElementById("ladDec").innerHTML = ladDec;
        }
        if (data.statewise[i].statecode == "AN") {
          let anAct = data.statewise[i].active;
          document.getElementById("anAct").innerHTML = anAct;

          let anCon = data.statewise[i].confirmed;
          document.getElementById("anCon").innerHTML = anCon;

          let anRec = data.statewise[i].recovered;
          document.getElementById("anRec").innerHTML = anRec;

          let anDec = data.statewise[i].deaths;
          document.getElementById("anDec").innerHTML = anDec;
        }
        if (data.statewise[i].statecode == "DN") {
          let dnAct = data.statewise[i].active;
          document.getElementById("dnAct").innerHTML = dnAct;

          let dnCon = data.statewise[i].confirmed;
          document.getElementById("dnCon").innerHTML = dnCon;

          let dnRec = data.statewise[i].recovered;
          document.getElementById("dnRec").innerHTML = dnRec;

          let dnDec = data.statewise[i].deaths;
          document.getElementById("dnDec").innerHTML = dnDec;
        }
        if (data.statewise[i].statecode == "SK") {
          let sikAct = data.statewise[i].active;
          document.getElementById("sikAct").innerHTML = sikAct;

          let sikCon = data.statewise[i].confirmed;
          document.getElementById("sikCon").innerHTML = sikCon;

          let sikRec = data.statewise[i].recovered;
          document.getElementById("sikRec").innerHTML = sikRec;

          let sikDec = data.statewise[i].deaths;
          document.getElementById("sikDec").innerHTML = sikDec;
        }
        if (data.statewise[i].statecode == "MZ") {
          let mizAct = data.statewise[i].active;
          document.getElementById("mizAct").innerHTML = mizAct;

          let mizCon = data.statewise[i].confirmed;
          document.getElementById("mizCon").innerHTML = mizCon;

          let mizRec = data.statewise[i].recovered;
          document.getElementById("mizRec").innerHTML = mizRec;

          let mizDec = data.statewise[i].deaths;
          document.getElementById("mizDec").innerHTML = mizDec;
        }
        if (data.statewise[i].statecode == "LD") {
          let ldAct = data.statewise[i].active;
          document.getElementById("ldAct").innerHTML = ldAct;

          let ldCon = data.statewise[i].confirmed;
          document.getElementById("ldCon").innerHTML = ldCon;

          let ldRec = data.statewise[i].recovered;
          document.getElementById("ldRec").innerHTML = ldRec;

          let ldDec = data.statewise[i].deaths;
          document.getElementById("ldDec").innerHTML = ldDec;
        }
      }
    })
    .catch(function () {
      console.log("error");
    });
}
