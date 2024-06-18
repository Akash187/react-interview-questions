import { useState, MouseEvent, useRef } from 'react'
import { COLORS } from './constants'
import './style.css'

type CIRCLE = { x: number; y: number; color: string }

const Solution = () => {
	const [circles, setCircles] = useState<CIRCLE[]>([])
	const [hiddenCircles, setHiddenCircles] = useState<CIRCLE[]>([])
	const frameRef = useRef<HTMLDivElement>(null)

	const addCircle = (event: MouseEvent) => {
		//below code is required if click area is in container and it is scrollable
		const { left, top } = frameRef.current!.getBoundingClientRect()
		const x = event.clientX - left
		const y = event.clientY - top
		const color = COLORS[Math.floor(Math.random() * COLORS.length)]
		setCircles((prev) => [...prev, { x, y, color }])
		setHiddenCircles([])
	}

	const undo = () => {
		const top = circles.pop()
		if (top) {
			setCircles(circles)
			setHiddenCircles((prev) => [...prev, top])
		}
	}

	const redo = () => {
		const top = hiddenCircles.pop()
		if (top) {
			setHiddenCircles(hiddenCircles)
			setCircles((prev) => [...prev, top])
		}
	}

	const reset = () => {
		setCircles([])
		setHiddenCircles([])
	}

	return (
		<div className="container">
			<div className="buttons">
				<button disabled={circles.length === 0} onClick={undo}>
					Undo
				</button>
				<button disabled={hiddenCircles.length === 0} onClick={redo}>
					Redo
				</button>
				<button onClick={reset}>Reset</button>
			</div>
			<div ref={frameRef} onClick={addCircle} className="frame">
				{circles.map((circle, idx) => (
					<Circle key={idx} circle={circle} />
				))}
			</div>
		</div>
	)
}

const Circle = ({ circle }: { circle: CIRCLE }) => {
	const { x, y, color } = circle
	return (
		<div
			className="circle"
			style={{ left: x, top: y, backgroundColor: color }}
		></div>
	)
}

export default Solution
