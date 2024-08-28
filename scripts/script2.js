function addListItem() {
    var linkList = document.getElementById('linkList');
    var newItem = document.createElement('li');
    var newLink = document.createElement('a');
    newLink.href = '#'; // a placeholder href value
    newLink.textContent = 'New Link'; // text for the new link
    newItem.appendChild(newLink);
    linkList.appendChild(newItem);
}
function removeLastItem() {
    var linkList = document.getElementById('linkList');
    var lastItem = linkList.lastElementChild;
    if (lastItem) {
        linkList.removeChild(lastItem);
    }
}

var addButton = document.getElementById('addButton');
addButton.addEventListener('click', addListItem);

var removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', removeLastItem);

var changeLinkButton = document.getElementById('changeLinkButton');
changeLinkButton.addEventListener('click', changeFirstLink);
