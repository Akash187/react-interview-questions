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
