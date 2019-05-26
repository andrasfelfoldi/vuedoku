<template>
    <div>
        <div class="title">VueDoku</div>
        <div class="menu-container">
            <div class="menu">
                <div @click="loadGame('Very Easy')" class="button card-1">Very Easy</div>
                <div @click="loadGame('Easy')" class="button card-1">Easy</div>
                <div @click="loadGame('Medium')" class="button card-1">Medium</div>
                <div @click="loadGame('Hard')" class="button card-1">Hard</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'MainMenu',
    methods: {
        ...mapActions(['loadPuzzle']),
        loadGame(difficulty){
            this.loadPuzzle(difficulty);
            this.$router.push('/game');
        }
    },
    computed: {
        ...mapGetters({puzzle: 'getPuzzle'})
    },
    created() {
        if(!this.puzzle){
            this.loadPuzzle('easy');
        }
    }
}
</script>

<style scoped>
.menu-container {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 3em;
}

.menu {
    display: flex;
    flex-direction: column;
}

.button {
    width: 400px;
    height: 100px;
    font-size: 2em;
    background-color: #35495e;
    color: #42b883;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}
</style>
