-- CREATE user examples for users
INSERT INTO users (username, email, user_pass, user_pic_url, joined_at, is_deleted) VALUES
	('john_doe', 'john.doe@example.com', 'Johndoe123!', 'http://example.com/img/john.jpg', '2023-01-10 08:00:00', FALSE),
	('jane_smith', 'jane.smith@example.com', 'Janesmith123!', 'http://example.com/img/jane.jpg', '2023-01-12 09:30:00', FALSE),
	('mike_jones', 'mike.jones@example.com', 'Mikejones123!', 'http://example.com/img/mike.jpg', '2023-01-15 10:15:00', FALSE),
	('susan_brown', 'susan.brown@example.com', 'Susanbrown123!', 'http://example.com/img/susan.jpg', '2023-01-20 12:00:00', FALSE),
	('emily_clark', 'emily.clark@example.com', 'Emilyclark123!', 'http://example.com/img/emily.jpg', '2023-01-22 11:45:00', FALSE),
	('david_white', 'david.white@example.com', 'Davidwhite123!', 'http://example.com/img/david.jpg', '2023-01-25 14:20:00', FALSE),
	('laura_green', 'laura.green@example.com', 'Lauragreen123!', 'http://example.com/img/laura.jpg', '2023-01-28 15:30:00', FALSE),
	('charles_black', 'charles.black@example.com', 'Charlesblack123!', 'http://example.com/img/charles.jpg', '2023-02-01 16:00:00', FALSE),
	('nancy_perez', 'nancy.perez@example.com', 'Nancyperez123!', 'http://example.com/img/nancy.jpg', '2023-02-05 17:10:00', FALSE),
	('peter_young', 'peter.young@example.com', 'Peteryoung123!', 'http://example.com/img/peter.jpg', '2023-02-10 18:25:00', FALSE),
	('alice_king', 'alice.king@example.com', 'Aliceking123!', 'http://example.com/img/alice.jpg', '2023-02-15 19:00:00', FALSE),
	('robert_white', 'robert.white@example.com', 'Robertwhite123!', 'http://example.com/img/robert.jpg', '2023-02-20 20:00:00', FALSE);


-- Create example categories
INSERT INTO categories (name, category_desc) VALUES
    ('Electronics', 'Devices and gadgets including phones, tablets, and computers.'),
    ('Home Appliances', 'Tools and appliances for home use like refrigerators and microwaves.'),
    ('Fashion', 'Clothing, accessories, and footwear for men, women, and children.'),
    ('Books', 'Printed and digital books across various genres.'),
    ('Toys', 'Fun and educational toys for children of all ages.'),
    ('Sports Equipment', 'Gear and equipment for various sports activities.'),
    ('Furniture', 'Home and office furniture including chairs, tables, and cabinets.'),
    ('Beauty Products', 'Cosmetics and skincare products for personal care.'),
    ('Gardening Tools', 'Tools and supplies for gardening and outdoor maintenance.'),
    ('Pet Supplies', 'Food, toys, and accessories for pets.'),
    ('Automotive', 'Parts and accessories for vehicles.'),
    ('Health & Fitness', 'Products related to health, fitness, and wellness.');

-- Create example stores
INSERT INTO stores (store_name, email, owner_id, rating, is_deleted, location, description) VALUES
    ('Tech Haven', 'contact@techhaven.com', 1, 4.5, FALSE, '123 Tech Lane, Silicon Valley, CA', 'Your go-to store for the latest tech gadgets.'),
    ('Home Essentials', 'info@homeessentials.com', 2, 4.7, FALSE, '456 Home St, Springfield, IL', 'Everything you need for a comfortable home.'),
    ('Fashion Hub', 'support@fashionhub.com', 3, 4.2, FALSE, '789 Fashion Ave, New York, NY', 'Trendy clothing for every occasion.'),
    ('Book Nook', 'hello@booknook.com', 4, 4.8, FALSE, '321 Read Blvd, Austin, TX', 'A cozy place for book lovers.'),
    ('Toy Kingdom', 'service@toykingdom.com', 5, 4.6, FALSE, '654 Play Rd, Orlando, FL', 'The ultimate destination for toys and games.'),
    ('Sports Store', 'contact@sportsstore.com', 6, 4.3, FALSE, '987 Fitness Way, Los Angeles, CA', 'Your home for all sporting goods.'),
    ('Office Supplies Co.', 'sales@officesuppliesco.com', 7, 4.1, FALSE, '135 Business St, Chicago, IL', 'Office supplies for every business need.'),
    ('Skin Care Boutique', 'info@skincareboutique.com', 8, 4.5, FALSE, '246 Beauty Ave, Miami, FL', 'Premium skin care products for all.'),
    ('Garden Supplies', 'support@gardensupplies.com', 9, 4.0, FALSE, '357 Greenway St, Portland, OR', 'All your gardening needs in one place.'),
    ('Pet Paradise', 'service@petparadise.com', 10, 4.9, FALSE, '468 Pet Lane, Seattle, WA', 'Quality products for your furry friends.'),
    ('Auto Parts Depot', 'contact@autopartsdepot.com', 11, 4.4, FALSE, '579 Motor Rd, Dallas, TX', 'Reliable auto parts for your vehicle.'),
    ('Fitness Gear', 'info@fitnessgear.com', 12, 4.6, FALSE, '680 Workout Way, Denver, CO', 'High-quality gear for fitness enthusiasts.');

-- Create example products and associate them with the stores
INSERT INTO products (product_name, product_desc, price, category_id, stock_quantity, store_id, status) VALUES
    ('Smartphone X', 'Latest model with high-resolution camera and long battery life. (THIS IS AN EXAMPLE)', 799.99, 1, 50, 1, 'available'),
    ('Microwave Oven', 'Compact microwave oven with multiple cooking settings. (THIS IS AN EXAMPLE)', 129.99, 2, 30, 2, 'available'),
    ('Men’s Jacket', 'Stylish and warm winter jacket for men. (THIS IS AN EXAMPLE)', 89.99, 3, 100, 3, 'available'),
    ('Cooking 101', 'A beginner’s guide to cooking delicious meals. (THIS IS AN EXAMPLE)', 19.99, 4, 200, 4, 'available'),
    ('Action Figure', 'Collectible action figure with multiple accessories.', 24.99, 5, 150, 5, 'available'),
    ('Tennis Racket', 'Lightweight tennis racket with a comfortable grip.', 99.99, 6, 75, 6, 'available'),
    ('Office Chair', 'Ergonomic chair designed for comfort during long hours.', 199.99, 7, 40, 7, 'available'),
    ('Moisturizing Cream', 'Hydrating cream suitable for all skin types.', 29.99, 8, 200, 8, 'available'),
    ('Garden Hoe', 'Durable hoe for gardening and landscaping tasks.', 15.99, 9, 100, 9, 'available'),
    ('Dog Food', 'High-quality dog food formulated for all life stages.', 49.99, 10, 80, 10, 'available'),
    ('Car Battery', 'Reliable car battery for various vehicle types.', 89.99, 11, 60, 11, 'available'),
    ('Yoga Mat', 'Non-slip yoga mat for all types of workouts.', 29.99, 12, 150, 12, 'available');


-- Create example reviews for products
INSERT INTO reviews (product_id, rating, review_desc, is_anonymous, user_id) VALUES
    (1, 4.5, 'Great phone with excellent features! (THIS IS AN EXAMPLE)', FALSE, 2),
    (1, 5.0, 'Best smartphone I have ever owned! Highly recommended. (THIS IS AN EXAMPLE)', FALSE, 3),
    (1, 4.2, 'Good value for the price, but the battery could last longer. (THIS IS AN EXAMPLE)', FALSE, 4),
    
    (2, 4.0, 'Works well, but could be more powerful. (THIS IS AN EXAMPLE)', FALSE,1),
    (2, 3.8, 'Decent microwave, but I wish it had a larger capacity. (THIS IS AN EXAMPLE)', FALSE,3),
    (2, 4.5, 'Very user-friendly and heats food evenly. (THIS IS AN EXAMPLE)', FALSE,4),
    
    (3, 5.0, 'Absolutely love this jacket! (THIS IS AN EXAMPLE)', FALSE,1),
    (3, 4.9, 'Keeps me warm in winter, stylish too! (THIS IS AN EXAMPLE)', FALSE,2),
    (3, 4.0, 'Great jacket, but the sizing runs a bit small. (THIS IS AN EXAMPLE)', FALSE,4),
    
    (4, 3.5, 'Good book but needs more recipes. (THIS IS AN EXAMPLE)', FALSE,1),
    (4, 4.2, 'Helpful for beginners, but I wanted more advanced tips. (THIS IS AN EXAMPLE)', FALSE,2),
    (4, 4.0, 'Informative and easy to follow! (THIS IS AN EXAMPLE)', FALSE,3),
    
    (5, 4.8, 'My son loves this action figure! Great quality! (THIS IS AN EXAMPLE)', FALSE,1),
    (5, 5.0, 'Excellent detail! A must-have for collectors. (THIS IS AN EXAMPLE)', FALSE,2),
    (5, 4.5, 'My kids play with it all the time, very durable. (THIS IS AN EXAMPLE)', FALSE,3),
    
    (6, 4.2, 'Good racket, but it could use a better grip. (THIS IS AN EXAMPLE)', FALSE,1),
    (6, 4.5, 'Lightweight and great for beginners! (THIS IS AN EXAMPLE)', FALSE,2),
    (6, 4.8, 'Perfect balance and power! Really improved my game. (THIS IS AN EXAMPLE)', FALSE,3),
    
    (7, 5.0, 'This chair is incredibly comfortable! (THIS IS AN EXAMPLE)', FALSE,1),
    (7, 4.7, 'Excellent for long hours at the desk! (THIS IS AN EXAMPLE)', FALSE,2),
    (7, 4.5, 'Assembly was a bit tricky, but worth it. (THIS IS AN EXAMPLE)', FALSE,3),
    
    (8, 4.5, 'Great moisturizer, but the scent is a bit strong. (THIS IS AN EXAMPLE)', FALSE,1),
    (8, 4.0, 'Works wonders for dry skin! (THIS IS AN EXAMPLE)', FALSE,2),
    (8, 4.3, 'Lightweight and absorbs quickly, nice product. (THIS IS AN EXAMPLE)', FALSE,3),
    
    (9, 4.7, 'Perfect for my gardening needs! Highly recommend! (THIS IS AN EXAMPLE)', FALSE,1),
    (9, 4.9, 'Very sturdy and gets the job done well. (THIS IS AN EXAMPLE)', FALSE,2),
    (9, 4.5, 'I love this hoe; it makes gardening so much easier! (THIS IS AN EXAMPLE)', FALSE,3),
    
    (10, 4.9, 'My dog loves this food! Great quality! (THIS IS AN EXAMPLE)', FALSE,1),
    (10, 5.0, 'Best dog food I’ve found! My dog is thriving. (THIS IS AN EXAMPLE)', FALSE,2),
    (10, 4.8, 'No more picky eating; he loves it! (THIS IS AN EXAMPLE)',FALSE,3),
    
    (11, 4.3, 'Installed easily and works great! (THIS IS AN EXAMPLE)', FALSE,1),
    (11, 4.0, 'Good battery life, but check compatibility first. (THIS IS AN EXAMPLE)', FALSE,2),
    (11, 4.5, 'Reliable performance; I’m satisfied with my purchase. (THIS IS AN EXAMPLE)', FALSE,3),
    
    (12, 4.6, 'Great mat for yoga, very comfortable! (THIS IS AN EXAMPLE)', FALSE,1),
    (12, 4.8, 'Perfect thickness and non-slip surface. (THIS IS AN EXAMPLE)', FALSE,2),
    (12, 4.5, 'Ideal for home workouts, highly recommend! (THIS IS AN EXAMPLE)',FALSE,3);


-- CREATE example MAIN images for products 
INSERT INTO images (product_id, image_html, image_desc) VALUES
(0, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725484883019/sample_0.jpg', 'An image of Smartphone X (THIS IS AN EXAMPLE)'),
(1, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725484923434/sample_0.jpg', 'An image of Microwave Oven (THIS IS AN EXAMPLE)'),
(2, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725484975678/sample_0.jpg', 'An image of Men’s Jacket (THIS IS AN EXAMPLE)'),
(3, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485007497/sample_0.jpg', 'An image of Cooking 101 (THIS IS AN EXAMPLE)'),
(4, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485052390/sample_0.jpg', 'An image of Action Figure (THIS IS AN EXAMPLE)'),
(5, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485108966/sample_0.jpg', 'An image of Tennis Racket (THIS IS AN EXAMPLE)'),
(7, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485138190/sample_0.jpg', 'An image of Office Chair (THIS IS AN EXAMPLE)'),
(8, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485173062/sample_0.jpg', 'An image of Moisturizing Cream (THIS IS AN EXAMPLE)'),
(9, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.qy1.de%2Fimg%2Fkleinhacke-309989.jpg&f=1&nofb=1&ipt=8109587a3622e0bc3b0d70512544df34618f117ef17670c7967d2c50b88dc93f&ipo=images', 'An image of Garden Hoe (THIS IS AN EXAMPLE)'),
(10, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485295307/sample_0.jpg', 'An image of Dog Food (THIS IS AN EXAMPLE)'),
(11, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485326559/sample_0.jpg', 'An image of Car Battery (THIS IS AN EXAMPLE)'),
(12, 'https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725485401406/sample_0.jpg', 'An image of Yoga Mat (THIS IS AN EXAMPLE)');




select * from users;
select * from categories;
select * from stores;
select * from products;
select * from reviews;