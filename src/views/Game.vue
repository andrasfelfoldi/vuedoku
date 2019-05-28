<template>
    <div class="container">
        <router-link to="/" class="back-button">
            <i class="fas fa-chevron-left"></i>
            Back to Main Menu
        </router-link>
        <div class="grid-container">
            <template v-for="(row, i) in puzzle">
                <Cell v-for="(value, j) in row"
                    :key="`${i}${j}`"
                    v-bind:row="i"
                    v-bind:col="j"
                    v-bind:value="value"
                    />
            </template>
        </div>
        <div class="input-container">
            <Inputs />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Inputs from "@/components/Inputs";
import Cell from "@/components/Cell";

export default {
    name: "Game",
    components: {
        Inputs,
        Cell
    },
    computed: {
        ...mapGetters({
            puzzle: 'getPuzzle',
            initialPuzzle: 'getInitialPuzzle',
            selectedCell: 'getSelectedCell',
        }),
    },
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

.grid-container{
    width: 450px;
    height: 450px;
    background-color: #35495e;
    margin-left: 50%;
    transform: translateX(-227px);
    border: solid #5e6975;
    border-width: 2px;
}

.input-container{
    margin-top: 25px;
    margin-left: 50%;
    transform: translateX(-125px);
}
</style>
