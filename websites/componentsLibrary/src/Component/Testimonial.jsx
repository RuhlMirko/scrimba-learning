export default function Testimonial({children, name, ocuppation, picture}) {


    if(picture) return (
        <div className="info-container">
            <img src={picture} alt={`Photo portrait of ${name}`} />
            <div className="about">
                <p>"{children}"</p>
                <footer>
                    <h3>{name}</h3>
                    <h4>Workcation, {ocuppation}</h4>            
                </footer>                                
            </div>
            
        </div>
    )
    else return (
        <div className="info-container no-picture">
            <div className="body">
                <h3>Work<span>cation</span></h3>            
                <p>"{children}"</p>                
            </div>
            
            <footer>
                <h3>{name}</h3>
                <h4>Workcation, {ocuppation}</h4>            
            </footer>
        </div>
    )
}

