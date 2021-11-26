import { useState } from 'react';
import Button from './Button'
import Popup from './Popup';

function AddItem({onAdd}) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
  setIsOpen(!isOpen);}

  return (
    <div>
      <Button name='Add Item' onClick={togglePopup} styles={'btnHeader'} /> 
      {isOpen && <Popup
      handleClose={togglePopup}
      onAdd={onAdd} onComplete={togglePopup} />}
    </div>
  );
}

export default AddItem;