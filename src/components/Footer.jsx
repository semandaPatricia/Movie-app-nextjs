import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        
         <footer className="footer border z-10 mt-10 border-t-[#33353F] border-l-transparent border-r-transparent ">
         <div className="container p-12 flex justify-between">
           <span className="text-3xl font-bold ">Solida </span>
           <p>&copy; {currentYear} All rights reserved</p>
         </div>
       </footer>


    );
};

export default Footer;