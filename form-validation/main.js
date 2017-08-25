/*Открытие и закрытие формы*/

$('#openFormValidation').click(function () {
	$('.modal-wrapper').show();
});

$('#close').click(function () {
	$('.modal-wrapper').hide();
});

/*Проверка на валидность*/

function checkWord() {
	if ($('#email').val() != ''){
		$('#btn-sbt').removeAttr('disabled');
	}
	else {
		$('#btn-sbt').attr('disabled', 'disable');
	}
};

function checkValid() {

var email = $("#email").val();

if(!isValidEmailAddress(email)){
	error=1;
}
else {
	error=0;
}

if($('#pass').val()<=5){
	$("#password_text").html("Введите минимум 5 символов");
	$("#password_text").fadeIn("slow");
}
	if(error==0){
		return true;
	}
	else {
		var error_text = '';
		if (error == 1) error_text = "Email введен не корректно";
		$("#email_text").html(error_text);
		$("#email_text").fadeIn("slow");
		return false;
	}
};

function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
};











































// $('#email').blur(function () {
// 	if($(this).val() != '') {
// 		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
// 		if(pattern.test($(this).val())){
// 			$(this).css({'border' : '1px solid #569b44'});
// 			$('#valid').text('Верно');
// 		} else {
// 			$(this).css({'border' : '1px solid #ff0000'});
// 			$('#valid').text('Не верно');
// 		}
// 	} else {
// 		$(this).css({'border' : '1px solid #ff0000'});
// 		$('#valid').text('Поле email не должно быть пустым');
// 	}
// })