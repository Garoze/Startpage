function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function getTimeMessage(hour) {
    if (hour < 12) return 'Bom dia ';
    if (hour >= 12 && hour <= 17) return 'Boa Tarde ';
    if (hour >= 17 && hour <= 24) return 'Boa Noite ';
}

function getDayOfTheWeek(day) {
    const dayWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dayWeek[day];
}

function startTime() {
    const today = new Date();
    const hour = today.getHours();

    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    minute = checkTime(minute);
    seconds = checkTime(seconds);

    document.getElementById('sGreetings').innerHTML = `
        <b>${getTimeMessage(hour)}</b> Garoze <br> Hoje é <b>${getDayOfTheWeek(today.getDay())}</b>!
    `


}



