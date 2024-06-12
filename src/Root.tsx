import {
	AppShell,
	Burger,
	Group,
	NavLink,
	ScrollArea,
	Title,
	Tooltip
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logo from './assets/react.svg'
import { ActionIcon } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
	const [opened, { toggle }] = useDisclosure()

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<Group>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Link to={'/'}>
							<Group>
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
					<NavLink label="First child link" />
				</ScrollArea>
			</AppShell.Navbar>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}
