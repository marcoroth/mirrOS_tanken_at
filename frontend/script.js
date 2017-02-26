$(document).ready(function () {
	reloadGasStation();
});

var name_mode;

function reloadGasStation() {

	var url = "https://creativecommons.tankerkoenig.de/json/";
	var ok = "<?php echo getConfigValue('tanken_ok'); ?>";
	var key = "<?php echo getConfigValue('tanken_key'); ?>";
	var type = "<?php echo getConfigValue('tanken_fuel'); ?>";
	var sort = "<?php echo getConfigValue('tanken_sort'); ?>";
	var radius = "<?php echo getConfigValue('tanken_radius'); ?>";
	var place = "<?php echo getConfigValue('tanken_place'); ?>";
	var lat = "<?php echo getConfigValue('tanken_lat'); ?>";
	var lng = "<?php echo getConfigValue('tanken_lng'); ?>";
	var name_mode = "<?php echo getConfigValue('tanken_name_mode'); ?>";

	if (ok == "true") {
		url = url + "list.php" + "?lat=" + lat + "&lng=" + lng + "&rad=" + radius + "&type=" + type + "&apikey=" + key + "&sort=" + sort;

		$.get(url).done(function(data){

			if (data.ok) {
				$("#gas_station_table").empty();

				$("#gas_station_sub_title").text(type + " - " + radius + " km <?php echo _('tanken_radius'); ?>");

				if (data.status == "ok"){
					i = 0;
					$.each(data.stations, function(index, el) {
						if (i < 7){
							$("#gas_station_table").append("<tr></tr>");
							$("#gas_station_table tr:last").append("<td>" + el.price.toString().substring(0, el.price.toString().length - 1).replace(".", ",") + "<sup>" + el.price.toString().slice(-1) + "</sup></td>");

							station_name = el.brand;
							street = el.street.toLowerCase();
							houseNumber = el.houseNumber;
							place = el.place;

							if (houseNumber != null) {
								street = street + " " + houseNumber;
							}

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
				$.post('/config/setConfigValueAjax.php', {'key' : 'tanken_ok', 'value' : data.message});
				location.reload();
			}
		});

		// alle 30 Minuten aktualiseren
		window.setTimeout(function() {
			reloadGasStation();
		}, 1800000);

	} else {
		$("#gas_station_table").append("<?php echo _('tanken_error'); ?>" + ok);
	}

}
