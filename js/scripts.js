// Scripts

// Toggle, Show/Hide Drawer
// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

$.simpleWeather({
    location: 'forks',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather.code);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
     
 $('.currently').text(weather.currently) 
      $('img').attr('src', weather.image);
      
      //Change Icon 
      
      $('i').attr('class', 'icon-' + weather.code)
      
      //Conditioning Java - cloudy
      
       if (weather.code >=0 & weather.code <=30) {
        
        $('section').addClass('cloudy'),
$('.safe').text('Safe'),
$('.safe').addClass('cloudy1'),
$('.day-0').addClass('cloudy1'),
$('.day-1').addClass('cloudy1'),
          $('.day-2').addClass('cloudy1')
        
      }
      

      
      //Conditioning Java - Sunny
      
             if (weather.code >=31 & weather.code <=36) {
        
        $('section').addClass('clear')
      $('.safe').text('Not Safe')  
 $('.safe').addClass('clear1')  
               
$('.day-1').addClass('clear1') 
  $('.day-2').addClass('clear1') 
 $('.day-3').addClass('clear1')                     
      }
      
      //Forecast Java
      
$('.day-0').text(weather.forecast[0].date);
$('.day-1').text(weather.forecast[1].date); 
$('.day-2').text(weather.forecast[2].date);
      

      console.log(weather.code);
      
 
      
      //Navigation Java
    },
    error: function(error) {
 
      console.log('Look outside.');
    }
  
  });

$(function() {

  $(".nav-button").click(function() {

    $(this).parent().parent().toggleClass("closed");
  });

});
