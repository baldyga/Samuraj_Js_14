const names = [];
const div = document.querySelector('div');
const addName = (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("liczba się powtarza");
                return;
            }
        }
        names.push(newName);
        div.textContent += newName + ", ";
        input.value = "";
    }
}
document.querySelector('button').addEventListener('click', addName);