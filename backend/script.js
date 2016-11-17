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
	$.post('setConfigValueAjax.php', {'key' : 'tanken_fuel', 'value' : $("#tanken_fuel").val()});
	$.post('setConfigValueAjax.php', {'key' : 'tanken_key', 'value' : $("#tanken_key").val()});
	$.post('setConfigValueAjax.php', {'key' : 'tanken_sort', 'value' : $("#tanken_sort").val()});
	$.post('setConfigValueAjax.php', {'key' : 'tanken_radius', 'value' : $("#tanken_radius").val()});
	$.post('setConfigValueAjax.php', {'key' : 'tanken_place', 'value' : $("#autocomplete").val()});

	if (place_before != $("#autocomplete").val()) {
		setValues();
	}

	$('#ok').show(30, function() {
		$(this).hide('slow');
	})
});
