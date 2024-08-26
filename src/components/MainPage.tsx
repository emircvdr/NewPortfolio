import React from 'react'

const MainPage = () => {
    const calculateAge = () => {
        const currentDate = new Date();
        const birthDate = new Date('2002-05-08');
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    }
    return (
        <div>
            <div style={{
                width: '100%',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>EMIR CAVDAR {calculateAge()}</div>
        </div >
    )
}

export default MainPage