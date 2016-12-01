var autocomplete, coordinates, coords;
var place_before = "<?php echo getConfigValue('tanken_place'); ?>";

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
	$.post('/config/setConfigValueAjax.php', {'key': 'tanken_lat', 'value': coords.lat});
	$.post('/config/setConfigValueAjax.php', {'key': 'tanken_lng', 'value': coords.lng});
}

$('#tanken__edit').click(function() {

	tanken_fuel = $("#tanken_fuel").val();
	tanken_key = $("#tanken_key").val();
	tanken_sort = $("#tanken_sort").val();
	tanken_radius = $("#tanken_radius").val();
	tanken_name_mode = $("#tanken_name_mode").val();
	tanken_lat = $("#tanken_lat").val();
	tanken_lng = $("#tanken_lng").val();

	var url = "https://creativecommons.tankerkoenig.de/json/";
	url = url + "list.php" + "?lat=" + tanken_lat + "&lng=" + tanken_lng + "&rad=" + tanken_radius + "&type=" + tanken_fuel + "&apikey=" + tanken_key + "&sort=" + tanken_sort;

	$.get(url).done(function(data) {

		if (data.ok) {
			$.post('setConfigValueAjax.php', {'key' : 'tanken_fuel', 'value' : tanken_fuel});
			$.post('setConfigValueAjax.php', {'key' : 'tanken_key', 'value' : tanken_key});
			$.post('setConfigValueAjax.php', {'key' : 'tanken_sort', 'value' : tanken_sort});
			$.post('setConfigValueAjax.php', {'key' : 'tanken_radius', 'value' : tanken_radius});
			$.post('setConfigValueAjax.php', {'key' : 'tanken_name_mode', 'value' : tanken_name_mode});
			$.post('setConfigValueAjax.php', {'key': 'tanken_lat', 'value': tanken_lat});
			$.post('setConfigValueAjax.php', {'key': 'tanken_lng', 'value': tanken_lng});
			$.post('setConfigValueAjax.php', {'key': 'tanken_ok', 'value': true});
			$.post('setConfigValueAjax.php', {'key': 'reload', 'value': 1});

			$('#ok').show(30, function() {
				$(this).hide('slow');
			});

			$("#tanken_ok").text("Daten erfolgreich gespeichert");
			$("#tanken_error").text("");

		} else {
			$('#error').show(30, function() {
				$(this).hide('slow');
			});

			$("#tanken_ok").text("");
			$("#tanken_error").text(data.message);
			$.post('setConfigValueAjax.php', {'key': 'tanken_ok', 'value': data.message});
		}
	});
});
