<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description"
        content="This is a live Covid-19/Corona Virus Tracker website based on trusted, reliable and popular Api where you can track data related to covid-19 throughout the World and India either statewise or districtwise.">
    <meta name="keywords"
        content="CORONA TRACKER, CORONA-VIRUS TRACKER, COVID-19 TRACKER, INDIA COVID-19 CORONA TRACKER, INDIA, WORLD, STATEWISE, DISTRICTWISE,covid, covid19, covid-19, covid19india, coronavirus, corona, india, virus, pandemic, disease, carona, karona, korona, Andaman and Nicobar Islands">
    <meta name="author" content="Manash Jyoti Baruah">
    
    <title>COVID-19 Tracker | Andaman and Nicobar Islands</title>

    
    <link rel="stylesheet" type="text/css" href="../jquery/jquery-ui.css">
    <link rel="icon" href="../img/coronavirus.svg" type="image/svg" sizes="16x16">
    <link rel="stylesheet" href="../fontawesome/css/all.min.css">
    <link rel="stylesheet" href="../bootstrap-4.5.0/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="../bootstrap-4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../sass/statesStyle.css">
    


</head>

<body class="container-cus">


    <nav class="navbar navbar-expand-lg navbar-dark  nav-cus sticky-top shadow-lg">
        <a class="navbar-brand" href="../index"><img class="logo" src="../img/coronavirus.svg" alt="logo"/>&ensp;
            <span class="head-text">COVID-19 TRACKER</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="nav-toggler-bar" style="color:Dodgerblue;" >
                <i class="fas fa-bars"></i>
            </span>
        </button>

        <div class="collapse navbar-collapse nav justify-content-stretch text-right" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active nav-text" href="../index">India</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-text" href="../world">World</a>
                </li>
                <li class="nav-item align-self-center pl-5">
                    <input id="switch" type="checkbox" name="mode" hidden data-switch-dark aria-hidden/>
                    <label for="switch" class="switch" aria-hidden></label>
                </li>
            </ul>

        </div>
    </nav>

    <div class="container ">
        <div class="row">
            <div class="col col-lg-12 ">

        <!-- Search Box-->    
        <div class="row justify-content-center align-items-center">
            <div class="col-xs-4">
                <div class="ui-widget py-5 ">
                    <input id="tags" placeholder="Search any states ..." class="form-control" />
                </div>
            </div>
        </div>
        <!--Search Box End-->

            <h1 class="banner-text  py-5 text-center">Andaman and Nicobar Islands</h1>

            <div class="row text-center  my-5 align-middle">
                <div class=" col-md-12 col-lg-3 counter-con">
                    <h5>Confirmed</h5>
                    <h2 id="anCon"></h2><br>
                </div>

                <div class=" col-md-12 col-lg-3 counter-act">
                    <h5>Active</h5>
                    <h2 id="anAct"></h2><br>
                </div>

                <div class=" col-md-12 col-lg-3 counter-rec">
                    <h5>Recovered</h5>
                    <h2 id="anRec"></h2><br>
                </div>
                <div class=" col-md-12 col-lg-3 counter-dec">
                    <h5>Deceased</h5>
                    <h2 id="anDec"></h2><br>
                </div>
            </div>
           
           
            
                <div class="table-responsive ">
                    <table class="table table-striped table-bordered table-dark text-center  ">
                        <thead class="thead-dark">
                            <tr>
                                
                                <th>District</th>
                                <th>Active</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deceased</th>                            
                            </tr>
                        </thead>
                            
                        <?php                      

                        $data = file_get_contents('https://api.covid19india.org/csv/latest/district_wise.csv');
                        $covidData = explode("\n",$data);
                        $s = array();
                        foreach($covidData as $row) {
                            $s[] = str_getcsv($row);
                        }


                        $i=1;
                        for($i=2 ;$i <= 4 ;$i++){
                            
                        ?>
                        <tr>
                            
                            <td><?php $x=array_column($s, '4'); echo $x[$i] ?></td>  
                            <td><?php $x=array_column($s, '6'); echo $x[$i] ?></td>  
                            <td><?php $x=array_column($s, '5'); echo $x[$i] ?></td> 
                            <td><?php $x=array_column($s, '7'); echo $x[$i] ?></td>
                            <td><?php $x=array_column($s, '8'); echo $x[$i] ?></td>                    
                        </tr>
                        
                        
                            <?php
                            
                        //$i++;
                        
                        
                        }
                        $i=1;
                        for($i=764 ;$i <= 764 ;$i++){
                        ?><tr>
                            <td><?php $x=array_column($s, '4'); echo $x[$i] ?></td>  
                            <td><?php $x=array_column($s, '6'); echo $x[$i] ?></td>  
                            <td><?php $x=array_column($s, '5'); echo $x[$i] ?></td> 
                            <td><?php $x=array_column($s, '7'); echo $x[$i] ?></td>
                            <td><?php $x=array_column($s, '8'); echo $x[$i] ?></td>
                        </tr>
                        <?php
                        }
                        ?>

                    </table>
                </div>
            </div>
        </div>
    </div>






    <div class="modal fade text-center shadow-lg" id="myModal">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h2>Whatsapp:</h2>
                    <i class="fab fa-whatsapp fa-3x" style="color: #4FCE5D;"></i>
                    <h3>+91 8638043872</h3>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    <!-- Footer -->
    <footer class="page-footer font-small footer-cus mt-5">
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
            <a href="#" class="footer-link"> Manash Jyoti Baruah</a>
        </div>
        <!-- Copyright -->


    </footer>
    <!-- Footer -->




    
    <!-- Latest compiled and minified JavaScript -->
    <script type="text/javascript" src="../js/statejs/viewDistrictsStates.js"></script>
    <script src="../js/jquery-3.5.1.slim.min.js"></script>  
    <script type="text/javascript" src="../js/searchBar.js"></script>
    <script src="../bootstrap-4.5.0/js/bootstrap.min.js"></script>  
    <script type="text/javascript" src="../js/statejs/stateTotal.js"></script>
    <script type="text/javascript" src="../js/statejs/appState.js"></script>
    <script src="../js/mode.js"></script>
    <script src="../jquery/jquery-3.5.1.min.js"></script>
    <script src="../jquery/jquery-ui.min.js"></script>
    


</body>

</html>