import React from 'react';
import './Header.css';

function Header () {
    
        return (
            
                <div style={{ 
                    backgroundImage: `url("components/header/background.png")`,
                    backgroundSize: 'cover',
                    }}>
                    <div className="header">
                        <img id="logo" src="components/header/reactLogo.png"/> 
                        <h2>This is my first ReactJS</h2>  
                    </div>           
                </div>
            
        );
}
export default Header;