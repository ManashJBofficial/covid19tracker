window.onload = function () {
    india();
    states();
}


function states() {
    maharastra();
    tamilNadu();
    delhi();
    karnataka();
    ap();
    up();
    gujarat();
    wb();
    telangana();
    rajasthan();
    bihar();
    haryana();
    assam();
    mp();
    odisha();
    jk();
    kerala();
    punjab();
    jharkhand();
    ct();
    uttarakhand();
    goa();
    tripura();
    puducherry();
    manipur();
    hp();
    ladakh();
    nagaland();
    ar();
    chandigarh();
    dn();
    meghalaya();
    sikkim();
    mizoram();
    an();
    lakshadweep();
}

function viewDistricts() {
    viewMaharastra();
    viewTamilnadu();
    viewDelhi();
    viewGujarat();
    viewUp();
    viewKn();
    viewTg();
    viewWb();
    viewAp();
    viewRj();
    viewHr();
    viewBi();
    viewMp();
    viewAs();
    viewOr();
    viewJk();
    viewPb();
    viewKe();
    viewCt();
    viewJh();
    viewUt();
    viewGo();
    viewTr();
    viewMa();
    viewPu();
    viewHp();
    viewLa();
    viewNa();
    viewCh();
    viewDn();
    viewAr();
    viewMe();
    viewMi();
    viewAn();
    viewSi();
    viewLd();
}

























/*
function districtLevel() {
    fetch('https://api.covid19india.org/state_district_wise.json')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
                let assamActive = data.Assam.districtData['Kamrup Metropolitan'].active;
                document.getElementById('assamActive').innerHTML = assamActive;

                let assamConfirmed = data.Assam.districtData['Kamrup Metropolitan'].confirmed;
                document.getElementById('assamConfirmed').innerHTML = assamConfirmed;

                let assamRecovered = data.Assam.districtData['Kamrup Metropolitan'].recovered;
                document.getElementById('assamRecovered').innerHTML = assamRecovered;

                let assamDeceased = data.Assam.districtData['Kamrup Metropolitan'].deceased;
                document.getElementById('assamDeceased').innerHTML = assamDeceased;*/
/*})

}*/