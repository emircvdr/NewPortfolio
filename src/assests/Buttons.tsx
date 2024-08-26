import React from 'react';
import "../assests/button.css"

interface ButtonProps {
    about_me?: () => void;
    details?: () => void;
    contact?: () => void;
}

const Button: React.FC<ButtonProps> = ({ about_me, details, contact }) => {
    // Butonun hangi işlevi yerine getireceğine karar veriliyor
    const handleClick = () => {
        if (about_me) {
            about_me();
        } else if (details) {
            details();
        } else if (contact) {
            contact();
        }
    };

    // Butonun metni hangi propsın dolu olduğuna göre değişir
    const buttonText = about_me
        ? 'About Me'
        : details
            ? 'Details'
            : contact
                ? 'Contact'
                : 'Button';

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',


        }}>
            <button className='button-86' onClick={handleClick} >
                {buttonText}
            </button>
        </div>
    );
};



export default Button;
