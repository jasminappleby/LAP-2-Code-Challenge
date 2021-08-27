const form = document.querySelector('#story-form');
const storyList = document.querySelector('table')

form.addEventListener('submit', submitStory);

getAllStories();

function getAllStories() {
    fetch('http://localhost:3000/stories')
        .then(r => r.json())
        .then(formatStoryTable)
        .catch(console.warn)
};

function submitStory(e) {
    e.preventDefault();
    const storyData = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        body: e.target.body.value,
    };
    console.log('this is story data' + storyData)

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

// function appendStory(storyData) {
//     //const newRow = document.createElement('tr');
//     const storyList = formatStoryTable(storyData, newRow)
//         //storyList.append(newRow);
// };

function formatStoryTable(tale) {
    const newRow = document.createElement('tr');
    const titleTd = document.createElement('td');
    const authorTd = document.createElement('td');
    const storyTd = document.createElement('td');

    titleTd.textContent = tale.title
    authorTd.textContent = tale.pseudonym
    storyTd.textContent = tale.body

    newRow.append(titleTd)
    newRow.append(authorTd)
    newRow.append(storyTd)

    return newRow
}