import React from 'react';
import "./Title.css"

const Title = () => {
    return (
        <section className="title1 box hidden" style={{marginTop:"10vh"}}>
            <h1><abbr title="MEDICAL means AMBUvians">MEDICAL means AMBUvians</abbr></h1>
                   <span className="slogan">
            "Har Ek Jeewan Hai Qeemti"
          </span> 
            <figure className="ambulance">
                <p>We will try to provide the best, fastest, and safest ambulance service all over INDIA</p>
                <img loading="lazy" src="./images/Service-images/service page first section.webp" alt="cover" style={{ width: '100vw'}} />
            </figure>
                

            
            
        </section>
    );
};

export default Title;
