<?php
$bolo1 = [
    'açucar',
    'farinha de trigo',
    'ovo',
    'leite',
    'fermento em pó'
];

$bolo2 = [
    'vasilha',
    'agua morna',
    ...$bolo1,
    'corante'
];

print_r($bolo2); //Vai mostrar tudo que tem no Array.