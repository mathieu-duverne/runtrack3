<?php
try
{
    $conn = new PDO("mysql:host=localhost;dbname=utilisateurs", "root", "");
// set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"."<br>";
}
catch
(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
require_once 'Controleur_inscription.php';

?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inscription</title>
</head>
<body>
<form action="inscription.php" method="post" enctype="multipart/form-data">
    Nom
    <input id="nom" name="nom" type="text"><br>
    <div id="error_nom">

    </div>
    Prenom
    <input id="prenom" name="prenom" type="text"><br>
    <div id="error_prenom">

    </div>
    Email
    <input id="email" name="email" type="email"><br>
    <div id="error_email">

    </div>
    Password
    <input id="password" name="password" type="password"><br>
    Verif Password
    <input id="password_hash" type="password" name="password_hash"><br>
    <div id="error_password">

    </div>
    <button type="button" id="recuperation">envoyer</button><br>
    <div id="error_empty">

    </div>
</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>
<?php
var_dump($_POST);

