const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chapters = getChapterList() || [];
chapters.forEach(element => {
    displayList(element);
});

function displayList(item) {
    const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }

function setChapterList() {
    localStorage.setItem('myFavBomList', JSON.stringify(chapters));
} 

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter(item => item !== chapter);
    setChapterList();
}
button.addEventListener('click', () => {
    if (input.value != ''){
        displayList(input.value);
        chapters.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();

    } else {
        input.focus()
        alert('The input field is empty :(');
    };
    
});

input.focus();
input.value = '';
