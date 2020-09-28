$(function () {
  var availableTags = [
    "Maharashtra",
    "Tamil Nadu",
    "Andhra Pradesh",
    "Karnataka",
    "Delhi",
    "Uttar Pradesh",
    "West Bengal",
    "Bihar",
    "Telangana",
    "Gujarat",
    "Assam",
    "Rajasthan",
    "Odisha",
    "Haryana",
    "Madhya Pradesh",
    "Kerala",
    "Punjab",
    "Jammu and Kashmir",
    "Jharkhand",
    "Chhattisgarh",
    "Uttarakhand",
    "Goa",
    "Tripura",
    "Puducherry",
    "Manipur",
    "Himachal Pradesh",
    "Nagaland",
    "Arunachal Pradesh",
    "Andaman and Nicobar Islands",
    "Ladakh",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Meghalaya",
    "Sikkim",
    "Mizoram",
    "Lakshadweep",
    "World",
  ];
  $("#tagState").autocomplete({
    source: availableTags,
    autoFocus: true,
    select: function (event, ui) {
      //check PHP is selected
      if (ui.item.value == "Maharashtra") {
        viewMaharastra();
      }
      if (ui.item.value == "Tamil Nadu") {
        viewTamilnadu();
      }
      if (ui.item.value == "Andhra Pradesh") {
        viewAp();
      }
      if (ui.item.value == "Karnataka") {
        viewKn();
      }
      if (ui.item.value == "Delhi") {
        viewDelhi();
      }
      if (ui.item.value == "Uttar Pradesh") {
        viewUp();
      }
      if (ui.item.value == "West Bengal") {
        viewWb();
      }
      if (ui.item.value == "Bihar") {
        viewBi();
      }
      if (ui.item.value == "Telangana") {
        viewTg();
      }
      if (ui.item.value == "Gujarat") {
        viewGujarat();
      }
      if (ui.item.value == "Assam") {
        viewAs();
      }
      if (ui.item.value == "Rajasthan") {
        viewRj();
      }
      if (ui.item.value == "Odisha") {
        viewOr();
      }
      if (ui.item.value == "Haryana") {
        viewHr();
      }
      if (ui.item.value == "Madhya Pradesh") {
        viewMp();
      }
      if (ui.item.value == "Kerala") {
        viewKe();
      }
      if (ui.item.value == "Punjab") {
        viewPb();
      }
      if (ui.item.value == "Jammu and Kashmir") {
        viewJk();
      }
      if (ui.item.value == "Jharkhand") {
        viewJh();
      }
      if (ui.item.value == "Chhattisgarh") {
        viewCt();
      }
      if (ui.item.value == "Uttarakhand") {
        viewUt();
      }
      if (ui.item.value == "Goa") {
        viewGo();
      }
      if (ui.item.value == "Tripura") {
        viewTr();
      }
      if (ui.item.value == "Puducherry") {
        viewPu();
      }
      if (ui.item.value == "Manipur") {
        viewMa();
      }
      if (ui.item.value == "Himachal Pradesh") {
        viewHp();
      }
      if (ui.item.value == "Nagaland") {
        viewNa();
      }
      if (ui.item.value == "Arunachal Pradesh") {
        viewAr();
      }
      if (ui.item.value == "Andaman and Nicobar Islands") {
        viewAn();
      }
      if (ui.item.value == "Ladakh") {
        viewLa();
      }
      if (ui.item.value == "Chandigarh") {
        viewCh();
      }
      if (ui.item.value == "Dadra and Nagar Haveli and Daman and Diu") {
        viewDn();
      }
      if (ui.item.value == "Meghalaya") {
        viewMe();
      }
      if (ui.item.value == "Sikkim") {
        viewSi();
      }
      if (ui.item.value == "Mizoram") {
        viewMi();
      }
      if (ui.item.value == "Lakshadweep") {
        viewLd();
      }
      if (ui.item.value == "World") {
        window.open("https://covid19trackermj.herokuapp.com/world", "_self");
      }
    },
  });
});
