import '../../../js/jquery.steps-custom'
import '../../../js/plugins/jquery-ui-custom.min.js'
import '../../../js/plugins/jquery.validate.min.js'
import '../../../js/plugins/additional-methods.min.js'
import '../../../js/plugins/jquery-ui-slider-pips.min.js'
import '../../../js/plugins/jquery-ui-touch-punch.min.js'
import '../../../js/plugins/jquery.formShowHide.min.js'

$(document).ready(function ($) {
    $("#smart-form").steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        labels: {
            finish: "Submit Form",
            next: "Continue",
            previous: "Go Back",
            loading: "Loading..."
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex > newIndex) {
                return true;
            }
            var form = $(this);
            if (currentIndex < newIndex) {
            }
            return form.valid();
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
        },
        onFinishing: function (event, currentIndex) {
            var form = $(this);
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            var form = $(this);
        }
    }).validate({
        errorClass: "state-error",
        validClass: "state-success",
        errorElement: "em",
        onkeyup: false,
        onclick: false,
        rules: {
            firstname: {
                required: true
            },
            emailaddress: {
                required: true
            },
            telephone: {
                required: true,
                number: true
            },
            lastname: {
                required: true
            },
            project_title: {
                required: true
            },
            contact_person: {
                required: true
            },
            generalTerms: {
                required: true
            }
        },
        messages: {
            firstname: {
                required: "Please enter firstname"
            },
            lastname: {
                required: "Please enter lastname"
            },
            emailaddress: {
                required: 'Please enter email'
            },
            telephone: {
                required: 'Please enter telephone',
                number: 'Please enter numbers only'
            },
            project_title: {
                required: "Please enter the project title"
            },
            contact_person: {
                required: 'Please enter contact person'
            },
            generalTerms: {
                required: 'Please agree to our terms'
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).closest('.field').addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.field').removeClass(errorClass).addClass(validClass);
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                element.closest('.option-group').after(error);
            } else {
                error.insertAfter(element.parent());
            }
        }

    });

    /* Project datepicker range
    ----------------------------------------------- */
    $("#start_date").datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 1,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        onClose: function (selectedDate) {
            $("#end_date").datepicker("option", "minDate", selectedDate);
        }
    });

    $("#end_date").datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 1,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        onClose: function (selectedDate) {
            $("#start_date").datepicker("option", "maxDate", selectedDate);
        }
    });

    /* The budget slider
    ------------------------------------------------------ */
    $("#budget_slider").slider({
        range: "min",
        animate: true,
        value: 1000,
        min: 500,
        max: 3000,
        step: 500,
        slide: function (event, ui) {
            $("#budget").val("$" + ui.value);
        }
    });

    $("#budget").val("$" + $("#budget_slider").slider("value"));
    $("#budget_slider").slider("pips", {rest: "label", prefix: "$", suffix: ""});
    $("#budget_slider").slider("float", {prefix: "$", suffix: "", pips: true});

    /* Show hide payment options
    ------------------------------------------------------- */
    $('.smartfm-ctrl').formShowHide();

});
