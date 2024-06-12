import { Code, List, Stack, Text, Title } from '@mantine/core'
import Img from '../../components/Img'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs to create a shape based on a given
				2D array. A shape is a collection of empty boxes placed at values that
				are true in the provided array. Many users have reported that this
				question was asked in the frontend coding round of companies like Uber.
				You might be given a 2D array and needs to create the shape and along
				with interactivity or shape would be created as part of the initial
				code.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List>
				<List.Item>
					Create an empty box where array value is <Code>1</Code>.
				</List.Item>
				<List.Item>
					User can select a box. Upon selection the box background color should
					change to <Code>#0bcc59</Code>.
				</List.Item>
				<List.Item>
					Once all boxes are selected then the boxes should auto-deselect based
					on the order of selection.
				</List.Item>
				<List.Item>
					Deselection should be non-interruptible as in once started, we can't
					stop it.
				</List.Item>
				<List.Item>
					During de-selection, user should not be able to select a new box.
					Disable any box interaction.
				</List.Item>
			</List>
			<Title order={3}>Mockup</Title>
			<Stack gap="sm">
				<List>
					<List.Item>Shape with empty boxes.</List.Item>
				</List>
				<Img src="https://ik.imagekit.io/devtoolstech/question-images/create-shape/Screenshot%202024-06-01%20at%2012.31.09%20PM_aZn_eozTF.png" />
				<List>
					<List.Item>Shape with some filled boxes.</List.Item>
				</List>
				<Img src="https://ik.imagekit.io/devtoolstech/question-images/create-shape/Screenshot%202024-06-01%20at%2012.31.20%20PM_gWlmujaC5.png" />
			</Stack>
		</Stack>
	)
}
export default Question
