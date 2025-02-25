<?php

    function calculateSquare($number) {
        if (!is_numeric($number)) {
            echo "Erreur: Argument doit être un chiffre";
            return false;
        }
        return $number * $number;
    }

    function multiplyByTen($number) {
        $result = $number * 10;
        return $result;
    }

    $result = calculateSquare(3);
    multiplyByTen($result);

    // $userInput = readline("Écrivez un chiffre\n");
    // $squareResult = calculateSquare($userInput);
    // if ($squareResult !== false) {
    //     echo "le carré de l'utilisateur est: $userInput\n";
    //     echo "multiplié par 10 est: " . multiplyByTen($squareResult) . "\n";
    // }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form method="POST">
        <label for="number">Écrivez un chiffre:</label>
        <input type="number" name="number" id="number">
        <button type="submit">Calculer</button>
    </form>
    <?php
        if (isset($_POST['number'])) {
            $input = $_POST['number'];
            $squareResult = calculateSquare(($input));
            if ($squareResult !== false) {
                echo "<p>le carré de $input est: $squareResult</p>";
                echo "<p>MMultiplié par 10 est: " . multiplyByTen($squareResult) . "</p>";
            }
        }
    ?>
</body>
</html>


