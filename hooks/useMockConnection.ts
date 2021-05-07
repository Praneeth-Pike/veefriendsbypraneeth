import { useCookies } from "react-cookie"

const useMockConnection = (): MockConnection => {
	const [cookies, _] = useCookies(["mock_connection"])
	const connection: MockConnection = cookies.mock_connection

	if (connection) {
		return {
			name: connection?.name,
			eth: connection?.eth,
			publicAddress: connection?.publicAddress,
			profileImage: connection?.profileImage,
		}
	}
	return null
}

export default useMockConnection
