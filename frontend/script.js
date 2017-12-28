$(document).ready(function () {
	reloadGasStation();
});

var name_mode;

function reloadGasStation() {

	var url = "/modules/tanken_at/assets/stations.php";
	var ok = "<?php echo getConfigValue('tanken_at_ok'); ?>";
	var key = "<?php echo getConfigValue('tanken_at_key'); ?>";
	var type = "<?php echo getConfigValue('tanken_at_fuel'); ?>";
	var sort = "<?php echo getConfigValue('tanken_at_sort'); ?>";
	var radius = "<?php echo getConfigValue('tanken_at_radius'); ?>";
	var place = "<?php echo getConfigValue('tanken_at_place'); ?>";
	var lat = "<?php echo getConfigValue('tanken_at_lat'); ?>";
	var lng = "<?php echo getConfigValue('tanken_at_lng'); ?>";
	var name_mode = "<?php echo getConfigValue('tanken_at_name_mode'); ?>";

	$.get(url).done(function(data){

		$("#gas_station_table").empty();

		if (type == "SUP"){
			type_text = "<?php echo _('tanken_at_super'); ?>";
		} else {
			type_text = "<?php echo _('tanken_at_diesel'); ?>";
		}

		$("#gas_station_sub_title").text(type_text);

		i = 0;
		$.each(data, function(index, el) {
			if (i < 5){
				$("#gas_station_table").append("<tr></tr>");

				price = el.spritPrice[0].amount;

				if (price == null){
					price = "-";
				}

				$("#gas_station_table tr:last").append("<td>" + price.toString().substring(0, price.toString().length - 1).replace(".", ",") + "<sup>" + price.toString().slice(-1) + "</sup></td>");

				station_name = el.gasStationName;
				street = el.address.toLowerCase();
				place = el.city;

				if (station_name == "" || station_name == "Null"){
					station_name = "No Name";
				}

				if (name_mode == "0" || name_mode == "2") {
					station_name = station_name + ", " + street;
				}

				if (name_mode == "1" || name_mode == "2") {
					station_name = station_name + ", " + place;
				}

				$("#gas_station_table tr:last").append("<td>" + station_name + "</td>");

				if (el.open == true) {
					open = "check";
				} else {
					open = "close";
				}
				$("#gas_station_table tr:last").append("<td>" + el.distance + "km</td>");
				$("#gas_station_table tr:last").append("<td><i class='fa fa-" + open + "' aria-hidden='true'></i></td>");
			}
			i++;
		});

	});

	// alle 30 Minuten aktualiseren
	window.setTimeout(function() {
		reloadGasStation();
	}, 1800000);

}

// copied from http://stackoverflow.com/a/979325
var sort_by = function(field, reverse, primer){
   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;
   return function (a, b) { return a = key(a), b = key(b), reverse * ((a > b) - (b > a)); }
}
