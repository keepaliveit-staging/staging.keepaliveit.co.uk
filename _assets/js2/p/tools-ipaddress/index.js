$(document).ready(function(){
    // Request user IP from apps service
    $.ajax({
        url: "https://apps.keepaliveit.co.uk/ip/index.php",
        cache: false
    })
    .done(function (result) {
        $("#ip-address-result").html(result.ip);
    });
});