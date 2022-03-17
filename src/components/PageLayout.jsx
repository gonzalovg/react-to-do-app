import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function PageLayout({ children }) {
  return (

    <div className=" bg-gradient-to-br from-sky-200 via-sky-400 to-sky-500 min-h-screen ">
      <Header />
      <main className="w-2/4 m-auto min-h-300  ">{children}</main>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
