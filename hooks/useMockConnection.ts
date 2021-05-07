import { useCookies } from "react-cookie"

const useMockConnection = (): MockConnection => {
	const [cookies, _] = useCookies(["mock_connection"])
	const connection: MockConnection = cookies.mock_connection

	return {
		name: connection?.name,
		eth: connection?.eth,
		publicAddress: connection?.publicAddress,
		profileImage: connection?.profileImage,
	}
}

export default useMockConnection
