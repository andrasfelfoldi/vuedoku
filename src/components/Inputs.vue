<template>
    <div class="container">
        <div class="button" v-for="button in buttons" :key="button.value" :class="button.typeClass" :style="button.positionStyle" @click="enterCellValue(button.value)">
            {{button.value || "x"}}
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'Inputs',
    methods: {
        ...mapActions(['enterCellValue']),
    },
    data() {
        return {
            buttons: [
                { value: 1, positionStyle: `left: 0px; top: 0px;`, typeClass: "number" },
                { value: 2, positionStyle: `left: 50px; top: 0px;`, typeClass: "number" },
                { value: 3, positionStyle: `left: 100px; top: 0px;`, typeClass: "number" },
                { value: 4, positionStyle: `left: 150px; top: 0px;`, typeClass: "number" },
                { value: 5, positionStyle: `left: 200px; top: 0px;`, typeClass: "number" },
                { value: 6, positionStyle: `left: 0px; top: 50px;`, typeClass: "number" },
                { value: 7, positionStyle: `left: 50px; top: 50px;`, typeClass: "number" },
                { value: 8, positionStyle: `left: 100px; top: 50px;`, typeClass: "number" },
                { value: 9, positionStyle: `left: 150px; top: 50px;`, typeClass: "number" },
                { value: 0, positionStyle: `left: 200px; top: 50px;`, typeClass: "delete" },
            ]
        }
  }

}
</script>

<style scoped>
.container{
    width: 250px;
    height: 100px;
    color: #42b883;
}

.button{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
    cursor: pointer;
    position: absolute;
    transition: all 150ms ease-in-out;
}

.button:hover{
    transform: scale(1.4);
    border-radius: 5px;
    border: solid #35495e;
    width: 44px;
    height: 44px;
    border-width: 3px;
    z-index: 10;
}

.number{

    background-color: #FFFFFF;
}

.delete{
    background-color: deeppink;
    color: #FFFFFF;
}
</style>
