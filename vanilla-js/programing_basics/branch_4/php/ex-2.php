<?php
    $letters = array ('A', 'd', 'a', '-', 'T', 'e', 'c', 'h');

    print_r($letters);

    $message = '';  

    $i = 0;
    do {
        $message += $letters;
        echo $message;
    } while ($i < count($letters))

?>