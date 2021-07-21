import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'

const Dashboard = React.lazy(
	() =>
		import(
			/* webpackPrefetch: true*/
			/* webpackChunkName: "dashboard"*/
			'../pages/Dashboard'
		),
)
const Repo = React.lazy(
	() =>
		import(
			/* webpackPrefetch: true*/
			/* webpackChunkName: "Repo"*/
			'../pages/Repo'
		),
)

export const Routes: React.FC = () => {
	return (
		<React.Suspense fallback={<Spinner />}>
			<Switch>
				<Route component={Dashboard} path="/" exact />
				<Route component={Repo} path="/repositories/:repository+" exact />
			</Switch>
		</React.Suspense>
	)
}
