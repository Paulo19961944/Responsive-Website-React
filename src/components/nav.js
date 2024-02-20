import React, { useEffect } from 'react';
import './styles/style.css';
import './styles/media-queries.css';

function Nav() {
    useEffect(() => {
        const menuIcon = document.querySelector(".menu-icon");
        const navigationBar = document.querySelector(".navigation-bar");
        const navContent = document.querySelector(".navigation-content");

        if (menuIcon) {
            menuIcon.addEventListener("click", () => {
                navContent.style.display = "flex";
                navContent.style.flexDirection = "column";
                navigationBar.style.alignItems = "center";
                navigationBar.style.justifyContent = "center";
                menuIcon.style.display = "none"
            });

            document.addEventListener("click", (event) => {
                const isClickedInsideMenu = navContent.contains(event.target);
                const isClickedOnMenu = navigationBar.contains(event.target);

                if(!isClickedInsideMenu && ! isClickedOnMenu){
                    navContent.style.display = "";
                    navContent.style.flexDirection = "";
                    navigationBar.style.alignItems = "";
                    navigationBar.style.justifyContent = "";
                    menuIcon.style.display = ""
                }
            });
        } 

        // Cleanup function to remove event listener if component unmounts
        return () => {
            if (menuIcon) {
                menuIcon.removeEventListener("click", () => {
                    navigationBar.style.display = "flex";
                    navigationBar.style.flexDirection = "column";
                    navContent.style.alignItems = "center";
                    navContent.style.justifyContent = "center";
                });
            }
        };
    }, []);

    return (
        <nav className="navigation-bar">
            <button className="menu-icon">☰</button>
            <div className="navigation-content">
                <a href="#" className="navigation-link">Home</a>
                <a href="#" className="navigation-link">Quem Somos</a>
                <a href="#" className="navigation-link">Sobre</a>
                <a href="#" className="navigation-link">Contato</a>
            </div>
        </nav>
    );
}

export default Nav;
