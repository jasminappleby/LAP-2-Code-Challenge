const form = document.querySelector('#story-form');

form.addEventListener('submit', submitStory);

getAllStories();

function getAllStories() {
    fetch('http://localhost:3000/stories')
        .then(r => r.json())
        .then(appendStory)
        .catch(console.warn)
};

function submitStory(e) {
    e.preventDefault();

    const storyData = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        body: e.target.body.value,
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(storyData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/stories', options)
        .then(r => r.json())
        .then(appendStory)
        .then(() => e.target.reset())
        .catch(console.warn)
};

function appendStory(storyData) {
    const newRow = document.createElement('tr');
    const storyLi = formatStoryTr(storyData, newRow)
    storyList.append(newRow);
};