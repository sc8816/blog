import React from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import path from 'path';
import routes from './routerConfig';

const RouteItem = (props) => {
    const {redirect, path: routePath, component, key} = props;
    if (redirect) {
        return (
            <Redirect
                exact
                key={key}
                from={routePath}
                to={redirect}
            />
        );
    }
    return (
        <Route
            key={key}
            component={component}
            path={routePath}
        />
    );
};

const router = () => {
    return (
        <Router>
            {routes.map((route, id) => {
                // console.log(route);
                const {component: RouteComponent, children, ...others} = route;
                console.log(route);
                return (
                    <Route
                        key={id}
                        {...others}
                        component={(props) => {
                            return (
                                children ? (
                                    <RouteComponent key={id} {...props}>
                                        {children.map((routeChild, idx) => {
                                            const {redirect, path: childPath, component} = routeChild;
                                            return RouteItem({
                                                key: `${id}-${idx}`,
                                                redirect,
                                                path: childPath && path.join(route.path, childPath),
                                                component,
                                            });
                                        })}
                                    </RouteComponent>
                                ) : (
                                    <>
                                        {
                                            RouteItem({
                                                key: id,
                                                ...props,
                                            })
                                        }
                                    </>
                                )
                            );
                        }}
                    />
                );
            })}
        </Router>
    );
};

export default router;
