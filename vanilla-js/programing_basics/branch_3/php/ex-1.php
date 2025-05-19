<?php

    function isPositiveOrNegative($number) {
        $number = (int) $number;
        if ($number > 0) {
            echo "Le chiffre est positif\n\n";
        } else if ($number < 0) {
            echo "Le chiffre est negatif\n\n";
        }
    }

    function mainMenu() {
        echo "¿ POSITIF OU NEGATIF ?\n\n\n";
        $userNumber = readline("Type a number, Can be positive or negative\n");
        isPositiveOrNegative($userNumber);
        closeOrContinue();
    };

    function closeOrContinue() {
        $userChoice = readline("You want to quit ? [y/n]\n");
        if ($userChoice == 'y') {
            return;
        } else if ($userChoice == 'n') {
            mainMenu();
        } else {
            echo "Sorry did'nt recognize the entry\n";
            closeOrContinue();
        }
    }; 

    mainMenu();
    

?>