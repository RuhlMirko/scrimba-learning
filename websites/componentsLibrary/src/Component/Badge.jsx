export default function Badge({children, color='gray', size, shape='square'}) {
    const normalizedColor = typeof color === 'string' ? color.toLowerCase() : 'gray';
    const normalizedSize = typeof size === 'string' ? size.toLowerCase() : '';
    const normalizedShape = typeof shape === 'string' ? shape.toLowerCase() : 'square';

    
    return (
        <div className={`badge ${normalizedColor} ${normalizedShape} ${normalizedSize}`} >
                {children}
        </div>
    )
}