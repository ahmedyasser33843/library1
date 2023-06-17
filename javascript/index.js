let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let title = document.querySelector('.jj');
window.onscroll = function () {
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 1.3 + 'px';
    mountains3.style.top = value * .5 + 'px';
    mountains4.style.top = value * .3 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 1.9 + 'px';
    title.style.fontSize = value * .4 + 'px';
    if (scrollY >= 111) {
        if (scrollY > 289) {
            document.querySelector('.main').style.background = "linear-gradient(rgb(38 184 175) , #174d5d)"
            } else {
                document.querySelector('.main').style.background = "linear-gradient(rgb(73, 2, 64) , #010f13)"
        };
        title.style.fontSize = 40 + 'px';
    };
};

