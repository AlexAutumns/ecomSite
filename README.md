# Ecom Site Project

## ABOUT

This is a simple ecom site made by **[Alex Autumns](https://github.com/AlexAutumns)**

Design is partially inspired by [Amazon](https://www.amazon.com/)

The server is a Postgres server. There are some example data in the server. Here are the [SQL queries](https://github.com/AlexAutumns/ecomSite/tree/main/sql).

This is a WIP (Work in Progress), so some features are not yet finished / implemented.

### NOTES

-   The products featured in the site are not real
-   Checkout / Buying features are not included in this site

## TO-DO LIST

### LocalHost server

In several files change the "http://localhost:5000/api/..." to what port you prefer or to an actual server location

**Locations**

-   `ProductList.jsx`
-   `Product.jsx`
-   `Hero.jsx`

### Server

-   make sure passwords are encrypted when sent to the server
-   some data should not be shown when finishing the site

-   #### Make Some GET Functions for Specific users / products
    ##### User Stuff
    -   Get specific user
    -   Get specific cart items of an user
    -   Get specific wishlist items of an user
    -   Get specific order items of an user
    ##### Product Stuff
    -   Get specific product
    -   Get specific images of a product

### Dark Mode

-   make parts compatible with dark mode

### Get Data from Server

-   Fetch data from the server

### Login System

-   Create a login system and user management
-   Link to the navbar

### Navbar.jsx

-   Fix links in the menu

### Hero.jsx

-   Make featured list change regularly
-   Link order button to product page

### ProductList.jsx and Products Data

-   Create a top-selling section in `ProductList.jsx`
-   Create a top-rated section in `ProductList.jsx`
-   Add product sales performance to the database

### Product.jsx

-   let users to add reviews
-   link users to reviews

### Create Images

-   Site logo
-   Example product logos

### Pages to Create

-   Categories page
-   Wishlist page
-   Account page (user, signup, and login/logout)
-   Search results page
