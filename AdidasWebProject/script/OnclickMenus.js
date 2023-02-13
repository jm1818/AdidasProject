function OnClickLogo() {
    page = 1;
    var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
}

function OnClickMen() {
    // console.log("OnClickMen")
    page = 3;
    var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
}

function OnClickWomen() {
    page = 4;
    var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
}

function OnClickKids() {
    page = 5;
    var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
}

function OnClickSports() {
    page = 6;
    var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
}