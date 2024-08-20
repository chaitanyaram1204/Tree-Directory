import React from 'react'
import Item from './Item'
const Menu = ({ tree }) => {
    return (
        <div className='wrapper'>
            {
                tree.children.map(item => <Item item={item} />)
            }
        </div>
    )
}

export default Menu