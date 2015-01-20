$(function() {
  $(".flat-icon").flatshadow({
    color: "#000", // Background color of elements inside. (Color will be random if left unassigned)
    angle: "SE", // Shadows direction. Available options: N, NE, E, SE, S, SW, W and NW. (Angle will be random if left unassigned)
    fade: false, // Gradient shadow effect
    boxShadow: false // Color of the Container's shadow
  });

    $(".header_title_top").lettering('words');
    $(".header_title_bottom").lettering('lines');

    $('.horse_head').fadeIn(3000, function(){
      $(this).show();
    });

    $('#grooming_icon1').hover(function(){
      $(this).toggle({ effect: 'scale', duration: 1000, percent: 130 });
    }, function(){
      $(this).fadeIn(1000);
    });

    $('#grooming_icon2').hover(function(){
      $(this).toggle({ effect: 'scale', duration: 1000, percent: 130 });
    }, function(){
      $(this).fadeIn(1000)
    })

    $('#grooming_icon3').hover(function(){
      $(this).toggle({ effect: 'scale', duration: 1000, percent: 130 });
    }, function(){
      $(this).fadeIn(1000);
      return false;
    })

});
