import React, { useEffect } from "react";
import { connect } from "react-redux";
import { playOscillator, stopOscillator } from "./keyboardSlice";
import OscillatorKey from "./OscillatorKey";

const mapDispatch = { playOscillator, stopOscillator };
const mapStateToProps = ({ playing }) => {
  return { playing };
};

const Keyboard = ({ playing, playOscillator, stopOscillator }) => {
  const upHandler = (e) => {
    playOscillator(e.code);
  };
  const downHandler = (e) => {
    stopOscillator(e.code);
  };

  useEffect(() => {
    window.addEventListener("keyup", upHandler);
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keyup", upHandler);
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return KEYS.map((key) => {
    return <OscillatorKey key={key} noteValue={key} />;
  });
};

export const KEYS = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];

export default connect(mapStateToProps, mapDispatch)(Keyboard);
