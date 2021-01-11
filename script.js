const buttonClick = document.getElementById('addElement');
const comment = document.getElementById('comment');

function createListPress() {
  if (event.keyCode === 13) {
    createList();
  }
}

function createList() {
  if (comment.value.length > 0) {
    let text = document.getElementById('text');
    let newElement = document.createElement('p');
    newElement.appendChild(document.createTextNode(comment.value));
    comment.value = '';
    text.appendChild(newElement).setAttribute('class', 'dText');
    newElement.addEventListener('click', toggleOn);

    let buttonRemove = document.createElement('img');
    buttonRemove.src = './cancel.svg';
    buttonRemove.addEventListener('click', delItem);
    newElement.appendChild(buttonRemove).setAttribute('class', 'imgSVG');

    function toggleOn() {
      newElement.classList.toggle('done');
    }

    function delItem() {
      newElement.remove();
      buttonRemove.remove();
    }
  }
}

buttonClick.addEventListener('click', createList);
comment.addEventListener('keypress', createListPress);
