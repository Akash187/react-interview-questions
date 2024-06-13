import { Button, Group, ScrollArea, Stack, Tabs, Title } from '@mantine/core'
import Solution from './Solution'
import { useState } from 'react'
import Question from './Question'
import Code from './Code'

const InteractiveShapeBasedUI = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')
	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Title order={3}>Interactive shape based UI | Uber</Title>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi"
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
						<Solution />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="code">
						<Code />
					</Tabs.Panel>
				</ScrollArea>
			</Tabs>
		</Stack>
	)
}
export default InteractiveShapeBasedUI
