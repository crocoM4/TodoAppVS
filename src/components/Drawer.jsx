import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { menuItems } from '../constants/drawer';

const Item = ({ pathTo, exact, children }) => (
  <NavLink
    className="item align-items-center"
    to={pathTo}
    activeClassName="selected"
    {...exact}
  >
    {children}
  </NavLink>
);

Item.propTypes = {
  exact: PropTypes.bool,
  pathTo: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Item.defaultProps = {
  exact: false,
};


const Drawer = () => (
  <div id="drawer-container">
    {
      menuItems.map(item => (
        <Item
          key={item.id}
          pathTo={item.path}
          exact={item.exact}
        >
          <i className={item.iconClass} />
        </Item>
      ))
    }
  </div>
);

Drawer.propTypes = {
  // initFetchAllCategories: PropTypes.func.isRequired,
};

export default Drawer;
