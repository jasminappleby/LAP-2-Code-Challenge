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
                resolve(result);
            } catch (err) {
                reject('Story could not be created');
            }
        });
    };
}

module.exports = Story