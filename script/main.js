
$(document).ready(function() {
    $(".dropDown").hover(function() {
        $(this).children(".dropDownItems").slideToggle(0.1);
    });

    $(".mainHeader").on('click', function() {
        window.location.href = "/index.html"
    });
});
