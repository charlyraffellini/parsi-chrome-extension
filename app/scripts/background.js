(function() {
  'use strict';
  chrome.runtime.onInstalled.addListener(function(details) {
    return console.log('previousVersion', details.previousVersion);
  });

  chrome.browserAction.setBadgeText({
    text: 'Pulls'
  });

  console.log('\'Allo \'Allo! Event Page for Browser Action');

}).call(this);
