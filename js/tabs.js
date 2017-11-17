(function($) {
$(function() {

  $('ul.tabs-nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.custom-tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);