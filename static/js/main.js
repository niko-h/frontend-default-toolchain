// Main

// Validators

hideerror = function () {
	$('.form-error').css('display', 'none');
    $('#form-submit').removeAttr('disabled');
}

showerror = function () {
	$('.form-error').css('display', 'block');
    $('#form-submit').attr('disabled', 'disabled');
}

mailvalidate = function () {
    str = $('.form-mail').val();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) { 
    	hideerror();
    } else {
    	showerror();
    }
}

numbervalidate = function () {
	str = $('.form-number').val();
    if (/^\d+$/.test(str) || str.length === 0 ) { 
    	hideerror();
    } else {
    	showerror();
    }
}

textvalidate = function () {
	str = $('.form-name').val();
    if (/^[a-zA-Z]*$/.test(str)) { 
    	hideerror();
    } else {
    	showerror();
    }
}

lengthvalidate = function () {
	str = $('.form-textarea').val();
    if (str.length < 501) { 
    	hideerror();
    } else {
    	showerror();
    }
}
