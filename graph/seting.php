<?php

include "db.php"; // include de la connection a la base de données

$cities = $db->prepare('SELECT * FROM ville');
$cities->execute();

$jour = $cities->fetchAll(PDO::FETCH_OBJ);
