
$(document).ready(function() {
    $(".dropDown").hover(function() {
        $(this).children(".dropDownItems").slideToggle(0.5);
    });

    $(".mainHeader").on('click', function() {
        window.location.href = "/index.html"
    });
});
