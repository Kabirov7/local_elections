import React, {useContext} from "react";
import {Route, Redirect} from "react-router";
import {AuthContext} from "../../util/Auth";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
	const {currentUser} = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={routeProps =>
				!!currentUser ? (
					<RouteComponent {...routeProps}/>
				) : (
					<Redirect to={"/local_elections/login"}/>
				)}
		/>
	)
}

export default PrivateRoute