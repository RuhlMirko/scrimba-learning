import { useEffect } from 'react'
import successIcon from '../assets/Banners/success.svg';
import errorIcon from '../assets/Banners/error.svg';
import warningIcon from '../assets/Banners/warning.svg';
import infoIcon from '../assets/Banners/info.svg';


const toastStyles = {
    success: {
        backgroundColor: '#d4edda',
        border: '1px solid #c3e6cb',
        color: '#155724'
    },
    error: {
        backgroundColor: '#f8d7da',
        border: '1px solid #f5c6cb',
        color: '#721c24'
    },
    warning: {
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeeba',
        color: '#856404'
    },
    info: {
        backgroundColor: '#d1ecf1',
        border: '1px solid #bee5eb',
        color: '#0c5460'
    }
}



export default function Toast({children, color='info', title='Notification', onClose, duration=3000, style={}}) {
    const stylesUsed = {
        backgroundColor: toastStyles[color]?.backgroundColor || toastStyles['info'].backgroundColor,
        color: toastStyles[color]?.color || toastStyles['info'].color,
        border: toastStyles[color]?.border || toastStyles['info'].border,
        ...style
    };

    useEffect(() => {
        if (duration && onClose) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)
            
            return () => clearTimeout(timer)
        }
    }, [duration, onClose])

    return (
        <div className="toast" style={stylesUsed}>
            <div>
                {color === 'success' && <img src={successIcon} alt="Success icon" />}
                {color === 'error' && <img src={errorIcon} alt="Error icon" />}
                {color === 'warning' && <img src={warningIcon} alt="Warning icon" />}
                {color === 'info' && <img src={infoIcon} alt="Info icon" />}
            </div>
            <div className="toast-content">
                <h4>{title}</h4>
                <p>{children}</p>
            </div>
            {onClose && (
                <button 
                    className="toast-close" 
                    onClick={onClose}
                    aria-label="Close toast"
                >
                    ×
                </button>
            )}
        </div>
    )
}