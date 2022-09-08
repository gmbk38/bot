<?php
$test = $_POST['test'];
if ($test == '') {
    echo("NO DATA");
} else {
    echo("OK");
    echo($test);
    echo("OK");
}

$el = $_POST['el'];
echo($el);
foreach ($el as $i) {
    echo($i);
    echo("       ");
}
?>