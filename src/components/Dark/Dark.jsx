import React, { useEffect, useState } from 'react';


const Dark = () => {
    const [theme, setTheme] = useState("light");


    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme("dark");
        } else {
            document.documentElement.classList.remove('dark')
            setTheme("light");
        }

    }, [theme])


    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem('theme', newTheme); // Save the theme preference in localStorage
        setTheme(newTheme);
    }

    return (
        <label className='cursor-pointer'>
            <input checked={theme === "dark"}
                onChange={toggleTheme}
                className='toggle-checkbox' type='checkbox'></input>
            <div className='toggle-slot'>
                <div className='sun-icon-wrapper'>
                    <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div className='toggle-button'></div>
                <div className='moon-icon-wrapper'>
                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
            </div>
        </label>
    );
};
export default Dark