<?php

    function sendMessage($message, $fromName, $toName) {
        $message = trim($message);
        $fromName = trim($fromName);
        $toName = trim($toName);
        
        if (empty($message) || empty($fromName) || empty($toName)) {
            echo "Erreur :\n Tous les champs sont obligatoires";
        }

        if (strlen($message) > 500) {
            echo "Le message est trop long\n";
            return;
        }
        
        echo sprintf(
            "From : %s to : %s\nMessage : %s\n",
            $fromName,
            $toName,
            $message
        );
    }

    $infoMessage = [
        "contactName" => "Jean",
        "myName" => "Ada",
        "myMessage" => "Je t'apprends à coder tes premières fonctions"
    ];

    sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
    sendMessage($infoMessage["myMessage"], $infoMessage["myName"], $infoMessage["contactName"]);

    $message = readline("quel est le message ?\n");
    $sender = readline("Qui envoie le message ?\n");
    $receiver = readline("A qui est t'il envoyée ?\n");
    sendMessage($message, $sender, $receiver);

?>