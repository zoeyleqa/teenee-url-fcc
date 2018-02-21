Teenee URL
=========================

This is an URL Shortener Microservice which is built with express framework. This back-end study project focuses on practicing the use of storing data with MongoDB and Node.js. 


User stories:
--------------
I can pass a URL as a parameter and I will receive the original URL and the shortened URL in the JSON response.
When I visit that shortened URL, it will redirect me to my original link.


Example creation usage:
The app uses MongoDB as a database to store lengthy URL along with
shortened url. Simply, put `/new/<your-long-URL>` to get a shortened URL
https://teenee-url-fcc.glitch.me/new/https://www.google.com
https://teenee-url-fcc.glitch.me/new/http://foo.com:80


Example creation output
{ "original_url":"https://www.google.com", "short_url":"https://teenee-url-fcc.glitch.me/S1Au3N1xG" }

Usage:
https://url-shortenr.glitch.me/S1Au3N1xG

Will redirect to:
https://www.google.com/


-------------------
ヾ(｡･ω･｡)
