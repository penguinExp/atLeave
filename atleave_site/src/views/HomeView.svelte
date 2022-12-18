<script lang="ts">
  import leftArrow from "../assets/leftArrow.svg";
  import rightArrow from "../assets/rightArrow.svg";
  import plusButton from "../assets/plusButton.svg";

  interface Destination {
    from: string;
    id: string;
    image: string;
    title: string;
    noOfDays: string;
    price: string;
    itinerary: string;
  }

  export let data: Array<Destination>;
</script>

<main>
  {#each data as dest}
    <section class="content">
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
        <img src={plusButton} alt={plusButton} id="plusBtn" />
      </div>
      <div class="sec4">
        <img src={leftArrow} alt={leftArrow} id="leftNav" />
        <img src={rightArrow} alt={rightArrow} id="rightNav" />
      </div>
    </section>
  {/each}
</main>

<style>
  main {
    height: 90vh;
    width: 100%;
    position: relative;
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

  .sec4 > img {
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

  .sec3 > #plusBtn {
    transition: 0.5s;
    animation-timing-function: ease-in-out;
  }

  .sec3 > #plusBtn:hover {
    transition: 0.5s;
    transform: rotate(-90deg);
    animation-timing-function: ease-in-out;
  }
</style>
