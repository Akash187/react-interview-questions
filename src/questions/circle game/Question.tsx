import { Code, List, Stack, Text, Title } from '@mantine/core'
import Img from '../../components/Img'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this UI coding challenge, the candidate needs to build a simple React
				app where a circle should appear wherever user clicks on the screen. It
				should support undo and redo operations.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List type="ordered">
				<List.Item>
					A circle should appear where the user clicks on the screen.
				</List.Item>
				<List.Item>
					The circle should be assigned a random color from the pre-defined list
					of colors.
				</List.Item>
				<List.Item>
					The app should support <Code>Undo</Code> operation that removes the
					circles in the inverse order of insertion.
				</List.Item>
				<List.Item>
					The app should support <Code>Redo</Code> operation that adds the
					circle back removed via <Code>Undo</Code>.
				</List.Item>
				<List.Item>
					The app should support <Code>Reset</Code> operation that resets the
					board to its original state.
				</List.Item>
				<List.Item>
					The controls should be disabled when there is nothing to{' '}
					<Code>undo</Code>, <Code>redo</Code>, or <Code>reset</Code>.
				</List.Item>
				<List.Item>
					The circles should have fade-in/scale animation upon entering and
					exiting the screen.
				</List.Item>
			</List>
			<Title order={3}>Mockup</Title>
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/circle-game/Screenshot%202024-06-15%20at%204.48.28%20PM_t7I45oS9Z.png" />
		</Stack>
	)
}
export default Question
