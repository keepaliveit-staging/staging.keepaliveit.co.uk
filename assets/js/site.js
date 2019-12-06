$(document).ready(function() {

    $(".vat-toggle").click(function(e){

        e.preventDefault();

        var notyf = new Notyf();

        notyf.error({
            message: 'Now showing prices including / excluding VAT.',
            duration: 3000,
            types: [
                {
                    type: 'warning',
                    backgroundColor: 'orange',
                    icon: {
                        className: 'material-icons',
                        tagName: 'i',
                        text: 'info'
                    }
                },
                {
                    type: 'info',
                    backgroundColor: 'grey',
                    duration: 2000
                }
            ]
        });

        return true;
    });

});