(function ($) {
    $(document).ready(function () {
        var $popup = '<div style="display: none;" id="popup_content">\n' +
            '    <h2>Грузоперевозки</h2>\n' +
            '</div>';

        function togle_class() {
            $('.service_block').on('click', function () {
                $('.service_block').removeClass('active');
                $(this).addClass('active');
                // console.log('click', $(this))
                let title_popup = $(this).find('h3').text();
                $popup = '<div style="display: none;" id="popup_content">\n' +
                    '<h2>' + title_popup + '</h2>\n' +
                    '</div>';
                // console.log('click', title_popup)
            })
        }

        function popup() {
            $('#popup_open').on('click', function () {
                $.fancybox.open($popup);
            })
            // $('#popup_content').find('h2').text(title_popup);
        }

        togle_class(), popup();
    });
})(jQuery);