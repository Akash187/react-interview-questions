import { useEffect, useRef, useState } from 'react'

const useClickOutside = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [isClickOutside, setIsClickOutside] = useState(false)
	const checkIsContain = (event: MouseEvent) => {
		if (!event.target) return
		if (!ref.current?.contains(event.currentTarget as Node)) {
			setIsClickOutside(true)
		} else {
			setIsClickOutside(false)
		}
	}

	useEffect(() => {
		window.addEventListener('click', checkIsContain)
		return () => {
			window.removeEventListener('click', checkIsContain)
		}
	}, [])

	return { ref, isClickOutside }
}
export default useClickOutside
