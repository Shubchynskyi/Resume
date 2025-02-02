document.addEventListener('DOMContentLoaded', function () {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    const currentPath = window.location.pathname;

    const isIndexHtml = currentPath.endsWith('index.html') || currentPath === '/' || currentPath === '/index.html';
    const isIndexDeHtml = currentPath.endsWith('index-de.html');

    const userLang = navigator.language || navigator.userLanguage;
    const browserLanguage = userLang.toLowerCase().startsWith("de") ? 'de' : 'en';

    if (preferredLanguage) {
        if (preferredLanguage === 'de' && !isIndexDeHtml) {
            window.location.href = 'index-de.html';
            return;
        } else if (preferredLanguage === 'en' && !isIndexHtml) {
            window.location.href = 'index.html';
            return;
        }
    } else {
        if (browserLanguage === 'de' && !isIndexDeHtml) {
            window.location.href = 'index-de.html';
            return;
        } else if (browserLanguage === 'en' && !isIndexHtml) {
            window.location.href = 'index.html';
            return;
        }
    }

    const modals = document.getElementsByClassName('modal');
    const btns = Array.from(document.querySelectorAll('[id^="myBtn"]'));
    const spans = Array.from(document.getElementsByClassName('close'));

    btns.forEach(function (btn, index) {
        btn.onclick = function () {
            modals[index].style.display = "block";
        };
    });

    spans.forEach(function (span, index) {
        span.onclick = function () {
            modals[index].style.display = "none";
        };
    });

    window.onclick = function (event) {
        Array.from(modals).forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
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

function changeLanguage(lang) {
    if (lang === 'en') {
        localStorage.setItem('preferredLanguage', 'en');
        window.location.href = 'index.html';
    } else if (lang === 'de') {
        localStorage.setItem('preferredLanguage', 'de');
        window.location.href = 'index-de.html';
    }
}