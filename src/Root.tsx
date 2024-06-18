import {
	AppShell,
	Burger,
	Center,
	Group,
	Loader,
	NavLink,
	ScrollArea,
	Stack,
	Title,
	Tooltip
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logo from './assets/react.svg'
import { ActionIcon } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'

export default function Root() {
	const [opened, { toggle, close }] = useDisclosure()
	const location = useLocation()

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<Group gap="xs">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Link to={'/'}>
							<Group gap="xs">
								<img src={logo} alt="React Logo" />
								<Title order={5}>Interview Questions</Title>
							</Group>
						</Link>
					</Group>
					<Tooltip label="Github Repository">
						<ActionIcon
							component="a"
							href="https://github.com/Akash187/react-interview-questions"
							target="_blank"
							variant="default"
							color="gray"
							size="lg"
							aria-label="Settings"
						>
							<IconBrandGithub
								style={{ width: '70%', height: '70%' }}
								stroke={1.5}
							/>
						</ActionIcon>
					</Tooltip>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<ScrollArea p="xs">
					<NavLink
						label="1. Interactive Shape Based UI"
						component={Link}
						to="/interactive-shape-based-ui-uber"
						active={location.pathname === '/interactive-shape-based-ui-uber'}
						onClick={close}
					/>
					<NavLink
						label="2. Overlapping Cirlce App"
						component={Link}
						to="/overlapping-circle-app"
						active={location.pathname === '/overlapping-circle-app'}
						onClick={close}
					/>
					<NavLink
						label="3. Interactive JIRA Velocity Bar Chart"
						component={Link}
						to="/interactive-jira-velocity-bar-chart"
						active={
							location.pathname === '/interactive-jira-velocity-bar-chart'
						}
						onClick={close}
					/>
					<NavLink
						label="4. Circle Game"
						component={Link}
						to="/circle-game"
						active={location.pathname === '/circle-game'}
						onClick={close}
					/>
				</ScrollArea>
			</AppShell.Navbar>
			<AppShell.Main>
				<Suspense
					fallback={
						<Center h={'calc(100vh - 120px)'}>
							<Stack gap={0} align="center">
								<Loader type="dots" size={50} />
								<Title order={3}>Loading</Title>
							</Stack>
						</Center>
					}
				>
					<Outlet />
				</Suspense>
			</AppShell.Main>
		</AppShell>
	)
}
