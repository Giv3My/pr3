function formattedphone(phone) {
    const phoneLength = phone.length

    if (phoneLength === 12) {
    } else if (phoneLength === 11) {
        phone = phone.slice(1, phoneLength);
        phone = '+7' + phone;
    } else if (phoneLength === 10) {
        phone = '+7' + phone;
    } else {
        return 'Invalid phone number';
    }

    phone =
        phone.slice(0, 2) + // +7
        ' (' +
        phone.slice(2, 5) + // (921)
        ') ' +
        phone.slice(5, 8) + // 123
        '-' +
        phone.slice(8, 10) + // 45
        '-' +
        phone.slice(10, 12); // 67

    return phone;
}

const phone = prompt('Введите номер телефона:');
alert(`Ваш номер телефона: ${formattedphone(phone)}`);
