import { CodeHighlightTabs } from '@mantine/code-highlight'
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons'
import '@mantine/code-highlight/styles.css'

const tsxCode = `
import { useEffect, useState } from 'react'
import { getRandomColors } from './utils'
import './style.css'

const TOTAL_BOXES = 12

const Solution = () => {
	const colors = getRandomColors(TOTAL_BOXES / 2)
	const COLS = 4
	const ROWS = 12 / COLS
	const [grid, setGrid] = useState<string[][]>([])
	const [visibleCells, setVisibleCells] = useState<Set<string>>(new Set())
	const [prevColor, setPrevColor] = useState<string | null>(null)
	const [prevIdx, setPrevIdx] = useState<string | null>(null)
	const [isFinished, setIsFinished] = useState(false)
	const [rounds, setRounds] = useState(0)

	const assignColorToCell = () => {
		const colorMap: { [key: number]: number } = {}
		const tempGrid = []
		for (let i = 0; i < ROWS; i++) {
			const row = []
			for (let j = 0; j < COLS; j++) {
				let colorIdx = Math.floor(Math.random() * colors.length)
				while (colorIdx in colorMap && colorMap[colorIdx] == 2) {
					colorIdx = Math.floor(Math.random() * colors.length)
				}
				colorMap[colorIdx] = (colorMap[colorIdx] || 0) + 1
				row.push(colors[colorIdx])
			}
			tempGrid.push(row)
		}

		setGrid(tempGrid)
	}

	const matchCell = (color: string, rowColIdx: string) => {
		if (visibleCells.has(rowColIdx)) return

		setVisibleCells((prev) => {
			prev.add(rowColIdx)
			return new Set(prev)
		})
		setRounds((prev) => prev + 1)
		if (prevColor) {
			if (color !== prevColor) {
				setTimeout(() => {
					setVisibleCells((prev) => {
						prev.delete(rowColIdx)
						prev.delete(prevIdx!)
						return new Set(prev)
					})
				}, 500)
				console.log('not matched')
			}
			setPrevColor(null)
		} else {
			setPrevColor(color)
			setPrevIdx(rowColIdx)
		}
	}

	useEffect(() => {
		assignColorToCell()
	}, [])

	useEffect(() => {
		if (visibleCells.size === TOTAL_BOXES) {
			setIsFinished(true)
		}
	}, [visibleCells])

	const reset = () => {
		assignColorToCell()
		setVisibleCells(new Set())
		setPrevColor(null)
		setPrevIdx(null)
		setIsFinished(false)
		setRounds(0)
	}

	return (
		<div className="container">
			{isFinished ? (
				<div className="game-score">
					<h3>Game over : {rounds / 2} rounds taken</h3>
					<button onClick={reset}>Restart</button>
				</div>
			) : (
				<div className="grid">
					{grid.map((row, rowIdx) => {
						return (
							<div className="row" key={rowIdx}>
								{row.map((col, colIdx) => {
									const rowColIdx = rowIdx + '-' +colIdx;
									return (
										<div
											onClick={() => matchCell(col, rowColIdx)}
											style={{
												backgroundColor: visibleCells.has(rowColIdx)
													? col
													: 'transparent',
												cursor: visibleCells.has(rowColIdx)
													? 'default'
													: 'pointer'
											}}
											key={rowColIdx}
											className="column"
										></div>
									)
								})}
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}
export default Solution
`

const utilsCode = `
function _getRandomColor() {
  const randomColor = () => Math.floor(Math.random() * 256);
  const r = randomColor().toString(16).padStart(2, '0');
  const g = randomColor().toString(16).padStart(2, '0');
  const b = randomColor().toString(16).padStart(2, '0');

  return '#' + r + g + b;
}

export function getRandomColors(limit: number) {
  const colors = [];
  const seen = new Set();

  for (let i = 0; i < limit; i++) {
    let color = _getRandomColor();

    while (seen.has(color)) {
      color = _getRandomColor();
    }

    colors.push(color);
  }

  return colors;
}
`

const cssCode = `
.container {
	display: flex;
	justify-content: center;
}

.grid {
	border-left: 1px solid white;
	border-top: 1px solid white;
}

.row {
	display: flex;
}

.column {
	height: 8rem;
	width: 8rem;
	border-right: 1px solid white;
	border-bottom: 1px solid white;
	transition: background-color 0.2s ease-in;
}

.game-score {
	display: flex;
	flex-direction: column;
	align-items: center;
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
					fileName: 'utils.ts',
					code: utilsCode,
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
