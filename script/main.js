
$(document).ready(function() {
    $(".dropDown").hover(function() {
        $(this).children(".dropDownItems").slideToggle();
    });

    $(".mainHeader").on('click', function() {
        window.location.href = "/index.html"
    });
});
