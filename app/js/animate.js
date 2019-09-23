$(function() {

    if ($('main').hasClass('main-page')) {

        $(document).scroll(function() {

            const scrollTop = $(document).scrollTop();
            const sPopular = $('.popular-section').offset().top;
            const sBuyTours = $('.buy-tours-section').offset().top;
            const sMeritSection = $('.merit-section').offset().top;
            const sSearch = $('.search-tours-section').offset().top;

            //Popular Section
            if (scrollTop > sPopular - 300) {
                let item = $('.popular-section .tour');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
            }

            //Buy-Tours-Section
            if (scrollTop > sBuyTours - 300) {
                let descr = $('.buy-text');
                let title = $('.buy-sub-title');

                $('.img-wrap').addClass('slide-right');

                setTimeout(function() {
                    $('.buy-title').addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(descr[0]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(title[0]).addClass('slide-up');
                }, 500)

                setTimeout(function() {
                    $(descr[1]).addClass('slide-up');
                }, 600)

                setTimeout(function() {
                    $(descr[2]).addClass('slide-up');
                }, 700)

                setTimeout(function() {
                    $(title[1]).addClass('slide-up');
                }, 800)

                setTimeout(function() {
                    $(descr[3]).addClass('slide-up');
                    $(descr[4]).addClass('slide-up');
                    $(descr[5]).addClass('slide-up');
                }, 900)

                setTimeout(function() {
                    $('.buy-link').addClass('fade-in');
                }, 900)
            }

            if (scrollTop > sMeritSection - 300) {
                let item = $('.merit')

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
            }

            if (scrollTop > sSearch - 300) {
                let item = $('.search-info')

                $('.search-img').addClass('fade-in');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)

                setTimeout(function() {
                    $(item[3]).addClass('slide-up');
                }, 800)
            }

        });

    }


})