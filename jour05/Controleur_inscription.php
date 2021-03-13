<?php


var_dump($_POST);
    if(isset($_POST)){
        echo"yes";
//        var_dump($_POST["nom"]);
    }


    //        if ($_POST['password'] == $_POST['password_hash']) {
    //            $sql = "INSERT INTO utilisateurs SET nom = :nom, prenom = :prenom, email = :email, password = :password";
    //            $stmt = $conn->prepare($sql);
    //            $stmt->execute([
    //                "nom" => $_POST['nom'],
    //                "prenom" => $_POST['prenom'],
    //                "email" => $_POST['email'],
    //                "password" => $_POST['password']
    //            ]);
    //        }