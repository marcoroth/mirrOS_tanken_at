var autocomplete, coordinates, coords;
var place_before = "<?php echo getConfigValue('tanken_at_place'); ?>";

function initAutocomplete() {
	autocomplete = new google.maps.places.Autocomplete(  /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')), {types: ['geocode']});
	autocomplete.addListener('place_changed', setPlace);
}

function setPlace(){
	var place = autocomplete.getPlace();
	coordinates = autocomplete.gm_accessors_.place.Fc.place.geometry.location;
}

function setCoords(){
	coords = { lng: getLng(), lat: getLat() };
}

function getLat() {
	return coordinates.lat();
}

function getLng() {
	return coordinates.lng();
}

function setValues(){
	setCoords();
	$.post('/config/setConfigValueAjax.php', {'key': 'tanken_at_lat', 'value': coords.lat});
	$.post('/config/setConfigValueAjax.php', {'key': 'tanken_at_lng', 'value': coords.lng});
}

$('#tanken_at__edit').click(function() {

	tanken_at_fuel = $("#tanken_at_fuel").val();
	tanken_at_key = $("#tanken_at_key").val();
	tanken_at_sort = $("#tanken_at_sort").val();
	tanken_at_radius = $("#tanken_at_radius").val();
	tanken_at_name_mode = $("#tanken_at_name_mode").val();
	tanken_at_lat = $("#tanken_at_lat").val();
	tanken_at_lng = $("#tanken_at_lng").val();

	// var url = "https://creativecommons.tankerkoenig.de/json/";
	// url = url + "list.php" + "?lat=" + tanken_at_lat + "&lng=" + tanken_at_lng + "&rad=" + tanken_at_radius + "&type=" + tanken_at_fuel + "&apikey=" + tanken_at_key + "&sort=" + tanken_at_sort;
  //
	// $.get(url).done(function(data) {

		// if (data.ok) {
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_fuel', 'value': tanken_at_fuel});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_key', 'value': tanken_at_key});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_sort', 'value': tanken_at_sort});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_radius', 'value': tanken_at_radius});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_name_mode', 'value': tanken_at_name_mode});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_lat', 'value': tanken_at_lat});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_lng', 'value': tanken_at_lng});
			$.post('setConfigValueAjax.php', {'key': 'tanken_at_ok', 'value': true});
			$.post('setConfigValueAjax.php', {'key': 'reload', 'value': 1});

			$('#ok').show(30, function() {
				$(this).hide('slow');
			});

			$("#tanken_at_ok").text("Daten erfolgreich gespeichert");
			$("#tanken_at_error").text("");

		// } else {
		// 	$('#error').show(30, function() {
		// 		$(this).hide('slow');
		// 	});
    //
		// 	$("#tanken_at_ok").text("");
		// 	$("#tanken_at_error").text(data.message);
		// 	$.post('setConfigValueAjax.php', {'key': 'tanken_at_ok', 'value': data.message});
		// }
	// });
});
