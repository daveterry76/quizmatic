import React, { useContext } from 'react';
import { SelectionContext } from '../../contexts/SelectionContext';
import { SelectContextProps } from '../../types/SelectContextPropTypes';
import '../../styles/selection/error_message.scss';

const ErrorMessage = () => {

  const { error } = useContext<SelectContextProps>(SelectionContext);
  
  return (
    <div className='error_message'>
      {error}
    </div>
  )
}

export default ErrorMessage;