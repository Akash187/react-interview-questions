import { useState } from 'react'
import './style.css'

//Code in style.css
// :root {
//   --final-height: 100%;
// }

// @keyframes growBar {
//   from {
//     height: 0;
//   }

//   to {
//     height: var(--final-height);
//   }
// }

const CHART_DATA = [
	{ id: 'dep-1', name: 'Legal', ticketCount: 32, colour: '#3F888F' },
	{ id: 'dep-2', name: 'Sales', ticketCount: 20, colour: '#FFA420' },
	{ id: 'dep-3', name: 'Engineering', ticketCount: 60, colour: '#287233' },
	{ id: 'dep-4', name: 'Manufacturing', ticketCount: 5, colour: '#4E5452' },
	{ id: 'dep-5', name: 'Maintenance', ticketCount: 14, colour: '#642424' },
	{ id: 'dep-6', name: 'Human Resourcing', ticketCount: 35, colour: '#1D1E33' },
	{ id: 'dep-7', name: 'Events', ticketCount: 43, colour: '#E1CC4F' }
]

type BarData = {
	id: string
	name: string
	ticketCount: number
	colour: string
}

type IBarProps = {
	barData: BarData
	maxHeight: number
}

const Solution2 = () => {
	const [toggle, setToggle] = useState(true)
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '1rem'
			}}
		>
			<button
				onClick={() => {
					setToggle(!toggle)
				}}
			>
				Toggle
			</button>
			<div
				style={{
					width: 600,
					height: 400
				}}
			>
				{toggle && <BarChart />}
			</div>
		</div>
	)
}

const BarChart = () => {
	let maxHeight = 0
	CHART_DATA.forEach((data) => {
		if (maxHeight < data.ticketCount) {
			maxHeight = data.ticketCount
		}
	})

	return (
		<div
			style={{
				width: 600,
				height: 400,
				backgroundColor: 'white',
				display: 'flex'
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start'
				}}
			>
				<span
					style={{
						writingMode: 'vertical-lr',
						transform: 'rotate(180deg)',
						textAlign: 'center'
					}}
				>
					{'Number of Tickets -->'}
				</span>
			</div>
			<div
				style={{
					display: 'flex',
					flexGrow: 1,
					height: '100%',
					flexDirection: 'column',
					justifyContent: 'flex-end'
				}}
			>
				<div
					style={{
						display: 'flex',
						height: 'calc(100% - 60px)',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						gap: '1rem',
						borderLeft: '1px solid black',
						borderBottom: '1px solid black',
						padding: '0.5rem 0.5rem 0 0'
					}}
				>
					{CHART_DATA.map((data) => (
						<Bar key={data.id} barData={data} maxHeight={maxHeight} />
					))}
				</div>
				<span style={{ textAlign: 'center' }}>{'Departments -->'}</span>
			</div>
		</div>
	)
}

const Bar = ({ barData, maxHeight }: IBarProps) => {
	const [showTooltip, setShowTooltip] = useState(false)

	const height = (barData.ticketCount / maxHeight) * 100 + '%'
	const tooltipLabel = barData.name + ':' + barData.ticketCount
	return (
		<div
			style={{
				height: height,
				backgroundColor: barData.colour,
				width: '100%',
				position: 'relative',
				animation: 'growBar 0.5s ease-in-out forwards',
				//@ts-ignore
				'--final-height': height
			}}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			{showTooltip && (
				<div
					style={{
						position: 'absolute',
						top: -36,
						left: '50%',
						transform: 'translateX(-50%)',
						background: '#000',
						padding: '0.25rem',
						whiteSpace: 'nowrap',
						zIndex: 2,
						borderRadius: '4px'
					}}
				>
					{tooltipLabel}
				</div>
			)}
		</div>
	)
}

export default Solution2
