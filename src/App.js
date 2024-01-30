import "./App.css";
import axios from "axios";
import WPAPI from "wpapi";

const apiRoot = "http://localhost:8080/wp-json";

const wp = new WPAPI({ endpoint: apiRoot });

let jwtToken = " ";

console.log(wp.posts());

function App() {
  const url = apiRoot.concat("/clientes/v1/");

  const getToken = async function () {
    await axios
      .post("http://localhost:8080/wp-json/jwt-auth/v1/token", {
        username: "admin",
        password: "@arcadio6558929",
      })
      .then(function (response) {
        jwtToken = response.data.token;
        axios.interceptors.request.use(function (config) {
          config.headers.Authorization = jwtToken;

          return config;
        });
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getData = async function () {
    console.log(jwtToken);

    axios
      .get(url + "todos")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteData = async function () {
    await axios
      .get(url + "todos")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const sendData = async () => {
    await axios
      .post(
        url,
        {
          nombre: "rod",
          correo_electronico: "rod@gmail.com",
          telefono: "123456",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Form React Php</h1>
      <p>Contact Me</p>

      <label>First Name</label>
      <input type="text" name="firstname" placeholder="Your name.." />
      <label>Last Name</label>
      <input type="text" name="lastname" placeholder="Your last name.." />

      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />

      <label>Subject</label>
      <textarea name="subject" placeholder="Write something.."></textarea>
      <div className="button-container">
        <button onClick={getToken}>GET</button>
        <button onClick={sendData}>SEND</button>
        <button onClick={deleteData}>DELETE</button>
      </div>
    </div>
  );
}

export default App;
