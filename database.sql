--create a database called 'heavier_load'

--creates user data
CREATE TABLE "user_info" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR (60),
	"last_name" VARCHAR (60)
	);
--creates table for custom exercises	
CREATE TABLE "custom_exercise" (
	"id" SERIAL PRIMARY KEY,
	"exercise" VARCHAR (300),
	"weight" INT,
	"user_exercise_id" INT REFERENCES "user_info"
);

INSERT INTO "user_info" ("first_name","last_name")
VALUES ('Shelby', 'Hill');

INSERT INTO "user_info" ("first_name","last_name")
VALUES ('Elliot', 'Miller');

INSERT INTO "custom_exercise" ("exercise","weight","user_exercise_id")
VALUES ('Bicep Curls', 15, 1);

INSERT INTO "custom_exercise" ("exercise","weight","user_exercise_id")
VALUES ('Bent-Over Row', 15, 2);

SELECT * FROM "user_info";