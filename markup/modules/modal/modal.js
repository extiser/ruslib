$(document).ready(function () {
    $('.modal').hide();

    $('a[data="click-modal"]').click(function () {
        var id = '';
        id = $(this).attr('data-item');

        $(id).slideDown(300);
        $('.modal-overlay').show();
    });

    $('.modal-overlay').click(function () {
        $('.modal, .modal-overlay').hide();
    });
});