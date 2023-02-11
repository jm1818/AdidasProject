datas = [
    '\n            <div>\n                <img src="../img/imgSlide1.png" class="imgSlide1">\n            </div>\n            <div>\n                <h1 class="content-text-h1-1">ADIDAS SPORTSWEAR</h1>\n                <p class="content-text-p-1">스타일로 완성하는 스포츠 DNA. TIRO &amp; AVRYN</p>\n            </div>\n        ',
    '\n            <div>\n                <img src="../img/imgSlide2.jpg" class="imgSlide2">\n            </div>\n            <div>\n                <h1 class="content-text-h1-2">ADIDAS SPORTSWEAR</h1>\n                <p class="content-text-p-2">스타일로 완성하는 스포츠 DNA. TIRO &amp; AVRYN</p>\n            </div>\n        '
    
]

var value = 0;
var con = document.querySelectorAll(".content-warp")[0].innerHTML;

function seta(value) {
    if (value === true) {
		con = datas[0]
		value = 1;
	} else {
		con = datas[1]
		value = 0;
	}
}

setInterval(() => {
    seta(value);
}, 2000);