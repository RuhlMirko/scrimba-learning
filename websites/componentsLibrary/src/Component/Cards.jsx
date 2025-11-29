import cardSvg from '../assets/cardIcon.svg'

export default function Cards({ title, description, footer='Learn More' }) {
    return (
        <div className="card">
            <img className='card-icon' src={cardSvg} alt="Decorative logo for the card component." />
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
            {footer && (
                <div className="card-footer">
                    <button>{footer}</button>
                </div>
            )}
        </div>
    )
}