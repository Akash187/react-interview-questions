import { CodeHighlightTabs } from '@mantine/code-highlight'
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons'
import '@mantine/code-highlight/styles.css'

const tsxCode = `
import { useEffect, useState } from 'react'
import { AVATARS } from './constants'
import './style.css'
import { setAvatar } from './utils'
import clsx from 'clsx'
import useClickOutside from './useClickOutside'

const Solution = () => {
	const [activeAvatar, setActiveAvatar] = useState(1)
	const [isPopupVisible, setIsPopupVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [loadingId, setLoadingId] = useState(0)
	const { ref, isClickOutside } = useClickOutside()

	const getImgUrl = () => {
		const avatarSrc: { [key: number]: string } = {}
		for (const avatar of AVATARS) {
			avatarSrc[avatar.id] = avatar['source']
		}

		return (id: number) => {
			return avatarSrc[id]
		}
	}

	const getImgUrlInner = getImgUrl()

	const setAvatarAction = async (id: number) => {
		if (id === activeAvatar) return
		setIsLoading(true)
		setLoadingId(id)
		const res = await setAvatar()
		setIsLoading(false)
		console.log(res)
		setActiveAvatar(id)
	}

	useEffect(() => {
		if (isClickOutside) {
			setIsPopupVisible(false)
		}
	}, [isClickOutside])

	return (
		<div className="container">
			<div ref={ref} className="userAvatar">
				<img
					onClick={() => setIsPopupVisible(!isPopupVisible)}
					className="avatar"
					src={getImgUrlInner(activeAvatar)}
				/>
				<div className={clsx({ avatarPopup: true, visible: isPopupVisible })}>
					<div className="trianglePointer"></div>
					<div className="avatarList">
						{AVATARS.map((avatar) => (
							<div key={avatar.id} className={clsx({ avatarContainer: true })}>
								<img
									src={avatar.source}
									onClick={() => setAvatarAction(avatar.id)}
									className={clsx({
										avatar: true,
										activeAvatar: avatar.id === activeAvatar
									})}
								/>
								<div
									className={clsx({
										loading: isLoading && loadingId === avatar.id
									})}
								></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Solution
`

const tsxCode2 = `
	export const AVATARS = [
	{
		id: 1,
		source:
			'https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/avatar-abstract-4_l5xT4AGJ4X.jpg?updatedAt=1720259454774',
		label: 'Avatar 1'
	},
	{
		id: 2,
		source:
			'https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/avatar-abstract-3_eTjeqa7OX9.jpg?updatedAt=1720259454817',
		label: 'Avatar 2'
	},
	{
		id: 3,
		source:
			'https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/avatar-abstract-6_siNklWiat.jpg?updatedAt=1720259454703',
		label: 'Avatar 3'
	},
	{
		id: 4,
		source:
			'https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/avatar-abstract-2_0r2bgSXFqf.jpg?updatedAt=1720259454704',
		label: 'Avatar 4'
	},
	{
		id: 5,
		source:
			'https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/avatar-abstract-5_3EoiN1KLV.jpg?updatedAt=1720259454638',
		label: 'Avatar 5'
	},
	{
		id: 6,
		source:
			'https://ik.imagekit.io/devtoolstech/question-images/avatar-picker/avatar-abstract-1_HxKRoRFgz.jpg?updatedAt=1720259454809',
		label: 'Avatar 6'
	}
]
`

const utilsCode = `
export const setAvatar = () => {
	// fake API call
	return new Promise((resolve) => {
		setTimeout(() => resolve('sucess'), 2000)
	})
}
`

const hookCode = `
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
`

const cssCode = `
:root {
	--background-color: #2c3e50;
	--border-color: #3498db;
}

.container {
	display: flex;
	justify-content: center;
	height: 100%;
}

.userAvatar {
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

.avatar {
	height: 5rem;
	width: 5rem;
	border: 0.25rem solid transparent;
	border-radius: 50%;
	transition: border-color 0.5s ease-in-out;
	cursor: pointer;
}

.avatar:hover {
	border-color: var(--border-color);
}

.activeAvatar,
.activeAvatar:hover {
	border: 0.25rem solid #3498db;
}

.avatarPopup {
	position: absolute;
	top: 5.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: translateY(3rem);
	opacity: 0;
	transition:
		opacity 0.4s ease-in-out,
		transform 0.6s ease-in-out;
}

.avatarPopup.visible {
	opacity: 1;
	transform: translateY(0);
}

.trianglePointer {
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	height: 1rem;
	width: 1.5rem;
	background-color: #2c3e50;
}

.avatarList {
	border-radius: 1rem;
	padding: 1rem 2rem;
	display: grid;
	background-color: #2c3e50;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	gap: 1.5rem;
}

.avatarContainer {
	position: relative;
}

.loading {
	position: absolute;
	height: 5rem;
	width: 5rem;
	top: 0;
	left: 0;
	border: 4px solid var(--border-color);
	border-radius: 50%;
	border-left-color: transparent;
	border-bottom-color: transparent;
	animation: rotateBorder 2s linear infinite;
}

@keyframes rotateBorder {
	0% {
		transform: rotate(0deg); /* Start position */
	}
	100% {
		transform: rotate(360deg); /* End position (one full rotation) */
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
					fileName: 'utils.ts',
					code: utilsCode,
					language: 'ts',
					icon: tsIcon
				},
				{
					fileName: 'useClickOutside.ts',
					code: hookCode,
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
