import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Root from './Root'
import Home from './Home'
const InteractiveShapeBasedUI = lazy(
	() => import('./questions/interactive shape based ui/InteractiveShapeBasedUI')
)
const OverlappingCircleApp = lazy(
	() => import('./questions/overlapping circle app/OverlappingCircleApp')
)

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
			}
		]
	}
])

export default AppRouters
