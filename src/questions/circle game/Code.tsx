import { CodeHighlightTabs } from '@mantine/code-highlight'
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons'
import '@mantine/code-highlight/styles.css'

const tsxCode = `
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
`

const tsxCode2 = `
	export const COLORS = [
	'#2c3e50',
	'#34495e',
	'#c0392b',
	'#e74c3c',
	'#27ae60',
	'#3498db',
	'#f39c12',
	'#f1c40f'
]
`

const cssCode = `
.container {
  display       : flex;
  flex-direction: column;
  gap           : 1rem;
}

.buttons {
  display        : flex;
  justify-content: center;
  gap            : 1rem;
}

.frame {
  height  : 500px;
  border  : 1px solid grey;
  position: relative;
  overflow: hidden;
}

.circle {
  position     : absolute;
  border-radius: 50%;
  transform    : translate(-50%, -50%);
  animation    : pop 100ms ease-in forwards;
}

@keyframes pop {
  0% {
    width : 0;
    height: 0;
  }

  100% {
    width : 40px;
    height: 40px;
  }
}
`

const Code = () => {
	const tsIcon = <TypeScriptIcon size={18} />
	const cssIcon = <CssIcon size={18} />
	return (
		<CodeHighlightTabs
			code={[
				{
					fileName: 'Solution.tsx',
					code: tsxCode,
					language: 'tsx',
					icon: tsIcon
				},
				{
					fileName: 'constants.ts',
					code: tsxCode2,
					language: 'ts',
					icon: tsIcon
				},
				{
					fileName: 'style.css',
					code: cssCode,
					language: 'css',
					icon: cssIcon
				}
			]}
		/>
	)
}
export default Code
