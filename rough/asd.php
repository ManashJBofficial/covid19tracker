<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prediction</title>
</head>
<body>
<h1>Prediction of Confirm cases</h1>
<h3>India Confirmed</h3>

<?php 
                        $data = file_get_contents('https://api.covid19api.com/country/india');
                        $covidData = json_decode($data,true);
                        //echo "<pre>";
                        //print_r($covidData);
                      

?>
<div class="table-responsive ">
                    <table class="table table-striped table-bordered table-dark text-center ">
                        <thead class="thead-dark">
                            <tr>
                                <th class="">No</th>
                                <th class="">Date</th>
                                <th class="">Cases</th>                               
                            </tr>


                        </thead>

                        <?php 
                        
                        $countryCount = count($covidData);                

                        $i=1;
                        while($i < $countryCount){
                        ?>
                        <tr>
                                
                            <?php 
                                if($covidData[$i]['Date'] == '2020-01-31T00:00:00Z' || 
                                $covidData[$i]['Date'] == '2020-02-29T00:00:00Z' || 
                                $covidData[$i]['Date'] == '2020-03-31T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-04-30T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-05-31T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-06-30T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-07-31T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-08-31T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-09-30T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-10-31T00:00:00Z' ||
                                $covidData[$i]['Date'] == '2020-11-30T00:00:00Z'
                                )
                                {?>
                                
                                <td><?php echo $covidData[$i]['Date']?></td>
                                <td><?php echo $covidData[$i]['Active'].'--'.$i.'--'?></td>
                                
                                    <?php
                                }?>
                              
                                      
                            
                           
                        </tr>
                        <?php
                        $i++;
                        
                        
                        }
                        ?>
                    </table>
                </div>


</body>

</html>