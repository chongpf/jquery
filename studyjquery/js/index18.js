// parent
// parents
// parentUntil
$(document).ready(function () {
    // $("p").parent().css({border: "2px solid #FF0000"});
    // $("p").parents().css({border: "2px solid #00FF00"});
    $("p").parentsUntil("#div1").css({border: "2px solid #00FF00"});
});