<template>
    <div class="container">
        <router-link to="/" class="back-button">
            <i class="fas fa-chevron-left"></i>
            Back to Main Menu
        </router-link>
        <div class="content">
            <div class="grid-container">
                <div v-for="(row, i) in puzzle" :key="i" class="row">
                    <div v-for="(value, j) in row"
                        :key="j"
                        @click="selectCell({row: i, col: j})"
                        class="cell"
                        v-bind:class="{ editable: !initialPuzzle[i][j], selected: (selectedRow === i && selectedCol === j) }">
                            {{value}}
                    </div>
                </div>
            </div>
            <div class="input-container">
                <Inputs />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Inputs from "@/components/Inputs";

export default {
    name: "Game",
    components: {
        Inputs
    },
    computed: {
        ...mapGetters({
            puzzle: 'getPuzzle',
            initialPuzzle: 'getInitialPuzzle',
            selectedCell: 'getSelectedCell',
        }),
        selectedRow(){
            return this.selectedCell.row;
        },
        selectedCol(){
            return this.selectedCell.col;
        }
    },
    methods: {
        ...mapActions(['selectCell']),
    }
}
</script>

<style scoped>
.back-button{
    position: absolute;
    top: 10px;
    left: 10px;
    color: #35495e;
    text-decoration: none;
    font-size: 1.4em;
}

i{
    margin-right: 5px;
}

.content{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.grid-container{
    width: 450px;
    height: 450px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
}

.row{
    width: 450px;
    height: 50px;
    background-color: #35495e;
    display: flex;
}

.cell{
    width: 46px;
    height: 46px;
    margin: 2px;
    font-size: 1.5em;
    background-color: #BBBBBB;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cell:hover{
    /* background-color: #42b883; */
    transform: scale(1.3);
    border-radius: 5px;
    border-color: #35495e;
    border-width: 3px;
}

.editable{
    background-color: #FFFFFF;
}

.selected{
    background-color: #42b883;
}

.input-container{
    margin-top: 25px;
}
</style>
