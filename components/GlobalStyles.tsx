import { createGlobalStyle } from "styled-components"
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle`
  html{
    font-size: 14px;
  }
  @media only screen and (min-width: 320px){
    html{
      font-size: 16px;
    }
  }
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  p{
    ${tw`text-gray tracking-wide font-secondary`};
    font-size: 1.2rem;
    line-height: 1.618;
  }
`

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
)

export default GlobalStyles
