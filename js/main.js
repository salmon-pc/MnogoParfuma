$(function () {
    $(document).on("click", ".main_slider_block .prev", function () {
        var button = $(this);
        var visible_obj_img = $(".main_slider_block .slides_wrapper .slide:visible");
        var visible_obj_content = $(".main_slider_block .slides_content .slide:visible");
        var total_slides = $(".main_slider_block .slides_content .slide").length;
        $(".main_slider_block .slide:visible").fadeOut(500);
        if (visible_obj_img.data("number") > 1)
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + parseInt(visible_obj_img.data("number") - 1));
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + parseInt(visible_obj_img.data("number") - 1));
        }
        else
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + total_slides);
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + total_slides);

        }
        new_visible_obj_img.fadeIn(500);
        new_visible_obj_content.fadeIn(500);
         return false;
    });
    $(document).on("click", ".main_slider_block .next", function () {
        var button = $(this);
        var visible_obj_img = $(".main_slider_block .slides_wrapper .slide:visible");
        var visible_obj_content = $(".main_slider_block .slides_content .slide:visible");
        var total_slides = $(".main_slider_block .slides_content .slide").length;
        $(".main_slider_block .slide:not(.hide)").fadeOut(500);
        if (visible_obj_img.data("number") < total_slides )
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + parseInt(visible_obj_img.data("number") + 1));
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + parseInt(visible_obj_img.data("number") + 1));
        }
        else
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + 1);
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + 1);

        }
        new_visible_obj_img.fadeIn(500);
        new_visible_obj_content.fadeIn(500);
        return false;
    });
});

