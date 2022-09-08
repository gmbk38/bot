<?php
$test = $_POST['test'];
if($test == '') {
    echo("NOT OK");
} else {
    echo("OK");
    echo($test);
    echo("OK");
}
?>