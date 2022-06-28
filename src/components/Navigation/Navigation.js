import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

let myList = [
    {
        id: 0,
        title: 'Link',
        iEle: <i className="fa-solid fa-link"></i>,
        link: '/link'
    },
    {
        id: 1,
        title: 'Design',
        iEle: <i className="fa-solid fa-pen-ruler"></i>,
        link: '/design'
    },
    {
        id: 2,
        title: 'Stat',
        iEle: <i className="fa-solid fa-file-lines"></i>,
        link: '/stat'
    },
    {
        id: 3,
        title: 'Settings',
        iEle: <i className="fa-solid fa-gear"></i>,
        link: '/setting'
    }
]

export default function Navigation() {

    const [activeIndex, setIndex] = useState(0)

    return (
        <div className='navigation'>
            <ul>
                {myList.map((item, index) => {
                    return <li key={item.id} className={`list ${activeIndex === item.id ? 'active' : ''}`} onClick={() => { setIndex(index) }}>
                        <NavLink to={item.link}>
                            <span>
                                <span className='icon'>
                                    {item.iEle}
                                </span>
                                <span className='title'>{item.title}</span>
                            </span>
                        </NavLink>
                    </li>
                })}

                <div className='indicator'></div>
            </ul>
        </div>

    )
}
