import { useMap } from "../../MapContext"
import { Box } from "../../design-system/components"
import theme from "../../design-system/theme"

const WandernLogo = () => {
	const { isSatellite } = useMap()
	return (
		<Box mx="auto" mt="spacing-lg">
			<svg
				width="81"
				height="12"
				viewBox="0 0 81 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.426667 1.25333H2.69333L4.62667 6.93333L6.12 3.18667L5.34667 1.25333H7.26667L9.46667 6.70667L11.1333 1.25333H13.2133L9.42667 11.4267L7.09333 5.61333L4.37333 11.4533L0.426667 1.25333ZM14.0777 11L18.5044 0.800001H18.611L23.0377 11H20.7977L20.0377 9.08H16.7844L15.9844 11H14.0777ZM17.4644 7.45333H19.3977L18.451 5.06667L17.4644 7.45333ZM34.8549 11.4L27.9882 5.2L28.0282 11H26.0682V0.800001H26.1482L33.0016 7.09333L32.9616 1.18667H34.9082V11.4H34.8549ZM39.0354 11V1.18667H41.9687C42.9554 1.18667 43.7954 1.33333 44.4887 1.62667C45.1821 1.92 45.7376 2.31111 46.1554 2.8C46.5821 3.28889 46.8932 3.83556 47.0887 4.44C47.2843 5.04445 47.3821 5.65333 47.3821 6.26667C47.3821 6.99556 47.2487 7.65333 46.9821 8.24C46.7243 8.81778 46.3687 9.31556 45.9154 9.73333C45.4621 10.1422 44.9376 10.4578 44.3421 10.68C43.7465 10.8933 43.1154 11 42.4487 11H39.0354ZM40.9687 9.13333H42.1154C43.0932 9.13333 43.8799 8.88 44.4754 8.37333C45.0799 7.86667 45.3821 7.12 45.3821 6.13333C45.3821 5.49333 45.2754 4.97333 45.0621 4.57333C44.8576 4.16445 44.5999 3.84889 44.2887 3.62667C43.9865 3.40445 43.6754 3.25333 43.3554 3.17333C43.0354 3.08445 42.7643 3.04 42.5421 3.04H40.9687V9.13333ZM50.9219 1.18667H57.6152V3.05333H52.8552V5.14667H57.0685V7.01333H52.8552V9.13333H57.8019V11H50.9219V1.18667ZM64.3754 1.18667C65.611 1.18667 66.5576 1.48889 67.2154 2.09333C67.8821 2.68889 68.2154 3.48889 68.2154 4.49333C68.2154 5.05333 68.0954 5.60445 67.8554 6.14667C67.6243 6.68889 67.2287 7.12 66.6687 7.44L68.9487 11H66.6954L64.6287 7.88H63.3354V11H61.4021V1.18667H64.3754ZM64.7087 6.01333C65.0999 6.01333 65.4021 5.93333 65.6154 5.77333C65.8376 5.60445 65.9932 5.40889 66.0821 5.18667C66.171 4.95556 66.2154 4.74667 66.2154 4.56C66.2154 4.45333 66.1976 4.32 66.1621 4.16C66.1354 3.99111 66.0732 3.82222 65.9754 3.65333C65.8776 3.48445 65.7265 3.34222 65.5221 3.22667C65.3265 3.11111 65.0599 3.05333 64.7221 3.05333H63.3354V6.01333H64.7087ZM80.9294 11.4L74.0627 5.2L74.1027 11H72.1427V0.800001H72.2227L79.076 7.09333L79.036 1.18667H80.9827V11.4H80.9294Z"
					fill={theme.colors.neutral[isSatellite ? 100 : 700]}
				/>
			</svg>
		</Box>
	)
}

export default WandernLogo
