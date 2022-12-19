<script>
  import { onMount } from "svelte";

  let name, id;

  function extractData() {
    const p = new URLSearchParams(location.search);

    name = p.get("name");
    id = p.get("id");
  }
  async function apiCall(d) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    const res = await fetch("http://localhost:8888/bookings", {
      body: d,
      mode: "cors",
      method: "POST",
      headers: headersList,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  async function submit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const number = document.getElementById("number").value;

    const d = JSON.stringify({
      email: email,
      phone: phone,
      name: name,
      peoples: number,
      destination: id,
    });

    await apiCall(d);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("number").value = "";
  }

  onMount(() => {
    extractData();
  });
</script>

<main>
  <h4>Book your consultation for {name} tour with the team</h4>
  <input id="name" type="name" placeholder="Please enter your name" />
  <input id="email" type="email" placeholder="Please enter your email" />
  <input id="phone" type="phone" placeholder="Please enter your phone" />
  <input
    id="number"
    type="number"
    placeholder="Please enter number of travelers"
  />
  <button on:click={() => submit()}>Book Now</button>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column nowrap;
    height: 75vh;
    padding: 0px 60vmin;
  }

  h4 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
  }

  input {
    width: 98%;
    background-color: #1e1e1e;
    height: 35px;
    border: none;
    padding-left: 15px;
    color: white;
  }

  button {
    margin-top: 50px;
    width: 100%;
    background-color: #a259ff;
    height: 40px;
    border-radius: 5px;
    color: white;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
</style>
