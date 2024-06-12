import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './Home'

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
				path: '/hello',
				element: (
					<div>
						<div>Hello World</div>
					</div>
				)
			}
		]
	}
])

export default AppRouters
