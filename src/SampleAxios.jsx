import React, { useEffect, useState } from "react";
import axios from "axios";
function SampleAxios() {
  const [jokes, setJokes] = useState([]);
  const [responseMessage, setResponseMessage] = useState();
  const [newJoke, setNewJoke] = useState({
    type: "general",
    setup: "",
    punchline: "",
  });
  const fetchJokes = () => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlePost = () => {
    axios
      .post("https://official-joke-api.appspot.com/jokes", newJoke)
      .then((response) => {
        console.log("Post response:", response.data);
        setResponseMessage("posted Successfully");
      })
      .catch((error) => {
        console.error("There was an error making the POST request!", error);
        setResponseMessage("there is an error in post");
      });
  };

  return (
    <>
      <b>GET Request Data</b>
      <button onClick={fetchJokes}>GET</button>
      <ul style={{ listStyleType: "none" }}>
        {jokes.map((joke) => (
          <li key={joke.id}>
            {joke.setup} - {joke.punchline}
          </li>
        ))}
      </ul>
      <b>POST Request</b>
      <input
        type="text"
        placeholder="Setup"
        value={newJoke.title}
        onChange={(e) => setNewJoke({ ...newJoke, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Punchline"
        value={newJoke.body}
        onChange={(e) => setNewJoke({ ...newJoke, body: e.target.value })}
      />
      <button onClick={handlePost}>Send POST Request</button>
      <p>{responseMessage}</p>
    </>
  );
}

export default SampleAxios;
