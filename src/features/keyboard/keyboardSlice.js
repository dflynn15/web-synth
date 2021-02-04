import { createSlice } from "@reduxjs/toolkit";
import { isValidKey, playNote, stopNote } from "./oscillatorManager";

const oscSlice = createSlice({
  name: "oscillator",
  initialState: { oscillators: [], playing: false, register: 3 },
  reducers: {
    playOscillator(state, { payload }) {
      if (isValidKey(payload)) {
        state.oscillators = [...state.oscillators, payload];
        state.playing = true;
        playNote(payload, state.register);
      }
    },
    stopOscillator(state, { payload }) {
      if (isValidKey(payload)) {
        state.oscillators = state.oscillators.filter((osc) => osc !== payload);
        state.playing = false;
        stopNote(payload, state.register);
      }
    },
  },
});

export const { playOscillator, stopOscillator } = oscSlice.actions;

export default oscSlice.reducer;
