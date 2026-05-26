import { useLayoutEffect, useRef, useState } from 'react'
import cardSvg from '../assets/cardIcon.svg'

export default function Cards({ children, title, footer='Learn More' }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [displayText, setDisplayText] = useState('')
    const bodyRef = useRef(null)
    const textRef = useRef(null)
    const isPlainText = typeof children === 'string' || typeof children === 'number'
    const fullText = isPlainText ? String(children) : ''

    useLayoutEffect(() => {
        const body = bodyRef.current
        const textNode = textRef.current

        if (!body || !textNode || !isPlainText) {
            return
        }

        const updateVisibleText = () => {
            if (isExpanded) {
                setDisplayText(fullText)
                return
            }

            textNode.textContent = fullText
            if (body.scrollHeight <= body.clientHeight + 1) {
                setDisplayText(fullText)
                return
            }

            let low = 0
            let high = fullText.length
            let bestFit = '...'

            while (low <= high) {
                const mid = Math.floor((low + high) / 2)
                const candidate = `${fullText.slice(0, mid).trimEnd()}...`
                textNode.textContent = candidate

                if (body.scrollHeight <= body.clientHeight + 1) {
                    bestFit = candidate
                    low = mid + 1
                } else {
                    high = mid - 1
                }
            }

            setDisplayText(bestFit)
        }

        updateVisibleText()
        window.addEventListener('resize', updateVisibleText)

        return () => {
            window.removeEventListener('resize', updateVisibleText)
        }
    }, [fullText, isExpanded, isPlainText])

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="card">
            <img className='card-icon' src={cardSvg} alt="Decorative logo for the card component." />
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div
                className={`card-body ${isExpanded ? 'expanded' : ''}`}
                ref={bodyRef}
            >
                <p ref={textRef}>{isPlainText ? displayText : children}</p>
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