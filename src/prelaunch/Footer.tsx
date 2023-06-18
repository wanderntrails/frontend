import { Box } from "../design-system/components"

const Footer = () => (
	<Box as="footer" bg="neutral.800">
		<div className="team">
			<a href="https://www.linkedin.com/in/seyhankhan/" className="member">
				<img src="/images/seyhan.png" alt="Seyhan Khan" className="avatar" />
				<div>
					<p>Co-founder</p>
					<p>Seyhan Van Khan</p>
				</div>
			</a>
			<a href="https://www.linkedin.com/in/alizehkhan/" className="member">
				<img src="/images/alizeh.png" alt="Alizeh Khan" className="avatar" />
				<div>
					<p>Co-founder</p>
					<p>Alizeh Khan</p>
				</div>
			</a>
		</div>
		<a href="/">
			<img src="/images/logo/logo-footer.svg" alt="Wandern logo" />
		</a>
		<a href="/privacy">Privacy Policy</a>
		{/* <address>hello@wanderntrails.com</address> */}
	</Box>
)
export default Footer
