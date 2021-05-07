import tw from "twin.macro"
import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled(motion.button)`
	${tw`rounded-full 
    font-secondary font-bold tracking-wide px-6 py-4
    text-xl cursor-pointer`}

	${(p: { primary?: boolean }) =>
		p.primary ? tw`bg-white shadow-lg text-blue` : tw`bg-black text-white`}
`

const Button = props => {
	return (
		<Wrapper {...props} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
			Connect Wallet
		</Wrapper>
	)
}

export default Button
