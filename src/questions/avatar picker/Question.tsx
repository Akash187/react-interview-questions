import { Code, List, Stack, Text, Title } from '@mantine/core'
import Img from '../../components/Img'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this UI coding challenge, the candidate needs to build an Avatar
				picker component.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List type="ordered">
				<List.Item>
					The user clicks on the current avatar to open a popover which allows
					the user to choose another avatar from the list.
				</List.Item>
				<List.Item>
					The current active avatar shown on the initial screen should have{' '}
					<Code>3px</Code> solid border with color <Code>#3498db</Code>.
				</List.Item>
				<List.Item>
					The popover opens with a fade-in animation that enters the screen from
					bottom to top (see picture below).
				</List.Item>
				<List.Item>
					The popover should have a background color <Code>#2c3e50</Code> and
					border radius of <Code>10px</Code>.
				</List.Item>
				<List.Item>
					The currently active avatar has a border of <Code>3px</Code> with
					color <Code>#3498db</Code>.
				</List.Item>
				<List.Item>
					The avatar should have a border color <Code>#3498db</Code> on hover.
				</List.Item>
				<List.Item>
					Frontend should make a (fake) HTTP API call to the BE when a new
					avatar is selected.
				</List.Item>
				<List.Item>
					During the API call, the selected avatar should have a loading spinner
					with color <Code>#3498db</Code> as shown in mockups + demo.
				</List.Item>
				<List.Item>
					The popover should have a fade out exit animation.
				</List.Item>
				<List.Item>
					A click outside the popover area will result in the popover closing.
				</List.Item>
				<List.Item>
					The popover is closed when an avatar is successfully chosen
					(Optional).
				</List.Item>
			</List>
			<Title order={3}>Mockup</Title>
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/Screenshot%202024-07-10%20at%2010.08.28%20PM_F6gk1d_e0.png?updatedAt=1720713170828" />
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/Screenshot%202024-07-10%20at%2010.08.54%20PM_6yHGMWAzJ.png?updatedAt=1720713170844" />
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/Screenshot%202024-07-10%20at%2010.09.33%20PM_GVCJDM3fh.png?updatedAt=1720713170889" />
		</Stack>
	)
}
export default Question
