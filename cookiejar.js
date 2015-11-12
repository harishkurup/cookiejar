var cookiejar = (function() {
  return{
    set: function(key, value, options){
      options = (options !== undefined) ? options : {};
      var expires = (options.expires !== undefined) ? options.expires : '';
      if(typeof(expires) === 'number') {
        expires = ';expires='+ new Date(+new Date + 1000 * 60 * 60 * 24 * expires);
      } else if(typeof(expires) === 'object') {
        var type = (expires.type !== undefined) ? expires.type : 'day'; // default day
        expires = expires.value;
        if(type == 'day') {
          expires = ';expires='+ new Date(+new Date + 1000 * 60 * 60 * 24 * expires);
        } else if(type == 'hrs') {
          expires = ';expires='+ new Date(+new Date + 1000 * 60 * 60 * expires);
        } else if(type == 'min') {
          expires = ';expires='+ new Date(+new Date + 1000 * 60 * expires);
        } else {
          expires = ';expires='+ new Date(+new Date + 1000 * expires);
        }
      }
      var path = (options.path !== undefined) ? ';path='+options.path : '';
      var domain = (options.domain !== undefined) ? ';domain='+options.domain : '';
      var secure = (options.secure !== undefined) ? ';secure='+options.secure : '';
      document.cookie = encodeURIComponent(key)+'='+encodeURIComponent(value)+';'+expires+path+domain+secure;
      return this;
    },
    get: function(key) {
      var cookies = this.all();
      if(cookies[key] !== undefined) {
        return cookies[key];
      }
      return null;
    },
    all: function() {
      var cookie_list = {};
      if(document.cookie !== ''){
        var cookies = document.cookie.split(';');
        for(var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].split('=');
          var key = decodeURIComponent(cookie.shift().replace(' ', ''));
          var value = decodeURIComponent(cookie.shift());
          cookie_list[key] = value;
        }
      }
      return cookie_list;
    },
    remove: function(key) {
      var cookies = this.all();
      if(cookies[key] !== undefined) {
        this.set(key, '', {expires: -1})
      }
      return this;
    },
    empty: function() {
      var cookies = this.all();
      for(var key in cookies) {
        this.remove(key);
      }
      return this;
    },
    enabled: function(){
      return navigator.cookieEnabled;
    }
  };
})();
