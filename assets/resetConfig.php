<?php

	include('../../../config/glancrConfig.php');

	setConfigValue("tanken_at_key", "");
	setConfigValue("tanken_at_place", "");
	setConfigValue("tanken_at_fuel", "SUP");
	setConfigValue("tanken_at_radius", "");
	setConfigValue("tanken_at_sort", "");
	setConfigValue("tanken_at_ok", "");
	setConfigValue("tanken_at_name_mode", "0");
	setConfigValue("tanken_at_lng", "16.3338647145157");
	setConfigValue("tanken_at_lat", "48.1967330599383");
	setConfigValue("reload", "1");

	header("location: /config/");

?>
