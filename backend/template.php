<!-- <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq4vAa92p2X9LmLlU3Z4vvjioVNf21frs&signed_in=true&libraries=places&callback=initAutocomplete" async defer></script> -->

<?php
	$tanken_at_key = getConfigValue('tanken_at_key');
	$tanken_at_fuel = getConfigValue('tanken_at_fuel');
	$tanken_at_radius = getConfigValue('tanken_at_radius');
	$tanken_at_sort = getConfigValue('tanken_at_sort');
	$tanken_at_place = getConfigValue('tanken_at_place');
	$tanken_at_name_mode = getConfigValue('tanken_at_name_mode');
	$tanken_at_lng = getConfigValue('tanken_at_lng');
	$tanken_at_lat = getConfigValue('tanken_at_lat');

	if($tanken_at_radius == 'GLANCR_DEFAULT') { $tanken_at_radius = 5; }
	if($tanken_at_fuel == 'GLANCR_DEFAULT') { $tanken_at_fuel = "all"; }
	if($tanken_at_sort == 'GLANCR_DEFAULT') { $tanken_at_sort = "price"; }
	if($tanken_at_name_mode == 'GLANCR_DEFAULT') { $tanken_at_name_mode = 0; }
?>

<h6><?php echo _('tanken_at_fuel'); ?></h6>
<select id="tanken_at_fuel">
	<option value="" disabled><?php echo _('tanken_at_fuel'); ?></option>
	<option value="SUP" <?php if ($tanken_at_fuel == "SUP"){ echo "selected";} ?>><?php echo _('tanken_at_super'); ?></option>
	<option value="DIE" <?php if ($tanken_at_fuel == "DIE"){ echo "selected";} ?>><?php echo _('tanken_at_diesel'); ?></option>
</select>

<!-- <h6><?php echo _('tanken_at_radius'); ?></h6>
<input type="number" id="tanken_at_radius" min="1" max="25" placeholder="<?php echo _('tanken_at_radius'); ?>" value="<?php echo $tanken_at_radius; ?>"/> -->

<!-- <h6><?php echo _('tanken_at_sort'); ?></h6>
<select id="tanken_at_sort">
	<option value="" disabled><?php echo _('tanken_at_sort'); ?></option>
	<option value="price" <?php if ($tanken_at_sort == "price"){ echo "selected";} ?>><?php echo _('tanken_at_price'); ?></option>
	<option value="dist"  <?php if ($tanken_at_sort == "dist") { echo "selected";} ?>><?php echo _('tanken_at_distance'); ?></option>
</select> -->

<!-- <h6><?php echo _('tanken_at_place'); ?></h6>
<div id="locationField">
	<input id="autocomplete" placeholder="<?php echo _('tanken_at_place'); ?>" type="text" value="<?php echo $tanken_at_place; ?>"></input>
</div> -->

<h6>Latitude (LAT) (<a href="http://www.gps-coordinates.net/gps-coordinates-converter" target="_blank"><?php echo _('tanken_at_convert_coordinates'); ?></a>)</h6>
<input type="text" id="tanken_at_lat" min="1" max="25" placeholder="47.55959860000001" value="<?php echo $tanken_at_lat; ?>"/>

<h6>Longitude (LNG) (<a href="http://www.gps-coordinates.net/gps-coordinates-converter" target="_blank"><?php echo _('tanken_at_convert_coordinates'); ?></a>)</h6>
<input type="text" id="tanken_at_lng" min="1" max="25" placeholder="7.588576099999955" value="<?php echo $tanken_at_lng; ?>"/>

<h6><?php echo _('tanken_at_name_mode'); ?></h6>
<select id="tanken_at_name_mode">
	<option value="" disabled><?php echo _('tanken_at_name_mode'); ?></option>
	<option value="0" <?php if ($tanken_at_name_mode == "0"){ echo "selected";} ?>><?php echo _('tanken_at_only_street'); ?></option>
	<option value="1" <?php if ($tanken_at_name_mode == "1"){ echo "selected";} ?>><?php echo _('tanken_at_only_place'); ?></option>
	<option value="2" <?php if ($tanken_at_name_mode == "2"){ echo "selected";} ?>><?php echo _('tanken_at_street_place'); ?></option>
</select>

<div id="tanken_at_error" style="color:red"></div>
<div id="tanken_at_ok" style="color:green"></div><br />

<a href="/modules/tanken_at/assets/reset.php"><?php echo _("tanken_at_reset_config"); ?></a><br /><br />

<div class="block__add" id="tanken_at__edit">
	<button class="tanken_at__edit--button" href="#">
		<span><?php echo _('tanken_at_save'); ?></span>
	</button>
</div>
