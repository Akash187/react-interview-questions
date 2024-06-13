import { CodeHighlightTabs } from '@mantine/code-highlight'
import { TypeScriptIcon } from '@mantinex/dev-icons'
import '@mantine/code-highlight/styles.css'

const tsxCode = `
import { useEffect, useRef } from 'react'
import { Box } from '@mantine/core'

const Solution = () => {
	const cantainerRef = useRef<HTMLDivElement | null>(null)
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const contextRef = useRef<CanvasRenderingContext2D | null>(null)
	let leftCircleCenter: [number, number] = [0, 0]
	let rightCircleCenter: [number, number] = [0, 0]
	let leftCircleRadius = 0
	let rightCircleRadius = 0
	let isDragging = false
	let isCollision = false
	let mouseButton: number | undefined = undefined //0 for left button and 2 for right button

	useEffect(() => {
		if (!cantainerRef.current || !canvasRef.current) return

		const { clientWidth, clientHeight } = cantainerRef.current
		canvasRef.current.width = clientWidth - 4
		canvasRef.current.height = clientHeight - 12

		contextRef.current = canvasRef.current.getContext('2d')
		addEventListeners()
		const drawInterval = setInterval(draw, 10)

		//This variable is required for cleanup
		const canvasRefTemp = canvasRef.current
		return () => {
			removeEventListeners(canvasRefTemp)
			clearInterval(drawInterval)
		}
	}, [])

	const drawCircle = (
		center: [number, number],
		radius: number,
		fillColor: string
	) => {
		const ctx = contextRef.current
		if (!ctx) {
			console.log('CanvasRenderingContext missing')
			return
		}

		const [x, y] = center
		ctx.beginPath()
		ctx.arc(x, y, radius, 0, Math.PI * 2, false)
		ctx.fillStyle = fillColor
		ctx.fill()
		ctx.closePath()
	}

	const drawLeftCircle = () => {
		const color = isCollision && mouseButton === 0 ? 'red' : 'green'
		drawCircle(leftCircleCenter, leftCircleRadius, color)
	}

	const drawRightCircle = () => {
		const color = isCollision && mouseButton === 2 ? 'red' : 'blue'
		drawCircle(rightCircleCenter, rightCircleRadius, color)
	}

	const draw = () => {
		// Clear the canvas before drawing
		contextRef.current!.clearRect(
			0,
			0,
			canvasRef.current!.width,
			canvasRef.current!.height
		)
		checkCollision()
		if (mouseButton === 0) {
			//Draw right circle
			if (rightCircleCenter) {
				drawRightCircle()
			}
			//Draw left circle
			if (leftCircleCenter) {
				drawLeftCircle()
			}
		} else if (mouseButton === 2) {
			//Draw left circle
			if (leftCircleCenter) {
				drawLeftCircle()
			}
			//Draw right circle
			if (rightCircleCenter) {
				drawRightCircle()
			}
		}
	}

	const calculateRadius = (x1: number, y1: number, x2: number, y2: number) => {
		return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
	}

	const checkCollision = () => {
		if (leftCircleCenter && rightCircleCenter) {
			const [x1, y1] = leftCircleCenter
			const [x2, y2] = rightCircleCenter
			const centerDistance = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2)
			isCollision = centerDistance <= leftCircleRadius + rightCircleRadius
		}
	}

	const mouseDownEvent = (event: MouseEvent) => {
		isDragging = true
		mouseButton = event.button

		if (mouseButton === 0) {
			// left click for mouse
			console.log('left click')
			leftCircleCenter = [event.offsetX, event.offsetY]
			leftCircleRadius = 0
		} else if (mouseButton === 2) {
			// right click for mouse
			console.log('right click')
			rightCircleCenter = [event.offsetX, event.offsetY]
			rightCircleRadius = 0
		}
	}

	const mouseMoveEvent = (event: MouseEvent) => {
		if (isDragging) {
			const newX = event.offsetX
			const newY = event.offsetY
			if (mouseButton === 0) {
				leftCircleRadius = calculateRadius(
					leftCircleCenter[0],
					leftCircleCenter[1],
					newX,
					newY
				)
			} else if (mouseButton === 2) {
				rightCircleRadius = calculateRadius(
					rightCircleCenter[0],
					rightCircleCenter[1],
					newX,
					newY
				)
			}
		}
	}

	const mouseUpEvent = () => {
		isDragging = false
	}

	const contextmenuEvent = (event: Event) => {
		event.preventDefault()
	}

	const addEventListeners = () => {
		canvasRef.current!.addEventListener('mousemove', mouseMoveEvent)
		canvasRef.current!.addEventListener('mousedown', mouseDownEvent)
		canvasRef.current!.addEventListener('mouseup', mouseUpEvent)
		canvasRef.current!.addEventListener('contextmenu', contextmenuEvent)
	}

	const removeEventListeners = (elm: HTMLCanvasElement) => {
		elm.removeEventListener('mousedown', mouseDownEvent)
		elm.removeEventListener('mousemove', mouseMoveEvent)
		elm.removeEventListener('mouseup', mouseUpEvent)
		elm.removeEventListener('contextmenu', contextmenuEvent)
	}

	return (
		<Box
			ref={cantainerRef}
			style={{
				overflow: 'auto',
				margin: 'auto',
				width: '100%',
				height: 'calc(100vh - 196px)'
			}}
		>
			<canvas style={{ border: '1px solid white' }} ref={canvasRef}>
				Canvas is not supported. Use Canvas supported browser.
			</canvas>
		</Box>
	)
}

export default Solution;
`

const Code = () => {
	const tsIcon = <TypeScriptIcon size={18} />
	return (
		<CodeHighlightTabs
			code={[
				{
					fileName: 'Solution.tsx',
					code: tsxCode,
					language: 'tsx',
					icon: tsIcon
				}
			]}
		/>
	)
}
export default Code
