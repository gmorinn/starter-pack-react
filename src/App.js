import React, { lazy } from "react";
import { Container } from '@mui/material';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.scss'
import Header from "./components/Header";
import { useAuth } from "./Hooks/useAuth";

const Home = lazy(() => import("./screen/homepage"))
const ShopPage = lazy(() => import("./screen/shop"))
const CollectionOverview = lazy(() => import("./components/CollectionOverview"))
const Checkout = lazy(() => import("./screen/checkout"))
const Sign = lazy(() => import("./screen/sign"))

const App = () => {
  return (
    <>
      <Container className="mt-5" maxWidth="xl">
          <Header />
          <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={ShopPage} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                <Route exact path="/sign" component={Sign} />
                <Route exact path="/shop/:category" component={CollectionOverview} />
          </Switch>
        </Container>
    </>
  )
}

// // eslint-disable-next-line 
const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useAuth()
	const user = auth.loggedIn() && auth.user

	return (<Route
		{...rest}
		render={props =>
			user ? <Component {...props} /> : <Redirect to={{ pathname: "/sign", search: `?next=${props.location.pathname}` }} />
		}
	/>)
};

export default App;