import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled.div`
	${tw`w-full rounded-xl shadow-lg border-solid border-white`}
	border-width: 12px;

	height: 18rem;
	@media screen (min-width: 320px) {
		height: 25rem;
	}
	@media screen (min-width: 768px) {
		height: 30rem;
	}
`

const SampleCard = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>
}

export default SampleCard
