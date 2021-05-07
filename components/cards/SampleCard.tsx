import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled.div`
	height: 30rem;
	${tw`w-full rounded-xl shadow-lg border-solid border-white`}
	border-width: 12px;
`

const SampleCard = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>
}

export default SampleCard
