1. What is Caching?
Answer:
Caching is a way to store data temporarily so it can be quickly accessed later without recalculating or fetching it from the main source.
Example: Websites store images, CSS, or data in a cache so pages load faster when you visit them again.


2. What are ways to cache on the backend?
Answer:
In-memory Caching: Store frequently accessed data in memory (e.g., Redis, Memcached).
Database Caching: Save query results for reuse.
Application-level Caching: Cache specific calculations or objects in the app’s code.
HTTP Caching: Cache API responses using Cache-Control headers.


a. What is LRU Cache?
Answer:
LRU stands for Least Recently Used.
It keeps track of recently used data.
If the cache becomes full, it removes the least recently used data to make space for new data.
Example: Think of it like a bag with limited slots; if it's full, you remove the item you haven't used in a long time.



3. What is Redis? Why do we use it?
Answer:
Redis is an in-memory database that is super fast because it stores data in memory (RAM) instead of on disk.
Why use Redis?
Store session data, caching, leaderboard rankings, or pub-sub messages for real-time applications like chats.
Example: E-commerce sites use Redis to quickly check available stock.



4. How can we implement caching on the frontend?
Answer:
Browser Cache: Store static assets (e.g., images, CSS) locally in the browser.
Service Workers: Cache app data for offline access.
LocalStorage/SessionStorage: Save small data in the browser for quick access.
IndexedDB: Store larger datasets in the browser for web apps.
Example: News apps cache articles locally to show them even if the internet is slow.



5. What is a CDN?
Answer:
CDN (Content Delivery Network): A network of servers placed worldwide to store and deliver website content (e.g., images, videos, scripts) closer to the user.
Why use it?
Speeds up loading times.
Reduces server load.
Improves user experience.
Example: YouTube videos load quickly because they use CDNs to deliver content from the nearest server.