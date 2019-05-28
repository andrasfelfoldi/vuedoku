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
      // The puzzle needs to be cloned to avoid referencing the same values
      const initialPuzzle = [];
      puzzle.forEach(row => {
        initialPuzzle.push(row.slice());
      });

      state.puzzle = puzzle;
      state.initialPuzzle = initialPuzzle;
    },
    setSelectedCell: (state, { row, col }) => {
      state.selectedCell = state.selectedCell.row === row && state.selectedCell.col === col ? {row: null, col: null, value: null} : {row, col, value: state.puzzle[row][col]};
    },
    setSelectedCellValue: (state, value) => {
      const {row, col} = state.selectedCell;
      // Only change the value if this cell is editable
      if(!state.initialPuzzle[row][col]){
        state.selectedCell.value = value || null;

        const newPuzzle = [];
        state.puzzle.forEach(row => {
          newPuzzle.push(row.slice());
        });
        newPuzzle[row][col] = value || null; // null if sent value is 0 which means delete
        state.puzzle = newPuzzle;
      }
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
    enterCellValue: ({commit}, value) => {
      commit('setSelectedCellValue', value);
    },
  }
})
