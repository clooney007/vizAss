$(document).ready(function(){
	$('.table').on('click', 'tr', function(){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});
		
	$('.dropdown-sex').on('click', 'li', function(){
		$('#player-sex').val($('a', this).attr('val'));
	});
	
	$('.dropdown-tier').on('click', 'li', function(){
		$('#player-tier').val($('a', this).attr('val'));
	});
	
	BootstrapDialog.alert({
        title: 'WARNING',
        message: 'Warning! No Banana!',
        type: BootstrapDialog.TYPE_WARNING, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        buttonLabel: 'Roar! Why!', // <-- Default value is 'OK',
        callback: function(result) {
            // result will be true if button was click, while it will be false if users close the dialog directly.
            alert('Result is: ' + result);
        }
    });

});






