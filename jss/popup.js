//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status = "duminhphongadv"
var a = new Array(),
    n = ""
a[1] = 'Đ';
a[2] = 'ơ';
a[3] = 'n';
a[4] = ' ';
a[5] = 'g';
a[6] = 'i';
a[7] = 'ả';
a[8] = 'n';
a[9] = '!';
a[10] = ' ';
a[11] = 'V';
a[12] = 'ì';
a[13] = ' ';
a[14] = 'T';
a[15] = 'u';
a[16] = 'i';
a[17] = ' ';
a[18] = 'T';
a[19] = 'h';
a[20] = 'í';
a[21] = 'c';
a[22] = 'h';
a[23] = ' ';
a[24] = 'H';
a[25] = 'o';
a[26] = 'à';
a[27] = 'n';
a[28] = 'g';
a[29] = ' ';
a[30] = 'T';
a[31] = 'h';
a[32] = 'ô';
a[33] = 'i';
a[34] = ' ';
a[35] = 'à';
a[36] = '!';
a[37] = '♥';


function one() {
    t = document.f.txt.value
    j = t.length
    if (j > 0) {
        for (var i = 1; i <= j; i++) {
            n = n + a[i]
            if (i == 29) {
                document.f.txt.value = ""
                n = ""
            }
        }
    }
    document.f.txt.value = n
    n = ""
    setTimeout("one()", 1)
}

function s() {}

function on() {
    one()
}

$(document).ready(function() {
    $('#k').hide();
    $('h1').click(function() {
        $('.active').removeClass('active');
        $('#k').slideUp('fast');
        if ($(this).next('#k').is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next('#k').slideDown('fast');
        }
    });
});

function Yeu() {
    $("#divResult").fadeOut(0);
    //PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
    $("#divResult").html("</br><h2>TUI BIẾT NGAY MÀ </h2>");
    $("#divResult").fadeIn(2000, function() {
        $("#divResult2").fadeOut(0);
        $("#divResult2").html("<p>♥ ỪA THÌ TUI CŨNG THÍCH BÀ LẮM Á! .</p></br>");
        $("#divResult2").fadeIn(2000, function() {
            $("#divResult3").fadeOut(0);
            $("#divResult3").html("<p>VẬY MÌNH LÀM NGƯỜI YÊU NHAU NHA </p></br>");
            $("#divResult3").fadeIn(2000);
        });
    });
}