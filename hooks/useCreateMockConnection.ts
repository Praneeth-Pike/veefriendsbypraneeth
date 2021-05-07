import { useCookies } from "react-cookie"

function useCreateMockConnection() {
	const [_, setCookie] = useCookies()
	const data: MockConnection = {
		name: "praneeth pike",
		eth: 16.18,
		publicAddress: "x6789012z234546709",
		profileImage: "linear-gradient(18deg, skyblue, purple)",
	}
	setCookie("mock_connection", data)
	return true
}

export default useCreateMockConnection
