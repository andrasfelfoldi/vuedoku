<template>
    <div @click="selectCell({row, col})"
        class="cell"
        :style="positionStyle"
        v-bind:class="{ editable: !initialPuzzle[row][col], selected: (selectedRow === row && selectedCol === col) }">
            {{value}}
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Cell',
    props: ['row', 'col', 'value'],
    computed: {
        ...mapGetters({
            // puzzle: 'getPuzzle',
            initialPuzzle: 'getInitialPuzzle',
            selectedCell: 'getSelectedCell',
        }),
        selectedRow(){
            return this.selectedCell.row;
        },
        selectedCol(){
            return this.selectedCell.col;
        },
        positionStyle() {
            return `top: ${this.row * 50}px; left: ${this.col * 50}px;`;
        }
    },
    methods: {
        ...mapActions(['selectCell']),
    }
}
</script>

<style scoped>
.cell{
    width: 46px;
    height: 46px;
    margin: 2px;
    font-size: 1.5em;
    background-color: #BBBBBB;
    /* display: inline-block; */
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
}

.cell:hover{
    /* background-color: #42b883; */
    transform: scale(1.4);
    border-radius: 5px;
    border: solid #35495e;
    border-width: 3px;
    z-index: 10;
}

.editable{
    background-color: #FFFFFF;
}

.selected{
    background-color: #42b883;
    transform: scale(1.2);
    border-radius: 5px;
    border: solid #35495e;
    border-width: 3px;
    z-index: 9;
}
</style>
