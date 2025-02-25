<?php
    function mainMenu(){
        $userChoice =  readline("\n¿ Want to know if you can drive ? [y/n]\n");
        if ($userChoice == 'y') {
            $userName = readline("¿ Name ? \n");
            $userAge = readline("¿ Age ?\n");
            isMajorOrMinor($userAge, $userName);
        } else if ($userChoice == 'n') {
            exit;
        }
    } 

    function isMajorOrMinor($age, $name) {
        if ($age >= 18) {
            echo "¡Congratulations! You can drive $name.\n";
            mainMenu();
        } else if ($age < 18) {
            echo "¡Warning! You cannot drive !\n";
            mainMenu();
        }
    }

    mainMenu();
?>