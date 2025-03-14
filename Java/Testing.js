const scriptURL = 'https://script.google.com/macros/s/AKfycbxwaW7mymVeorJote7gJQiwoSwiQBfHzwerDrBRO1RYdOtN1XncDbbD24HSS1lEIc1Qrg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})