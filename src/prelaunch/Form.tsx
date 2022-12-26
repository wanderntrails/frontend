import { IconSend } from "@tabler/icons"

import { Box } from "../design-system/components"

const Form = () => (
	<Box
		as="form"
		id="form-request-access"
		// method="POST"
		// action="/"
	>
		{/* csrf_token */}
		<Box
			as="input"
			type="email"
			name="email"
			autoComplete="off"
			placeholder="Email me when it's ready"
			maxLength={100}
			required
		/>
		{/* <script>
          document.querySelector('#id_email').classNames =
            "{% if inputMessage in 'error,userExists' %}shake{% endif %}"
        </script> */}
		<Box as="button" type="submit" className="btn-send">
			<IconSend color="white" size={24} />
		</Box>
	</Box>
	/* {% if inputMessage == "success" %}
        <p className="input-message">
          🎉 Thanks for your interest in becoming a founding user!
        </p>
      {% elif inputMessage == "userExists" %}
        <p className="input-message">👋 We already have this email on our list!</p>
      {% elif inputMessage == "error" %}
        <p className="input-message">⚠️ Oops something went wrong, please try again!</p>
      {% endif %} */
)

export default Form
