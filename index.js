function submitData(name, email) {
  let formData = {
    name: name,
    email: email,
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  const destinationUrl = "http://localhost:3000/users";

  return fetch(destinationUrl, configObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}
