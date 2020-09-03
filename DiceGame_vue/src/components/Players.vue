<template>
  <div>
    <div
      class="player-panel"
      :class="{'active': dt.activePlayer && !this.dt.isWinner, 'winner': dt.activePlayer && this.dt.isWinner}"
    >
      <div class="player-name">{{ getNamePlayer(1) }}</div>
      <div class="player-score">{{ dt.scoresPlayers[0] }}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{ dt.activePlayer ? dt.currentScores : 0 }}</div>
      </div>
    </div>

    <div
      class="player-panel"
      :class="{'active': !dt.activePlayer && !this.dt.isWinner, 'winner': !dt.activePlayer && this.dt.isWinner}"
    >
      <div class="player-name">{{ getNamePlayer(2) }}</div>
      <div class="player-score">{{ dt.scoresPlayers[1] }}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{ dt.activePlayer ? 0 : dt.currentScores }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cmp-player",
  props: ["dt"],
  data() {
    return {};
  },
  methods: {
    getNamePlayer(index) {
      var defaultName = "Player " + index;
      var activePlayer;
      this.dt.activePlayer ? (activePlayer = 1) : (activePlayer = 2);
      if (activePlayer === index && this.dt.isWinner) {
        defaultName = "Winner!";
      }
      return defaultName;
    },
  },
};
</script>

<style scoped>
/**********************************************
*** PLAYERS
**********************************************/

.player-panel {
  width: 50%;
  float: left;
  height: 600px;
  padding: 100px;
  transition: all 0.3s ease;
  background-color: #fff;
}

.player-name {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
}

.player-score {
  text-align: center;
  font-size: 80px;
  font-weight: 100;
  color: #42b983;
  margin-bottom: 130px;
}

.active {
  background-color: #f7f7f7;
}

.active .player-name {
  font-weight: 300;
}

.active .player-name::after {
  content: "\2022";
  font-size: 47px;
  position: absolute;
  color: #42b983;
  top: -7px;
  right: 10px;
}

.player-current-box {
  background-color: #42b983;
  color: #fff;
  width: 40%;
  margin: 0 auto;
  padding: 12px;
  text-align: center;
}

.player-current-label {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
  color: #222;
}

.player-current-score {
  font-size: 30px;
}

.winner {
  background-color: #f7f7f7;
}

.winner .player-name {
  font-weight: 300;
  color: #42b983;
}
</style>