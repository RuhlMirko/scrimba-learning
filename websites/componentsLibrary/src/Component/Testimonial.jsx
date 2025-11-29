export default function Testimonial({children, name, ocuppation, picture}) {


    return (
        <div className="info-container">
            {picture?<img src={picture} alt={`Photo portrait of ${name}`} /> :null}
            <div className="about">
                <h3>{name}</h3>
                <h4>{ocuppation}</h4>            
                <p>{children}</p>
            </div>
            
        </div>
    )
}

