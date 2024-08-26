import { useEffect, useState } from "react";
import logo from '../assests/logo.mp4'

const Logo = () => {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div style={{
            background: 'black',

        }}>
            <div style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                }
            }>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        bottom: isAnimating ? '50%' : '0',
                        right: isAnimating ? '50%' : '0',
                        height: isAnimating ? '100%' : '50%',
                        transform: isAnimating ? 'translate(50%, 50%)' : 'translate(0, 0)',
                        borderRadius: isAnimating ? '50%' : '0',
                        transition: 'all 2s ease',
                    }}
                >
                    <source src={logo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Logo