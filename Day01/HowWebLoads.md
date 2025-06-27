Overview of how webpages load:

1. Download html
2. Build DOM
3. Download Script
4. Execute Script

🟢 HTML Parsing
🔵 Script Download
🔴 Script Execution

─────────────────────────────────────────────────────────────

1️⃣ <script> in <head>
HTML: 🟢🟢 🔴 🟢🟢🟢
Script: 🔵🔴

✅ Effect:
Parsing stops while the script is downloaded and executed.
Can **block rendering** and delay First Paint.

─────────────────────────────────────────────────────────────

2️⃣ <script> at end of <body>
HTML: 🟢🟢🟢🟢🟢🟢
Script: 🔵🔴

✅ Effect:
HTML parsing completes first.
Script loads and runs afterward.
Safer for performance.

─────────────────────────────────────────────────────────────

3️⃣ <script async>
HTML: 🟢🟢🟢🟢🟢🟢
Script: 🔵---🔴

✅ Effect:
Script downloads **in parallel**.
Executes as soon as ready—can interrupt parsing unpredictably.

─────────────────────────────────────────────────────────────

4️⃣ <script defer>
HTML: 🟢🟢🟢🟢🟢🟢
Script: 🔵-------🔴

✅ Effect:
Downloads in parallel.
Executes **after parsing completes**.
Best for non-blocking scripts.

Chatgpt :

1. Request and Download the HTML
   Browser sends HTTP(S) request.
   Receives the raw HTML text response.

2. Parse HTML and Build the DOM
   The HTML parser starts incrementally parsing as the data streams in.
   The DOM (Document Object Model) tree is built node by node.

3. Parse CSS and Build the CSSOM
   As <link> or <style> elements are encountered, CSS is fetched and parsed.
   This produces the CSSOM (CSS Object Model).

4. Download and Parse Scripts
   When the parser encounters a <script> tag:
   4.1 If it’s synchronous (default):
   Parsing of HTML is blocked.  
   The script is fetched if src is specified.
   Once downloaded, the script is executed immediately.
   4.2 If it’s async or defer:
   async: downloaded in parallel, executed as soon as it’s ready (may run before HTML parsing completes).
   defer: downloaded in parallel, executed after HTML parsing is complete.

5. Build the Render Tree
   The DOM and CSSOM are combined into the Render Tree (only visible elements).
   This represents what will actually be painted.

6. Layout
   The browser computes the exact position and size of each element in the render tree.

7. Painting
   The pixels for each node are drawn to the screen.

8. Composite
   If layers are involved (e.g., for transforms, animations), they are composited together into the final image.
