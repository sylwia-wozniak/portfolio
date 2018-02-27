(function () {
    window.onload = init;

    function init() {
        document.onmousemove = getCursorXY;
    }

    function getCursorXY(e) {
        var c1 =  event.clientX - 20;
        var c2 =  event.clientY - 20;
        var v1 = c1 - 20
        var v2 = c2 - 20
        var w1 = c1 - 15
        var w2 = c2 - 15

        var cursorIn = document.getElementsByClassName('cursor-in')[0];
        var cursorOut = document.getElementsByClassName('cursor-out')[0];

        var cursorInClasses = cursorIn.classList;
        cursorInClasses.add('cursor-in--active');

        var cursorOutClasses = cursorOut.classList;
        cursorOutClasses.add('cursor-out--active');

        cursorIn.style.transform = 'translate(' + w1 + 'px,' + w2 + 'px)';
        cursorOut.style.transform = 'translate(' + v1 + 'px,' + v2 + 'px)';
    }
})();


