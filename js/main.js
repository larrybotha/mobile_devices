(function( $ ) {
  
  var $buttons = $('button'),
      $device  = $('#device-type'),
      $mediaType = [];

  $.each($buttons, function(n, val) {
    $mediaType[n] = $($buttons[n]).data('device');
  });

  // if there is a button that is set to current, and #device-type does
  // not have the class for that button assigned, remove .btn-current 
  // from the button.
  function cleanButtons() {
    $.each($buttons, function(n, val) {
      if ($(this).hasClass('btn-current') && !$device.hasClass('device-' + $mediaType[n])) {
        $(this).removeClass('btn-current');
      };
    });
    setMedia();

    // if #device-type is set, set button to match
      // if the wrong button is set, remove .btn-class, and set
      // appropriate button to current

    // if #device-type is not set, set #device-type to first button
      // if first button is not set to current, remove .btn-class 
      // from all instances, and set first button to current

  }

  // If #device-type has no class for a device, add the first device
  // from the available buttons, and set its button to current.
  // If there is a class and its associated button is not current, 
  // set it to current
  function setMedia() {

    $.each($mediaType, function(n, val) {
      if (!$device.hasClass('device-' + val)) {
        $device.addClass('device-' + $(this)[0]);
        $($buttons[0]).addClass('btn-current');
      };

      if($device.hasClass('device-') + val && !$($buttons[0]).hasClass('btn-current')) {
        $($buttons[0]).addClass('btn-current');
      };

    });
  }

  // Listen for a click
  // When a click event is captured, check if the button is the current
  // button -> do nothing
  // If it is not current:
  // (1) Remove btn-current from all buttons, and set the clicked 
  // button to btn-current
  // (2) Remove the class defining the media type from #device-type, and
  // add the class for the button that was clicked
  $buttons.on('click', function( e ) {
    $this = $(this);
    $thisMedia = $this.data('device');

    if (!$this.hasClass('btn-current')) {
      $buttons.removeClass('btn-current');
      $this.addClass('btn-current');

      $.each($mediaType, function(n, val) {
        if ($device.hasClass('device-' + val)) {
          $device.removeClass('device-' + val)
        }
      })

      $device.addClass('device-' + $thisMedia);
    }

  })

  cleanButtons();
  
})( jQuery );