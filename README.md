# e-commerce_api

### How to set up the project on a local System?

- Clone the repo using ``` git clone https://github.com/nain333/e-commerce_api ```
- change directory to freshly cloned repo using ``` cd e_commerce_api ```
- run ```npm install```
- run ``` npm start ```

Application listens on port:8000 by default

- Test the api using postman
##Testing guide for the api

### Routes and requests to the Api


- to add a product to the db hit api with a post request with form body having two keys :
```
{
    name:'product_name',
    quantity:'product quantity in number'
}


```
on route ``` /producs/create ```

- to list all products in db hit the api with a get request on  route ```/products```
- to delete a product from the db hit the api with using a delete request on the route : 

```
/products/:id
```
- to update the quantity of a product hit the api with a post request on route:

```
/products/:id/update_quantity/?=number
```
- to increase the quantity pass a possitive pass a possitive number to the request query
- to decrease the quantity pass a negative nubmer to the request query



### Happy Coding :)