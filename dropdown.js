// Adapted into a real plugin from
// <http://javascript-array.com/scripts/jquery_simple_drop_down_menu/>

$.fn.dropdown = function (options) {
  var settings = jQuery.extend({
    timeout: 0.2,
    open: null,
    close: null
  }, options);
  var closetimer = null;
  var ddmenuitem = null;

  $(this).children('li').hover(dropdown_open, dropdown_timer);
  document.onclick = dropdown_close;

  function dropdown_open()
  {
    dropdown_canceltimer();
    dropdown_close();
    ddmenuitem = this

    if (settings.open) {
      settings.open(this);
    } else {
      $('ul', this).css('display', 'block');
    }
  }

  function dropdown_close() {
    if (ddmenuitem) {
      if (settings.close) {
        settings.close(ddmenuitem);
      } else {
        $('ul', ddmenuitem).css('display', 'none');
      }
    }
  }

  function dropdown_timer() {
    closetimer = window.setTimeout(dropdown_close, settings.timeout * 1000);
  }

  function dropdown_canceltimer() {
    if (closetimer) {
      window.clearTimeout(closetimer);
      closetimer = null;
    }
  }

  return this;
}
