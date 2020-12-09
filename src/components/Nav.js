import React from 'react'
import { ThemeConsumer } from "../contexts/theme";
import { NavLink } from "react-router-dom";

export default function Nav () {
    return(
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
                    <ul className='row space-between'>
                        <li>
                            <NavLink to='/feed/top'>Top</NavLink>
                        </li>
                        <li>
                            <NavLink to='/feed/new'>New</NavLink>
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
