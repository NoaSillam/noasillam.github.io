
  <!-- Vue pour lister les fleurs
    ================================================== -->

<div class="container">

    <table class="table table-bordered table-striped table-condensed">
      <br>
      <thead>
        <tr>
          <th>Image</th>
          <th>R�f�rence</th>
          <th>Libell�</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>  
<?php
    $i = 0;
    while($i < count($lafleur))
    { 
 ?>     
        <tr>
            <td align="center"><img class="img-polaroid" src="../assets/img/<?php echo $lafleur[$i]["image"]?>" /></td>
            <td><?php echo $lafleur[$i]["ref"]?></td>
            <td><?php echo $lafleur[$i]["designation"]?></td>
            <td align="right"><?php echo $lafleur[$i]["prix"]?></td>
        </tr>
<?php
        $i = $i + 1;
     }
?>       
       </tbody>       
     </table>    
  </div>

 
