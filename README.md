# cookiejar
A small javascript library to handle cookies.
# How to use
Download cookiejar.js and include it in your HTML document.
<script src='cookiejar.js'></script>

# Methods:-
# Set cookies
You can use the cookiejar.set() to set cookies.
cookiejar.set("key", "value");
you can send optional options object as parameters,
var options = {
  'expires' : 7, // number of days in integer
  'path' :  '/',
  'domain' : '',
  'secure' : true // boolean
};
cookiejar.set("key", "value", options);

# Get cookies
You can use the cookiejar.get() to fetch a cookie value.
cookiejar.get('key');
To fetch all the values, use cookiejar.all().
cookiejar.all(); // returns the object containing cookies.

# Remove cookies
You can use the cookiejar.remove() to remove the cookie value.
cookiejar.remove('key');
And cookiejar.empty() to remove all cookies.
