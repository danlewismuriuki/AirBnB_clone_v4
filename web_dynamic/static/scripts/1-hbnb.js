$(document).ready(function(){
	// create an empty object to store amenities with their status
	// (checked or unchecked)
	const amenities = {};
	// Listen for all changes on all input checkboxes
	$('input[type=checkbox]').change(function (){
	    //Get the data-name attribute of the canged checkbox, whoch represents
	    //the amenity_id
            const amenity_id = $(this).data('name');

	    // check if the checkbox is checked
            if ($(this).is(':checked')) {
		    //if checked, set the amenity_id as a property in the amenities
		    //object with a value of true
		    amenities[amenity_id] = true;
	    } else {
		    // If unchecked, remove the amenity_id from the 'amenities' object
		    delete amenities[amenity_id];
	    }
		// Initialize an empty string to store the list of the selected amenities
		let amenitiesList = '';
		let count = 0;

		// loop through the 'amenities' object to create a comma-separated
		// list of selected amenities
		for (const id in amenities) {
			// If 'amenitiesList' is empty, add the amenity_id without a comma
			// otherwise, add a comma before the next amenity_id
			if (amenitiesList === '') {
				amenitiesList += id;
			}
			else {
				amenitiesList += ', ' + id;
			}
			count++;
			if (count >= 4) break;
		}

		if (count === 4) {
			amenitiesList += '...';
		}
		// update the text inside the he <h4> tag within the 'div.amenities'
		// with the updated list of selected amenities
		$('div.amenities h4').text(amenitiesList);
	});
});
