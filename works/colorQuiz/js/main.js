(function () {
    window.addEventListener('load', init);

    function init() {
        document.addEventListener('mousemove', updateCursorPosition);
    }

    function updateCursorPosition(event) {
        const cursorIn = document.querySelector('.cursor-in');
        const cursorOut = document.querySelector('.cursor-out');

        const offsetX = 20;
        const offsetY = 20;

        const cursorInClasses = cursorIn.classList;
        cursorInClasses.add('cursor-in--active');

        const cursorOutClasses = cursorOut.classList;
        cursorOutClasses.add('cursor-out--active');

        const cursorInTransform = `translate(${event.clientX - offsetX - 15}px, ${event.clientY - offsetY - 15}px)`;
        const cursorOutTransform = `translate(${event.clientX - offsetX}px, ${event.clientY - offsetY}px)`;

        cursorIn.style.transform = cursorInTransform;
        cursorOut.style.transform = cursorOutTransform;
    }
})();
