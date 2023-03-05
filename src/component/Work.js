import React, { useState } from 'react';
import WorkApi from "../API/WorkApi";

const Work = () => {
    const [workData, setworkData] = useState(WorkApi);
    return (
        <>
            <section>
                <div className='work-container container work'>
                    <h1 className='main-heading text-center'>How Does It Work</h1>
                    <div className='row'>
                        {
                            workData.map((curElem) => {
                                const {id, logo, title,info } =curElem;
                                return (
                                    <>
                                        <div className="col-12 col-lg-4  text-center work-container-subdiv" key={id}>
                                            <i class={`fontawesome-style ${logo}`}></i>
                                            <h2 className='sub-heading'>{title}</h2>
                                            <p className='para w-100'>{info}</p>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
export default Work;