import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import tw from "twin.macro"
import styled from "styled-components"
import Row from "components/layouts/Row"
import ReactPlayer from "react-player"
import SampleCard from "components/cards/SampleCard"
import Footer from "components/layouts/Footer"

const Section = styled.div`
	${tw`min-h-screen`}
`
const SquigglesLayer = styled.div`
	${tw`absolute top-0 left-0 w-full`}
	height: 500vh;
	z-index: 0;
`

const Home = () => {
	return (
		<div tw="relative">
			<SquigglesLayer>
				<Image src="/images/squiggles.png" layout="fill" />
			</SquigglesLayer>
			<Head>
				<head>
					<title>VeeFriends • Proposal by @praneethpike</title>
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

			<main tw="relative z-20">
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
						<div tw="w-full rounded-lg my-12 overflow-hidden shadow-xl">
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

				{/* Section Two | Access Tokens */}
				<Section tw="flex flex-col justify-center items-start">
					<Row>
						<div tw="w-2/5">
							<h2 tw="text-5xl font-primary text-gray-600 tracking-tight mb-8">
								Access Tokens
							</h2>
							<p>
								Admission Tokens are tokens that come with different
								levels of rarity and collectability. There are 9,400
								Admission Tokens. What’s unique about the Admission tokens
								is that there are different quantity levels within each
								character type. Additionally, Admission tokens, like all
								VeeFriends tokens, receive a three year access pass to
								VeeCon.
							</p>
							<button tw="rounded-full bg-black text-white mt-8 -ml-px text-center font-bold font-secondary px-6 py-4">
								See All Access Tokens
							</button>
						</div>
						<div tw="flex w-3/5 px-12">
							<SampleCard tw="bg-blue-400 w-1/2 -mt-24 mx-2" />
							<SampleCard tw="bg-blue-400 w-1/2" />
						</div>
					</Row>
				</Section>

				{/* Section Three */}
				<Section tw="flex flex-col justify-center items-start bg-blue">
					<Row>
						<div tw="w-2/5">
							<h2 tw="text-5xl font-primary text-gray-600 tracking-tight mb-8 text-white">
								Admission Tokens
							</h2>
							<p tw="text-gray-100">
								Admission Tokens are tokens that come with different
								levels of rarity and collectability. There are 9,400
								Admission Tokens. What’s unique about the Admission tokens
								is that there are different quantity levels within each
								character type. Additionally, Admission tokens, like all
								VeeFriends tokens, receive a three year access pass to
								VeeCon.
							</p>
							<button tw="rounded-full bg-black text-white mt-8 -ml-px text-center font-bold font-secondary px-6 py-4">
								See All Access Tokens
							</button>
						</div>
						<div tw="flex w-3/5 px-12">
							<SampleCard tw="bg-blue-400 w-1/2 -mt-24 mx-2" />
							<SampleCard tw="bg-blue-400 w-1/2" />
						</div>
					</Row>
				</Section>
				<Section tw="flex flex-col justify-center items-start">
					<Row>
						<div tw="w-2/5">
							<h2 tw="text-5xl font-primary text-gray-600 tracking-tight mb-8">
								Gift Tokens
							</h2>
							<p>
								Admission Tokens are tokens that come with different
								levels of rarity and collectability. There are 9,400
								Admission Tokens. What’s unique about the Admission tokens
								is that there are different quantity levels within each
								character type. Additionally, Admission tokens, like all
								VeeFriends tokens, receive a three year access pass to
								VeeCon.
							</p>
							<button tw="rounded-full bg-black text-white mt-8 -ml-px text-center font-bold font-secondary px-6 py-4">
								See All Access Tokens
							</button>
						</div>
						<div tw="flex w-3/5 px-12">
							<SampleCard tw="bg-blue-400 w-1/2 -mt-24 mx-2" />
							<SampleCard tw="bg-blue-400 w-1/2" />
						</div>
					</Row>
				</Section>
			</main>

			<Footer />
		</div>
	)
}

export default Home
