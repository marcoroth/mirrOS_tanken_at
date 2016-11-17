$(document).ready(function () {
	reloadGasStation();
});

function reloadGasStation() {

	var url = "https://creativecommons.tankerkoenig.de/json/";
	var key = "15afa60d-99ea-de77-cc1e-46856002c403";
	var sprit =  ['e5', 'e10', 'diesel', 'all'];
	var type = sprit[2];
	var radius = "3"; //km
	var sort_av = ['price', 'dist'];
	var sort = sort_av[0];

	var key = "<?php echo getConfigValue('tanken_key'); ?>";
	var type = "<?php echo getConfigValue('tanken_fuel'); ?>";
	var sort = "<?php echo getConfigValue('tanken_sort'); ?>";
	var radius = "<?php echo getConfigValue('tanken_radius'); ?>";
	var place = "<?php echo getConfigValue('tanken_place'); ?>";
	var lat = "<?php echo getConfigValue('tanken_lat'); ?>";
	var lng = "<?php echo getConfigValue('tanken_lng'); ?>";

	url = url + "list.php" + "?lat=" + lat + "&lng=" + lng + "&rad=" + radius + "&type=" + type + "&apikey=" + key + "&sort=" + sort;

	$.get(url).done(function(data){
		$("#gas_station_table").empty();

		if (data.status != "error") {
			$("#gas_station_sub_title").text(type + " - " + radius + " km <?php echo _('tanken_radius'); ?>");
			if (data.status == "ok"){
				i = 0;
					$.each(data.stations, function(index, el) {
						if (i < 7){
							$("#gas_station_table").append("<tr></tr>");
							$("#gas_station_table tr:last").append("<td>" + el.price.toString().substring(0, el.price.toString().length - 1).replace(".", ",") + "<sup>" + el.price.toString().slice(-1) + "</sup></td>");

							if (el.houseNumber != null) {
								$("#gas_station_table tr:last").append("<td>" + el.brand + ", " + el.street.toLowerCase() + " " + el.houseNumber + "</td>");
							} else {
								$("#gas_station_table tr:last").append("<td>" + el.brand + ", " + el.street.toLowerCase() + "</td>");
							}
							if (el.isOpen == true) {
								open = "check";
							} else {
								open = "close";
							}
							$("#gas_station_table tr:last").append("<td>" + el.dist + "km</td>");
							$("#gas_station_table tr:last").append("<td><i class='fa fa-" + open + "' aria-hidden='true'></i></td>");
						}
						i++;
					});
			}
		} else {
			$("#gas_station_table").append("Error: "+ data.message);
		}
	});

	// alle 10 Minuten aktualiseren
	window.setTimeout(function() {
		reloadGasStation();
	}, 60000);

}