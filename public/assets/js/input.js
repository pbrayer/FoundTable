$(function() {

$(document).on("click", ".btn", function(){
let partySize = $("#sell option:selected").val();
sessionStorage.partySize = partySize//This stores the keyword above into session storage. This means when they close their window / browser it will no longer be stored. We are using this to save values between pages.
console.log(partySize)
});

});