'use strict';

// Lesson 1: The Client and Server Model.
/*
 * Network tab results (Live Server reload):
 * Total requests: 11
 * Total transferred: 1.9 kB (615 kB resources)
 * Load time: 291 ms
 *
 * Three requests made:
 * 1. index.html   - document, 304, 0.2 kB
 * 2. styles.css   - stylesheet, 304, 0.2 kB
 * 3. script.js    - script, 304, 0.2 kB
 */
/*
 * Adding a 6th Artist Observations:
 * 
 * Files changed: Only artists.json
 * Files unchanged: script.js (as well as HTML and CSS)
 * 
 * Why this separation is the point:
 * By moving the data into its own file, we separated the content (the data) 
 * from the logic (the JavaScript rendering engine). We can now add, edit, or 
 * delete hundreds of artists without touching a single line of JavaScript. 
 * This removes the risk of accidentally breaking the code when updating content, 
 * and paves the way for a database or backend API to manage this file instead.
 */

/*
 * Trailing Comma Error Observation:
 * 
 * Console Error:
 * Uncaught (in promise) SyntaxError: Unexpected token ']', ... is not valid JSON
 * 
 * Reason:
 * Unlike standard JavaScript objects and arrays, strict JSON syntax 
 * strictly forbids trailing commas. When response.json() tries to parse 
 * the text, the parser crashes and rejects the Promise before renderCards can run.
 */
// Your standalone code and written observations for this lesson live here,
// as code and comments. The site work happens in the stretch-records folder.
//
// Step 4: how many requests did the single page load make? List three by name.
//
// Step 6: which files changed when you added the sixth artist, which did not,
// and why is that separation the point?
//
// Step 7: paste the console error the broken artists.json produced.
//
// Step 8: build one artist object, JSON.stringify() it, log the text,
// JSON.parse() it back, and log one property of the result.
//
// --- JSON Round Trip Demonstration ---

// 1. Build one artist object (Standard JavaScript Object)
const testArtist = {
  name: "Dua Lipa",
  genre: "Pop",
  total: "42:00"
};

// 2. Convert it to text (JSON string)
const artistText = JSON.stringify(testArtist);

// 3. Log the text to prove it is now a plain string
console.log("Stringified JSON:", artistText);

// 4. Parse the text back into a usable JavaScript object
const recoveredArtist = JSON.parse(artistText);

// 5. Log one property of the result to prove the round trip was successful
console.log("Recovered Artist Name:", recoveredArtist.name);
// STRETCH, step 9: describe your page as a system. Name the client, name the
// server, and state what the request asked for and what the response carried.
/*
 * System Architecture Observation:
 * 
 * The Client: The web browser (e.g., Google Chrome). It executes the JavaScript, 
 * builds the DOM, and paints the user interface on the screen.
 * 
 * The Server: VS Code's Live Server (running locally on localhost). It hosts 
 * the files and listens for incoming network requests.
 * 
 * The Request: The client's JavaScript `fetch('artists.json')` asked the server 
 * to send the specific file named 'artists.json'.
 * 
 * The Response: The server returned an HTTP response carrying the raw JSON text 
 * string containing our array of artist data, which the client then parsed and rendered.
 */