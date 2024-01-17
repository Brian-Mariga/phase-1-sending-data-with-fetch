function submitData(name, email) {
  const data = {
    name: name,
    email: email,
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const newId = data.id;
      document.body.append(newId);
    })
    .catch((error) => {
      document.body.append(error.message);
    });
}

submitData("Jim", "jim@jim.com");
