const form = document.querySelector('#story-form');
const storyList = document.querySelector('table')

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
    const storyLi = formatStoryTable(storyData, newRow)
    storyList.append(newRow);
};

function formatStoryTable(tale, tr) {
    const titleTd = document.createElement('td');
    const authorTd = document.createElement('td');
    const storyTd = document.createElement('td');

    titleTd.textContent = tale.title
    authorTd.textContent = tale.pseudonym
    storyTd.textContent = tale.body

    tr.append(titleTd)
    tr.append(authorTd)
    tr.append(storyTd)

    return tr
}