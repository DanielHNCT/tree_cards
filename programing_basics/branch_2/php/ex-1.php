<?php
    function addition3Numbers() {
        $result = 1 + 2 + 3;
        echo "Le resultat de la somme est $result\n";
    }
    addition3Numbers();

    function addition3NumbersWithArg($a, $b, $c) {
        if (!is_numeric($a) && !is_numeric($b) && !is_numeric($c)) {
            echo "Erreur: Tous les arguments doivent être des chiffres\n";
            return;
        }
        $result = $a + $b + $c;
        echo "Le resultat de la somme est $result\n";
    };
    addition3NumbersWithArg(1, 2, 3);
    addition3NumbersWithArg(4, 45, 1);
    addition3NumbersWithArg(15, 19, 18);
?>