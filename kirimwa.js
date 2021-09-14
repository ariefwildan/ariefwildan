$(document).on('click','.submit', function(){
    var input_blanter = document.getElementById('wa_email');
    
    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6281977094280',
        walink2 = 'Halo saya ingin ',
        text_yes = 'Terima Kasih. Pesan Anda akan segera saya respon',
        text_no = 'Isi semua Formulir lalu klik Submit.';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
    if("" != input_blanter.value){
    
     /* Call Input Form */
    var input_name1 = $("#nama").val(),
        input_number1 = $("#nomor").val(),
        input_textarea1 = $("#pesan").val();
        
    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Nama* : ' + input_name1 + '%0A' +
        '*Nomor HP* : ' + input_number1 + '%0A' +
        '*Pesan* : ' + input_textarea1 + '%0A';
    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
    });