import { useState, useEffect } from 'react'

const BOX_DATA = [
	[1, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 0, 1],
	[1, 1, 1, 1, 0, 1]
]

export default function Solution() {
	//Array make sure that the order is maintained beacuse Set doesn't gurantee order
	const [boxArr, setBoxArr] = useState<string[]>([])
	//Here set help make opeations efficient like checking if box in checked
	const [boxSet, setBoxSet] = useState(new Set<string>())

	let boxNum = 0
	let disable = false

	BOX_DATA.forEach((row) => {
		row.forEach((col) => {
			if (col) boxNum += 1
		})
	})

	const colorBox = (id: string) => {
		if (disable) return

		if (!boxSet.has(id)) {
			setBoxArr((curr) => [...curr, id])
			setBoxSet((prevSet) => new Set(prevSet.add(id)))
		}
	}

	const deselect = () => {
		disable = true
		const delay = 200
		boxArr.forEach((box, idx) => {
			setTimeout(() => {
				setBoxSet((prevSet) => {
					const newSet = new Set(prevSet)
					newSet.delete(box)
					return newSet
				})
			}, delay * idx)
		})
	}

	useEffect(() => {
		if (boxArr.length === boxNum) {
			deselect()
		} else if (boxArr.length === 0) {
			disable = false
		}
	}, [boxArr])

	useEffect(() => {
		if (boxSet.size === 0) {
			setBoxArr([])
		}
	}, [boxSet])

	return (
		<main>
			{BOX_DATA.map((row, rowIdx) => {
				const rIdx = 'row-' + rowIdx
				return (
					<div
						key={rIdx}
						style={{ display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem' }}
					>
						{row.map((col, colIdx) => {
							const id = rowIdx + '-' + colIdx
							return col === 1 ? (
								<Box
									isToggled={boxSet.has(id)}
									key={id}
									onClick={() => colorBox(id)}
								/>
							) : (
								<div
									style={{
										width: '60px'
									}}
								></div>
							)
						})}
					</div>
				)
			})}
		</main>
	)
}

type BoxProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	isToggled: boolean
}

const Box = ({ isToggled, ...rest }: BoxProps) => {
	return (
		<button
			{...rest}
			style={{
				width: '60px',
				height: '60px',
				border: '1px solid black',
				backgroundColor: isToggled ? '#0bcc59' : '#ffffff'
			}}
		></button>
	)
}
