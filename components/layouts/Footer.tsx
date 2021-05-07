import tw from "twin.macro"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import Row from "components/layouts/Row"
import Button from "components/atoms/Button"

const Wrapper = styled.footer`
	${tw`min-h-screen flex flex-col items-start justify-center bg-gray-50`}
`

const Footer = props => {
	return (
		<Wrapper>
			<Row tw="items-start flex-col-reverse md:flex-row">
				<div tw="w-full md:w-1/3">
					<div tw="flex flex-col items-start space-y-8">
						<Link href="/faq">
							<button tw="text-4xl font-secondary font-bold text-black tracking-tight">
								FAQs
							</button>
						</Link>
						<Link href="/collections">
							<button tw="text-4xl font-secondary font-bold text-black tracking-tight">
								Collections
							</button>
						</Link>
						<Link href="/collections">
							<button tw="text-4xl font-secondary font-bold text-black tracking-tight">
								VeeCon
							</button>
						</Link>

						<div tw="flex items-center space-x-12">
							<a
								href="https://www.discord.com"
								target="_black"
								rel="noreferrer">
								<Image
									src="/images/svg/Discord-Logo-Black.svg"
									height={66}
									width={68}
									alt="Discord Icon"
								/>
							</a>
							<a
								href="https://www.instagram.com"
								target="_black"
								rel="noreferrer">
								<Image
									src="/images/svg/instagram.svg"
									height={53}
									width={53}
									alt="Instagram Icon"
								/>
							</a>
							<a
								href="https://www.twitter.com"
								target="_black"
								rel="noreferrer">
								<Image
									src="/images/svg/twitter.svg"
									height={53}
									width={53}
									alt="Twitter Icon"
								/>
							</a>
						</div>
					</div>

					<div tw="mt-16">
						<h5 tw="text-gray-200 font-bold text-3xl">
							&copy; VeeFriends, LLC 2021
						</h5>
					</div>
				</div>
				<div tw="w-full md:w-2/3 flex flex-col items-start my-8 md:my-0 md:items-end md:text-right">
					<Button
						tw="-ml-2 md:ml-0"
						type="primary"
						onClick={() => console.log("Connect Wallet")}>
						Connect Wallet
					</Button>
					<p tw="mt-4 mb-0 mr-3 text-gray-200">Supported Wallets</p>

					<div tw="flex items-center justify-end md:px-2 mb-4">
						<Image
							src="/images/svg/metamask-logo.svg"
							height={55}
							width={55}
							alt="Metamask Logo"
						/>
					</div>
				</div>
			</Row>
		</Wrapper>
	)
}

export default Footer
