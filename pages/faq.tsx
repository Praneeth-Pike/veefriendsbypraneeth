import Header from "components/layouts/Header"
import Main from "components/layouts/Main"
import Row from "components/layouts/Row"
import tw from "twin.macro"

const Faq = props => {
	return (
		<div tw="w-screen">
			<Header />
			<Main>
				<section tw="mt-20 py-32">
					<Row>
						<h1 tw="text-4xl lg:text-6xl font-bold font-primary">FAQs</h1>
					</Row>
				</section>
			</Main>
		</div>
	)
}

export default Faq
