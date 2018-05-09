var childrenCounter = 0;
var note = document.getElementById('note');
var notationInput = document.getElementById('notationInput');
var addButton = document.getElementById('add-button');
var clearButton = document.getElementById('clear-button');
var liClass = "classLi";

var fonts = [
    'Arial Narrow',
    'Courier New',
    'Comic Sans MS',
    'Franklin Gothic Medium',
    'Georgia',
    'Impact',
    'Verdana',
    'Palatino Linotype',
    'Century Gothic'
];


function createNotation(stringNotation) {
    let nodeLi = document.createElement('li');
    nodeLi.addEventListener('click', function() {
        nodeLi.classList.toggle('cross-out-notation');
    });
    if(((childrenCounter + 1) % 3) === 0) {
        nodeLi.style.backgroundColor = generateColor();
        nodeLi.style.color = generateColor();
        nodeLi.style.fontFamily = fonts[Math.floor(Math.random()*(fonts.length-1))];
    }
    nodeLi.classList.add(liClass);
    nodeLi.innerHTML = stringNotation;
    return nodeLi;
}

function addNotation() {
    if(notationInputValidation()) {
        const str = notationInput.value;
        notationInput.value = '';
        let notation = createNotation(str);
        note.appendChild(notation);
        childrenCounter += 1;
    } else {
        alert('Введите имя записи');
    }

}
addButton.addEventListener('click', addNotation);


function deleteAllNotation() {
    for(let i=0; i < childrenCounter; i++) {
        note.removeChild(note.lastChild);
    }
    childrenCounter = 0;

}
clearButton.addEventListener('click', deleteAllNotation);



function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function notationInputValidation() {
    return notationInput.value.trim().length !== 0;


}



