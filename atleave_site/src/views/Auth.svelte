<script>
  let email, passwd;

  let isExists = false;

  let isLoading = false;

  let hasError = false;

  async function postCall(d) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    const res = await fetch("http://localhost:8888/auth", {
      body: d,
      mode: "cors",
      method: "POST",
      headers: headersList,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  async function loginCall() {
    const element = document.getElementById("input");

    passwd = element?.value;

    const res = await fetch(
      `http://localhost:8888/auth?email=${email}&passwd=${passwd}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    if (res["data"]) {
      hasError = false;
      window.location.assign("http://127.0.0.1:3000/home");
    } else {
      hasError = true;
    }
  }

  async function signUpCall() {
    const element = document.getElementById("input");

    passwd = element?.value;

    let res = await postCall(JSON.stringify({ email: email, passwd: passwd }));

    window.location.assign("http://127.0.0.1:3000/home");
  }

  async function checkEmail() {
    const element = document.getElementById("input");

    if (!email) {
      email = element?.value;

      const response = await fetch(
        `http://localhost:8888/auth/email?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        });

      if (response["statusCode"] == 200) {
        isExists = true;
      } else {
        isExists = false;
      }

      element.value = "";
      element.placeholder = "Enter your password";
    }
  }

  async function authenticate() {
    if (isLoading) return;

    console.log(document.getElementById("input").value);

    if (email == null) {
      isLoading = true;

      await checkEmail();

      isLoading = false;
      return;
    }

    if (isExists) {
      isLoading = true;

      await loginCall();

      isLoading = false;

      return;
    }

    if (!isExists) {
      isLoading = true;

      await signUpCall();

      isLoading = false;

      return;
    }
  }
</script>

<section class="main">
  <div class="inputSec">
    <input type="email" placeholder="Enter your email" id="input" />
    {#if hasError}
      <p id="errorText">Please enter a correct password</p>
    {/if}
  </div>
  <input
    type="button"
    value={isLoading ? "...Loading" : "Continue"}
    id="button"
    on:click={authenticate}
  />
</section>

<style>
  .main {
    height: 100%;
    margin-left: 60px;
    margin-right: 60px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 40px;
  }

  .main > .inputSec {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
  }

  .main > .inputSec > p {
    color: red;
    font-size: 14px;
    font-weight: 300;
    padding-left: 8px;
    margin-top: 16px;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 12px;
    outline: none;
    background-color: #1e2435;
    border: none;
    color: white;
    padding: 0px 10px;
    font-family: "Rubik";
    font-size: 14px;
  }

  #button {
    height: 45px;
    cursor: pointer;
    background-color: #a259ff;
    color: white;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 300;
  }
</style>
