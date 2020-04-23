import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func
};

TodoForm.defaulProps = {
  onSubmit: null
}

function TodoForm(props) {
  const {onSubmit} = props;
  const [value, setValue] = useState('');

  const handleValueChange = ($event) => {
    setValue($event.target.value);
  }

  const handleSubmit = ($event) => {
    $event.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      title: value
    }
    onSubmit(formValue);
    setValue('');
  }


  return (
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleValueChange}/>
      </form>
  );
}

export default TodoForm;
