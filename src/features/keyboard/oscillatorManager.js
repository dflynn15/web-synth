import { KEYS } from "./Keyboard";
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

export const createOscillator = () => {
  // create Oscillator node
  const oscillator = audioContext.createOscillator();

  let masterGainNode = audioContext.createGain();
  masterGainNode.connect(audioContext.destination);
  oscillator.connect(masterGainNode);
  return oscillator;
};

export const mapKeyToOscillator = () => {};
