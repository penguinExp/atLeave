<script lang="ts">
  import hate from "../assets/hate.svg";
  import love from "../assets/love.svg";

  export let data: Array<any>;

  let activeIndex = 0;

  function dislikeThePics() {
    if (activeIndex >= data.length - 1) {
      activeIndex = 0;
      return;
    }

    activeIndex = activeIndex + 1;
  }

  function navigateToBooking() {
    window.location.assign(
      "http://127.0.0.1:3000/book?name=Kanyakumari%20Itinerary&id=7"
    );
  }
</script>

<main>
  <h1>Quick Pick</h1>
  <div class="card-groups">
    {#each data as pics, i}
      <div
        class="card-group"
        id="cardGroup"
        data-status={i == activeIndex ? "active" : "hidden"}
      >
        <div
          class="small-card card"
          style={`background: url(${data[activeIndex]["pics"][0]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="big-card card"
          style={`background: url(${data[activeIndex]["pics"][1]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="small-card card"
          style={`background: url(${data[activeIndex]["pics"][2]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="big-card card"
          style={`background: url(${data[activeIndex]["pics"][3]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="small-card card"
          style={`background: url(${data[activeIndex]["pics"][4]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="big-card card"
          style={`background: url(${data[activeIndex]["pics"][5]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="small-card card"
          style={`background: url(${data[activeIndex]["pics"][6]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
        <div
          class="big-card card"
          style={`background: url(${data[activeIndex]["pics"][7]}); background-repeat: no-repeat;
    background-size: cover;
    background-position: 10%; width:100% height:100%`}
        />
      </div>
    {/each}
  </div>

  <div class="buttons">
    <button id="leftNav" on:click={() => dislikeThePics()}>
      <img src={hate} alt={hate} />
    </button>

    <button id="rightNav" on:click={() => navigateToBooking()}>
      <img src={love} alt={love} />
    </button>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    flex-flow: column nowrap;
    gap: 2rem;
  }

  h1 {
    margin-bottom: 50px;
  }

  .card-group[data-status="active"] {
    transform: scale(100%);
  }
  .card-group[data-status="hidden"] {
    transform: scale(0%);
  }

  .card-groups,
  .card-group,
  .card {
    aspect-ratio: 5 / 7;
  }

  .card-groups,
  .card-group,
  .big-card {
    width: 30vmin;
  }

  .card-group {
    position: absolute;
  }

  .big-card:nth-child(2) {
    transform: translateX(-10%) rotate(-1deg);
  }

  .big-card:nth-child(4) {
    transform: rotate(2deg);
  }

  .big-card:nth-child(6) {
    transform: translateX(-6%) rotate(-3deg);
  }

  .big-card:nth-child(8) {
    transform: translate(-10%, 3%) rotate(5deg);
  }

  .buttons > button {
    background-color: transparent;
    border: 2px solid white;
    border-radius: 80px;
    width: 60px;
    height: 60px;
    transition: scale 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
    padding-top: 3px;
  }

  .buttons {
    display: flex;
    gap: 2rem;
    padding-right: 35px;
    padding-bottom: 50px;
    padding-top: 50px;
  }

  .buttons > #rightNav {
    padding-top: 5px;
    border: 2px solid #a259ff;
  }

  button:hover {
    transform: scale(105%);
    cursor: pointer;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }

  .big-card {
    width: 30vmin;
    border-radius: 1vmin;
  }

  .small-card {
    width: 12vmin;
    border-radius: 2vmin;
    left: 50%;
    top: 50%;
    transform: translate(-60%, -25%);
  }

  .card-group:hover > .big-card:nth-child(2) {
    transform: translate(-75%, 16%) rotate(-24deg);
  }

  .card-group:hover > .big-card:nth-child(4) {
    transform: translate(-25%, 8%) rotate(-8deg);
  }

  .card-group:hover > .big-card:nth-child(6) {
    transform: translate(25%, 8%) rotate(8deg);
  }

  .card-group:hover > .big-card:nth-child(8) {
    transform: translate(75%, 16%) rotate(24deg);
  }

  .card-group:hover > .small-card:nth-child(1) {
    transform: translate(200%, -120%) rotate(-15deg);
    z-index: 11;
  }

  .card-group:hover > .small-card:nth-child(3) {
    transform: translate(250%, 120%) rotate(15deg);
    z-index: 12;
  }

  .card-group:hover > .small-card:nth-child(5) {
    transform: translate(-200%, -120%) rotate(15deg);
    z-index: 13;
  }

  .card-group:hover > .small-card:nth-child(7) {
    transform: translate(-280%, 100%) rotate(-10deg);
    z-index: 14;
  }
</style>
