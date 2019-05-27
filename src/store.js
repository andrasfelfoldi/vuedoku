import Vue from 'vue'
import Vuex from 'vuex'
import { getVeryEasySudoku, getEasySudoku, getMediumSudoku, getHardSudoku } from "fake-sudoku-puzzle-generator";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    puzzle: null,
    initialPuzzle: null,
    selectedCell: {row: null, col: null, value: null},
  },
  getters: {
    getPuzzle: state => state.puzzle,
    getInitialPuzzle: state => state.initialPuzzle,
    getSelectedCell: state => state.selectedCell,
  },
  mutations: {
    initPuzzle: (state, puzzle) => {
      state.puzzle = puzzle;
      state.initialPuzzle = puzzle;
    },
    setSelectedCell: (state, { row, col }) => {
      state.selectedCell = {row, col, value: state.puzzle[row][col]};
    },
  },
  actions: {
    loadPuzzle: ({commit}, difficulty) => {
      switch (difficulty) {
        case 'Very Easy':
          commit('initPuzzle', getVeryEasySudoku());
          break;
        case 'Easy':
          commit('initPuzzle', getEasySudoku());
          break;
        case 'Medium':
          commit('initPuzzle', getMediumSudoku());
          break;
        case 'Hard':
          commit('initPuzzle', getHardSudoku());
          break;
        default:
          commit('initPuzzle', getVeryEasySudoku());
          break;
      }
    },
    selectCell: ({commit}, { row, col }) => {
      commit('setSelectedCell', { row, col });
    },
  }
})
