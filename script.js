const display = document.getElementById('todo-display')
const create = document.getElementById('create')
const btnCreate = document.getElementById('btnCreate')

// prevent the submit button to submit and reload the page
create.addEventListener('submit', (e) => e.preventDefault())

btnCreate.addEventListener('click', () => {
    if (btnCreate.previousElementSibling.value) {
        display.innerHTML += `<li>${btnCreate.previousElementSibling.value} <button class="delete" style="margin-left: 20px;">Delete</button></li>`
        btnCreate.previousElementSibling.value = ''
        const deleteTodo = document.querySelectorAll('.delete')
        deleteTodo.forEach(e => {
            e.addEventListener('click', () => {
                console.log(e.parentElement.remove())
            })
        });
    }
})