import tw from "twin.macro"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import Row from "components/layouts/Row"
import Button from "components/atoms/Button"

const Wrapper = styled.footer`
	${tw`min-h-screen flex flex-col items-start justify-center`}
	background: #F8FAFC;
`

const Footer = props => {
	return (
		<Wrapper>
			<Row tw="items-start">
				<div tw="w-1/3">
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
				<div tw="w-2/3 flex flex-col items-end text-right">
					<Button primary onClick={() => console.log("Connect Wallet")}>
						Connect Wallet
					</Button>
				</div>
			</Row>
		</Wrapper>
	)
}

export default Footer
