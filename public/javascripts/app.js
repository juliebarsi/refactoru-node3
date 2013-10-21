$("#signup-form").submit(function(e){
		e.preventDefault() //--prevents page from refresshing?

		//make a post request to our / endpoint
		$.post('/', $(this).serialize(), function(data){
			console.log(data)//--make sure the data is being got
			// stop the loader
			//$('#loader').removeClass('spin') //--is this necessary?

			//if there was an error, show the error
			if(data.error){
				// add the error text to the error div
				$('#message').text(data.error)
			}

			// if the request returned a success message, display it.
			if(data.success){
				$('#message').text(data.success)
			}
		})
	});