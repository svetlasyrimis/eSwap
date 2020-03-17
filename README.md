# eSwap (a.k.a. Mando-List)

## Project Description

**eSwap** is an e-commerce site where you can create items to swap, delete items from your own user profile, request another user's item, and swap items(update). Just like eBay you can search for things to "bid on" like electronic equipment, kitchen supplies, clothes, etc. Users will be split into 3 categories - admin, user (authenticated) and guest (unauthenticated). Guests are able to browse, but unable to bid on or upload items. Members are able to upload items for approval, and admins have the ability to update, delete and possibly edit items. Major challenges for the project may include the backend of an e-commerce site as well as overscoping on features.<br>


### MVP:
-Use React Bootstrap <br>
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
_Diagram of the database tables, schemas, and relations. You can draw them by hand or try one of these useful links for ERDs:_<br>
_-lucidchart - This is a great tool for building ERDs._<br>
_-draw.io Another great tool for ERDs._<br>
_-ERDPlus Yet another great tool for ERDS._<br>

![Entity Relationship Diagram](ERD.jpg)

### Items Database:
-Item ID (int)<br>
-Item Name (String)<br>
-Description (String)<br>
-Name(of owner) (String) one to many?<br>
-Date Uploaded (new Date)<br>
-Availability (Boolean)<br>

### Users Database:
-User ID (int)<br>
-User Name (String)<br>
-User Description/Role (admin/member/guest?) - String<br>
-Password<br>
-Date joined (new Date)<br>


## API Endpoint Documentations 
_List of all of your servers routes, the structure of requests that you expect and the structure of responses they send._<br>

eBay RESTful API: (https://developer.ebay.com/api-docs/static/ebay-rest-landing.html)<br>



## Wireframes 

https://marvelapp.com/a9jaafd/screen/67084205<br>

![Initial Wireframe](InitialWireframe.png)

## Component Hierarchy 
_Wireframes should be broken into components which then should be described in a component hierarchy._<br>

### Initial Component Hierarchy

Navbar<br>
-->Home <br>
-->Trade<br>
-->Support<br>
-->Search<br>
-->Sign Up<br>
-->Sign In<br>

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

### Current Component File Hierarchy

![Current Component Hierarchy](CurrentComponentHierarchy.png)


## List Dependencies 

eBay RESTful API: (https://developer.ebay.com/api-docs/static/ebay-rest-landing.html)<br>

Unsplash for images: (https://unsplash.com/) <br>

Faker for fake data: (https://faker.readthedocs.io/en/master/) <br>

MongoDb Database: (https://www.mongodb.com/) <br>

MongoDb Atlas: (https://www.mongodb.com/cloud/atlas) <br>


## Live Links

Surge(front-end): (eSwap.surge.sh) <br>

Heroku(Back-end): (https://mando-list.herokuapp.com/) <br>

Db Atlas (database): ![Successful Deployment of Mongodb Atlas Database](Successful_Deployment_of_Mongodb_Atlas_Database.png) <br>
