function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function startTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    minute = checkTime(minute);
    seconds = checkTime(seconds);

    const dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    let greetMessage;
    if (hour < 12) greetMessage = 'Bom Dia ';
    if (hour >= 12 && hour <= 17) greetMessage = 'Boa Tarde ';
    if (hour >= 17 && hour <= 24) greetMessage = 'Boa Noite ';

    document.getElementById('sGreetings').innerHTML = `
        <b>${greetMessage}</b> Garoze <br> Hoje é <b>${dayWeek[today.getDay()]}-feira</br>!
    `

}

