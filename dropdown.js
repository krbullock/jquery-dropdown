// Adapted into a real plugin from
// <http://javascript-array.com/scripts/jquery_simple_drop_down_menu/>

$.fn.dropdown = function (options) {
  var settings = jQuery.extend({
    timeout: 0.2
  }, options);
  var closetimer = null;
  var ddmenuitem = null;

  $(this).children('li').hover(dropdown_open, dropdown_timer);
  document.onclick = dropdown_close;

  function dropdown_open()
  {
    dropdown_canceltimer();
    dropdown_close();
    ddmenuitem = $('ul', this).css('display', 'block');
  }

  function dropdown_close() {
    if (ddmenuitem) {
      ddmenuitem.css('display', 'none');
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
