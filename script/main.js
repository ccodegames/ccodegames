
$(document).ready(function() {
    $(".dropDown").hover(function() {
        $(this).children(".dropDownItems").slideToggle(200);
    });

    $(".mainHeader").on('click', function() {
        window.location.href = "/index.html"
    });
});
