// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

setInterval(function (), interval {
  $("#nothing").val(<%= @item.highest_bid_amount %>);
);}, 15000);

// 
// $(document).ready(function () {
//   var interval = 5000;  //3000 = 3 seconds
//   function doAjax() {
//     $.ajax({
//       type: 'POST',
//       url: 'personAutoIncrement.php',
//       data: $(this).serialize(),
//       dataType: 'json',
//       success: function (data) {
//
//         setTimeout(doAjax, interval);
//       }
//     });
//   }
