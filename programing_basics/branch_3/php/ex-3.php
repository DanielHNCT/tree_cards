<?php

    function isColdOrHot($tmp) {
        if ($tmp < 0) {
            echo ("Freezing weather.\n");
        } else if ($tmp < 10) {
            echo "Very cold weather.\n";
        } else if ($tmp < 20) {
            echo "Cold weather.\n";
        } else if ($tmp < 30) {
            echo "Normal in temp.\n";
        } else if ($tmp < 40) {
            echo "Its Hot!\n";
        } else {
            echo "Its very hot\n";
        }
    };

    function mainMenu() {
        echo "¿ Freezing or hot ?\n";
        $temperature = readline("¿ What is the temperature ?\n");
        isColdOrHot($temperature);
    };

    mainMenu();

    
    
?>