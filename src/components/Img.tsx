type IProps = {
	src: string
	maxWidth?: string
}
const Img = ({ src, maxWidth = '480px' }: IProps) => {
	return <img src={src} style={{ maxWidth, width: '100%' }} />
}
export default Img
