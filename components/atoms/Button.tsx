import tw from "twin.macro"
import styled from "styled-components"
import { motion } from "framer-motion"
import { ReactChild } from "react"

enum ButtonType {
	primary = "primary",
	secondary = "secondary",
	teritiary = "teritiary",
	noChrome = "noChrome",
}

const Wrapper = styled(motion.button)`
	${tw`rounded-full 
    font-secondary font-bold px-6 py-4
    text-xl cursor-pointer`}

	${({ type }: { type: ButtonType }) => {
		switch (type) {
			case ButtonType.primary:
				return tw`bg-white shadow-lg text-blue`
			case ButtonType.secondary:
				return tw`bg-black text-white`
			case ButtonType.teritiary:
				return tw`bg-gray-50 text-gray`
			case ButtonType.noChrome:
				return tw`bg-transparent text-gray p-0`
			default:
				// returns nothing so that styles can be taken
				// from the invocation
				return
		}
	}}
`

const Button = props => {
	const { type, children }: { type?: ButtonType; children: ReactChild } = props
	return (
		<Wrapper
			type={type}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.99 }}
			{...props}>
			{children}
		</Wrapper>
	)
}

export default Button
