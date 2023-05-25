<script lang="ts">
  import leftArrow from "../assets/leftArrow.svg";
  import rightArrow from "../assets/rightArrow.svg";
  import book from "../assets/book.svg";
  import review from "../assets/review.svg";

  interface Destination {
    from: string;
    id: string;
    image: string;
    title: string;
    noOfDays: string;
    price: string;
    itinerary: string;
  }

  let currentIndex = 0;

  export let data: Array<Destination>;

  function minusCurrentIndex() {
    if (currentIndex <= 0) {
      currentIndex = data.length - 1;
      return;
    }

    currentIndex = currentIndex - 1;
  }

  function plusCurrentIndex() {
    if (currentIndex >= data.length - 1) {
      currentIndex = 0;
      return;
    }

    currentIndex = currentIndex + 1;
  }

  function navigateToBooking(name: string, id: string) {
    window.location.assign(`http://127.0.0.1:3000/book?name=${name}&id=${id}`);
  }

  function navigateToReview(name: string, id: string) {
    window.location.assign(
      `http://127.0.0.1:3000/review?name=${name}&id=${id}`
    );
  }
</script>

<main>
  {#each data as dest, i}
    <section
      class="content"
      id={dest.id}
      data-status={i == currentIndex ? "active" : "unknown"}
    >
      <div
        style={`background: url(${dest.image}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%;`}
      />
      <div class="sec2">
        <div class="contentSec">
          <p class="title">Duration</p>
          <p class="body">{dest.noOfDays}</p>
        </div>
        <div class="contentSec">
          <p class="title">From</p>
          <p class="body">{dest.from}</p>
        </div>
        <div class="contentSec">
          <p class="title">Price</p>
          <p class="body">{dest.price}</p>
        </div>
        <div class="contentSec">
          <p class="title">Itinerary</p>
          <p class="body">
            {dest.itinerary}
          </p>
        </div>
      </div>
      <div class="sec3">
        <h1>{dest.title}</h1>
        <div>
          <button
            id="rateBtn"
            on:click={() => navigateToReview(dest.title, dest.id)}
          >
            <img src={review} alt={review} />
          </button>
          <button
            id="bookBtn"
            on:click={() => navigateToBooking(dest.title, dest.id)}
          >
            <img src={book} alt={book} />
          </button>
        </div>
      </div>
      <div class="sec4">
        <button id="leftNav" on:click={() => minusCurrentIndex()}>
          <img src={leftArrow} alt={leftArrow} />
        </button>

        <button id="rightNav" on:click={() => plusCurrentIndex()}>
          <img src={rightArrow} alt={rightArrow} />
        </button>
      </div>
    </section>
  {/each}
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    height: 90vh;
    position: relative;
  }

  button {
    background-color: transparent;
    border: none;
  }

  section[data-status="unknown"] {
    transform: scale(0);
  }

  section[data-status="active"] {
    transform: scale(100%);
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 0.95fr;
    grid-template-rows: 2fr 1fr;
  }

  .sec2 {
    display: flex;
    flex-flow: column nowrap;
    padding: 10px 40px;
    justify-content: space-around;
    border-left: 2px solid #1e2435;
    box-sizing: border-box;
  }

  .sec2 > .contentSec > .title {
    margin: 5px 0px;
    font-style: normal;
    font-size: 18px;
    color: #a259ff;
  }

  .sec2 > .contentSec > .body {
    margin: 0px;
    font-style: normal;
    font-size: 18px;
  }

  .sec3 {
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #1e2435;
  }

  .sec3 > h1 {
    margin: 0px;
    width: 20rem;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 80px;
  }

  .sec4 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-left: 2px solid #1e2435;
    border-top: 2px solid #1e2435;
  }

  .sec4 > button {
    cursor: pointer;
    transition: 0.3s;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .sec4 > #leftNav:hover {
    translate: -15px;
    transition: 0.5s;
    animation-timing-function: ease-in-out;
  }

  .sec4 > #rightNav:hover {
    translate: 15px;
    transition: 0.5s;
    animation-timing-function: ease-in-out;
  }

  .sec3 > div {
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
    gap: 20px;
    width: 20rem;
  }

  .sec3 > div > button {
    cursor: pointer;
    transition: 0.5s;
    animation-timing-function: ease-in-out;
  }

  .sec3 > div > button > img {
    object-fit: cover;
    width: 90px;
    height: 90px;
  }

  #rateBtn:hover,
  #bookBtn:hover {
    transition: 0.5s;
    transform: scale(120%);
    animation-timing-function: ease-in-out;
  }
</style>
