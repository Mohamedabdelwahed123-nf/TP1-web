document.querySelector('ul').addEventListener('click', function(event) {
      
  if (event.target.tagName === 'LI') {
    event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
});