let formData = new FormData();
formData.append('email', 'hooman@test.com');
formData.append('password', 'hooman@test.com');

const params = new URLSearchParams(formData);
console.log('Serialized data:', params.toString())
JSON.stringify(Object.fromEntries(formData));
//const formdata = new FormData(document.querySelector('form'));


register:
fetch("http://localhost:3000/api/v1/auth/register", {
  method: "POST",
  body: JSON.stringify({
    email: "hooman@test.com",
    name: "hooman@test.com",
    password: "hooman@test.com",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then((response) => response.json())
.then((json) => console.log(json));



login:
fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: "hooman@test.com",
      password: "hooman@test.com"
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));


 user:
  fetch("http://localhost:3000/api/v1/auth/user", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzEwODk5NjksInN1YiI6eyJJRCI6NCwiSW1hZ2UiOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1ob29tYW5AdGVzdC5jb20iLCJOYW1lIjoiaG9vbWFuQHRlc3QuY29tIiwiRW1haWwiOiJob29tYW5AdGVzdC5jb20ifX0.p1w-56A6Tc191yOlWb7iwg9NW29TgHNBxWRGqipwnr8"
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));



  


