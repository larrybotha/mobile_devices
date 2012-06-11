(function( $ ) {
  
  var $buttons = $('button'),
      $device  = $('#device-type'),
      currentClass = 'btn-current',
      $mediaType = [],
      $deviceClass = [];

  $.each($buttons, function(n, val) {
    $mediaType[n] = $($buttons[n]).data('device');
    $deviceClass[n] = 'device-' + $mediaType[n];
  });

  function setMedia() {
    $.each($buttons, function(n, val) {
      $this = $(this);

      // check if #device-type is set to this button
      if ($device.hasClass('device-' + $this.data('device'))) {
          // if this button is not current, remove btn-current from
          // all buttons, and then apply it to this
        if (!$this.hasClass(currentClass)) {
          $buttons.removeClass(currentClass);
          $this.addClass(currentClass);
        }
      }
      // if #device-type is not set, set #device-type to first button
      else {
        $device.addClass('device-' + $mediaType[0]);
        // if any buttons are set to current, remove btn-current
        if ($buttons.find('.' + currentClass)) {
          $buttons.removeClass(currentClass);
        }
        $($buttons[0]).addClass(currentClass);
      }
    });
  }

  // listen for when a button is clicked
  $buttons.on('click', function( e ) {
    $this = $(this);
    $thisMedia = $this.data('device');

    // if this button is not current, remove btn-current from all buttons,
    // and assign this button as current
    if (!$this.hasClass(currentClass)) {
      $buttons.removeClass(currentClass);
      $this.addClass(currentClass);

      $.each($mediaType, function(n, val) {
        if ($device.hasClass('device-' + val)) {
          $device.removeClass('device-' + val)
        }
      });

      $device.addClass('device-' + $thisMedia);
    }
  });

  setMedia();
  
})( jQuery );