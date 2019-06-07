let url = 'https://randomuser.me/api/';
const image = document.querySelector('#image');
const name = document.querySelector('#name');
const handle = document.querySelector('#handle');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const btn = document.querySelector('#btn');

window.onload = getResults();

// Click Event
btn.addEventListener('click', function(){
    console.log('clicked')
    getResults();
})

// Fetch Request
function getResults(){
    fetch(url)
.then(handleError)
.then(returnJSON)
.then(updateProfile)
.catch(catchError)
}

// Handle Fetch Errors
function handleError(response){
    if(!response.ok){
        throw Error(response.status)
    }
    return response
}

// Parse JSON
function returnJSON(data) {
    return data.json()
}

// Update Profiles
function updateProfile(res) {
    console.log(res.results[0].name);
    image.src = `${res.results[0].picture.medium}`
    handle.textContent = `${res.results[0].login.username}`
    name.textContent = `${res.results[0].name.first} ${res.results[0].name.last}`
    handle.textContent = `${res.results[0].login.username}`
    email.textContent = `${res.results[0].email}`
    city.textContent = `${res.results[0].location.city}`
}

// Handle Errors
function catchError(err) {
    console.log(err)
}
