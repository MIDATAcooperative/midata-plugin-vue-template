"Hello World" Plugin Template for the MIDATA portal
=============================

This template may be used as a starting point for developing a MIDATA portal plugin using Vue.js

Getting started
----------------
1. Clone this repository into a directory on your PC
2. In "package.json" change the name of the application in line 2 from "midata-plugin-vue-template" into something unique.
3. Run "npm install" in that directory
4. Run "npm run serve"
5. Open the plugin in your browser at URL https://localhost:9004/changeme/dist/index.html  (change "changeme" into your plugin name)
   Your browser should complain about the SSL certificate. Add a security exception. This is important for later.
   If it worked you should see "Hello World" in your browser.
   
6. Get a developer account at https://test.midata.coop
7. Log in and register a plugin.
   "Internal Name" must be what you have chosen as plugin name during point 3)
   "Type" should be: Visualization
   "Name", "Description", "Tile Name" : Fill out as you wish
   "URL" should be: dist/index.html#?authToken=:authToken 
   "Default Dashboard" : "me"
   "Data Access Filter" : Add body weight for this example
8. Choose your plugin in the portal and click on "Install from localhost"
9. Click on "Sandbox" at the top of the screen
10. There should be a tile for your plugin. Click on "view" in that tile. 
   Your plugin should now be visible inside the portal. It is served from your computer.
   If it does not work test if (5) is working. If you did not add a security exception in your browser the plugin will not show up now. 
   If you change the plugin code and hit reload in the browser it should be immediately available for testing in the portal. 
