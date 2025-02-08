<?php

    // 1
    $firstLanguage1 = 'HTML'; // HTML
    $secondLanguage1 = 'PHP'; // PHP
    $thirdLanguage1 = $firstLanguage1; // HTML
    $firstLanguage1 = 'JavaScript'; // JavaScript
    $secondLanguage1 = $firstLanguage1; // JavaScript

    // 2
    $firstLanguage2 = 'HTML'; // HTML
    $secondLanguage2 = 'PHP'; // PHP
    $firstLanguage2 = 'JavaScript'; // JavaScript
    $thirdLanguage2 = $firstLanguage2; // JavaScript
    $secondLanguage2 = $firstLanguage2; // JavaScript

    echo "Primer caso:\n";
    echo "firstLanguage1: $firstLanguage1\n";
    echo "secondLanguage1: $secondLanguage1\n";
    echo "thirdLanguage1: $thirdLanguage1\n";

    echo "\nSegundo caso:\n";
    echo "firstLanguage2: $firstLanguage2\n";
    echo "secondLanguage2: $secondLanguage2\n";
    echo "thirdLanguage2: $thirdLanguage2\n";

?>