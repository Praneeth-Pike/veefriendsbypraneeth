import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import tw from "twin.macro"
import styled from "styled-components"
import ReactPlayer from "react-player"
import QRCode from "react-qr-code"
import { useCookies } from "react-cookie"
import Row from "components/layouts/Row"
import SampleCard from "components/cards/SampleCard"
import Header from "components/layouts/Header"
import Footer from "components/layouts/Footer"
import Modal from "components/layouts/Modal"
import Button from "components/atoms/Button"

const Section = styled.div`
	${tw`min-h-screen py-32 md:px-4`}
`
const SquigglesLayer = styled.div`
	${tw`absolute top-0 left-0 w-full`}
	height: 500vh;
	z-index: -1;
	background: linear-gradient(182.53deg, #f8fafc 2.11%, #ffffff 67.44%);
`

const Home = () => {
	const router = useRouter()
	const [showModal, toggleModal] = useState(false)

	const [_, setCookie] = useCookies()

	const createMockConnection = () => {
		/**
		 * Creates a Mock Cookie as if the use is connected
		 */
		const data: MockConnection = {
			name: "praneeth pike",
			eth: 16.18,
			publicAddress: "x6789012z234546709",
			profileImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
		}
		setCookie("mock_connection", data)
		// Close the connection modal
		toggleModal(false)
	}

	// Handler functions
	const handleNavigate = (to: string) => {
		// Just a utility function to navigation via onClick buttons
		router.push(`/${to}`)
	}

	return (
		<>
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

				<Header onConnectClick={() => toggleModal(true)} />

				<main tw="relative z-20">
					<Section>
						<Row tw="flex-col items-center justify-center text-center">
							<div tw="w-full lg:w-2/3 text-center mt-40">
								<h1 tw="text-4xl md:text-6xl lg:text-8xl font-primary font-bold text-gray-700 mb-2 leading-none tracking-tight">
									The way <span tw="text-green">NFTs</span> should be.
								</h1>
								<p tw="mt-2">
									The main ambition of this project is to create
									meaningful intellectual property and create an
									extraordinary community. All tokens are a three-year
									admission token to VeeCon, an annual super-conference.
									We know a lot of you are new to the NFT world, so
									before you do anything, get acquainted with the{" "}
									<Link href="/faq">
										<span tw="font-bold text-green-500 underline cursor-pointer hover:opacity-50">
											FAQs
										</span>
									</Link>
									.
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
						<Row tw="flex-col-reverse md:flex-row">
							<div tw="w-full md:w-2/5">
								<h2 tw="text-5xl font-primary text-gray-600 tracking-tight mb-8">
									Access
									<br />
									Tokens
								</h2>
								<p>
									Admission Tokens are tokens that come with different
									levels of rarity and collectability. There are 9,400
									Admission Tokens. What’s unique about the Admission
									tokens is that there are different quantity levels
									within each character type. Additionally, Admission
									tokens, like all VeeFriends tokens, receive a three
									year access pass to VeeCon.
								</p>
								<Button
									type="secondary"
									tw="mt-12 -ml-px"
									onClick={() => handleNavigate("/collections")}>
									See All Access Tokens
								</Button>
							</div>
							<div tw="flex w-full md:w-3/5 md:px-12">
								<SampleCard tw="bg-blue-400 w-1/2 -mt-24 mx-2" />
								<SampleCard tw="bg-blue-400 w-1/2" />
							</div>
						</Row>
					</Section>

					{/* Section Three */}
					<Section tw="flex flex-col justify-center items-start bg-blue">
						<Row tw="flex-col-reverse lg:flex-row">
							<div tw="w-full lg:w-2/5">
								<h2 tw="text-5xl font-primary text-gray-600 tracking-tight mb-8 text-white">
									Admission
									<br />
									Tokens
								</h2>
								<p tw="text-gray-100">
									Admission Tokens are tokens that come with different
									levels of rarity and collectability. There are 9,400
									Admission Tokens. What’s unique about the Admission
									tokens is that there are different quantity levels
									within each character type. Additionally, Admission
									tokens, like all VeeFriends tokens, receive a three
									year access pass to VeeCon.
								</p>
								<Button
									type="secondary"
									tw="mt-12 -ml-px bg-white text-black"
									onClick={() => handleNavigate("/collections")}>
									See All Access Tokens
								</Button>
							</div>
							<div tw="flex w-full lg:w-3/5 lg:px-12">
								<SampleCard tw="bg-blue-400 w-1/2 -mt-24 mx-2" />
								<SampleCard tw="bg-blue-400 w-1/2" />
							</div>
						</Row>
					</Section>
					<Section tw="flex flex-col justify-center items-start">
						<Row tw="flex-col-reverse lg:flex-row">
							<div tw="w-full lg:w-2/5">
								<h2 tw="text-5xl font-primary text-gray-600 tracking-tight mb-8">
									Gift
									<br />
									Tokens
								</h2>
								<p>
									Admission Tokens are tokens that come with different
									levels of rarity and collectability. There are 9,400
									Admission Tokens. What’s unique about the Admission
									tokens is that there are different quantity levels
									within each character type. Additionally, Admission
									tokens, like all VeeFriends tokens, receive a three
									year access pass to VeeCon.
								</p>
								<Button
									type="secondary"
									tw="mt-12 -ml-px"
									onClick={() => handleNavigate("/collections")}>
									See All Access Tokens
								</Button>
							</div>
							<div tw="flex w-full lg:w-3/5 lg:px-12">
								<SampleCard tw="bg-blue-400 w-1/2 -mt-24 mx-2" />
								<SampleCard tw="bg-blue-400 w-1/2" />
							</div>
						</Row>
					</Section>
				</main>

				<Footer onConnectClick={() => toggleModal(true)} />
			</div>

			{/* Mock Connection Modal */}
			<Modal onClose={() => toggleModal(false)} isActive={showModal}>
				<div tw="w-full flex flex-col items-center text-center justify-center p-12">
					<h3 tw="text-3xl font-bold font-secondary text-gray">
						Connect Wallet
					</h3>
					<p tw="mb-4 text-gray-200">This is only a mock connection.</p>
					<QRCode value="hey" size={256} />
					<Button
						tw="mt-4 bg-blue-100 text-black"
						onClick={() => createMockConnection()}>
						Tap to Mimic Connection
					</Button>
				</div>
			</Modal>
		</>
	)
}

export default Home
