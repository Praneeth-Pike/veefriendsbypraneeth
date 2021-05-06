/**
 * Used for layout across the app.
 * Row acts as a container to align its children in a centered flex-box
 * that has a max-width for large screens.
 */

import React from "react"
import tw from "twin.macro"
import styled from "styled-components"

const Wrapper = styled.div`
	${tw`flex flex-wrap items-center mx-auto w-full lg:px-4 `};
	max-width: ${(p: { narrow?: boolean }) =>
		p.narrow ? "calc(100vw - (100vw / 6))" : "calc(100vw - (100vw / 12))"};
`

const Row = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Row
