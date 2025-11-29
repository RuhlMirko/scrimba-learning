import successIcon from '../assets/Banners/success.svg';
import errorIcon from '../assets/Banners/error.svg';
import warningIcon from '../assets/Banners/warning.svg';
import infoIcon from '../assets/Banners/info.svg';

const styles = {
    success: {
        backgroundColor: 'rgba(56, 161, 105, 0.1)',
        borderColor: 'rgb(34, 197, 94)',
        color: 'rgba(8, 145, 101, 1)'
    },
    error: {
        backgroundColor: 'rgba(248, 113, 113, 0.1)',
        borderColor: 'rgb(239, 68, 68)',
        color: 'rgb(185, 28, 28)'
    },
    warning: {
        backgroundColor: 'rgba(251, 191, 36, 0.1)',
        borderColor: 'rgb(234, 179, 8)',
        color: 'rgb(202, 138, 4)'
    },
    info: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgb(59, 130, 246)',
        color: 'rgb(29, 78, 216)'
    }
};

const icons = {
    success: successIcon,
    error: errorIcon,
    warning: warningIcon,
    info: infoIcon
};

export default function Banners({children, color='success', title=''}) {
    const capiTalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    const bannerStyles = {
            backgroundColor: styles[color]?.backgroundColor || styles['info'].backgroundColor,
            borderColor: styles[color]?.borderColor || styles['info'].borderColor,  
            color: styles[color]?.color || styles['info'].color
        }

    return (
        <div className="banner" style={bannerStyles}>
            <img src={icons[color] || icons.info} alt={`${color} icon`} />
            <div className='banner-content'>
                <h3 className='title'>{capiTalizedTitle}</h3>
                <p className='description'>{children}</p>
            </div>
        </div>
    )
}