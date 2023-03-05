import React from 'react'
import ServicesApi from './API/ServicesApi';

const Services = () => {
    const [serviceData, setserviceData] = React.useState(ServicesApi);
  return (
    <>
        <section className='servive-main-contaier'>
            <div className='container service-container'>
                <h1 className='main-heading text-center fw-bold'>How To Send Money?</h1>
                <div className='row'>
                {
                    serviceData.map((elem)=>
                    { 
                         const {id,logo,info,title} =elem;
                        return(
                            <>
                      
                        <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv services'key={id}>
                        <i className={`fontawesome-style-logo ${logo}`}></i>
                        <h2 className='sub-heading'>{title}</h2>
                        <p className='para'>{info}</p>
                    </div>
                    </> )
                    })
                }
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Services