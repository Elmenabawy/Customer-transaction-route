import React from 'react';
import styles from './Footer.module.css';
export default function Footer() {


  return (
    <footer className='text-center bg-main-footer mt-4'>
      <div className='container p-4'>
        <section className='mb-4'>
          <button className='btn btn-outline-light m-1'>
            <i className='fab fa-facebook-f'></i>
          </button>

          <button className='btn btn-outline-light m-1'>
            <i className='fab fa-twitter'></i>
          </button>

          <button className='btn btn-outline-light m-1'>
            <i className='fab fa-google'></i>
          </button>

          <button className='btn btn-outline-light m-1'>
            <i className='fab fa-instagram'></i>
          </button>

          <button className='btn btn-outline-light m-1'>
            <i className='fab fa-linkedin-in'></i>
          </button>

          <button className='btn btn-outline-light m-1'>
            <i className='fab fa-github'></i>
          </button>
        </section>

        <section className=''>
          <form action=''>
            <div className='row justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong className='text-white'>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className='col-md-5'>
                <input type='email' className='form-control mb-4' placeholder='Email address' />
              </div>

              <div className='col-auto'>
                <button className='btn btn-outline-light mb-4 '>
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p >
            Our privacy policy outlines how <span><strong>GoGreen</strong></span> collects, uses, and protects your data. Please refer to our privacy policy for more information.
          </p>
          <p >
            By accessing and using this dashboard, you agree to comply with our terms of use. Please review our terms of use for further details.
          </p>
        </section>

        <section className=''>
          <div className='row'>
            {/* Links columns */}
          </div>
        </section>
      </div>

      <div className='text-center p-3 text-white'>
        © 2024 Copyright:
        <span>
          GoGreen
        </span>
      </div>
    </footer>
  );
}

