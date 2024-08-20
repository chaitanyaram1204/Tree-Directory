import React from 'react'
import { useState } from 'react'
const Item = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="item">
            <div onClick={handleOnClick}>
                {item.name}
                {item.children && (isOpen ? '▶️' : '🔽')}

            </div>
            {item.children && isOpen &&
                (<div className="sub">
                    {item.children.map(sub => <Item item={sub} />)}
                </div>
                )}
        </div>
    )
}

export default Item