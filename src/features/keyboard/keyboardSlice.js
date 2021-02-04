import { createSlice } from "@reduxjs/toolkit";
import { createOscillator, mapKeyToOscillator } from "./oscillatorManager";

const oscillators = [];

const oscSlice = createSlice({
  name: "oscillator",
  initialState: { oscillators, playing: false, register: 3 },
  reducers: {
    playOscillator(state, { payload }) {
      state.oscillators = [...state.oscillators, payload.keyCode];
      state.playing = true;
    },
    stopOscillator(state, { payload }) {
      state.oscillators = state.oscillators.filter(
        (osc) => osc === payload.keyCode
      );
      state.playing = false;
    },
  },
});

export const { playOscillator, stopOscillator } = oscSlice.actions;

export default oscSlice.reducer;
