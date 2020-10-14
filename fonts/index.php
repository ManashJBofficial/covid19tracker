<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description"
        content="This is a live Covid-19/Corona Virus Tracker website based on trusted, reliable and popular Api where you can track data related to covid-19 throughout the World and India either statewise or districtwise.">
    <meta name="keywords"
        content="CORONA TRACKER, CORONA-VIRUS TRACKER, COVID-19 TRACKER, INDIA COVID-19 CORONA TRACKER, INDIA, WORLD, STATEWISE, DISTRICTWISE,covid, covid19, covid-19, covid19india, coronavirus, corona, india, virus, pandemic, disease, carona, karona, korona ">
    <meta name="author" content="Manash Jyoti Baruah">

    <title>COVID-19 | CORONA VIRUS TRACKER</title>

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="icon" href="img/coronavirus.svg" type="image/svg" sizes="16x16">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
    <script src="js/Chart.js"></script>
    <link rel="stylesheet" href="bootstrap-4.5.0/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="bootstrap-4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="sass/style.css">
    
</head>

<body>



    <nav class="navbar navbar-expand-lg navbar-dark  nav-cus shadow-lg sticky-top">
    
        <a class="navbar-brand" href="#"><img class="logo" src="img/coronavirus.svg" alt="logo" />&ensp;
            <span class="head-text">COVID-19 TRACKER</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="nav-toggler-bar" style="color:Dodgerblue;" >
                <i class="fas fa-bars"></i>
            </span>
        </button>
        
        <div class="navbar-collapse collapse nav justify-content-stretch text-right" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active nav-text" href="#">India</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-text" href="world">World</a>
                </li>
                <li class="nav-item align-self-center pl-5">
                    <input id="switch" type="checkbox" name="mode" hidden data-switch-dark aria-hidden/>
                    <label for="switch" class="switch" aria-hidden></label>
                </li>
            </ul>
        </div>    
    </nav>



    <div class="container-fluid container-cus ">
        <div class="row">
        <div class="col-md-12 col-lg-12">
        
        <!-- Search Box-->    
        <div class="row justify-content-center align-items-center">
            <div class="col-xs-4">
                <div class="ui-widget py-5 ">
                    <input id="tags" placeholder="Search any states ..." class="form-control" />
                </div>
            </div>
        </div>
        <!--Search Box End-->
                <h1 class="banner-text  py-5 text-center">
                <img src="https://www.countryflags.io/in/flat/48.png">  
                India</h1>
                
                <div class="row text-center px-5 my-4 align-middle">
                    <div class=" col-md-12 col-lg-3 counter-con">
                        <h5>Confirmed</h5>
                        <h2 id="indiaConfirmed"></h2><br>
                    </div>

                    <div class=" col-md-12 col-lg-3 counter-act">
                        <h5>Active</h5>
                        <h2 id="indiaActive"></h2><br>
                    </div>

                    <div class=" col-md-12 col-lg-3 counter-rec">
                        <h5>Recovered</h5>
                        <h2 id="indiaRecovered"></h2><br>
                    </div>
                    <div class=" col-md-12 col-lg-3 counter-dec">
                        <h5>Deceased</h5>
                        <h2 id="indiaDeceased"></h2><br>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6">

                        <div class="table-responsive py-4">
                            <table
                                class="table table-striped  table-dark table-bordered text-center  shadow-lg">
                                <thead>
                                <tbody>
                                    <tr>
                                        <th class="w-20">Last Update</th>
                                        <th class="w-25">State</th>
                                        <th class="w-10">Active</th>
                                        <th class="w-10">Confirmed</th>
                                        <th class="w-10">Recovered</th>
                                        <th class="w-10">Deceased</th>
                                    </tr>

                                    <tr onclick="viewMaharastra()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="maharastraUpdate"></td>
                                        <td id="maharastraState"> </td>
                                        <td id="maharastraActive"></td>
                                        <td id="maharastraConfirmed"></td>
                                        <td id="maharastraRecovered"></td>
                                        <td id="maharastraDeceased"></td>
                                    </tr>

                                    <tr onclick="viewTamilnadu()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="tamilUpdate"></td>
                                        <td id="tamilState"></td>
                                        <td id="tamilActive"></td>
                                        <td id="tamilConfirmed"></td>
                                        <td id="tamilRecovered"></td>
                                        <td id="tamilDeceased"></td>
                                    </tr>

                                    <tr onclick="viewDelhi()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="delhiUpdate"></td>
                                        <td id="delhiState"></td>
                                        <td id="delhiActive"></td>
                                        <td id="delhiConfirmed"></td>
                                        <td id="delhiRecovered"></td>
                                        <td id="delhiDeceased"></td>
                                    </tr>

                                    <tr onclick="viewKn()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="karnatakaUpdate"></td>
                                        <td id="karnatakaState"></td>
                                        <td id="karnatakaActive"></td>
                                        <td id="karnatakaConfirmed"></td>
                                        <td id="karnatakaRecovered"></td>
                                        <td id="karnatakaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewAp()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="apUpdate"></td>
                                        <td id="apState"></td>
                                        <td id="apActive"></td>
                                        <td id="apConfirmed"></td>
                                        <td id="apRecovered"></td>
                                        <td id="apDeceased"></td>
                                    </tr>

                                    <tr onclick="viewUp()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="upUpdate"></td>
                                        <td id="upState"></td>
                                        <td id="upActive"></td>
                                        <td id="upConfirmed"></td>
                                        <td id="upRecovered"></td>
                                        <td id="upDeceased"></td>
                                    </tr>

                                    <tr onclick="viewGujarat()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="gujaratUpdate"></td>
                                        <td id="gujaratState"></td>
                                        <td id="gujaratActive"></td>
                                        <td id="gujaratConfirmed"></td>
                                        <td id="gujaratRecovered"></td>
                                        <td id="gujaratDeceased"></td>
                                    </tr>

                                    <tr onclick="viewWb()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="wbUpdate"></td>
                                        <td id="wbState"></td>
                                        <td id="wbActive"></td>
                                        <td id="wbConfirmed"></td>
                                        <td id="wbRecovered"></td>
                                        <td id="wbDeceased"></td>
                                    </tr>

                                    <tr onclick="viewTg()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="telanganaUpdate"></td>
                                        <td id="telanganaState"></td>
                                        <td id="telanganaActive"></td>
                                        <td id="telanganaConfirmed"></td>
                                        <td id="telanganaRecovered"></td>
                                        <td id="telanganaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewRj()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="rajasthanUpdate"></td>
                                        <td id="rajasthanState"></td>
                                        <td id="rajasthanActive"></td>
                                        <td id="rajasthanConfirmed"></td>
                                        <td id="rajasthanRecovered"></td>
                                        <td id="rajasthanDeceased"></td>
                                    </tr>

                                    <tr onclick="viewBi()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="biharUpdate"></td>
                                        <td id="biharState"></td>
                                        <td id="biharActive"></td>
                                        <td id="biharConfirmed"></td>
                                        <td id="biharRecovered"></td>
                                        <td id="biharDeceased"></td>
                                    </tr>

                                    <tr onclick="viewHr()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="haryanaUpdate"></td>
                                        <td id="haryanaState"></td>
                                        <td id="haryanaActive"></td>
                                        <td id="haryanaConfirmed"></td>
                                        <td id="haryanaRecovered"></td>
                                        <td id="haryanaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewAs()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="assamUpdate"></td>
                                        <td id="assamState"></td>
                                        <td id="assamActive"></td>
                                        <td id="assamConfirmed"></td>
                                        <td id="assamRecovered"></td>
                                        <td id="assamDeceased"></td>
                                    </tr>

                                    <tr onclick="viewMp()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="mpUpdate"></td>
                                        <td id="mpState"></td>
                                        <td id="mpActive"></td>
                                        <td id="mpConfirmed"></td>
                                        <td id="mpRecovered"></td>
                                        <td id="mpDeceased"></td>
                                    </tr>

                                    <tr onclick="viewOr()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="odishaUpdate"></td>
                                        <td id="odishaState"></td>
                                        <td id="odishaActive"></td>
                                        <td id="odishaConfirmed"></td>
                                        <td id="odishaRecovered"></td>
                                        <td id="odishaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewJk()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="jkUpdate"></td>
                                        <td id="jkState"></td>
                                        <td id="jkActive"></td>
                                        <td id="jkConfirmed"></td>
                                        <td id="jkRecovered"></td>
                                        <td id="jkDeceased"></td>
                                    </tr>

                                    <tr onclick="viewKe()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="keralaUpdate"></td>
                                        <td id="keralaState"></td>
                                        <td id="keralaActive"></td>
                                        <td id="keralaConfirmed"></td>
                                        <td id="keralaRecovered"></td>
                                        <td id="keralaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewPb()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="punjabUpdate"></td>
                                        <td id="punjabState"></td>
                                        <td id="punjabActive"></td>
                                        <td id="punjabConfirmed"></td>
                                        <td id="punjabRecovered"></td>
                                        <td id="punjabDeceased"></td>
                                    </tr>

                                    <tr onclick="viewJh()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="jharkhandUpdate"></td>
                                        <td id="jharkhandState"></td>
                                        <td id="jharkhandActive"></td>
                                        <td id="jharkhandConfirmed"></td>
                                        <td id="jharkhandRecovered"></td>
                                        <td id="jharkhandDeceased"></td>
                                    </tr>

                                    <tr onclick="viewCt()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="ctUpdate"></td>
                                        <td id="ctState"></td>
                                        <td id="ctActive"></td>
                                        <td id="ctConfirmed"></td>
                                        <td id="ctRecovered"></td>
                                        <td id="ctDeceased"></td>
                                    </tr>

                                    <tr onclick="viewUt()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="uttarakhandUpdate"></td>
                                        <td id="uttarakhandState"></td>
                                        <td id="uttarakhandActive"></td>
                                        <td id="uttarakhandConfirmed"></td>
                                        <td id="uttarakhandRecovered"></td>
                                        <td id="uttarakhandDeceased"></td>
                                    </tr>

                                    <tr onclick="viewGo()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="goaUpdate"></td>
                                        <td id="goaState"></td>
                                        <td id="goaActive"></td>
                                        <td id="goaConfirmed"></td>
                                        <td id="goaRecovered"></td>
                                        <td id="goaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewTr()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="tripuraUpdate"></td>
                                        <td id="tripuraState"></td>
                                        <td id="tripuraActive"></td>
                                        <td id="tripuraConfirmed"></td>
                                        <td id="tripuraRecovered"></td>
                                        <td id="tripuraDeceased"></td>
                                    </tr>

                                    <tr onclick="viewPu()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="puducherryUpdate"></td>
                                        <td id="puducherryState"></td>
                                        <td id="puducherryActive"></td>
                                        <td id="puducherryConfirmed"></td>
                                        <td id="puducherryRecovered"></td>
                                        <td id="puducherryDeceased"></td>
                                    </tr>

                                    <tr onclick="viewMa()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="manipurUpdate"></td>
                                        <td id="manipurState"></td>
                                        <td id="manipurActive"></td>
                                        <td id="manipurConfirmed"></td>
                                        <td id="manipurRecovered"></td>
                                        <td id="manipurDeceased"></td>
                                    </tr>



                                    <tr onclick="viewHp()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="hpUpdate"></td>
                                        <td id="hpState"></td>
                                        <td id="hpActive"></td>
                                        <td id="hpConfirmed"></td>
                                        <td id="hpRecovered"></td>
                                        <td id="hpDeceased"></td>
                                    </tr>

                                    <tr onclick="viewLa()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="ladakhUpdate"></td>
                                        <td id="ladakhState"></td>
                                        <td id="ladakhActive"></td>
                                        <td id="ladakhConfirmed"></td>
                                        <td id="ladakhRecovered"></td>
                                        <td id="ladakhDeceased"></td>
                                    </tr>

                                    <tr onclick="viewNa()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="nagalandUpdate"></td>
                                        <td id="nagalandState"></td>
                                        <td id="nagalandActive"></td>
                                        <td id="nagalandConfirmed"></td>
                                        <td id="nagalandRecovered"></td>
                                        <td id="nagalandDeceased"></td>
                                    </tr>

                                    <tr onclick="viewAr()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="arUpdate"></td>
                                        <td id="arState"></td>
                                        <td id="arActive"></td>
                                        <td id="arConfirmed"></td>
                                        <td id="arRecovered"></td>
                                        <td id="arDeceased"></td>
                                    </tr>

                                    <tr onclick="viewCh()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="chandigarhUpdate"></td>
                                        <td id="chandigarhState"></td>
                                        <td id="chandigarhActive"></td>
                                        <td id="chandigarhConfirmed"></td>
                                        <td id="chandigarhRecovered"></td>
                                        <td id="chandigarhDeceased"></td>
                                    </tr>

                                    <tr onclick="viewDn()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="dnUpdate"></td>
                                        <td id="dnState"></td>
                                        <td id="dnActive"></td>
                                        <td id="dnConfirmed"></td>
                                        <td id="dnRecovered"></td>
                                        <td id="dnDeceased"></td>
                                    </tr>

                                    <tr onclick="viewMe()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="meghalayaUpdate"></td>
                                        <td id="meghalayaState"></td>
                                        <td id="meghalayaActive"></td>
                                        <td id="meghalayaConfirmed"></td>
                                        <td id="meghalayaRecovered"></td>
                                        <td id="meghalayaDeceased"></td>
                                    </tr>

                                    <tr onclick="viewSi()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="sikkimUpdate"></td>
                                        <td id="sikkimState"></td>
                                        <td id="sikkimActive"></td>
                                        <td id="sikkimConfirmed"></td>
                                        <td id="sikkimRecovered"></td>
                                        <td id="sikkimDeceased"></td>
                                    </tr>

                                    <tr onclick="viewMi()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="mizoramUpdate"></td>
                                        <td id="mizoramState"></td>
                                        <td id="mizoramActive"></td>
                                        <td id="mizoramConfirmed"></td>
                                        <td id="mizoramRecovered"></td>
                                        <td id="mizoramDeceased"></td>
                                    </tr>

                                    <tr onclick="viewAn()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="anUpdate"></td>
                                        <td id="anState"></td>
                                        <td id="anActive"></td>
                                        <td id="anConfirmed"></td>
                                        <td id="anRecovered"></td>
                                        <td id="anDeceased"></td>
                                    </tr>

                                    <tr onclick="viewLd()" style="cursor: pointer;" data-toggle="tooltip"
                                        data-placement="top" title="Click To View More">
                                        <td id="lakshadweepUpdate"></td>
                                        <td id="lakshadweepState"></td>
                                        <td id="lakshadweepActive"></td>
                                        <td id="lakshadweepConfirmed"></td>
                                        <td id="lakshadweepRecovered"></td>
                                        <td id="lakshadweepDeceased"></td>
                                    </tr>

                                </tbody>

                                </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col col-lg-6 px-4 ">

                        <div class="card bg-dark shadow-lg my-4">
                            <div class="card-body card-chart">
                                <canvas id="dailyCases" width="50%"></canvas>
                            </div>
                        </div>
                        <div class="card bg-dark shadow-lg my-5">
                            <div class="card-body card-chart">
                                <canvas id="totalCases" width="50%"></canvas>
                            </div>
                        </div>
                        <div class="card bg-dark shadow-lg my-5">
                            <div class="card-body card-chart">
                                <canvas id="chart" width="50%"></canvas>
                            </div>
                        </div>
                        <div class="card text-white bg-dark shadow-lg my-5">
                            <div class="card-body card-chart">
                                <canvas id="activeData" width="50%"></canvas>
                            </div>
                        </div>
                        <div class="card  bg-dark shadow-lg my-5">
                            <div class="card-body card-chart">
                                <canvas id="recoveredData" width="50%"></canvas>
                            </div>
                        </div>
                        <div class="card text-white bg-dark shadow-lg my-5">
                            <div class="card-body card-chart">
                                <canvas id="deathData" width="50%"></canvas>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </div>
    
    </div>


    <div class="modal fade text-center shadow-lg" id="myModal">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h2>Whatsapp:</h2>
                    <i class="fab fa-whatsapp fa-3x" aria-hidden="true" style="color: #4FCE5D;"></i>
                    <h3>+91 8638043872</h3>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <footer class="page-footer font-small footer-cus">
    
        <!-- Footer Elements -->
        <div class="container  ">
            <!-- Grid row-->

            <div class="row ">

                <!-- Grid column -->
                <div class="col-md-12 py-5  text-center">
                    <div class=" flex-center align-middle ">
                        <h2></h2>
                        <!-- Github -->
                        <a class="" href="https://github.com/ManashJBofficial" target="_blank">
                            <i class="fab fa-github fa-lg mr-md-5 mr-3 fa-3x social-link"> </i>
                        </a>
                        <!-- Linkdin -->
                        <a class="" href="https://www.linkedin.com/in/manashjb/" target="_blank">
                            <i class="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-3x social-link"> </i>
                        </a>
                        <!-- Gmail -->
                        <a class="" href="mailto:manashjbwork@gmail.com" target="_blank">
                            <i class="far fa-envelope fa-lg mr-md-5 mr-3 fa-3x social-link"> </i>
                        </a>
                        <!--Whatsapp-->
                        <a class="" href="#myModal" data-toggle="modal">
                            <i class="fab fa-whatsapp fa-lg fa-3x social-link"> </i>
                        </a>
                    </div>
                </div>
                <!-- Grid column -->

            </div>

        </div>
        <!-- Footer Elements -->

        <!-- Copyright -->
        <div class="footer-copyright copyright-cus text-center py-3" style="background-color: #161C27;">© 2020
            Copyright
            <a class="footer-link"> Manash Jyoti Baruah</a>
        </div>
        <!-- Copyright -->


    </footer>
    <!-- Footer -->


 
    
    <script type="text/javascript" src="js/deathChart.js"></script>
    <script type="text/javascript" src="js/recoveredChart.js"></script>
    <script type="text/javascript" src="js/activeChart.js"></script>
    <script type="text/javascript" src="js/confirmChart.js"></script>
    <script type="text/javascript" src="js/totalCases.js"></script>
    <script type="text/javascript" src="js/dailyCases.js"></script>
    <script type="text/javascript" src="js/searchBar.js"></script>
    <script src="bootstrap-4.5.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/viewDistricts.js"></script>
    <script src="js/mode.js"></script>
    <script type="text/javascript" src="js/states.js"></script>
    <script type="text/javascript" src="js/india.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>

</html>
