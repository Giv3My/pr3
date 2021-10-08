function getRow(firstRow, secondRow, letter) {
    let str1 = str2 = 0;

    for (let i in firstRow) {
        if (firstRow.charAt(i) === letter) {
            str1++;
        }
    }

    for (let i in secondRow) {
        if (secondRow.charAt(i) === letter) {
            str2++;
        }
    }

    console.log(str1, str2);

    if (str1 == 0 && str2 == 0) {
        alert('Этой буквы нет ни в одной строке');

        const newLetter = prompt('Введите букву для подсчёта');
        return getRow(firstRow, secondRow, newLetter);
    }
    else if (str1 > str2) {
        return alert(`Больше всего буквы '${letter}' в строке: ${firstRow}`);
    }
    else return alert(`Больше всего буквы '${letter}' в строке: ${secondRow}`);;
}

let firstRow = secondRow = letter = '';

firstRow = prompt('Введите первую строку');
secondRow = prompt('Введите вторую строку');
letter = prompt('Введите букву для подсчета');

getRow(firstRow, secondRow, letter);
