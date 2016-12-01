<!-- <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq4vAa92p2X9LmLlU3Z4vvjioVNf21frs&signed_in=true&libraries=places&callback=initAutocomplete" async defer></script> -->

<?php
	$tanken_key = getConfigValue('tanken_key');
	$tanken_fuel = getConfigValue('tanken_fuel');
	$tanken_radius = getConfigValue('tanken_radius');
	$tanken_sort = getConfigValue('tanken_sort');
	$tanken_place = getConfigValue('tanken_place');
	$tanken_name_mode = getConfigValue('tanken_name_mode');
	$tanken_lng = getConfigValue('tanken_lng');
	$tanken_lat = getConfigValue('tanken_lat');

	if($tanken_radius == 'GLANCR_DEFAULT') { $tanken_radius = 5; }
	if($tanken_fuel == 'GLANCR_DEFAULT') { $tanken_fuel = "all"; }
	if($tanken_sort == 'GLANCR_DEFAULT') { $tanken_sort = "price"; }
	if($tanken_name_mode == 'GLANCR_DEFAULT') { $tanken_name_mode = 0; }
?>

<h6><?php echo _('tanken_key'); ?></h6>
<input type="text" id="tanken_key" placeholder="<?php echo _('tanken_key'); ?>" value="<?php echo $tanken_key; ?>"/>

<?php echo _('tanken_api'); ?> <a href="https://creativecommons.tankerkoenig.de/#register">tankerkoenig.de</a><br /><br />

<h6><?php echo _('tanken_fuel'); ?></h6>
<select id="tanken_fuel">
	<option value="" disabled><?php echo _('tanken_fuel'); ?></option>
	<option value="e5"     <?php if ($tanken_fuel == "e5")    { echo "selected";} ?>><?php echo _('tanken_super_e5'); ?></option>
	<option value="e10"    <?php if ($tanken_fuel == "e10")   { echo "selected";} ?>><?php echo _('tanken_super_e10'); ?></option>
	<option value="diesel" <?php if ($tanken_fuel == "diesel"){ echo "selected";} ?>><?php echo _('tanken_diesel'); ?></option>
</select>

<h6><?php echo _('tanken_radius'); ?></h6>
<input type="number" id="tanken_radius" min="1" max="25" placeholder="<?php echo _('tanken_radius'); ?>" value="<?php echo $tanken_radius; ?>"/>

<h6><?php echo _('tanken_sort'); ?></h6>
<select id="tanken_sort">
	<option value="" disabled><?php echo _('tanken_sort'); ?></option>
	<option value="price" <?php if ($tanken_sort == "price"){ echo "selected";} ?>><?php echo _('tanken_price'); ?></option>
	<option value="dist"  <?php if ($tanken_sort == "dist") { echo "selected";} ?>><?php echo _('tanken_distance'); ?></option>
</select>

<!-- <h6><?php echo _('tanken_place'); ?></h6>
<div id="locationField">
	<input id="autocomplete" placeholder="<?php echo _('tanken_place'); ?>" type="text" value="<?php echo $tanken_place; ?>"></input>
</div> -->

<h6>Latitude (LAT) (<a href="http://www.gps-coordinates.net/gps-coordinates-converter" target="_blank"><?php echo _('tanken_convert_coordinates'); ?></a>)</h6>
<input type="text" id="tanken_lat" min="1" max="25" placeholder="47.55959860000001" value="<?php echo $tanken_lat; ?>"/>

<h6>Longitude (LNG) (<a href="http://www.gps-coordinates.net/gps-coordinates-converter" target="_blank"><?php echo _('tanken_convert_coordinates'); ?></a>)</h6>
<input type="text" id="tanken_lng" min="1" max="25" placeholder="7.588576099999955" value="<?php echo $tanken_lng; ?>"/>

<h6><?php echo _('tanken_name_mode'); ?></h6>
<select id="tanken_name_mode">
	<option value="" disabled><?php echo _('tanken_name_mode'); ?></option>
	<option value="0" <?php if ($tanken_name_mode == "0"){ echo "selected";} ?>><?php echo _('tanken_only_street'); ?></option>
	<option value="1" <?php if ($tanken_name_mode == "1"){ echo "selected";} ?>><?php echo _('tanken_only_place'); ?></option>
	<option value="2" <?php if ($tanken_name_mode == "2"){ echo "selected";} ?>><?php echo _('tanken_street_place'); ?></option>
</select>

<div id="tanken_error" style="color:red"></div>
<div id="tanken_ok" style="color:green"></div><br />

<a href="/modules/tanken/assets/resetConfig.php">Reset Config</a><br /><br />

<div class="block__add" id="tanken__edit">
	<button class="tanken__edit--button" href="#">
		<span><?php echo _('tanken_save'); ?></span>
	</button>
</div>
