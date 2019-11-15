const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => { 
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = `
                Summary: ${data.forecast.summary}
                Temperature: ${data.forecast.temperature}.
                Probability of Raining: ${data.forecast.precipProbability}.
                The highest temperature: ${data.forecast.temperatureHigh},
                The lowest temperature: ${data.forecast.temperatureLow}
                `
            }
        })
    })
})