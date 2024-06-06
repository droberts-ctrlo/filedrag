import FileDrag from "./lib/filedrag";

(function ($) {
    // @ts-expect-error - Extend jQuery with the filedrag function
    $.fn.filedrag = function (options: FileDragOptions) {
        options = $.extend({
            allowMultiple: true,
            debug: false
        }, options);

        if (!this.data("filedrag")) {
            this.data("filedrag", "true");
            new FileDrag(this, options, (files) => {
                if (options.debug) console.log("onFileDrop", files);
                this.trigger("onFileDrop", files)
            })
        }

        return this;
    };
})(jQuery);
