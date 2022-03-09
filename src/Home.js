import React from 'react';
import { Link } from 'react-router-dom';

const PlayAudio = () => {
  return (
    <Link to="/scenarios">
      <button className="startButton">start game</button>
    </Link>
  );
};

export default PlayAudio;
