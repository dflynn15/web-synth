import { createSlice } from "@reduxjs/toolkit";
import { createOscillator } from "./oscillator";

let oscillator = createOscillator();

const oscSlice = createSlice({
  name: "oscillator",
  initialState: { playing: false },
  reducers: {
    toggleOscillator(state) {
      if (state.playing) {
        oscillator.stop();
      } else {
        oscillator = createOscillator();
        oscillator.start();
      }
      state.playing = !state.playing;
    },
  },
});

export const { toggleOscillator } = oscSlice.actions;

export default oscSlice.reducer;
