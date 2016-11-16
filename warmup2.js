'use strict';

function parseQueryString(urlStr) {
  var query = '';
  for (var i = 0; i < urlStr.length; i++) {
    if(urlStr.charAt(i) === '?'){
      query = urlStr.slice(i, urlStr.length);
    }
  }
  for (var q = 0; q < query.length; q++) {
    if(query.charAt(q) === '='){
      var key1 = query.slice(q -)
    }
  }
}
