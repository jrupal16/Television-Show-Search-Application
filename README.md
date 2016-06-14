# Television-Show-Search-Application


Project - Milestone 1 :

I have create a Single Page Application (SPA) that allows a User to search for a Television Show,
and see all results that match the submitted query. 
To implement this project, I have use AngularJS as your front-end framework, and Node.js as your back-end technology.
All API calls  routed through Node.js application. 


Project - Milestone 2 :

Adding new features to the TV Maze web application built from Part 1.

1. Add a details button for each show returned from the search.
2. Add a show controller, show service and show.html to your project. Add a new route to your api/routes.js that will get show details by id.
3. When the user clicks the details button - they are taken to a new page for the TV Show selected.  Create a new route that include the show id. Use the resolve option inside the routeProvider to get the show details by id from the service.
4. This new page should display the full details of the TV show including - name, image, description, genres, cast (including image, character name and actor name).  All details should be cleanly formatted - meaning no brackets or html tags ([] or {}).
5. An image must display for the cast member. If no image is present for the character or the person - then replace that image with a default image.  Make sure you look at the data structure to determine that there is no image for the character or person.
6. The default image must be located inside your project.  Create an images folder and place the default image inside that folder.
