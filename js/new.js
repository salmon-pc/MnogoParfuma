$(document).ready(function() {
	var $square = $("#small-square");
	
	function runIt() {
        $square.animate({
            right:0
        }, 2000, function() {
            $square.removeAttr("style");
            runIt();
        });
    }

    runIt();
});