import { useState } from 'react'
import cardSvg from '../assets/cardIcon.svg'

export default function Cards({ children, title, footer='Learn More' }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="card">
            <img className='card-icon' src={cardSvg} alt="Decorative logo for the card component." />
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className={`card-body ${isExpanded ? 'expanded' : ''}`}>
                <p>{children}</p>
            </div>
            {footer && (
                <div className="card-footer">
                    <button onClick={toggleExpanded}>
                        {isExpanded ? 'Show Less' : footer}
                    </button>
                </div>
            )}
        </div>
    )
}