import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './AppRouter'

export default function App() {
	return (
		<MantineProvider
			defaultColorScheme="dark"
			theme={{ primaryColor: 'yellow' }}
		>
			<RouterProvider router={AppRouter} />
		</MantineProvider>
	)
}
