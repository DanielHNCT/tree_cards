<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <style>
        body {
            background-color: black;
        }
        .message {
            margin: 10px;
            border-radius: 10px;
            border: solid 3px white;
            padding: 15px;
            background-color: grey;
        }
    </style>

    <?php 
        $fullName = 'Hinojosa';
        $name = 'Daniel';
        $number = 64;

        define("AGE", 22);

        $result = $number - AGE;

        echo '<div class="message">';
        echo "Bonjour $name $fullName" . "<br>";
        echo '</div>';

        echo '<div class="message">';
        echo "$result années à travailler avant la retraite ! Courage ! En développant ce seras plus fun !";
        echo '</div>';
    ?>

</body>
</html>


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 
        // $fullName = 'Hinojosa';
        // $name = 'Daniel';
        // $number = 64;
        // define("AGE", 22);
        // $result = $number - AGE;
    ?>

    <script>
        alert('Bonjour ' + '<?php //echo $name?> ' + '<?php //echo $fullName;?>');
        alert('<?php //echo $result?> années à travailler avant la retraite ! Courage ! En développant ce sera plus fun !');
    </script>
    
</body>
</html> -->
