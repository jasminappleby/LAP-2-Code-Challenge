const pool = require('../dbConfig/init');
const db = require('../dbConfig/init');

class Story {
    constructor(data) {
        this.title = data.title;
        this.authorName = data.authorName;
        this.story = data.story;
    }

    static async create(storyData) {
        return new Promise(async(resolve, reject) => {
            try {
                const { title, authorName, story } = storyData;
                let result = await db.query('INSERT INTO storyDatabase (title, authorName, story) VALUES ($1, $2, $3) RETURNING *;', [title, authorName, story]);
                resolve(pool.query(result));
            } catch (err) {
                reject('Story could not be created');
            }
        });
    };

    static get all() {
        return new Promise(async(resolve, reject) => {
            try {
                // console.log('trying to get a story')
                const storiesData = await db.query(`SELECT * FROM storyDatabase`);
                // console.log("this is story data" + storiesData)
                const stories = storiesData.rows.map((d) => new Story(d));
                resolve(stories);
            } catch (err) {
                reject("Error retrieving stories");
            }
        });
    }
}

module.exports = Story