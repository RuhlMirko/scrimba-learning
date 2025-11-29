export default function Testimonial({children, name, ocuppation, picture}) {


    if(picture) return (
        <div className="info-container">
            <img src={picture} alt={`Photo portrait of ${name}`} />
            <div className="about">
                <h3>{name}</h3>
                <h4>{ocuppation}</h4>            
                <p>{children}</p>
            </div>
            
        </div>
    )
    else return (
        <div className="info-container no-picture">
            <h3>Work<span>cation</span></h3>            
            <p>"{children}"</p>            
            <footer>
                <h3>{name}</h3>
                <h4>{ocuppation}</h4>            
            </footer>
        </div>
    )
}

