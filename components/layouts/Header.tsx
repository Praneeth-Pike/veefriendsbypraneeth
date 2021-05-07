import Button from "components/atoms/Button"
import Row from "components/layouts/Row"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import useMockConnection from "hooks/useMockConnection"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import tw from "twin.macro"
import ConnectionPill from "components/atoms/ConnectionPill"

const BgSpan = styled(motion.span)`
	${tw`w-full h-full absolute top-0 left-0`}
	background: rgba(255,255,255, 0.8);
	backdrop-filter: blur(20px);
	// z-index: 0;
`

const Header = props => {
	const { onConnectClick }: { onConnectClick: VoidFunction } = props
	// const y = useTransform(scrollYProgress, [0, 0.15], [-200, 0])
	const data = useMockConnection()

	const { scrollYProgress } = useViewportScroll()
	const y = useTransform(scrollYProgress, [0, 0.25], [-500, 0])
	return (
		<header tw="w-screen py-4 fixed top-0 left-0 z-50">
			<BgSpan initial={{ y: -500 }} style={{ y }} />
			<Row tw="justify-between relative">
				<Link href="/">
					<Image src="/images/logo.png" height="35" width="182" />
				</Link>
				<div tw="hidden md:flex items-center justify-end space-x-8">
					<Link href="/faqs">
						<a tw="text-xl font-bold text-gray-400 hover:opacity-50 cursor-pointer">
							Collections
						</a>
					</Link>
					<Link href="/faqs">
						<a tw="text-xl font-bold text-gray-400 hover:opacity-50 cursor-pointer">
							FAQs
						</a>
					</Link>
					{data?.name ? (
						<ConnectionPill data={data} />
					) : (
						<Button type="primary" onClick={() => onConnectClick()}>
							Connect Wallet
						</Button>
					)}
				</div>
			</Row>
		</header>
	)
}

export default Header
