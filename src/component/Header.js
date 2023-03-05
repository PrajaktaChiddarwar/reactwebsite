import React from 'react';

const Header =() =>
{
    return(
        <>
        <header>
            <section className='container main-hero-container'>
                <div className='row'>
                {/* LeftSide Header */}
                    <div className='col-12 col-lg-6 col-md-6 header-left d-flex justify-content-center flex-column align-items-start'>
                        <h1 className='display-2'>Online Payment <br/> Made Easy For You......!!! 👍</h1>
                        <p className='para'>Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone. 📴</p>
                    <h3>Get Early Access For You 🎖️</h3>
                    <div className='input_group mt-3'>
                        <input type="text" className='rounded-pill w-75  w-lg-75 mt-3 p-2 form-control-text'
                            placeholder='Enter your Email'
                        />
                        <div className='input-group-button rounded-pill  p-2'>
                            Get It Now.
                        </div>
                     {/* </div> */}
                    </div>
                </div>
                    {/* Right Side Header */}
                    <div className='col-12 col-lg-6 col-md-6 header-right d-flex justify-content-center align-items-center header-images'>
                        <img src='../Images/images/hero1.jpg' alt='image1' className='img-fluid'></img>
                        <img src='../Images/images/hero4.jpg' alt='image4' className='img-fluid'></img>

                    </div>
                </div>
            </section>
        </header>

        </>
    )
}

export default Header;