DROP TABLE IF EXISTS storyDatabase;

CREATE TABLE storyDatabase (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    psuedonym VARCHAR NOT NULL,
    story VARCHAR NOT NULL
);

