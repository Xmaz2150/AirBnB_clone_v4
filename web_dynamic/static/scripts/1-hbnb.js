$(document).ready(function() {
	let selectedAmenities = [];
	let charWidth = 0;

	$('input[type="checkbox"]').change(function() {
		let amenityName = $(this).data('name');

		if ($(this).is(':checked')) {
			selectedAmenities.push(amenityName);
			charWidth += amenityName.length
		} else {
			let index = selectedAmenities.indexOf(amenityName);
			if (index > -1) {
				selectedAmenities.splice(index, 1);
				charWidth -= amenityName.length
			}
		}
		let amenityList = selectedAmenities.join(', ');
		if (amenityList.length > 0) {
			if (amenityList.length <= 27) {
				$('DIV.amenities > h4').text(amenityList);
			} else {
				$('DIV.amenities > h4').text(amenityList.slice(0, 30) + '...');
			}
			console.log(selectedAmenities);
		} else {
			$('DIV.amenities > h4').html('&nbsp;');
		}
	});
});
