// $(window).load(function(){
//     // Contact form code

//     $('form.email-form').submit(function (e) {
// 		// return false so form submits through jQuery rather than reloading page.
// 		if(e.preventDefault) e.preventDefault();
// 		else e.returnValue = false;

// 		var thisForm 		= $(this).closest('.email-form'),
// 			error 			= 0,
// 			originalError 	= thisForm.attr('original-error'),
// 			loadingSpinner;

// 		if (typeof originalError !== typeof undefined && originalError !== false) {
// 			thisForm.find('.form-error').text(originalError);
// 		}


// 		$(thisForm).find('.validate-required').each(function(){
// 			if($(this).val() === ''){
// 				$(this).addClass('field-error');
// 				error = 1;
// 			}else{
// 				$(this).removeClass('field-error');
// 			}
// 		});

// 		$(thisForm).find('.validate-email').each(function(){
// 			if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
// 				$(this).addClass('field-error');
// 				error = 1;
// 			}else{
// 				$(this).removeClass('field-error');
// 			}
// 		});


//         if (error === 1){
//             $(this).closest('.email-form').find('.form-error').fadeIn(200);
//         }else {
// 			// Hide the error if one was shown
// 			$(this).closest('.email-form').find('.form-error').fadeOut(200);
// 			// Create a new loading spinner while hiding the submit button.
// 			loadingSpinner = $('<div />').addClass('form-loading').insertAfter($(thisForm).find('input[type="submit"]'));
// 			$(thisForm).find('input[type="submit"]').hide();

//             jQuery.ajax({
//                 type: "POST",
//                 url: thisForm.attr("action"),
//                 data: thisForm.serialize(),
//                 success: function (response) {

// 					$(thisForm).find('.form-loading').remove();
// 					$(thisForm).find('input[type="submit"]').show();

// 					if(response && response.success){
// 						thisForm.find('.form-success').fadeIn(1000);
// 						thisForm.find('.form-error').fadeOut(1000);
// 						setTimeout(function(){ thisForm.find('.form-success').text(response.message).fadeOut(500); }, 5000);
// 					} else{
// 						// Keep the current error text in a data attribute on the form
// 						thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
// 						// Show the error with the returned error text.
// 						thisForm.find('.form-error').text(response.message || 'ERROR: Bad input. Please try again.').fadeIn(1000);
// 						thisForm.find('.form-success').fadeOut(1000);
// 					}
//                 },
//                 error: function (errorObject, errorText, errorHTTP) {
//                 	// Keep the current error text in a data attribute on the form
// 					thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
// 					// Show the error with the returned error text.
// 					thisForm.find('.form-error').text('ERROR: Bad input. Please try again.').fadeIn(1000);
// 					thisForm.find('.form-success').fadeOut(1000);
//                 	$(thisForm).find('.form-loading').remove();
// 					$(thisForm).find('input[type="submit"]').show();
//                 }
//             });
//         }
// 		return false;
//     });

// });
