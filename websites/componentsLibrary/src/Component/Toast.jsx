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



export default function Toast({children, color='info', title='Notification'}) {
    const stylesUsed = {
        backgroundColor: toastStyles[color]?.backgroundColor || toastStyles['info'].backgroundColor,
        color: toastStyles[color]?.color || toastStyles['info'].color,
        border: toastStyles[color]?.border || toastStyles['info'].border
    };

    return (
        <div className="toast" style={stylesUsed}>
            <h4>{title}</h4>
            <p>{children}</p>            
        </div>
    )
}