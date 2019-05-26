import Vue from 'vue'
import Vuex from 'vuex'
import { getVeryEasySudoku, getEasySudoku, getMediumSudoku, getHardSudoku } from "fake-sudoku-puzzle-generator";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    puzzle: null,
  },
  getters: {
    getPuzzle: state => state.puzzle,
  },
  mutations: {
    setPuzzle: (state, puzzle) => (state.puzzle = puzzle),
  },
  actions: {
    loadPuzzle: ({commit}, difficulty) => {
      switch (difficulty) {
        case 'Very Easy':
          commit('setPuzzle', getVeryEasySudoku());
          break;
        case 'Easy':
          commit('setPuzzle', getEasySudoku());
          break;
        case 'Medium':
          commit('setPuzzle', getMediumSudoku());
          break;
        case 'Hard':
          commit('setPuzzle', getHardSudoku());
          break;
        default:
          commit('setPuzzle', getVeryEasySudoku());
          break;
      }
    }
  }
})
