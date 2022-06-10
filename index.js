const form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault();

    var input = document.querySelector('input');
    if(input.value.trim() === "") {
        return;
    } 
 
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    var btn = document.createElement('button');
    ul.appendChild(li);
    li.appendChild(btn);
    btn.textContent = (input.value);

    btn.onclick = function() {
      btn.style = 'text-decoration: line-through';
      btn.onclick = function() {
      li.remove();
      }
    }
input.value = "";
}