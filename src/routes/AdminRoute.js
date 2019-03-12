import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ({ isAuthenticated, component: Component, location, ...rest }) => {
    return <Route {...rest} component={props => isAuthenticated ? <Component {...props} /> : <Redirect to={{
        pathname: "/",
        state: {from: location.pathname}
    }} />} />
};

AdminRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}


export default AdminRoute;