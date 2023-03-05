import React from 'react'
import AboutApi from './API/AboutApi'
const AboutUS = () => {
    const [aboutData, setaboutData] = React.useState(AboutApi);
    return (
        <>
            <section className='common-section our-services'>
                <div className='container mb-5'>
                    <div className='row'>
                        {/* left side */}
                        <div className='col-12 col-lg-5 text-center 
                our-service-leftside-img'>
                            <img src='./Images/images/hero3.jpg' alt='aboutusImg'></img>
                        </div>
                        {/* right side data */}
                        <div className='col-12 col-lg-7  our-services-list'>
                            <h3 className='mini-title'>
                                AVAILABLE  @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className='main-heading'>How to Use the App?</h1>
                            {
                                aboutData.map((elem) => {
                                    const { id, title, info } = elem;
                                    return (<>
                                        <div className='row our-services-info ' key={id}>

                                            <div className='col-1 our-services-number'>
                                                {id}
                                            </div>
                                            <div className='col-10 our-service-data'>
                                                <h2>{title}</h2>
                                                <p className='para'>{info}</p>
                                            </div>
                                        </div>

                                    </>
                                    );

                                })}
                            <br />
                            <button className='btn-style btn-style-border'>Learn More</button>

                        </div>

                    </div>
                </div>
            </section>
            {/* About us 2 nd part */}
            <section className='common-section our-services our-services-rightside'>
                <div className='container mb-5'>
                    <div className='row'>
                        {/* left side */}

                        <div className='col-12 col-lg-7  our-services-rightside-content d-flex 
                        justify-content-center align-items-start flex-column'>
                            <h3 className='mini-title'>
                                -AVAILABLE  SUPPORT IN ANY LANGUAGE
                            </h3>
                            <h1 className='main-heading'>World Class Support is <br /> Available 24/7</h1>
                            {
                                aboutData.map((elem) => {
                                    const { id, title, info } = elem;
                                    return (<>
                                        <div className='row our-services-info ' key={id}>

                                            <div className='col-1 our-services-number'>
                                                {id}
                                            </div>
                                            <div className='col-10 our-service-data'>
                                                <h2>{title}</h2>
                                                <p className='para'>{info}</p>
                                            </div>

                                        </div>

                                    </>
                                    );

                                })}
                            <br />
                            <button className='btn-style btn-style-border'>Learn More</button>

                        </div>
                        
                        {/* right side data */}
                        <div className='col-12 col-lg-5  
                our-service-rightside-img'>
                            <img src='./Images/images/callcenter.jpg' alt='aboutusImg'></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUS