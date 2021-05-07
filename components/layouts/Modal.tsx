import { ReactChild, useEffect, useRef } from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import useOnClickOutside from "hooks/useOnClickOutside"

const Wrapper = styled(motion.div)`
	${tw`w-screen h-screen fixed flex items-center justify-center top-0 left-0`}
	z-index: 999;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(10px);
`

const ModalContainer = styled(motion.div)`
	${tw`bg-white`}
	border-radius: 2rem;
	min-height: 62vh;
	min-width: 62vw;
`

const Modal = ({
	isActive,
	children,
	onClose,
}: {
	isActive?: boolean
	children: ReactChild
	onClose: VoidFunction
}) => {
	const container = useRef()

	useEffect(() => {
		// We need to prevent body from scrolling behind the modal
		// This code does that
		if (isActive) {
			document.body.setAttribute("style", "overflow: hidden")
		} else {
			document.body.removeAttribute("style")
		}
	}, [isActive])

	// Triggers close, calls the parent onClose function handler.
	useOnClickOutside(container, () => onClose())

	return (
		<AnimatePresence>
			{isActive && (
				<Wrapper animate={{ opacity: isActive ? 1 : 0 }}>
					<ModalContainer
						ref={container}
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 100, opacity: 0 }}
						transition={{ type: "spring", damping: 20, stiffness: 200 }}>
						{children}
					</ModalContainer>
				</Wrapper>
			)}
		</AnimatePresence>
	)
}

export default Modal
