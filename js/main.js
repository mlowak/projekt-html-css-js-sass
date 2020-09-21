const createAppointment = (appointment) => {
    console.log(appointment);

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        // można 
        headers: {
            'Content-Type': 'application/json',
        },
        // zabezpieczenie przed hackiem, bezpieczenstwo sieciowe
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment),
    })
}

document.getElementById('appointment-form').addEventListener('submit', function(e){
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value
    }



    for(let i = 0; i<formFields.length; i++) {
        if(formFields[i].value ===''){
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error')
        }
    }

    if(allFields) {
        createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = 'Wypełnij wymagane pola'
    }

})