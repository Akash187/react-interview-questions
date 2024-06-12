import { Flex, Title } from '@mantine/core'
import logo from './assets/react.svg'

const Home = () => {
	return (
		<Flex
			gap="md"
			justify="center"
			align="center"
			direction="column"
			wrap="wrap"
			h={'calc(100vh - 120px)'}
		>
			<Title ta="center" order={1}>
				Top React Interview Questions
			</Title>
			<img className="logo" src={logo} />
		</Flex>
	)
}
export default Home
