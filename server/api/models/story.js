const db = require('../dbConfig/init');

class Story {
    constructor(data) {
        this.title = data.title;
        this.psuedonym = data.psuedonym;
        this.story = data.story;
    }

    static async create(storyData) {
        return new Promise(async(resolve, reject) => {
            try {
                const { title, psuedonym, story } = storyData;
                let result = await db.query('INSERT INTO storyDatabase (title, psuedonym, story) VALUES ($1, $2, $3) RETURNING *;', [title, psuedonym, story]);
                resolve(result);
            } catch (err) {
                reject('Story could not be created');
            }
        });
    };

    static get all() {
        return new Promise(async(resolve, reject) => {
            try {
                const storiesData = await db.query(`SELECT * FROM storyDatabase`);
                const stories = storiesData.rows.map((d) => new Story(d));
                resolve(stories);
            } catch (err) {
                reject("Error retrieving stories");
            }
        });
    }
}

module.exports = Story