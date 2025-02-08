<?php 
   // Prix de deux articles
   $product1 = 10;
   $product2 = 20;

   // Calcul du total
   $firstTotal = $product1 + $product2;
   //define("TOT", $firstTotal);
   //echo TOT . "\n";

   // Troisième article
   $article3 = "50";
   $article3 = (int) $article3;

   // ajout de $a3 au total
   $secondTotal = $article3 + $firstTotal;
   //echo $secondTotal . "\n";

   // 20% de reduction
   $finalTotal = $secondTotal - $secondTotal * 0.2;
   //echo $finalTotal . "\n";

   echo "Le prix total avant réduction est de : " . $secondTotal . "\n";
   echo "Le prix total après réduction est de : " . $finalTotal . "\n";

?>
