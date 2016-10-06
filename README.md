# Step 5

We will now attach a mongo database to our `server.js`.

# Environment Variables

Sometimes (often) your application will rely on variables and settings that you don't want to expose to the rest of the world/github. We store these kinds of variables in wht are called environment variables. 

It is common practice to store environment variables in a `.env` file. We also make sure to exclude this file from any version control software (i.e. add to our `.gitignore`) so that we don't expose API keys and database credentials on accident. We instead create a `.sample-env` that has the variables that we need to fill out, but leave them undefined.

We use an npm module called `dotenv` in order to load in our environment variables painlessly.

# Mongo
Mongo can be tricky to configure locally if you do not install it in a very specific way the first time. To avoid that, we will default to a hosted database on mlab.com. There are some advantages and disadvantages to this approach, but they are not a big deal for this demonstration. You will likely want to avoid accidentally messing with a production db in the future, however, so it's very standard to test all of your code on a local, trivial database while in development.