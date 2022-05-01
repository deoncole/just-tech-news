// to handle when the user signs up, add async to the front of it to make it work asyncronous 
async function signupFormHandler(event) {
    event.preventDefault();

    // set up const for the elements
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // if elements have been entered use a fetch request to POST the info to the database
    if (username && email && password) {
        // using await we can assign it to a variable without having to use a Promise
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if(response.ok){
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

// function for the user to log in
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  // query the document to the button and add the event listener calling it on submit/login and the sign up/login function
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);