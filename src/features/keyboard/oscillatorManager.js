import { KEYS } from "./Keyboard";
import FrequencyMap from "note-frequency-map";
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const OscillatorMap = new Map();
const KeyMap = {
  a: "C",
  s: "D",
  d: "E",
  f: "F",
  g: "G",
  h: "A",
  j: "B",
  k: "C",
  l: "D",
  ":": "E",
  "'": "F",
};

export const createOscillator = (frequency) => {
  // create Oscillator node
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.value = frequency;

  let masterGainNode = audioContext.createGain();
  masterGainNode.connect(audioContext.destination);
  oscillator.connect(masterGainNode);
  return oscillator;
};

export const isValidKey = (key) => {
  return KEYS.includes(key);
};

export const playNote = (key, register) => {
  const note = getNoteFromKey(key);
  const frequency = getFrequency(note, register);
  const osc = createOscillator(frequency);
  osc.start();
  OscillatorMap.set(frequency, osc);
};

export const stopNote = (key, register) => {
  const note = getNoteFromKey(key);
  const osc = OscillatorMap.get(getFrequency(note, register));
  osc.stop();
};

const getFrequency = (key, register) => {
  return FrequencyMap.noteFromName(`${key}${register}`).frequency;
};

export const getNoteFromKey = (key) => {
  return KeyMap[key];
};
