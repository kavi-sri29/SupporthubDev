import React from 'react';
import supportHubLogo from '../assets/images/supportHubLogo.png';
import experianLogo from '../assets/images/experian_logo.png';

const Header = () => (
  <div>
    <div className="grid grid-cols-4 gap-4">
      <img className='  h-16 w-56 m-2.5 relative left-12'
        src={supportHubLogo}
        height="70px"
        alt='Support Hub Logo'
      />
      <img className='h-14 w-60 m-2.5 absolute right-14'
        src={experianLogo}
        height="70px"
        alt='Experian Logo'
      />
    </div>
    <div className="beta">
      <span className='font-medium text-3xl text-white'>Support Hub</span> is currently in <span className='font-medium text-3xl text-white'>beta.</span>{' '}
      <a className='underline'
        href="https://uat-supporthub.experian.co.uk/betanotice/welcome"
        target="_blank"
      >
        What does this mean?
      </a>
    </div>
  </div>
);

export default Header;