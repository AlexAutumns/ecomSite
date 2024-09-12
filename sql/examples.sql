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

-- Create example products
INSERT INTO products (product_name, product_desc, price, category_id, stock_quantity, user_id, status) VALUES
    ('Smartphone X', 'Latest model with high-resolution camera and long battery life. (THIS IS AN EXAMPLE)', 799.99, 1, 50, NULL, 'available'),
    ('Microwave Oven', 'Compact microwave oven with multiple cooking settings. (THIS IS AN EXAMPLE)', 129.99, 2, 30, NULL, 'available'),
    ('Men’s Jacket', 'Stylish and warm winter jacket for men. (THIS IS AN EXAMPLE)', 89.99, 3, 100, NULL, 'available'),
    ('Cooking 101', 'A beginner’s guide to cooking delicious meals. (THIS IS AN EXAMPLE)', 19.99, 4, 200, NULL, 'available'),
    ('Action Figure', 'Collectible action figure with multiple accessories.', 24.99, 5, 150, NULL, 'available'),
    ('Tennis Racket', 'Lightweight tennis racket with a comfortable grip.', 99.99, 6, 75, NULL, 'available'),
    ('Office Chair', 'Ergonomic chair designed for comfort during long hours.', 199.99, 7, 40, NULL, 'available'),
    ('Moisturizing Cream', 'Hydrating cream suitable for all skin types.', 29.99, 8, 200, NULL, 'available'),
    ('Garden Hoe', 'Durable hoe for gardening and landscaping tasks.', 15.99, 9, 100, NULL, 'available'),
    ('Dog Food', 'High-quality dog food formulated for all life stages.', 49.99, 10, 80, NULL, 'available'),
    ('Car Battery', 'Reliable car battery for various vehicle types.', 89.99, 11, 60, NULL, 'available'),
    ('Yoga Mat', 'Non-slip yoga mat for all types of workouts.', 29.99, 12, 150, NULL, 'available');

-- Create example reviews for products
INSERT INTO reviews (product_id, rating, review_desc) VALUES
    (1, 4.5, 'Great phone with excellent features! (THIS IS AN EXAMPLE)'),
    (1, 5.0, 'Best smartphone I have ever owned! Highly recommended.'),
    (1, 4.2, 'Good value for the price, but the battery could last longer.'),
    
    (2, 4.0, 'Works well, but could be more powerful. (THIS IS AN EXAMPLE)'),
    (2, 3.8, 'Decent microwave, but I wish it had a larger capacity.'),
    (2, 4.5, 'Very user-friendly and heats food evenly.'),
    
    (3, 5.0, 'Absolutely love this jacket! (THIS IS AN EXAMPLE)'),
    (3, 4.9, 'Keeps me warm in winter, stylish too!'),
    (3, 4.0, 'Great jacket, but the sizing runs a bit small.'),
    
    (4, 3.5, 'Good book but needs more recipes. (THIS IS AN EXAMPLE)'),
    (4, 4.2, 'Helpful for beginners, but I wanted more advanced tips.'),
    (4, 4.0, 'Informative and easy to follow!'),
    
    (5, 4.8, 'My son loves this action figure! Great quality! (THIS IS AN EXAMPLE)'),
    (5, 5.0, 'Excellent detail! A must-have for collectors.'),
    (5, 4.5, 'My kids play with it all the time, very durable.'),
    
    (6, 4.2, 'Good racket, but it could use a better grip. (THIS IS AN EXAMPLE)'),
    (6, 4.5, 'Lightweight and great for beginners!'),
    (6, 4.8, 'Perfect balance and power! Really improved my game.'),
    
    (7, 5.0, 'This chair is incredibly comfortable! (THIS IS AN EXAMPLE)'),
    (7, 4.7, 'Excellent for long hours at the desk!'),
    (7, 4.5, 'Assembly was a bit tricky, but worth it.'),
    
    (8, 4.5, 'Great moisturizer, but the scent is a bit strong. (THIS IS AN EXAMPLE)'),
    (8, 4.0, 'Works wonders for dry skin!'),
    (8, 4.3, 'Lightweight and absorbs quickly, nice product.'),
    
    (9, 4.7, 'Perfect for my gardening needs! Highly recommend! (THIS IS AN EXAMPLE)'),
    (9, 4.9, 'Very sturdy and gets the job done well.'),
    (9, 4.5, 'I love this hoe; it makes gardening so much easier!'),
    
    (10, 4.9, 'My dog loves this food! Great quality! (THIS IS AN EXAMPLE)'),
    (10, 5.0, 'Best dog food I’ve found! My dog is thriving.'),
    (10, 4.8, 'No more picky eating; he loves it!'),
    
    (11, 4.3, 'Installed easily and works great! (THIS IS AN EXAMPLE)'),
    (11, 4.0, 'Good battery life, but check compatibility first.'),
    (11, 4.5, 'Reliable performance; I’m satisfied with my purchase.'),
    
    (12, 4.6, 'Great mat for yoga, very comfortable! (THIS IS AN EXAMPLE)'),
    (12, 4.8, 'Perfect thickness and non-slip surface.'),
    (12, 4.5, 'Ideal for home workouts, highly recommend!');


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


-- CREATE user examples for users
INSERT INTO users (username, email, user_pass, user_pic_url, joined_at, is_deleted) VALUES
('john_doe', 'john.doe@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/john.jpg', '2023-01-10 08:00:00', FALSE),
('jane_smith', 'jane.smith@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/jane.jpg', '2023-01-12 09:30:00', FALSE),
('mike_jones', 'mike.jones@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/mike.jpg', '2023-01-15 10:15:00', FALSE),
('susan_brown', 'susan.brown@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/susan.jpg', '2023-01-20 12:00:00', FALSE),
('emily_clark', 'emily.clark@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/emily.jpg', '2023-01-22 11:45:00', FALSE),
('david_white', 'david.white@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/david.jpg', '2023-01-25 14:20:00', FALSE),
('laura_green', 'laura.green@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/laura.jpg', '2023-01-28 15:30:00', FALSE),
('charles_black', 'charles.black@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/charles.jpg', '2023-02-01 16:00:00', FALSE),
('nancy_perez', 'nancy.perez@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/nancy.jpg', '2023-02-05 17:10:00', FALSE),
('peter_young', 'peter.young@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz12345678', 'http://example.com/img/peter.jpg', '2023-02-10 18:25:00', FALSE);

select * from users;
select * from categories;
select * from products;
select * from reviews;