import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleOscillator } from "./oscSlice";

const mapDispatch = { toggleOscillator };

const PlayOsc = ({ toggleOscillator }) => {
  return (
    <button
      onClick={() => {
        toggleOscillator();
      }}
    >
      Play!
    </button>
  );
};

export default connect(null, mapDispatch)(PlayOsc);
