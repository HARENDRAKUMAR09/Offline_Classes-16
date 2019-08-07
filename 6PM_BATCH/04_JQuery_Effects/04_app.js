// hide() , show()
$('#btn-1').click(function() {
    let btnText = $(this).text();
    if(btnText === 'hide'){
        $('#card-1').hide(500);
        $(this).text('show');
    }
    else{
        $('#card-1').show(500);
        $(this).text('hide');
    }
});

// hide() , show() => toggle()
$('#btn-2').click(function() {
    let btnText = $(this).text();
    $('#card-2').toggle(500);
    if(btnText === 'hide'){
        $(this).text('show');
    }
    else{
        $(this).text('hide');
    }
});

/*
hide() , show() => toggle()

fadeOut() , fadeIn()  => fadeToggle()

slideUp() , slideDown() => slideToggle()
 */