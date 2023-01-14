const input_name = document.querySelector('#name');
const input_email = document.querySelector('#email');
const input_msg = document.querySelector('#msg');
const submit_input = document.querySelector('input[type="submit"]');

function getData(e) {
    e.preventDefault();

    alert(`Name: ${input_name.value}, Email: ${input_email.value}, msg: ${input_msg.value}`);

    console.log(input_name.value);
    console.log(input_email.value);
    console.log(input_msg.value);
}


document.addEventListener("DOMContentLoaded", function() {
    submit_input.addEventListener('click', getData, false);
})