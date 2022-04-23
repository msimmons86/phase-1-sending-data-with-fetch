// Add your code here


function submitData(firstName, email){
  const userDetails = {
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      "name":firstName,
      "email":email
    })
  };
  return fetch('http://localhost:3000/users', userDetails)
  .then(res => res.json())
  .then(body => newUser(body.id))
  .catch(error => errorMessage())
}
function newUser(newID){
  document.getElementsByTagName("body")[0].innerHTML = newID;
}

function errorMessage(error){
  document.body.innerHTML = `Unauthorized Access`
}

submitData("", "")

