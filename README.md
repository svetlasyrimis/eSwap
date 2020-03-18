# eSwap

## Project Description

**eSwap** is an e-commerce site where you can create items, delete items from your own user profile, request another user's item, and swap items. Just like eBay you can search for things to bid on("request") such as electronic equipment, kitchen supplies, clothes, etc. Users will be split into 3 categories - admin, user (authenticated) and guest (unauthenticated). Guests are able to browse, but unable to bid on or upload items. Members are able to upload items, delete items, and edit items. Major challenges for the project included tying the backend together with the front-end of an e-commerce site as well as overscoping on the features. Post-mvp features include having an email screen that directly pops up on the website to request another user's item, “favoriting”/”liking” of items, having a watchlist for favorite items, swapping of items, and stripe implementation. <br>

## Relevant Instructions For Viewers:

**eSwap** is an e-commerce site where you, as the user, can create items on your own user profile, delete items from your own user profile, request another user's item, and swap items. The main page has a place to sign up for an account and sign in if you are re-visiting the site. If you are a user (authenticated) then you can search for items via the main database of items that each user has, create items to give away via the "view items" tab, delete and edit your items, request another user's items, and swap items with another user. If you are a guest (unauthenticated) then you can only view a list of items that are available via the search bar.

### MVP:
-Have a minimum of 1 git commit per day per team member <br>
-Have the frontend deployed on Surge<br>
-Have the backend deployed on Heroku<br>
-Include CRUD on the backend using Express, Mongoose, and MongoDB<br>
-Have hand-rolled jwt authentication system (included)<br>
-Use flexbox and/or css grid<br>
-Include a minimum of 5 components that your team has built<br>
-Use React Router (included)<br>
-Look like the mockup/wireframe (or better)<br>
-Be properly indented and spaced<br>
-Not include commented out code in the master branch<br>
-Use camelCase for javascript code<br>
-Use a color palette generator<br>
-Include a beautiful, professional README.md (use markdown)<br>

### Post-MVP:
-“Favoriting”/”Liking” option<br>
-Email screen within website so that user can request an item<br>
-Commenting underneath each item for enhanced/quicker user experience<br>
-Swapping of items<br>
_Implementing Stripe<br>


## Feature List 
-Sign Up<br>
-Sign In<br>
-Sign Out<br>
-User can refresh page and still stay signed in<br>
-Search bar to request items<br>
-Creating items<br>
-Retrieving items<br>
-Updating items<br>
-Deleting items<br>
-Email screen directly on website to request an item<br>
-“favoriting”/”liking” of items<br>
-Watchlist for favorite items<br>
-Swapping of items<br>
-Stripe implementation<br>


## Entity Relationship Diagram (ERD) 

![Entity Relationship Diagram](assets/ERD.jpg)

### Items Database:
-Item ID (int)<br>
-Item Name (String)<br>
-Description (String)<br>
-Name(of owner) (String)<br>
-Date Uploaded (new Date)<br>
-Availability (Boolean)<br>

### Users Database:
-User ID (int)<br>
-User Name (String)<br>
-User Description/Role (admin/member/guest) (String) <br>
-Password<br>
-Date joined (new Date)<br>

## Wireframes 

https://marvelapp.com/a9jaafd/screen/67084205<br>

![Initial Wireframe](assets/InitialWireframe.png)

## Component Hierarchy 

### Initial Component Hierarchy

Unauthenticated Navbar<br>
-->Sign Up<br>
-->Sign In<br>

Authenticated NavBar<br>
-->Home <br>
-->Search Items<br>
-->View User Items<br>
-->Sign Out<br>


App Container<br>
|Items<br>
  -->Product name<br>
  -->Value<br>
  -->Profile picture<br>
  -->Category_id<br>
|Floating Footer<br>
  -->Add item button<br> 
  -->Homepage button<br> 
  -->Back button<br>
|Footer<br> 
  -->Branding copyright<br> 
  -->Social media links<br> 
  -->NavLinks<br> 

## List Dependencies 

eBay RESTful API: (https://developer.ebay.com/api-docs/static/ebay-rest-landing.html)<br>

Craigslist API: (https://github.com/mislam/craigslist-api)<br>

Unsplash for images: (https://unsplash.com/) <br>

Faker for fake data: (https://faker.readthedocs.io/en/master/) <br>

MongoDb Database: (https://www.mongodb.com/) <br>

MongoDb Atlas: (https://www.mongodb.com/cloud/atlas) <br>


## Live Links

Surge(front-end): (http://eswap.surge.sh/) <br>

Heroku(Back-end): (https://mando-list.herokuapp.com/) <br>

Db Atlas (database): ![Successful Deployment of Mongodb Atlas Database](assets/Successful_Deployment_of_Mongodb_Atlas_Database.png) <br>
