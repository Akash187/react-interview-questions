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

const AvatarPicker = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')

	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Title order={3}>Avatar Picker</Title>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/how-to-build-an-avatar-picker-frontend-ui-coding-challenge---qid---HuqxD3sw8pTmDfz3NvCi"
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
export default AvatarPicker
