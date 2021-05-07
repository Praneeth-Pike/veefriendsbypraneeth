import { motion } from "framer-motion"
import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled(motion.div)`
	${tw`bg-white flex items-start text-right shadow-lg px-4 py-3 
    rounded-full cursor-pointer`}
`

const Pic = styled.div`
	${tw`rounded-full`}
	height: 3rem;
	width: 3rem;
	background: ${({ bg }: { bg?: string }) => bg};
`

const ConnectionPill = props => {
	const { data }: { data: MockConnection } = props

	const handleLogout = () => {
		if (window.confirm("Do you want to log out?")) {
			localStorage.clear()
			sessionStorage.clear()
		}
	}

	return (
		<Wrapper
			{...props}
			onClick={() => handleLogout()}
			whileHover={{ scale: 1.01 }}
			whileTap={{ scale: 0.98 }}>
			<div tw="mr-2">
				<p tw="font-bold tracking-tight">{data?.name}</p>
				<div tw="flex items-center text-gray-300 space-x-2">
					<p tw="text-sm font-bold text-green">{data?.eth} ETH</p>
					<p tw="text-sm">
						x...
						{data?.publicAddress?.substr(
							data?.publicAddress?.length - 4,
							data?.publicAddress?.length
						)}
					</p>
				</div>
			</div>
			<Pic bg={data?.profileImage} />
		</Wrapper>
	)
}

export default ConnectionPill
