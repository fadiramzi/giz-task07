import React from 'react'
import AddItem from './AddItem'
import Input from './Input'

const Header = ({onAdd, onChange}) => {
    return (
        <header className='headerCls'>
            <div className='headerDiv'>
              <div>
                <Input disc='Search for products here...' type='text' styles='searchTxt' onChange={onChange} id='searchId'/>
              </div>
              <div>
                <AddItem onAdd={onAdd} />
              </div>
            </div>
        </header>

    )
}

export default Header
