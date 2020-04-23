import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

function formatTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

Clock.propTypes = {
};

function Clock(props) {

  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const newTimeString = formatTime(date);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    }
  }, [])

  return (
      <p>{timeString}</p>
  );
}

export default Clock;
