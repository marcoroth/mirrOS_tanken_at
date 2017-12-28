<?php

	require "../../../config/glancrConfig.php";

	$tanken_at_url = "http://www.spritpreisrechner.at/ts/GasStationServlet";
	$tanken_at_fuel = getConfigValue('tanken_at_fuel');
	$tanken_at_lat = getConfigValue('tanken_at_lat');
	$tanken_at_lng = getConfigValue('tanken_at_lng');

	$tanken_at_url = $tanken_at_url . '?data=["","' . $tanken_at_fuel . '",' . $tanken_at_lng . ',' . $tanken_at_lat . ','.$tanken_at_lng.',' . $tanken_at_lat . ']';

	$file = file_get_contents($tanken_at_url);

	header("Content-Type: application/json");
	echo $file;

?>
