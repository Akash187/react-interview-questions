import { Button, Group, ScrollArea, Stack, Tabs, Title } from '@mantine/core'
import Question from './Question'
import Code from './Code'
import { useState } from 'react'
import SolutionWrapper from './SolutionWrapper'

const InteractiveJIRAVelocityBarChart = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')

	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Title order={3}>Interactive JIRA Velocity BarChart | Atlassian</Title>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/how-to-build-an-interactive-jira-velocity-bar-chart-atlassian-browser-coding-round-interview-question---qid---H24LHAOpjxtuol41iGn8"
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
						<SolutionWrapper />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="code">
						<Code />
					</Tabs.Panel>
				</ScrollArea>
			</Tabs>
		</Stack>
	)
}
export default InteractiveJIRAVelocityBarChart
