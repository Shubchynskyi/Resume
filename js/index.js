
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class 'modal'
    const modals = document.getElementsByClassName('modal');

    // Get all elements with id starting with 'myBtn'
    const btns = Array.from(document.querySelectorAll('[id^="myBtn"]'));

    // Get all elements with class 'close'
    const spans = Array.from(document.getElementsByClassName('close'));

    // Iterate over each button
    btns.forEach(function(btn, index) {
        // Add a click event listener that opens the corresponding modal window
        btn.onclick = function() {
            modals[index].style.display = "block";
        }
    });

    // Iterate over each 'close' element
    spans.forEach(function(span, index) {
        // Add a click event listener that closes the corresponding modal window
        span.onclick = function() {
            modals[index].style.display = "none";
        }
    });

    // Initialize onclick event for the window to close modal windows when clicked outside
    window.onclick = function(event) {
        Array.from(modals).forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});

document.getElementById('hiddenInstruction').addEventListener('click', function() {
    const instructions = document.getElementById('instructions');
    if (instructions.style.display === 'none') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
});

document.querySelectorAll('.collapsible').forEach(function (button) {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});

(function() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang && userLang.toLowerCase().startsWith("de") && !window.location.pathname.endsWith("de.html")) {
        window.location.href = 'de.html';
    }
})();

function changeLanguage(lang) {
    if (lang === 'en') {
        window.location.href = 'index-en.html';
    } else if (lang === 'de') {
        window.location.href = 'index-de.html';
    }
}