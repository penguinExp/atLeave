<script>
  import { onMount } from "svelte";

  let reviews = [
    {
      text: "",
      score: 4,
    },
    {
      text: "",
      score: 1,
    },
    {
      text: "",
      score: 5,
    },
    {
      text: "",
      score: 3,
    },
  ];

  function calculateAverageScore() {
    let total = 0;

    for (var i = 0; i < reviews.length; i++) {
      total += reviews[i].score;
    }

    avgScore = total / reviews.length;
  }

  let avgScore = 0;

  onMount(() => {
    calculateAverageScore();
  });
</script>

<main>
  <div class="header">
    <h4>Reviews</h4>
    <div class="reviewNum">
      <h4>{avgScore}</h4>
      <h6>/</h6>
      <h6>5</h6>
    </div>
  </div>
  <div class="reviews">
    {#each reviews as review}
      <div class="review">
        <p class="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          delectus quis eveniet consectetur, ratione unde sequi officiis.
          quisquam?
        </p>
        <p class="score">{review.score} star</p>
      </div>
    {/each}
  </div>
</main>
<div class="inputDiv">
  <input id="name" type="text" placeholder="Please enter your name" />
  <button on:click={() => {}}>Submit</button>
</div>

<style>
  main {
    width: 100vw;
  }

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 20px;
  }

  h4 {
    font-size: 36px;
    margin: 0px;
  }

  h6 {
    font-size: 20px;
    margin: 0px;
  }

  .header > .reviewNum {
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }

  .reviews {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
  }

  .review {
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    box-sizing: border-box;
    padding: 5px 20px;
    display: flex;
    flex-flow: row nowrap;
  }

  .review > .text {
    flex-grow: 1;
    font-size: 16px;
  }

  .review > .score {
    font-size: 18px;
  }

  .inputDiv {
    bottom: 0;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    align-items: center;
    gap: 10px;
    padding: 20px 20px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .inputDiv > input {
    flex-grow: 10;
  }

  .inputDiv > button {
    flex-grow: 1;
  }

  input {
    background-color: #323232;
    height: 40px;
    border: none;
    color: white;
    padding: 0px 10px;
    border-radius: 7px;
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

  button {
    background-color: #a259ff;
    height: 40px;
    border-radius: 7px;
    color: white;
    border: none;
  }
</style>
