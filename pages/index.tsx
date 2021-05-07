import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import tw from "twin.macro"
import styled from "styled-components"
import Row from "components/layouts/Row"
import ReactPlayer from "react-player"

const Section = styled.div`
	${tw`min-h-screen`}
`

const Home = () => {
	return (
		<div>
			<Head>
				<head>
					<title>VeeFriends • NFT Project</title>
					<meta
						name="description"
						content="VeeFriends NFT Projects owned by VeeFriends,LLC. Built by @praneethpike"
					/>
					<link rel="icon" href="/favicon.ico" />
				</head>
			</Head>

			<header tw="w-screen py-4">
				<Row tw="justify-between">
					<Image src="/images/logo.png" height="35" width="182" />
					<div tw="flex items-center justify-end space-x-8">
						<Link href="/faqs">Collections</Link>
						<Link href="/faqs">FAQs</Link>
						<button tw="rounded-full bg-white px-6 py-4 shadow-lg hover:shadow-sm text-blue font-bold transition-all">
							Connect Wallet
						</button>
					</div>
				</Row>
			</header>

			<main>
				<Section>
					<Row tw="flex-col items-center justify-center text-center">
						<div tw="w-4/5 md:w-2/3 text-center mt-40">
							<h1 tw="text-8xl font-primary font-bold text-gray-700 mb-2 leading-none tracking-tight">
								The way <span tw="text-green">NFTs</span> should be.
							</h1>
							<p>
								The main ambition of this project is to create meaningful
								intellectual property and create an extraordinary
								community. All tokens are a three-year admission token to
								VeeCon, an annual super-conference. We know a lot of you
								are new to the NFT world, so before you do anything, get
								acquainted with the FAQs.
							</p>
						</div>

						{/* Video Player */}
						<div tw="w-full md:w-11/12 rounded-lg my-12 overflow-hidden shadow-xl">
							<ReactPlayer
								controls={false}
								style={{ borderRadius: "2rem" }}
								width="100%"
								height="80vh"
								url="https://youtu.be/DmDieez1GYQ"
							/>
						</div>
					</Row>
				</Section>
			</main>
		</div>
	)
}

export default Home
