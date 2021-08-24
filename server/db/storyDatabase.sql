DROP TABLE IF EXISTS storyDatabase;

CREATE TABLE storyDatabase (
    id serial PRIMARY KEY,
    title VARCHAR,
    authorName VARCHAR,
    story VARCHAR;
);