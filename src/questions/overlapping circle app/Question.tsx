import { List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				Let a user draw two circles on the screen. Change the color of the
				circles if they overlap.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List>
				<List.Item>
					When the user clicks the left mouse button, the center of a circle is
					placed. When the user releases the left mouse button, a circle with
					the corresponding radius is created. The circle should scale in real
					time as the user is dragging the mouse which holding left click.
				</List.Item>
				<List.Item>
					The same is true for the right mouse button, except a second circle is
					placed.
				</List.Item>
				<List.Item>
					Another click-drag of the left or right mouse buttons replaces the
					associated circle.
				</List.Item>
				<List.Item>
					If the user left clicks with no dragging, clear the circles.
				</List.Item>
				<List.Item>If the circles overlap, they should change color.</List.Item>
			</List>
		</Stack>
	)
}
export default Question
