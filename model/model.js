export function loadPage(pageId) {
    if (pageId !== '' && pageId !== "home") {
        $.get(`pages/${pageId}.html`, function (data) {
            $('#app').html(data);
            /* These lines of code are manipulating the classes of certain elements in the HTML
            document. Specifically, they are changing the classes of elements with the following
            selectors: */
            $(".logo .whiteLogo").removeClass("whiteLogo").addClass("blackLogo");
            $(".nav-holder nav").removeClass("white").addClass("black");
            $(".nav-holder nav a").removeClass("whiteNav").addClass("blackNav");
        });
    } else {
        $.get(`pages/home.html`, function (data) {
            $('#app').html(data);
            /* These lines of code are manipulating the classes of certain elements in the HTML
            document. Specifically, they are changing the classes of elements with the following
            selectors: */
            $(".logo .blackLogo").removeClass("blackLogo").addClass("whiteLogo");
            $(".nav-holder nav").removeClass("black").addClass("white");
            $(".nav-holder nav a").removeClass("blackNav").addClass("whiteNav");
        });
    }
}
