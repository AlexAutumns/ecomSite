# Ecom Server Documentations

**PORT** `http://localhost:5000`

## Products

`/api/products`

**A product looks like this:**

    {
        id: PRODUCT ID,
        product_name: PRODUCT NAME,
        product_desc: PRODUCT DESCRIPTION,
        price: PRICE,
        category_id: CATEGORY_ID,
        stock_quantity: QUANTITY,
        created_at: TIMESTAMP,
        user_id: USER_ID,
        status: STATUS,
    },

### GET

-   `/api/products` Get all Products

        Example Usage:
        const response = await fetch(`http://localhost:5000/api/products`);

-   `/api/products/:id` Get product by id

    **Example Usage:**

        const response = fetch(`http://localhost:5000/api/products/1`);

-   `/api/products/search/:col/:search_query` Get all products that match the query

    **Example Usage:**

    -   Search by **Name**

        Returns products that have search word in Product Name

              const response = fetch(`http://localhost:5000/api/products/search/name/phone`);

    -   Search by words in **Description**

        Returns products that have search word in Description

              const response = fetch(`http://localhost:5000/api/products/search/desc/battery`);

    -   Search by **Category**

        Returns Products that have the requested Category

            const response = fetch(`http://localhost:5000/api/products/search/category/1`);

    -   Search by **User ID**

            const response = fetch(`http://localhost:5000/api/products/search/user_id/1`);

    -   Search by **Price**

              const response = fetch(`http://localhost:5000/api/products/search/price/400to800`);

    **Results look like this:**

            [
                {
                    id: PRODUCT ID,
                    product_name: PRODUCT NAME,
                    product_desc: PRODUCT DESCRIPTION,
                    price: PRICE,
                    category_id: CATEGORY_ID,
                    stock_quantity: QUANTITY,
                    created_at: TIMESTAMP,
                    user_id: USER_ID,
                    status: STATUS,
                },
                {
                    id: PRODUCT ID,
                    product_name: PRODUCT NAME,
                    product_desc: PRODUCT DESCRIPTION,
                    price: PRICE,
                    category_id: CATEGORY_ID,
                    stock_quantity: QUANTITY,
                    created_at: TIMESTAMP,
                    user_id: USER_ID,
                    status: STATUS,
                },
                ...
            ]

### SET


## Images