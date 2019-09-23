$(function() {

    if ($('main').hasClass('main-page')) {

        $(document).scroll(function() {

            let scrollTop = $(document).scrollTop();
            let sPopular = $('.popular-section').offset().top;
            let sBuyTours = $('.buy-tours-section').offset().top;
            let sMeritSection = $('.merit-section').offset().top;
            let sSearch = $('.search-tours-section').offset().top;

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

    if ($('main').hasClass('blog-page')) {
        $(document).scroll(function() {

            let scrollTop = $(document).scrollTop();
            let popularArticles = $('.popular-articles-section').offset().top;

            if (scrollTop > popularArticles - 300) {
                let item = $('.article');

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
        })
    }

    if ($('main').hasClass('about-page')) {

        let links = $('.links__item');
        let sAbout = $('.about-section').offset().top;
        let sHowBy = $('.how-buy-section').offset().top;

        setTimeout(function() {
            $('.about-page .intro-title').addClass('slide-up');
        }, 200)
        setTimeout(function() {
            $(links[0]).addClass('fade-in');
        }, 400)
        setTimeout(function() {
            $(links[1]).addClass('fade-in');
        }, 600)
        setTimeout(function() {
            $(links[2]).addClass('fade-in');
        }, 800)
        setTimeout(function() {
            $(links[3]).addClass('fade-in');
        }, 1000)
        setTimeout(function() {
            $(links[4]).addClass('fade-in');
        }, 1200)

        $(document).scroll(function() {

            let scrollTop = $(document).scrollTop();

            if (scrollTop > sAbout - 300) {

                let item = $('.advantage');

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
                setTimeout(function() {
                    $(item[4]).addClass('slide-up');
                }, 1000)
                setTimeout(function() {
                    $(item[5]).addClass('slide-up');
                }, 1200)
            }

            if (scrollTop > sHowBy - 300) {

                $('.img-wrap').addClass('slide-left');

                setTimeout(function() {
                    $('.buy-tabs-wrap').addClass('fade-in');
                }, 400)
            }

        })
    }

})