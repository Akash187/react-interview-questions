import { Code, List, Stack, Text, Title } from '@mantine/core'
import Img from '../../components/Img'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, we need to a build an interactive bar chart similar to
				velocity charts we see in Atlassian's JIRA product.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List>
				<List.Item>
					There should be a button that can be used to toggle the visibility of
					the chart.
				</List.Item>
				<List.Item>
					Department data would be provided using which we need to draw a Bar
					chart where Y axis represents the <Code>no. of tickets</Code> and X
					axis represents the <Code>departments</Code>.
				</List.Item>
				<List.Item>
					Each bar should be scaled based on the highest no. of tickets.
				</List.Item>
				<List.Item>
					Each bar should have a tooltip that displays department name along
					with no. of tickets when a bar is hovered.
				</List.Item>
				<List.Item>
					Bar's height should animate from 0 to final value upon entry and exit.
				</List.Item>
			</List>
			<Title order={3}>Mockup</Title>
			<Stack gap="sm">
				<List>
					<List.Item>Shape with empty boxes.</List.Item>
				</List>
				<Img src="https://ik.imagekit.io/devtoolstech/question-images/interative-chart-jira/Screenshot%202024-06-08%20at%205.51.57%20PM_lBdPLwEksP.png" />
				<List>
					<List.Item>Shape with some filled boxes.</List.Item>
				</List>
				<Img src="https://ik.imagekit.io/devtoolstech/question-images/interative-chart-jira/Screenshot%202024-06-08%20at%206.31.36%20PM_xcc0dt8RY3.png" />
			</Stack>
		</Stack>
	)
}
export default Question
