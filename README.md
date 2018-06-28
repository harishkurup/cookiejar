# cookiejar
A small javascript library to handle cookies.
# How to use
Download cookiejar.js and include it in your HTML document.
<pre><script src='cookiejar.js'></script></pre>

Bower:
<pre>$ bower install cookiejar</pre>

# Methods:-
# Set cookies
You can use the <pre>cookiejar.set()</pre> to set cookies.

<pre>cookiejar.set("key", "value");</pre>

you can send optional options object as parameters,

<pre>
var options = {
  'expires' : 7, // number of days in integer
  'path' :  '/',
  'domain' : '',
  'secure' : true // boolean
};
cookiejar.set("key", "value", options);</pre>

# Get cookies
You can use the <pre>cookiejar.get()</pre> to fetch a cookie value.
<pre>cookiejar.get('key');</pre>
To fetch all the values, use <pre>cookiejar.all()</pre>
<pre>cookiejar.all();</pre> // returns the object containing cookies.

# Remove cookies
You can use the <pre>cookiejar.remove()</pre> to remove the cookie value.
<pre>cookiejar.remove('key');</pre>
And <pre>cookiejar.empty()</pre> to remove all cookies.
