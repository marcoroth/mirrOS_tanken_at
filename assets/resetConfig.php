<?php

	include('../../../config/glancrConfig.php');

	setConfigValue("tanken_key", "");
	setConfigValue("tanken_place", "");
	setConfigValue("tanken_fuel", "e5");
	setConfigValue("tanken_radius", "10");
	setConfigValue("tanken_sort", "price");
	setConfigValue("tanken_ok", "false");
	setConfigValue("tanken_name_mode", "0");
	setConfigValue("tanken_lng", "13.404953999999975");
	setConfigValue("tanken_lat", "52.52000659999999");
	setConfigValue("reload", "1");

	header("location: /config/");

?>
