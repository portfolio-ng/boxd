var vald = 17; //used to nullify consecutive clicks on an already focused textbox,17 or undf
boxheight = window.innerHeight / 2;
$('p.padittop').css('padding-top', boxheight + 'px');
$('p.paditbot').css('padding-bottom', boxheight + 'px');


$(document).on('click', 'textarea', function() {
    $('p.padittop').css('padding-top', boxheight + 'px');
    $('p.paditbot').css('padding-bottom', boxheight + 'px');
    if (vald) {
        $(this).animate({
            height: boxheight
        }, 1000, function() {
            $('p.display').text($('#' + this.id).position().top + ".." + vald + ',.,' + (numb + 4) + ";box: " + boxheight + ";shrunk: " + shrunkheight);

            var postop = $('#' + this.id).position().top;
            var totwin = boxheight * 2;
            var hlfwin = totwin / 2;
            var totbox = boxheight;
            var hlfbox = totbox / 2;
            var offbox = hlfbox + postop;
            var offwin = hlfwin - offbox;
            var centd = $('#foryou.col-midd').scrollTop() - offwin;
            $('#foryou.col-midd').animate({
                scrollTop: centd
            }, 700);

        });
    }
    olebox = boxfoc;
    boxfoc = this;
    vald = '';
});

$('#foryou').scroll(function() {
    $('p.dispy').text($('#foryou').scrollTop() + ' .. pads : t:  : b :' + $('p.padittop').css("padding-top"));
});

$(document).on('blur', 'textarea', function() {
    vald = 17;
    $(this).animate({
        height: shrunkheight
    }, 980); // 17*3=51
    //$('p.padittop').css('padding-top',0+'px');
    //$('p.paditbot').css('padding-bottom',0+'px');
});

$(document).on('keyup change', 'textarea', function() {
    $('p.display').text('boxy: ' + $('#' + boxfoc.id).position().top);
});


var numb = 0;
var boxheight = window.outerHeight / 2; //focusd box
var shrunkheight = boxheight / 7; //unfocusd box
if (shrunkheight < 17) {
    shrunkheight = 17;
} // this way at least a single line is visible

var boxfoc = "";
var olebox = "";

function thesets() { //uses boxheight, shrunkheight
    boxheight = window.innerHeight / 2;
    $('p.padittop').css('padding-top', boxheight + 'px');
    $('p.paditbot').css('padding-bottom', boxheight + 'px');

    shrunkheight = boxheight / 7;
    if (shrunkheight < 17) {
        shrunkheight = 17;
    } // this way at least a single line is visible

    $('p.dyhei').text('hei : ' + boxheight);
    $('#foryou.col-midd').css('height', (boxheight * 2 - 33) + 'px');
} // thesets(), sets textarea dimensions


function addele() { //uses +numb,DOM

    var flow = document.getElementById('theflow');
    var num = (numb) + 1;
    var romu = romanise(num);

    var newbox = document.createElement('textarea');
    var newboxid = 'box' + num;

    newbox.setAttribute('id', newboxid);
    newbox.setAttribute('class', 'tecksd');
    newbox.setAttribute('placeholder', '(' + romu + ')');

    flow.appendChild(newbox);

    numb = num;
} //addele(), add element

function remele() { //uses DOM
    var flow = document.getElementById('theflow');
    flow.removeChild(boxfoc);
} // remele(), remove element





function romanise(num) { //inde
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["", "c", "cc", "ccc", "cd", "d", "dc", "dcc", "dccc", "cm",
            "", "x", "xx", "xxx", "xl", "l", "lx", "lxx", "lxxx", "xc",
            "", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"
        ],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
} // romanise(), turn numbers into roman numerals









function sansaccent(s) {
    s = trim(s);
    //codes with unpredictable activity after toLowerCase() is called on string
    for (var chard in s) {
        s = s.replace("\u00E0", "a"); //a accent grave
    }
    return s;
}

/////	
function clear() {
    document.getElementById('postcomp').innerHTML = "";
    document.getElementById('helpbox').innerHTML = "";
    helpboxer = "";
    helppatround = 0;
    stringer = "...";
    hitems = "";
    founder = 17;
    foundhere = "";
} //clear()
function sani(s) {
    s = s.replace(/\&/gi, "&amp");
    s = s.replace(/\</gi, "&lt");
    s = s.replace(/\>/gi, "&gt");
    return s;
} //sani()
function trim(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s;
} //trim()


function interpret() { //uses sani(),trim(),implementation(),recognise()
    clear();
    var text = document.getElementById('my_text');
    var div = document.getElementById('postcomp');
    var helpbox = document.getElementById('helpbox');

    var hippo = "";

    var fulltext = trim(sani(text.value));

    var sentences = fulltext.split(";");
    var howmanysentences = sentences.length;
    alert(howmanysentences);
    var i = 0; //sentences[1..n]
    while (i < howmanysentences - 1) { //-1 :: counts the token after last ';'
        //stringer = stringer + "</br></br>" + i + ":</br></br>";
        harpo = sansaccent(sentences[i]);
        huppo = trim(sentences[i])
        hippo = hippo + harpo + ":" + huppo + ";<br />";
        i++;
    }

    //hippo=sansaccent(fulltext);
    div.innerHTML = hippo;

    //div.innerHTML = stringer;
    //div.innerHTML = hitems;
    //div.innerHTML = stringer+"</br></br></br>"+hitems;

    helpbox.innerHTML = "->";

    // ! @ # $ % ^ & * ( ) _ + = - [ ] { } : ?

} //interpret()
