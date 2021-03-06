// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery; // Bootstrap requires a global "$" object.
import "bootstrap";
import _ from "lodash";

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

$(function () {
    $('#start-button').click((ev) => {
      let current_start_time = new Date($.now())
      console.log(current_start_time)
      $('#end-button').attr('start-time', current_start_time)
    })
  
    $('#end-button').click((ev) => {
      let end_time = new Date($.now())
      console.log(end_time)
      let start_time = new Date($('#end-button').attr('start-time'))
      let task_id = $('#end-button').attr('task-id')
      let text = JSON.stringify({
          time_block: {
          start_time: start_time,
          end_time: end_time,
          task_id: parseInt(task_id),
        },
      });
      console.log(text)
  
      $.ajax('ajax/time_blocks',{
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: text,
        success: (resp) => {
          console.log("successfully create ", text);
        },
      });
    });
  })