const form = document.querySelector('#story-form');

form.addEventListener('submit', submitStory);


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

    fetch('http://localhost:3000/', options)
        .then(r => r.json())
        .then(appendStory)
        .then(() => e.target.reset())
        .catch(console.warn)
};