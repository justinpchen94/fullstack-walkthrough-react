# Step 3

It's convenient to see routes all done in one `server.js` file, but that can easily become unwieldy. There are many ways to do structure your your monolithic app as your codebase grows. The important takeaway is to modularize your code and separate routes in a way that makes sense.

# Slightly Less Basic Routing 

We move the code for the GET request we wrote in Step 2 and move it into a separate file. This cleans up our server file immensely and allows for separation of concerns.