import { List, Stack, Text, Title } from '@mantine/core'
import Img from '../../components/Img'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this coding challenge, the candidate needs to build a memory game
				where user needs to reveal the auto-hide boxes, remember the color, and
				select the matching ones.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List type="ordered">
				<List.Item>
					Total Number of Boxes:
					<List>
						<List.Item>
							The main Game component should accept a total number of boxes.
						</List.Item>
						<List.Item>
							The Game board should always have 4 columns and rows should be
							adjusted based on that.
						</List.Item>
						<List.Item>
							The total number of boxes must always be divisible by 4 (column
							length).
						</List.Item>
					</List>
				</List.Item>
				<List.Item mt="xs">
					Color Assignment:
					<List>
						<List.Item>
							The total number of unique colors should be exactly half the
							number of boxes.
						</List.Item>
						<List.Item>
							Each color should be assigned to two boxes, forming pairs.
						</List.Item>
					</List>
				</List.Item>
				<List.Item mt="xs">
					Initial State:
					<List>
						<List.Item>
							All boxes should initially have a white background color.
						</List.Item>
					</List>
				</List.Item>
				<List.Item mt="xs">
					Revealing Colors:
					<List>
						<List.Item>
							When a user clicks on a box, the box's assigned color should be
							revealed.
						</List.Item>
						<List.Item>
							If the user clicks on a second box and the colors do not match,
							both boxes should reset to a white background after 400 ms.
						</List.Item>
						<List.Item>
							If the colors match, the pair should remain revealed for the rest
							of the game.
						</List.Item>
					</List>
				</List.Item>
				<List.Item mt="xs">
					Round Tracking:
					<List>
						<List.Item>
							Every pair selection (whether successful or unsuccessful) should
							count as one round.
						</List.Item>
						<List.Item>
							At the end of the game, the user should be informed of the total
							number of rounds taken to complete the game.
						</List.Item>
					</List>
				</List.Item>
				<List.Item mt="xs">
					Reset Functionality:
					<List>
						<List.Item>The game should include a reset button.</List.Item>
						<List.Item>
							The reset button should be enabled only at the end of the game,
							allowing the user to reset and restart the game.
						</List.Item>
					</List>
				</List.Item>
			</List>
			<Title order={3}>Mockup</Title>
			<Text>1. Initial Board</Text>
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/color-memory-game/Screenshot%202024-08-31%20at%204.15.07%20PM_B-V6uWy5-.png?updatedAt=1725101209702" />
			<Text>2. First Selection</Text>
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/color-memory-game/Screenshot%202024-08-31%20at%204.15.20%20PM_9uO_YTF3c.png?updatedAt=1725101209198" />
			<Text>3. Matching Pair</Text>
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/color-memory-game/Screenshot%202024-08-31%20at%204.15.36%20PM_SkSM5Mz7mN.png?updatedAt=1725101209828" />
			<Text>4. Final Screen (Game over with total round count)</Text>
			<Img src="https://ik.imagekit.io/devtoolstech/question-images/color-memory-game/Screenshot%202024-08-31%20at%205.23.20%20PM_TpdePOa9M.png?updatedAt=1725105220635" />
		</Stack>
	)
}
export default Question
