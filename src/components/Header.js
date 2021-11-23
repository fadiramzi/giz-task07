import React from 'react'
import AddItem from './AddItem'
import Input from './Input'

const Header = ({onAdd}) => {
    return (
        <header className='headerCls'>
            <div className='headerDiv'>
              <div>
                <Input disc='Search for products here...' type='text' styles='searchTxt' />
              </div>
              <div>
                <AddItem onAdd={onAdd} />
              </div>
            </div>
        </header>

    )
}

export default Header
