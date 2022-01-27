document.addEventListener('DOMContentLoaded', () => {
    const cells = document.getElementsByTagName('td');
    let selectedCellIndex = 0;
    let newCellIndex = 0;

    function getRandom(cellsArr) {
        const number = Math.floor(Math.random() * cellsArr.length);
        return number;
    }

    setInterval(() => {
        while (selectedCellIndex === newCellIndex) {
            selectedCellIndex = getRandom(cells);
        }

        if (newCellIndex >= 0) {
            cells[newCellIndex].innerHTML = '';
        }

        cells[selectedCellIndex].innerHTML = '<img src="https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/dom/pic/goblin.png">';
        newCellIndex = selectedCellIndex;
    }, 2000);
});