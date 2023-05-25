<script>
  import { onMount } from "svelte";

  let name, id;

  let isSubmitted = false;

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

    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("phone").value = "";
    // document.getElementById("number").value = "";

    isSubmitted = true;
  }

  onMount(() => {
    extractData();
  });
</script>

<main>
  {#if !isSubmitted}
    <div class="form">
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
    </div>
  {:else}
    <div class="submission">
      <p>Request Submitted Successfully!</p>
      <button
        on:click={() => {
          location.replace("/");
        }}>Back To Home</button
      >
    </div>
  {/if}
</main>

<style>
  main {
    height: 75vh;
    padding: 0px 60vmin;
  }

  .form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  .submission {
    height: 100%;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .submission > button {
    max-width: 50%;
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
    border: none;
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
