$(function() {
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top }, 500);
        return false;
    });

    $('.js-send-form').on('click', function(e) {
        e.preventDefault();
        var $form = $('.js-form');
        var $success = $('.js-form-success');
        var $inputs = $form.find('.js-input');
        var data = {
            name: '',
            email: '',
            subject: '',
            message: '',
            gdpr: '',
        };

        var errors = Object.keys(data).length;

        $inputs.each(function (){
            var $this = $(this);
            if ($this.val().length <= 0 || ($this.attr('type') === 'checkbox' && !$this.is(':checked'))) {
                $this.parents('.js-input-parent').addClass('has-error');
            } else {
                $this.parents('.js-input-parent').removeClass('has-error');
                data[$this.attr('name')] = $this.val();
                errors = errors -1;
            }
        });

        if (errors === 0 ) {
            $.post("https://sim-rob.eu/form.php", data)
            .done(function( data ) {
                console.log(data);
                if(data.status === 'ok') {
                    $success.slideDown('fast', function() {
                        $(this)[0].scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                    $form.slideUp();
                }
            });
        }
    });

  $('.nav-icon').click(function() {
    $(this).next('ul').slideToggle();
    $(this).toggleClass('nav-icon-close');
  });

});
