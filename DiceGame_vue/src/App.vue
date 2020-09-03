<template>
  <div id="app">
    <div class="wrapper clearfix">
      <players :dt="dt" />
      <controls
        :finalScore="finalScore"
        :isPlaying="isPlaying"
        @newGameApp="newGame"
        @randomDice="randomDice"
        @saveScoreDice="saveScoreDice"
        @changeFinalScore="changeFinalScore"
      />
      <dices :dices="dices" />
      <popup-rule :isGame="isGame" @isGamePopup="isGamePopup" />
    </div>
  </div>
</template>

<script>
import Players from "./components/Players";
import Controls from "./components/Controls";
import Dices from "./components/Dices";
import PopupRule from "./components/PopupRule";
export default {
  name: "App",
  data() {
    return {
      dt: {
        scoresPlayers: [43, 72], // Điểm xoay xúc sắc
        currentScores: 38, // Tích điểm xoay xúc sắc
        activePlayer: true, // Ai là người chơi
        isWinner: false,
      },
      isPlaying: false,
      isGame: false,
      dices: [3, 6],
      finalScore: 100,
    };
  },
  methods: {
    newGame() {
      this.isPlaying = !this.isPlaying;
      this.isGame = !this.isGame;
      this.disableFinalScore = !this.disableFinalScore;
      this.disable = true;
      this.dt.isWinner = false;
    },
    isGamePopup() {
      this.isGame = !this.isGame;
      this.isPlaying = true;
      this.activePlayer = true;
      this.dt.scoresPlayers = [0, 0];
      this.dt.currentScores = 0;
      this.dices = [1, 1];
    },
    randomDice() {
      if (this.isPlaying) {
        let dice1 = Math.floor(Math.random() * 5) + 1;
        let dice2 = Math.floor(Math.random() * 5) + 1;
        this.dices = [dice1, dice2];
        if (dice1 === 1 || dice2 === 1) {
          this.nextPlayer();
          setTimeout(() => {
            alert(
              `Người chơi Player ${
                this.dt.activePlayer ? 2 : 1
              } đã quay trúng số 1`
            );
          }, 100);
        } else {
          this.dt.currentScores += dice1 + dice2;
        }
      } else {
        alert("Vui lòng nhấn vào NEW GAME");
      }
    },
    nextPlayer() {
      this.dt.activePlayer = !this.dt.activePlayer;
      this.dt.currentScores = 0;
    },
    saveScoreDice() {
      if (this.isPlaying) {
        // let coppyScorePlayer = [...this.dt.scoresPlayers];
        // let player = this.dt.activePlayer ? 0 : 1;
        // console.log(player);
        // coppyScorePlayer[player] += this.dt.currentScores;
        // console.log(coppyScorePlayer);
        // this.dt.scoresPlayers = coppyScorePlayer;
        this.dt.activePlayer
          ? this.$set(
              this.dt.scoresPlayers,
              0,
              this.dt.currentScores + this.dt.scoresPlayers[0]
            )
          : this.$set(
              this.dt.scoresPlayers,
              1,
              this.dt.currentScores + this.dt.scoresPlayers[1]
            );
        if (!this.isWinner) {
          this.nextPlayer();
        } else {
          this.isPlaying = !this.isPlaying;
          this.dt.isWinner = !this.dt.isWinner;
        }
      } else {
        alert("Vui lòng nhấn vào NEW GAME");
      }
    },
    changeFinalScore(event) {
      let number = parseInt(event.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = event.target.value;
      }
    },
  },
  computed: {
    isWinner() {
      if (
        this.dt.scoresPlayers[0] >= this.finalScore ||
        this.dt.scoresPlayers[1] >= this.finalScore
      ) {
        return true;
      }
      return false;
    },
  },
  components: {
    Players,
    Controls,
    Dices,
    PopupRule,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url("../public/assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
