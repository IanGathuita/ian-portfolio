import { FaSun, FaMoon } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Header.module.css';
import { useEffect, useState } from 'react';
const Header = () => {

    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : null);
    useEffect(() => {
        if (currentTheme) {
            //document.documentElement returns the root html element object
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
    }, [currentTheme]);


    const handleTheme = (e) => {
        if (e.target.id === 'sun') {
            setCurrentTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else {
            setCurrentTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }

    }

    return (
        <header>
            <h1>Ian's portfolio</h1>
            {currentTheme === 'dark' ?
                <IconContext.Provider value={{ style: { fontSize: "34px", lineHeight: '56px' } }}>
                    <FaSun id='sun' onClick={(e) => { handleTheme(e) }}></FaSun>
                </IconContext.Provider>

                :

                <IconContext.Provider value={{ style: { fontSize: "34px", lineHeight: '56px' } }}>
                    <FaMoon id='moon' onClick={(e) => { handleTheme(e) }}></FaMoon>
                </IconContext.Provider>
            }
        </header>
    );
}

export default Header;