# Step 1

Now we begin to start adding our own files.

# Server 

We begin first by creating a `server` folder. As the name suggest, we will use this folder to store all things server related, including models, routes, templating engines, and other middleware.

Within this `server` folder, we create a `server.js`. This will serve as the start point of our web app.

We will then include the bare minimum commands inside `server.js` to get a server up and running.

# Client
For now, we create a `public` folder with an extremely bare `index.html` file to be served up by our basic server.

# Note
Upon finishing the barebones server.js file, we can run the command `node server/server.js` from the root directory of our project. We should see our console.log appear in the terminal, which means we can navigate to `http://localhost:3000` in our web browser. 