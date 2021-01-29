import { createSlice } from "@reduxjs/toolkit";

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
// create Oscillator node
var oscillator = audioContext.createOscillator();

let masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);

oscillator.connect(masterGainNode);
oscillator.type = "sawtooth";

const oscSlice = createSlice({
  name: "oscillator",
  initialState: { oscillator, playing: false },
  reducers: {
    toggleOscillator({ playing, oscillator }) {
      playing ? oscillator.stop() : oscillator.start();
      playing = !playing;
    },
  },
});

export const { toggleOscillator } = oscSlice.actions;

export default oscSlice.reducer;
