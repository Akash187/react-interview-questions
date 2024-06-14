import { Code, Container, Stack, Title } from '@mantine/core'
import Solution1 from './Solution1'

const inputData = `
	const CHART_DATA = [
		{ id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
		{ id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
		{ id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
		{ id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
		{ id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
		{ id: "dep-6", name: "Human Resourcing", ticketCount: 35, colour: "#1D1E33"},
		{ id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" }
	];
	`

const SolutionWrapper = () => {
	return (
		<Container>
			<Stack>
				<Title order={3}>Input</Title>
				<Code block>{inputData}</Code>
				<Title order={3}>Solution 1 (Using Canvas API)</Title>
				<div data-mantine-color-scheme="light">
					<Solution1 />
				</div>
			</Stack>
		</Container>
	)
}
export default SolutionWrapper
