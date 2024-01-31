var axios = require("axios").default;

var options = {
  method: "GET",
  url: "http://localhost:8080/wp-json/clientes/v1/todos",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJpYXQiOjE3MDY2ODQ3MjQsIm5iZiI6MTcwNjY4NDcyNCwiZXhwIjoxNzA3Mjg5NTI0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.SdolYZ4-dH5xByKaB57HuWw4lHdkEP3n8qzM9ZWQAN4",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
