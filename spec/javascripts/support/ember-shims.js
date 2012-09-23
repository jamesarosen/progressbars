var ENV = {
  CP_DEFAULT_CACHEABLE: true
}

if ( typeof(console) === 'undefined' ) {
  var console = {
    debug: function() {},
    log: function() {},
    warn: function() {},
    error: function() {}
  }
}