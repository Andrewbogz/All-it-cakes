const scriptURL = 'https://script.google.com/macros/s/AKfycbwfr2Al6037nOestvktWbfJNugpmZ2pc18I196ssUVfXOf7NHhefeWHQMFDY1LlOsNpJw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for ordering! :D" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}
)