! function(a) {
    "use strict";
    a.fn.chooseIt = function(b) {
        var c = a.extend({
                initSlide: "slide-1",
                navClass: "ci-nav",
                slideClass: "ci-slide"
            }, b),
            d = function() {
                var b = a(this);
                b.parent("." + c.slideClass).fadeOut("fast", function() {
                    a(this).siblings("#" + b.attr("path")).fadeIn("slow")
                })
            };
        return this.each(function() {
            var b = a(this);
            b.children("." + c.slideClass).each(function() {
                a(this).children("." + c.navClass).click(d)
            }).hide(), b.children("#" + c.initSlide).fadeIn("slow")
        })
    }
}(jQuery);
