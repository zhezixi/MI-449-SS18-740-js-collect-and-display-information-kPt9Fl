var firstNameinput = document.getElementById('fname')
var lastNameinput = document.getElementById('lname')
var descriptioninput = document.getElementById('description')
var emailinput = document.getElementById('email')
var phoneNumberinput = document.getElementById('phone')

var updateProfile = function () {
  var firstName = firstNameinput.value
  var lastName = lastNameinput.value
  var description = descriptioninput.value
  var email = emailinput.value
  var phoneNumber = phoneNumberinput.value
  var preview = document.getElementById('preview')
  var rawlive = document.getElementById('rawlive')
  var uptext =
    '<h1>Hi my name is ' + firstName + ' ' + lastName + '!</h1>' + '<p>' + description + '</p>' +
    '<p>' + '  If you\'re interested in a date, you can email me at' +
    '  <a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    '  or give me a call at' +
    '  <a href="tel:' + phoneNumber + '" target="_blank">' + phoneNumber + '</a>.' +
    '</p>'
  preview.innerHTML = uptext
  rawlive.textContent = uptext
}

firstNameinput.addEventListener('input', updateProfile)
lastNameinput.addEventListener('input', updateProfile)
descriptioninput.addEventListener('input', updateProfile)
emailinput.addEventListener('input', updateProfile)
phoneNumberinput.addEventListener('input', updateProfile)
