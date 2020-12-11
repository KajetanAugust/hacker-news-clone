import React from 'react'
import { ThemeConsumer } from "../contexts/theme";
import { NavLink } from "react-router-dom";


const style = {
    activeStyle: {
        color: '#A3320B'
    }
}

export default function Nav () {
    return(
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
                    <ul className='row space-between'>
                        <li>
                            <NavLink className={`nav-link-${theme}`} activeStyle={style.activeStyle} to='/feed/top' >Top</NavLink>
                        </li>
                        <li>
                            <NavLink className={`nav-link-${theme}`} activeStyle={style.activeStyle} to='/feed/new'>New</NavLink>
                        </li>

                    </ul>
                    <button
                        style={{fontSize: 30}}
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🔦' : '💡'}
                    </button>
                </nav>
            )}
        </ThemeConsumer>

    )
}
