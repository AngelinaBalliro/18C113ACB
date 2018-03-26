var switchPosition = 0;
//0 = off, 1 = on

$(document).ready(function () {
    switching();
});

function switching() {
    $("#lightSwitch").click(function () {
        if(switchPosition === 0) {
            $("p").text("ON");
            $("#switcher").css('float','right');
            $("body").css('background-color', 'white');
            $("#position").css('color', 'white');
            switchPosition = 1;
        }
        else {
            $("p").text("OFF");
            $("body").css('background-color', 'black');
            $("#switcher").css('float','left');
            $("#position").css('color', 'black');
            switchPosition = 0;
        }
    });
}
