function maharastra() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let maharastraUpdate = data.statewise[1].lastupdatedtime;
            document.getElementById('maharastraUpdate').innerHTML = maharastraUpdate;

            let maharastraState = data.statewise[1].state;
            document.getElementById('maharastraState').innerHTML = maharastraState;

            let maharastraActive = data.statewise[1].active;
            document.getElementById('maharastraActive').innerHTML = maharastraActive;

            let maharastraConfirmed = data.statewise[1].confirmed;
            document.getElementById('maharastraConfirmed').innerHTML = maharastraConfirmed;

            let maharastraRecovered = data.statewise[1].recovered;
            document.getElementById('maharastraRecovered').innerHTML = maharastraRecovered;

            let maharastraDeceased = data.statewise[1].deaths;
            document.getElementById('maharastraDeceased').innerHTML = maharastraDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function tamilNadu() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let tamilUpdate = data.statewise[2].lastupdatedtime;
            document.getElementById('tamilUpdate').innerHTML = tamilUpdate;

            let tamilState = data.statewise[2].state;
            document.getElementById('tamilState').innerHTML = tamilState;

            let tamilActive = data.statewise[2].active;
            document.getElementById('tamilActive').innerHTML = tamilActive;

            let tamilConfirmed = data.statewise[2].confirmed;
            document.getElementById('tamilConfirmed').innerHTML = tamilConfirmed;

            let tamilRecovered = data.statewise[2].recovered;
            document.getElementById('tamilRecovered').innerHTML = tamilRecovered;

            let tamilDeceased = data.statewise[2].deaths;
            document.getElementById('tamilDeceased').innerHTML = tamilDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function delhi() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let delhiUpdate = data.statewise[3].lastupdatedtime;
            document.getElementById('delhiUpdate').innerHTML = delhiUpdate;

            let delhiState = data.statewise[3].state;
            document.getElementById('delhiState').innerHTML = delhiState;

            let delhiActive = data.statewise[3].active;
            document.getElementById('delhiActive').innerHTML = delhiActive;

            let delhiConfirmed = data.statewise[3].confirmed;
            document.getElementById('delhiConfirmed').innerHTML = delhiConfirmed;

            let delhiRecovered = data.statewise[3].recovered;
            document.getElementById('delhiRecovered').innerHTML = delhiRecovered;

            let delhiDeceased = data.statewise[3].deaths;
            document.getElementById('delhiDeceased').innerHTML = delhiDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}


function karnataka() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let karnatakaUpdate = data.statewise[4].lastupdatedtime;
            document.getElementById('karnatakaUpdate').innerHTML = karnatakaUpdate;

            let karnatakaState = data.statewise[4].state;
            document.getElementById('karnatakaState').innerHTML = karnatakaState;

            let karnatakaActive = data.statewise[4].active;
            document.getElementById('karnatakaActive').innerHTML = karnatakaActive;

            let karnatakaConfirmed = data.statewise[4].confirmed;
            document.getElementById('karnatakaConfirmed').innerHTML = karnatakaConfirmed;

            let karnatakaRecovered = data.statewise[4].recovered;
            document.getElementById('karnatakaRecovered').innerHTML = karnatakaRecovered;

            let karnatakaDeceased = data.statewise[4].deaths;
            document.getElementById('karnatakaDeceased').innerHTML = karnatakaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function gujarat() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let gujaratUpdate = data.statewise[7].lastupdatedtime;
            document.getElementById('gujaratUpdate').innerHTML = gujaratUpdate;

            let gujaratState = data.statewise[7].state;
            document.getElementById('gujaratState').innerHTML = gujaratState;

            let gujaratActive = data.statewise[7].active;
            document.getElementById('gujaratActive').innerHTML = gujaratActive;

            let gujaratConfirmed = data.statewise[7].confirmed;
            document.getElementById('gujaratConfirmed').innerHTML = gujaratConfirmed;

            let gujaratRecovered = data.statewise[7].recovered;
            document.getElementById('gujaratRecovered').innerHTML = gujaratRecovered;

            let gujaratDeceased = data.statewise[7].deaths;
            document.getElementById('gujaratDeceased').innerHTML = gujaratDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}



function up() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let upUpdate = data.statewise[6].lastupdatedtime;
            document.getElementById('upUpdate').innerHTML = upUpdate;

            let upState = data.statewise[6].state;
            document.getElementById('upState').innerHTML = upState;

            let upActive = data.statewise[6].active;
            document.getElementById('upActive').innerHTML = upActive;

            let upConfirmed = data.statewise[6].confirmed;
            document.getElementById('upConfirmed').innerHTML = upConfirmed;

            let upRecovered = data.statewise[6].recovered;
            document.getElementById('upRecovered').innerHTML = upRecovered;

            let upDeceased = data.statewise[6].deaths;
            document.getElementById('upDeceased').innerHTML = upDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function telangana() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let telanganaUpdate = data.statewise[9].lastupdatedtime;
            document.getElementById('telanganaUpdate').innerHTML = telanganaUpdate;

            let telanganaState = data.statewise[9].state;
            document.getElementById('telanganaState').innerHTML = telanganaState;

            let telanganaActive = data.statewise[9].active;
            document.getElementById('telanganaActive').innerHTML = telanganaActive;

            let telanganaConfirmed = data.statewise[9].confirmed;
            document.getElementById('telanganaConfirmed').innerHTML = telanganaConfirmed;

            let telanganaRecovered = data.statewise[9].recovered;
            document.getElementById('telanganaRecovered').innerHTML = telanganaRecovered;

            let telanganaDeceased = data.statewise[9].deaths;
            document.getElementById('telanganaDeceased').innerHTML = telanganaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}


function ap() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let apUpdate = data.statewise[5].lastupdatedtime;
            document.getElementById('apUpdate').innerHTML = apUpdate;

            let apState = data.statewise[5].state;
            document.getElementById('apState').innerHTML = apState;

            let apActive = data.statewise[5].active;
            document.getElementById('apActive').innerHTML = apActive;

            let apConfirmed = data.statewise[5].confirmed;
            document.getElementById('apConfirmed').innerHTML = apConfirmed;

            let apRecovered = data.statewise[5].recovered;
            document.getElementById('apRecovered').innerHTML = apRecovered;

            let apDeceased = data.statewise[5].deaths;
            document.getElementById('apDeceased').innerHTML = apDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function wb() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let wbUpdate = data.statewise[8].lastupdatedtime;
            document.getElementById('wbUpdate').innerHTML = wbUpdate;

            let wbState = data.statewise[8].state;
            document.getElementById('wbState').innerHTML = wbState;

            let wbActive = data.statewise[8].active;
            document.getElementById('wbActive').innerHTML = wbActive;

            let wbConfirmed = data.statewise[8].confirmed;
            document.getElementById('wbConfirmed').innerHTML = wbConfirmed;

            let wbRecovered = data.statewise[8].recovered;
            document.getElementById('wbRecovered').innerHTML = wbRecovered;

            let wbDeceased = data.statewise[8].deaths;
            document.getElementById('wbDeceased').innerHTML = wbDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function rajasthan() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let rajasthanUpdate = data.statewise[10].lastupdatedtime;
            document.getElementById('rajasthanUpdate').innerHTML = rajasthanUpdate;

            let rajasthanState = data.statewise[10].state;
            document.getElementById('rajasthanState').innerHTML = rajasthanState;

            let rajasthanActive = data.statewise[10].active;
            document.getElementById('rajasthanActive').innerHTML = rajasthanActive;

            let rajasthanConfirmed = data.statewise[10].confirmed;
            document.getElementById('rajasthanConfirmed').innerHTML = rajasthanConfirmed;

            let rajasthanRecovered = data.statewise[10].recovered;
            document.getElementById('rajasthanRecovered').innerHTML = rajasthanRecovered;

            let rajasthanDeceased = data.statewise[10].deaths;
            document.getElementById('rajasthanDeceased').innerHTML = rajasthanDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function haryana() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let haryanaUpdate = data.statewise[12].lastupdatedtime;
            document.getElementById('haryanaUpdate').innerHTML = haryanaUpdate;

            let haryanaState = data.statewise[12].state;
            document.getElementById('haryanaState').innerHTML = haryanaState;

            let haryanaActive = data.statewise[12].active;
            document.getElementById('haryanaActive').innerHTML = haryanaActive;

            let haryanaConfirmed = data.statewise[12].confirmed;
            document.getElementById('haryanaConfirmed').innerHTML = haryanaConfirmed;

            let haryanaRecovered = data.statewise[12].recovered;
            document.getElementById('haryanaRecovered').innerHTML = haryanaRecovered;

            let haryanaDeceased = data.statewise[12].deaths;
            document.getElementById('haryanaDeceased').innerHTML = haryanaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function bihar() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let biharUpdate = data.statewise[11].lastupdatedtime;
            document.getElementById('biharUpdate').innerHTML = biharUpdate;

            let biharState = data.statewise[11].state;
            document.getElementById('biharState').innerHTML = biharState;

            let biharActive = data.statewise[11].active;
            document.getElementById('biharActive').innerHTML = biharActive;

            let biharConfirmed = data.statewise[11].confirmed;
            document.getElementById('biharConfirmed').innerHTML = biharConfirmed;

            let biharRecovered = data.statewise[11].recovered;
            document.getElementById('biharRecovered').innerHTML = biharRecovered;

            let biharDeceased = data.statewise[11].deaths;
            document.getElementById('biharDeceased').innerHTML = biharDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function mp() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let mpUpdate = data.statewise[14].lastupdatedtime;
            document.getElementById('mpUpdate').innerHTML = mpUpdate;

            let mpState = data.statewise[14].state;
            document.getElementById('mpState').innerHTML = mpState;

            let mpActive = data.statewise[14].active;
            document.getElementById('mpActive').innerHTML = mpActive;

            let mpConfirmed = data.statewise[14].confirmed;
            document.getElementById('mpConfirmed').innerHTML = mpConfirmed;

            let mpRecovered = data.statewise[14].recovered;
            document.getElementById('mpRecovered').innerHTML = mpRecovered;

            let mpDeceased = data.statewise[14].deaths;
            document.getElementById('mpDeceased').innerHTML = mpDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function assam() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let assamUpdate = data.statewise[13].lastupdatedtime;
            document.getElementById('assamUpdate').innerHTML = assamUpdate;

            let assamState = data.statewise[13].state;
            document.getElementById('assamState').innerHTML = assamState;

            let assamActive = data.statewise[13].active;
            document.getElementById('assamActive').innerHTML = assamActive;

            let assamConfirmed = data.statewise[13].confirmed;
            document.getElementById('assamConfirmed').innerHTML = assamConfirmed;

            let assamRecovered = data.statewise[13].recovered;
            document.getElementById('assamRecovered').innerHTML = assamRecovered;

            let assamDeceased = data.statewise[13].deaths;
            document.getElementById('assamDeceased').innerHTML = assamDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function odisha() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let odishaUpdate = data.statewise[15].lastupdatedtime;
            document.getElementById('odishaUpdate').innerHTML = odishaUpdate;

            let odishaState = data.statewise[15].state;
            document.getElementById('odishaState').innerHTML = odishaState;

            let odishaActive = data.statewise[15].active;
            document.getElementById('odishaActive').innerHTML = odishaActive;

            let odishaConfirmed = data.statewise[15].confirmed;
            document.getElementById('odishaConfirmed').innerHTML = odishaConfirmed;

            let odishaRecovered = data.statewise[15].recovered;
            document.getElementById('odishaRecovered').innerHTML = odishaRecovered;

            let odishaDeceased = data.statewise[15].deaths;
            document.getElementById('odishaDeceased').innerHTML = odishaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function jk() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let jkUpdate = data.statewise[16].lastupdatedtime;
            document.getElementById('jkUpdate').innerHTML = jkUpdate;

            let jkState = data.statewise[16].state;
            document.getElementById('jkState').innerHTML = jkState;

            let jkActive = data.statewise[16].active;
            document.getElementById('jkActive').innerHTML = jkActive;

            let jkConfirmed = data.statewise[16].confirmed;
            document.getElementById('jkConfirmed').innerHTML = jkConfirmed;

            let jkRecovered = data.statewise[16].recovered;
            document.getElementById('jkRecovered').innerHTML = jkRecovered;

            let jkDeceased = data.statewise[16].deaths;
            document.getElementById('jkDeceased').innerHTML = jkDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function punjab() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let punjabUpdate = data.statewise[18].lastupdatedtime;
            document.getElementById('punjabUpdate').innerHTML = punjabUpdate;

            let punjabState = data.statewise[18].state;
            document.getElementById('punjabState').innerHTML = punjabState;

            let punjabActive = data.statewise[18].active;
            document.getElementById('punjabActive').innerHTML = punjabActive;

            let punjabConfirmed = data.statewise[18].confirmed;
            document.getElementById('punjabConfirmed').innerHTML = punjabConfirmed;

            let punjabRecovered = data.statewise[18].recovered;
            document.getElementById('punjabRecovered').innerHTML = punjabRecovered;

            let punjabDeceased = data.statewise[18].deaths;
            document.getElementById('punjabDeceased').innerHTML = punjabDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function kerala() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let keralaUpdate = data.statewise[17].lastupdatedtime;
            document.getElementById('keralaUpdate').innerHTML = keralaUpdate;

            let keralaState = data.statewise[17].state;
            document.getElementById('keralaState').innerHTML = keralaState;

            let keralaActive = data.statewise[17].active;
            document.getElementById('keralaActive').innerHTML = keralaActive;

            let keralaConfirmed = data.statewise[17].confirmed;
            document.getElementById('keralaConfirmed').innerHTML = keralaConfirmed;

            let keralaRecovered = data.statewise[17].recovered;
            document.getElementById('keralaRecovered').innerHTML = keralaRecovered;

            let keralaDeceased = data.statewise[17].deaths;
            document.getElementById('keralaDeceased').innerHTML = keralaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function ct() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let ctUpdate = data.statewise[20].lastupdatedtime;
            document.getElementById('ctUpdate').innerHTML = ctUpdate;

            let ctState = data.statewise[20].state;
            document.getElementById('ctState').innerHTML = ctState;

            let ctActive = data.statewise[20].active;
            document.getElementById('ctActive').innerHTML = ctActive;

            let ctConfirmed = data.statewise[20].confirmed;
            document.getElementById('ctConfirmed').innerHTML = ctConfirmed;

            let ctRecovered = data.statewise[20].recovered;
            document.getElementById('ctRecovered').innerHTML = ctRecovered;

            let ctDeceased = data.statewise[20].deaths;
            document.getElementById('ctDeceased').innerHTML = ctDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function jharkhand() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let jharkhandUpdate = data.statewise[19].lastupdatedtime;
            document.getElementById('jharkhandUpdate').innerHTML = jharkhandUpdate;

            let jharkhandState = data.statewise[19].state;
            document.getElementById('jharkhandState').innerHTML = jharkhandState;

            let jharkhandActive = data.statewise[19].active;
            document.getElementById('jharkhandActive').innerHTML = jharkhandActive;

            let jharkhandConfirmed = data.statewise[19].confirmed;
            document.getElementById('jharkhandConfirmed').innerHTML = jharkhandConfirmed;

            let jharkhandRecovered = data.statewise[19].recovered;
            document.getElementById('jharkhandRecovered').innerHTML = jharkhandRecovered;

            let jharkhandDeceased = data.statewise[19].deaths;
            document.getElementById('jharkhandDeceased').innerHTML = jharkhandDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function uttarakhand() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let uttarakhandUpdate = data.statewise[21].lastupdatedtime;
            document.getElementById('uttarakhandUpdate').innerHTML = uttarakhandUpdate;

            let uttarakhandState = data.statewise[21].state;
            document.getElementById('uttarakhandState').innerHTML = uttarakhandState;

            let uttarakhandActive = data.statewise[21].active;
            document.getElementById('uttarakhandActive').innerHTML = uttarakhandActive;

            let uttarakhandConfirmed = data.statewise[21].confirmed;
            document.getElementById('uttarakhandConfirmed').innerHTML = uttarakhandConfirmed;

            let uttarakhandRecovered = data.statewise[21].recovered;
            document.getElementById('uttarakhandRecovered').innerHTML = uttarakhandRecovered;

            let uttarakhandDeceased = data.statewise[21].deaths;
            document.getElementById('uttarakhandDeceased').innerHTML = uttarakhandDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function goa() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let goaUpdate = data.statewise[22].lastupdatedtime;
            document.getElementById('goaUpdate').innerHTML = goaUpdate;

            let goaState = data.statewise[22].state;
            document.getElementById('goaState').innerHTML = goaState;

            let goaActive = data.statewise[22].active;
            document.getElementById('goaActive').innerHTML = goaActive;

            let goaConfirmed = data.statewise[22].confirmed;
            document.getElementById('goaConfirmed').innerHTML = goaConfirmed;

            let goaRecovered = data.statewise[22].recovered;
            document.getElementById('goaRecovered').innerHTML = goaRecovered;

            let goaDeceased = data.statewise[22].deaths;
            document.getElementById('goaDeceased').innerHTML = goaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function tripura() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let tripuraUpdate = data.statewise[23].lastupdatedtime;
            document.getElementById('tripuraUpdate').innerHTML = tripuraUpdate;

            let tripuraState = data.statewise[23].state;
            document.getElementById('tripuraState').innerHTML = tripuraState;

            let tripuraActive = data.statewise[23].active;
            document.getElementById('tripuraActive').innerHTML = tripuraActive;

            let tripuraConfirmed = data.statewise[23].confirmed;
            document.getElementById('tripuraConfirmed').innerHTML = tripuraConfirmed;

            let tripuraRecovered = data.statewise[23].recovered;
            document.getElementById('tripuraRecovered').innerHTML = tripuraRecovered;

            let tripuraDeceased = data.statewise[23].deaths;
            document.getElementById('tripuraDeceased').innerHTML = tripuraDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function manipur() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let manipurUpdate = data.statewise[25].lastupdatedtime;
            document.getElementById('manipurUpdate').innerHTML = manipurUpdate;

            let manipurState = data.statewise[25].state;
            document.getElementById('manipurState').innerHTML = manipurState;

            let manipurActive = data.statewise[25].active;
            document.getElementById('manipurActive').innerHTML = manipurActive;

            let manipurConfirmed = data.statewise[25].confirmed;
            document.getElementById('manipurConfirmed').innerHTML = manipurConfirmed;

            let manipurRecovered = data.statewise[25].recovered;
            document.getElementById('manipurRecovered').innerHTML = manipurRecovered;

            let manipurDeceased = data.statewise[25].deaths;
            document.getElementById('manipurDeceased').innerHTML = manipurDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function puducherry() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let puducherryUpdate = data.statewise[24].lastupdatedtime;
            document.getElementById('puducherryUpdate').innerHTML = puducherryUpdate;

            let puducherryState = data.statewise[24].state;
            document.getElementById('puducherryState').innerHTML = puducherryState;

            let puducherryActive = data.statewise[24].active;
            document.getElementById('puducherryActive').innerHTML = puducherryActive;

            let puducherryConfirmed = data.statewise[24].confirmed;
            document.getElementById('puducherryConfirmed').innerHTML = puducherryConfirmed;

            let puducherryRecovered = data.statewise[24].recovered;
            document.getElementById('puducherryRecovered').innerHTML = puducherryRecovered;

            let puducherryDeceased = data.statewise[24].deaths;
            document.getElementById('puducherryDeceased').innerHTML = puducherryDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function hp() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let hpUpdate = data.statewise[26].lastupdatedtime;
            document.getElementById('hpUpdate').innerHTML = hpUpdate;

            let hpState = data.statewise[26].state;
            document.getElementById('hpState').innerHTML = hpState;

            let hpActive = data.statewise[26].active;
            document.getElementById('hpActive').innerHTML = hpActive;

            let hpConfirmed = data.statewise[26].confirmed;
            document.getElementById('hpConfirmed').innerHTML = hpConfirmed;

            let hpRecovered = data.statewise[26].recovered;
            document.getElementById('hpRecovered').innerHTML = hpRecovered;

            let hpDeceased = data.statewise[26].deaths;
            document.getElementById('hpDeceased').innerHTML = hpDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function ladakh() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let ladakhUpdate = data.statewise[27].lastupdatedtime;
            document.getElementById('ladakhUpdate').innerHTML = ladakhUpdate;

            let ladakhState = data.statewise[27].state;
            document.getElementById('ladakhState').innerHTML = ladakhState;

            let ladakhActive = data.statewise[27].active;
            document.getElementById('ladakhActive').innerHTML = ladakhActive;

            let ladakhConfirmed = data.statewise[27].confirmed;
            document.getElementById('ladakhConfirmed').innerHTML = ladakhConfirmed;

            let ladakhRecovered = data.statewise[27].recovered;
            document.getElementById('ladakhRecovered').innerHTML = ladakhRecovered;

            let ladakhDeceased = data.statewise[27].deaths;
            document.getElementById('ladakhDeceased').innerHTML = ladakhDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function nagaland() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let nagalandUpdate = data.statewise[28].lastupdatedtime;
            document.getElementById('nagalandUpdate').innerHTML = nagalandUpdate;

            let nagalandState = data.statewise[28].state;
            document.getElementById('nagalandState').innerHTML = nagalandState;

            let nagalandActive = data.statewise[28].active;
            document.getElementById('nagalandActive').innerHTML = nagalandActive;

            let nagalandConfirmed = data.statewise[28].confirmed;
            document.getElementById('nagalandConfirmed').innerHTML = nagalandConfirmed;

            let nagalandRecovered = data.statewise[28].recovered;
            document.getElementById('nagalandRecovered').innerHTML = nagalandRecovered;

            let nagalandDeceased = data.statewise[28].deaths;
            document.getElementById('nagalandDeceased').innerHTML = nagalandDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function chandigarh() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let chandigarhUpdate = data.statewise[30].lastupdatedtime;
            document.getElementById('chandigarhUpdate').innerHTML = chandigarhUpdate;

            let chandigarhState = data.statewise[30].state;
            document.getElementById('chandigarhState').innerHTML = chandigarhState;

            let chandigarhActive = data.statewise[30].active;
            document.getElementById('chandigarhActive').innerHTML = chandigarhActive;

            let chandigarhConfirmed = data.statewise[30].confirmed;
            document.getElementById('chandigarhConfirmed').innerHTML = chandigarhConfirmed;

            let chandigarhRecovered = data.statewise[30].recovered;
            document.getElementById('chandigarhRecovered').innerHTML = chandigarhRecovered;

            let chandigarhDeceased = data.statewise[30].deaths;
            document.getElementById('chandigarhDeceased').innerHTML = chandigarhDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function dn() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let dnUpdate = data.statewise[31].lastupdatedtime;
            document.getElementById('dnUpdate').innerHTML = dnUpdate;

            let dnState = data.statewise[31].state;
            document.getElementById('dnState').innerHTML = dnState;

            let dnActive = data.statewise[31].active;
            document.getElementById('dnActive').innerHTML = dnActive;

            let dnConfirmed = data.statewise[31].confirmed;
            document.getElementById('dnConfirmed').innerHTML = dnConfirmed;

            let dnRecovered = data.statewise[31].recovered;
            document.getElementById('dnRecovered').innerHTML = dnRecovered;

            let dnDeceased = data.statewise[31].deaths;
            document.getElementById('dnDeceased').innerHTML = dnDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function ar() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let arUpdate = data.statewise[29].lastupdatedtime;
            document.getElementById('arUpdate').innerHTML = arUpdate;

            let arState = data.statewise[29].state;
            document.getElementById('arState').innerHTML = arState;

            let arActive = data.statewise[29].active;
            document.getElementById('arActive').innerHTML = arActive;

            let arConfirmed = data.statewise[29].confirmed;
            document.getElementById('arConfirmed').innerHTML = arConfirmed;

            let arRecovered = data.statewise[29].recovered;
            document.getElementById('arRecovered').innerHTML = arRecovered;

            let arDeceased = data.statewise[29].deaths;
            document.getElementById('arDeceased').innerHTML = arDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function meghalaya() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let meghalayaUpdate = data.statewise[32].lastupdatedtime;
            document.getElementById('meghalayaUpdate').innerHTML = meghalayaUpdate;

            let meghalayaState = data.statewise[32].state;
            document.getElementById('meghalayaState').innerHTML = meghalayaState;

            let meghalayaActive = data.statewise[32].active;
            document.getElementById('meghalayaActive').innerHTML = meghalayaActive;

            let meghalayaConfirmed = data.statewise[32].confirmed;
            document.getElementById('meghalayaConfirmed').innerHTML = meghalayaConfirmed;

            let meghalayaRecovered = data.statewise[32].recovered;
            document.getElementById('meghalayaRecovered').innerHTML = meghalayaRecovered;

            let meghalayaDeceased = data.statewise[32].deaths;
            document.getElementById('meghalayaDeceased').innerHTML = meghalayaDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function mizoram() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let mizoramUpdate = data.statewise[34].lastupdatedtime;
            document.getElementById('mizoramUpdate').innerHTML = mizoramUpdate;

            let mizoramState = data.statewise[34].state;
            document.getElementById('mizoramState').innerHTML = mizoramState;

            let mizoramActive = data.statewise[34].active;
            document.getElementById('mizoramActive').innerHTML = mizoramActive;

            let mizoramConfirmed = data.statewise[34].confirmed;
            document.getElementById('mizoramConfirmed').innerHTML = mizoramConfirmed;

            let mizoramRecovered = data.statewise[34].recovered;
            document.getElementById('mizoramRecovered').innerHTML = mizoramRecovered;

            let mizoramDeceased = data.statewise[34].deaths;
            document.getElementById('mizoramDeceased').innerHTML = mizoramDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function an() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let anUpdate = data.statewise[35].lastupdatedtime;
            document.getElementById('anUpdate').innerHTML = anUpdate;

            let anState = data.statewise[35].state;
            document.getElementById('anState').innerHTML = anState;

            let anActive = data.statewise[35].active;
            document.getElementById('anActive').innerHTML = anActive;

            let anConfirmed = data.statewise[35].confirmed;
            document.getElementById('anConfirmed').innerHTML = anConfirmed;

            let anRecovered = data.statewise[35].recovered;
            document.getElementById('anRecovered').innerHTML = anRecovered;

            let anDeceased = data.statewise[35].deaths;
            document.getElementById('anDeceased').innerHTML = anDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function sikkim() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let sikkimUpdate = data.statewise[33].lastupdatedtime;
            document.getElementById('sikkimUpdate').innerHTML = sikkimUpdate;

            let sikkimState = data.statewise[33].state;
            document.getElementById('sikkimState').innerHTML = sikkimState;

            let sikkimActive = data.statewise[33].active;
            document.getElementById('sikkimActive').innerHTML = sikkimActive;

            let sikkimConfirmed = data.statewise[33].confirmed;
            document.getElementById('sikkimConfirmed').innerHTML = sikkimConfirmed;

            let sikkimRecovered = data.statewise[33].recovered;
            document.getElementById('sikkimRecovered').innerHTML = sikkimRecovered;

            let sikkimDeceased = data.statewise[33].deaths;
            document.getElementById('sikkimDeceased').innerHTML = sikkimDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}

function lakshadweep() {
    fetch('https://api.covid19india.org/data.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let lakshadweepUpdate = data.statewise[37].lastupdatedtime;
            document.getElementById('lakshadweepUpdate').innerHTML = lakshadweepUpdate;

            let lakshadweepState = data.statewise[37].state;
            document.getElementById('lakshadweepState').innerHTML = lakshadweepState;

            let lakshadweepActive = data.statewise[37].active;
            document.getElementById('lakshadweepActive').innerHTML = lakshadweepActive;

            let lakshadweepConfirmed = data.statewise[37].confirmed;
            document.getElementById('lakshadweepConfirmed').innerHTML = lakshadweepConfirmed;

            let lakshadweepRecovered = data.statewise[37].recovered;
            document.getElementById('lakshadweepRecovered').innerHTML = lakshadweepRecovered;

            let lakshadweepDeceased = data.statewise[37].deaths;
            document.getElementById('lakshadweepDeceased').innerHTML = lakshadweepDeceased;

        })
        .catch(function () {
            console.log('error');
        });
}