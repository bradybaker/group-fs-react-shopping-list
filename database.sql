-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	item VARCHAR(80),
	quantity INT,
	unit VARCHAR(50),
	purchased BOOLEAN DEFAULT False
); 

DROP TABLE groceries;

INSERT INTO "groceries" ("item", "quantity", "unit", "purchased") VALUES ( 'Bananas', 4, 'pounds', False);
INSERT INTO "groceries" ("item", "quantity", "unit", "purchased") VALUES ( 'Potatoes', 2, 'pounds', False);
INSERT INTO "groceries" ("item", "quantity", "unit", "purchased") VALUES ( 'Tomatoes', 3, 'each', False);
INSERT INTO "groceries" ("item", "quantity", "unit", "purchased") VALUES ( 'Ice Cream', 2, 'quarts', False);



