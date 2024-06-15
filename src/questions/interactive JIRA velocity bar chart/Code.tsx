import { CodeHighlightTabs } from '@mantine/code-highlight'
import { TypeScriptIcon } from '@mantinex/dev-icons'
import '@mantine/code-highlight/styles.css'

const tsxCode1 = `
import { useEffect, useRef } from 'react'

const Solution1 = () => {
	const chartData = [
		{ id: 'dep-1', name: 'Legal', ticketCount: 32, colour: '#3F888F' },
		{ id: 'dep-2', name: 'Sales', ticketCount: 20, colour: '#FFA420' },
		{ id: 'dep-3', name: 'Engineering', ticketCount: 60, colour: '#287233' },
		{ id: 'dep-4', name: 'Manufacturing', ticketCount: 5, colour: '#4E5452' },
		{ id: 'dep-5', name: 'Maintenance', ticketCount: 14, colour: '#642424' },
		{
			id: 'dep-6',
			name: 'Human Resourcing',
			ticketCount: 35,
			colour: '#1D1E33'
		},
		{ id: 'dep-7', name: 'Events', ticketCount: 43, colour: '#E1CC4F' },
		{
			id: 'dep-8',
			name: 'Product Management',
			ticketCount: 72,
			colour: '#E13C4F'
		}
	]
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const ctxRef = useRef<CanvasRenderingContext2D | null | undefined>(null)
	const labelWidth = 30
	const barDimensions: {
		x: number
		y: number
		width: number
		height: number
	}[] = []
	let barWidth = 0
	let hoverBar: number | null = null
	let drawInterval: number = 0

	useEffect(() => {
		ctxRef.current = canvasRef.current?.getContext('2d')
		ctxRef.current!.font = '16px serif'

		draw()
		//This variable is required for cleanup
		const canvasRefTemp = canvasRef.current
		return () => {
			// clearInterval(drawInterval)
			removeEventListeners(canvasRefTemp!)
		}
	}, [])

	const draw = () => {
		const canvas = canvasRef.current!
		const ctx = ctxRef.current!
		// Clear the canvas before drawing
		ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)

		//Add a white background
		ctx.fillStyle = 'white'
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = 'black'

		addEventListeners()
		calcBarDimensions(canvas)
		drawAxes(ctx, canvas)
		drawLabels(ctx, canvas)
		drawBars(ctx)
		drawBarTooltips(hoverBar)
	}

	const calcBarDimensions = (canvas: HTMLCanvasElement) => {
		barWidth = ((canvas.width - 1.5 * labelWidth) * 0.9) / chartData.length
		const spaceWidth =
			((canvas.width - 1.5 * labelWidth) * 0.1) / (chartData.length - 1)

		let maxTicketCount = 0
		chartData.forEach((data) => {
			if (data.ticketCount > maxTicketCount) {
				maxTicketCount = data.ticketCount
			}
		})

		for (let i = 0; i < chartData.length; i++) {
			const width = barWidth
			const height =
				(canvas.height - 2 * labelWidth) *
				(chartData[i].ticketCount / maxTicketCount)
			const x = labelWidth + barWidth * i + spaceWidth * i
			const y = canvas.height - labelWidth

			barDimensions.push({ x, y, width, height })
		}
	}

	const drawAxes = (
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	) => {
		//Draw Y-axis
		ctx.beginPath() // Start a new path
		ctx.moveTo(labelWidth, 0) // Move the pen to (x, y)
		ctx.lineTo(labelWidth, canvas.height - labelWidth) // Draw a line to (x, y)
		ctx.stroke() // Render the path

		//Draw X-axis
		ctx.beginPath()
		ctx.moveTo(labelWidth, canvas.height - labelWidth)
		ctx.lineTo(canvas.width, canvas.height - labelWidth)
		ctx.stroke()
	}

	const drawLabels = (
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	) => {
		//  ---Draw y-axis label---

		// Save the current context state (optional)
		ctx.save()
		const text1 = ctx.measureText('Number of tickets -->')

		// Translate the context for character positioning
		ctx.translate(
			labelWidth / 2 + ctx.font.length / 2,
			canvas.height / 2 + text1.width / 2
		)
		// Rotate the context 90 degrees counter-clockwise
		ctx.rotate(-Math.PI / 2)
		// Draw the character
		ctx.fillText('Number of tickets -->', 0, 0)
		// Restore the context state (optional)
		ctx.restore()

		// ---Draw x-axis label---
		const text2 = ctx.measureText('Departments -->')
		ctx.fillText(
			'Departments -->',
			canvas.width / 2 - text2.width / 2,
			canvas.height - labelWidth / 2 + ctx.font.length / 2
		)
	}

	const drawBars = (ctx: CanvasRenderingContext2D) => {
		for (let i = 0; i < chartData.length; i++) {
			const { x, y, width, height } = barDimensions[i]

			ctx.fillStyle = chartData[i].colour
			ctx.fillRect(x, y, width, -height)
		}
	}

	const drawBarTooltips = (barIdx: number | null) => {
		if (barIdx === null) return
		const canvas = canvasRef.current!
		const ctx = ctxRef.current!

		const barDimension = barDimensions[barIdx]
		const barData = chartData[barIdx]

		const label = barData.name + ":" + barData.ticketCount
		const text = ctx.measureText(label)
		const padding = 4
		const spacing = 4
		let x = barDimension.x
		const y =
			canvas.height - (labelWidth + barDimension.height + padding + spacing)

		//check if overflow on right
		if (x + 2 * padding + text.width > canvas.width) {
			const diff = x + 2 * padding + text.width - canvas.width
			x -= diff
		}

		ctx.fillStyle = 'black'
		ctx.fillRect(x, y + padding, text.width + 2 * padding, -24)
		ctx.fillStyle = 'white'
		ctx.fillText(label, x + padding, y - padding)
	}

	const mouseMoveEvent = (event: MouseEvent) => {
		if (!drawInterval) {
			drawInterval = setInterval(draw, 10)
			console.log('Interval Added : ', drawInterval)
		}
		const mouseX = event.offsetX
		const mouseY = event.offsetY
		let isHoveringBar = false
		for (let i = 0; i < chartData.length; i++) {
			const barDimension = barDimensions[i]
			const minX = barDimension.x
			const maxX = barDimension.x + barWidth
			const minY = barDimension.y - barDimension.height
			const maxY = barDimension.y

			if (minX < mouseX && mouseX < maxX && minY < mouseY && mouseY < maxY) {
				hoverBar = i
				isHoveringBar = true
			}
		}
		if (!isHoveringBar) hoverBar = null
	}

	const mouseLeaveEvent = () => {
		console.log('Removing Inerval : ', drawInterval)
		clearInterval(drawInterval)
		drawInterval = 0
	}

	const addEventListeners = () => {
		canvasRef.current!.addEventListener('mousemove', mouseMoveEvent)
		canvasRef.current!.addEventListener('mouseleave', mouseLeaveEvent)
	}

	const removeEventListeners = (canvas: HTMLCanvasElement) => {
		canvas.removeEventListener('mousemove', mouseMoveEvent)
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				gap: '1rem'
			}}
		>
			<canvas
				ref={canvasRef}
				width="600"
				height="400"
				style={{ border: '1px solid white' }}
			>
				Canvas is not supported. Use Canvas supported browser.
			</canvas>
		</div>
	)
}
export default Solution1
`

const tsxCode2 = `
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
				>{'Number of Tickets -->'}</span>
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

	const height = (barData.ticketCount / maxHeight) * 100 + "%"
	const tooltipLabel = barData.name + ':' + barData.ticketCount
	return (
		<div
			style={{
				height: height,
				backgroundColor: barData.colour,
				width: '100%',
				position: 'relative',
				animation: 'growBar 0.5s ease-in-out forwards',
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

export default Solution2;
`

const Code = () => {
	const tsIcon = <TypeScriptIcon size={18} />
	return (
		<CodeHighlightTabs
			code={[
				{
					fileName: 'Solution1.tsx',
					code: tsxCode1,
					language: 'tsx',
					icon: tsIcon
				},
				{
					fileName: 'Solution2.tsx',
					code: tsxCode2,
					language: 'tsx',
					icon: tsIcon
				}
			]}
		/>
	)
}
export default Code
