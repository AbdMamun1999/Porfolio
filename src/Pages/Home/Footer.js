import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div>
            <footer class="footer footer-center p-4 bg-primary text-base-content">
                <div>
                    <p className='text-white'>Copyright © {year} - All right reserved by Abdullah Al Mamun</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;