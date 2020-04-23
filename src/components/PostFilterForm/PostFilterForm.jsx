import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func
};

PostFilterForm.defaultProps = {
  onSubmit: null
}

function PostFilterForm(props) {
  const {onSubmit} = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null);

  function handleOnchangeForm(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (onSubmit) {
        const formValue = {
          searchTerm: value
        }
        onSubmit(formValue);
      }
    }, 300);

  }

  return (
      <form>
        <input type='text' value={searchTerm} onChange={handleOnchangeForm}/>
      </form>
  );
}

export default PostFilterForm;
