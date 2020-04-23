import React, {Component} from 'react';

function formatTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

class ClockClass extends Component {
  clockInterval;
  constructor(props) {
    super(props);
    this.state = {
      timeString: ''
    }

  }



  componentDidMount() {
    this.clockInterval = setInterval(() => {
      const date = new Date();
      const newTimeString = formatTime(date);
      this.setState({
        timeString: newTimeString,
    });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const {timeString} = this.state;
    return (
        <p>{timeString}</p>
    );
  }
}

export default ClockClass;
