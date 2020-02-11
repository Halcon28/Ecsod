// maintenance.init.js
  $(function() {
    let remainig_time = localStorage.getItem('__countdown');
    if (!remainig_time){
      var currentDate = new Date();
      remainig_time = currentDate.valueOf();
    }
    remainig_time = +remainig_time;
    $('div#clock').countdown((72 * 60 * 60 * 1000) + remainig_time, function(event) {
      $this = $(this);
      switch(event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "daysLeft":
          $this.find('span#'+event.type).html(event.value);
          break;
        case "finished":
          $this.fadeTo('slow', .5);
          break;
      }
      remainig_time = remainig_time - 1000;
      localStorage.setItem('__countdown', remainig_time);
    });
  });