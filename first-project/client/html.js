function createfile() {
    fetch('http://localhost:3000/?action=create')
        .then(response => response.text())
        .then(data => alert(data))
        .catch(err => console.error(err));
}

function removefile() {
    fetch('http://localhost:3000/?action=remove')
        .then(response => response.text())
        .then(data => alert(data))
        .catch(err => console.error(err));
}