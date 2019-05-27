<template>
    <div @click="selectCell({row, col})"
        class="cell"
        :style="positionStyle"
        v-bind:class="{
                selected: (selectedRow === row && selectedCol === col),
                highlighted: (selectedRow === row || selectedCol === col),
                editable: !initialPuzzle[row][col],
            }">
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
    /* margin: 2px; */
    border: solid #35495e;
    border-width: 2px;
    font-size: 1.5em;
    background-color: #BBBBBB;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
    cursor: pointer;
    transition: all 150ms ease-in-out;
}

.cell:hover{
    transform: scale(1.4);
    border-radius: 5px;
    border: solid #35495e;
    border-width: 3px;
    width: 44px;
    height: 44px;
    z-index: 10;
}

.editable{
    background-color: #FFFFFF;
}

.selected{
    background-color: #42b883 !important;
    transform: scale(1.2);
    border-radius: 5px;
    border: solid #35495e;
    border-width: 3px;
    width: 44px;
    height: 44px;
    z-index: 9;
}

.highlighted{
    background-color: #7cb39a;
}
</style>
