console.log("Injected!");
$('#paypalstuff').hide();
$('#loginstuff').hide();
$('#sOfferInfo').hide();
$('#mOfferInfo').hide();
const delay = false
var signintoggle = false


$(document).on("click","#buypepplusbtn",function() {
  $('#paypalstuff').fadeIn();
});
$("#closepaypal").click(function() {
  $('#paypalstuff').fadeOut();
});
// $('#signin').click(function() {
//   if (signintoggle == false && delay == false) {
//     signintoggle = true;
//     // $('#loginstuff').show();
//     $("#loginstuff").slideToggle();
//   }else if (signintoggle == true && delay == false) {
//       signintoggle = false;
//       // $('#loginstuff').hide();
//       $("#loginstuff").slideToggle();
//   }
//   // $("#loginstuff").slideToggle();
//   // return false;
// });
var isAnimating1 = false;
$('#signin').click(function() {
    if (isAnimating1) {
        return;
    }
    isAnimating1 = true;
    $("#loginstuff").slideToggle();
    setTimeout(function() {
        isAnimating1 = false;
    }, 500);
});

// $(document).mouseup(function(e) {
//     var container1 = $('#loginstuff');
//     var container2 = $('#signin')
//     if (!container1.is(e.target) && container1.has(e.target).length == 0 && !container2.is(e.target) && container2.has(e.target).length == 0 && signintoggle == true) {
//       // signintoggle = false
//       // container1.hide();
//       container1.slideToggle();
//       signintoggle = false
//     }
// });
var specialpoptoggle = false
var isAnimating2 = false;
$('#sOffers').hover(function() {
    if (isAnimating2) {
        return;
    }
    isAnimating2 = true;
    specialpoptoggle = true;
    $("#sOfferInfo").slideToggle();
    setTimeout(function() {
        isAnimating2 = false;
    }, 350);
});
var morepoptoggle = false
var isAnimating3 = false;
$('#mOffers').hover(function() {
    if (isAnimating3) {
        return;
    }
    isAnimating3 = true;
    morepoptoggle = true;
    $("#mOfferInfo").slideToggle();
    setTimeout(function() {
        isAnimating3 = false;
    }, 350);
});
// $('#sOffers').hover(function() {
//   // console.log("Hovering...")
//   $('#sOfferInfo').slideToggle();
// });
