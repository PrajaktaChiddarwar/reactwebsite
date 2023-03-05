import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container footer-container'>
                <div className='row footer-list'>
                    <div className='col-12 col-lg-10  mx-auto'>
                    <div className='row'>
                        <div className='col-6 col-lg-3 text-center '>
                          <h2>Company</h2>
                          <ul  className='list'>
                            <li>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#'>Services</a>
                            </li>
                            <li>
                                <a href='#'>ContactUs</a>
                            </li>
                            
                          </ul>
                        </div>
                        <div className='col-6 col-lg-3 text-center '>
                          <h2>Support</h2>
                          <ul className='list'>
                            <li>
                                <a href='#'>Tech Team</a>
                            </li>
                            <li>
                                <a href='#'>Call Center</a>
                            </li>
                            <li>
                                <a href='#'>Technician</a>
                            </li>
                            <li>
                                <a href='#'>24/7</a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-6 col-lg-3 text-center '>
                          <h2>Services</h2>
                          <ul className='list'>
                            <li>
                                <a href='#'>Front End</a>
                            </li>
                            <li>
                                <a href='#'>Back End</a>
                            </li>
                            <li>
                                <a href='#'>Accounts</a>
                            </li>
                            <li>
                                <a href='#'>Emergency</a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-6 col-lg-3 text-center icons '>
                          <h2>Follow Us</h2>
                          <ul>
                          <li>
                                <a href='https://github.com/PrajaktaChiddarwar'><i className='fab fa-github fontawesome-style'></i></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/'><i className='fab fa-facebook fontawesome-style'></i></a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/'><i className='fab fa-instagram fontawesome-style'></i></a>
                            </li>
                            <li>
                                <a href='https://www.whatsapp.com/'><i className='fab fa-whatsapp fontawesome-style'></i></a>
                            </li>
                            
                          </ul>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <p className='footer-para text-center w-100'>Copyright reserved @PrajaktaChiddarwar-2023</p>
                    </div>
                   </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer