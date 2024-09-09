import {
	Box,
	Button,
	Group,
	ScrollArea,
	Stack,
	Tabs,
	Title
} from '@mantine/core'
import Solution from './Solution'
import Question from './Question'
import Code from './Code'
import { useState } from 'react'

const MemoryGame = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')

	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Title order={3}>Color Memory Game</Title>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/how-to-build-color-memory-game-in-react-js-frontend-coding-challenge---qid---1wFNDiwjxcKwrHL65SN5"
					target="_blank"
				>
					Original Question Link
				</Button>
			</Group>
			<Tabs value={activeTab} keepMounted={false} onChange={setActiveTab}>
				<Tabs.List>
					<Tabs.Tab value="question">Question</Tabs.Tab>
					<Tabs.Tab value="solution">Solution</Tabs.Tab>
					<Tabs.Tab value="code">Code</Tabs.Tab>
				</Tabs.List>

				<ScrollArea>
					<Tabs.Panel py="md" value="question">
						<Question />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="solution">
						<Box h="100vh">
							<Solution />
						</Box>
					</Tabs.Panel>
					<Tabs.Panel py="md" value="code">
						<Code />
					</Tabs.Panel>
				</ScrollArea>
			</Tabs>
		</Stack>
	)
}

export default MemoryGame
