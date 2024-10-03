
window.addEventListener('scroll', function() {
    if(window.scrollY != 0) {
        document.querySelector('#back-to-top').classList.add('scrolled');
        return;
    }
    document.querySelector('#back-to-top').classList.remove('scrolled');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    console.log(params);
    
    emailjs.send('service_qzedygh', 'template_bwb60hj', params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    console.log('Form submitted!');
  });
});