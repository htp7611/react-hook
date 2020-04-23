import React, {useState} from 'react';
import './ColorBox.sass'

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'blue', 'apple', 'black'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => localStorage.getItem('box_color') || 'deeppink');
  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }
  return (
      <div className='color-box' style={{backgroundColor: color}} onClick={handleBoxClick}>COLOR BOX</div>
  );
}

export default ColorBox;
