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
                                
                                <th>Predict Confirm</th>  
                                <th>Predict Active</th>                           
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
                                
                                
                                <?php 
                                $a=$covidData[313]['Confirmed']-$covidData[283]['Confirmed'];
                                $b=$covidData[283]['Confirmed']-$covidData[252]['Confirmed'];
                                $c=$covidData[252]['Confirmed']-$covidData[222]['Confirmed'];
                                $d=$covidData[222]['Confirmed']-$covidData[191]['Confirmed'];
                                $e=$covidData[191]['Confirmed']-$covidData[160]['Confirmed'];
                                $f=$covidData[160]['Confirmed']-$covidData[130]['Confirmed'];
                                $g=$covidData[130]['Confirmed']-$covidData[99]['Confirmed'];
                                $h=$covidData[99]['Confirmed']-$covidData[69]['Confirmed'];
                                $i=$covidData[69]['Confirmed']-$covidData[38]['Confirmed'];
                                $j=$covidData[38]['Confirmed']-$covidData[9]['Confirmed'];
                                $array=array($a,$b,$c,$d,$e,$f,$g,$h,$i,$j);
                                $avg = array_sum($array) / count($array);
                                $predict = $avg+$covidData[313]['Confirmed'];
                                ?>
                                <td><?php  echo(round($predict)) ?></td>
                                
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