import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Root from './Root'
import Home from './Home'
const InteractiveJIRAVelocityBarChart = lazy(
	() =>
		import(
			'./questions/interactive JIRA velocity bar chart/InteractiveJIRAVelocityBarChart'
		)
)
const InteractiveShapeBasedUI = lazy(
	() => import('./questions/interactive shape based ui/InteractiveShapeBasedUI')
)
const OverlappingCircleApp = lazy(
	() => import('./questions/overlapping circle app/OverlappingCircleApp')
)
const CircleGame = lazy(() => import('./questions/circle game/CircleGame'))

const AppRouters = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>Ooops something went wrong, Try Refreshing Page</div>,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'interactive-shape-based-ui-uber',
				element: <InteractiveShapeBasedUI />
			},
			{
				path: 'overlapping-circle-app',
				element: <OverlappingCircleApp />
			},
			{
				path: 'interactive-jira-velocity-bar-chart',
				element: <InteractiveJIRAVelocityBarChart />
			},
			{
				path: 'circle-game',
				element: <CircleGame />
			}
		]
	}
])

export default AppRouters
