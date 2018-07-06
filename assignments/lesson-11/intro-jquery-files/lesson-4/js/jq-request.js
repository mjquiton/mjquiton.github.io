$(function () {
    // All jQuery Code Goes Here
    var toggleStyle = function () {

        var inputFields = $('input[type="text"]');

        if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
            /*Set background color to white*/
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            /*set background color to red*/
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);
})
