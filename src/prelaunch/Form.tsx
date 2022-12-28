import { IconSend } from "@tabler/icons"
import Cookies from "js-cookie"
import {
	MutableRefObject,
	SyntheticEvent,
	useEffect,
	useRef,
	useState,
} from "react"

import { BASE_URL } from "../MapContext"
import { Box } from "../design-system/components"

const Form = ({
	inputRef,
}: {
	inputRef: MutableRefObject<HTMLInputElement | null>
}) => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [inputError, setInputError] = useState(false)
	const csrfToken = Cookies.get("csrftoken") ?? ""

	/* Set CSRF Token */
	useEffect(() => {
		// check if csrf token exists first?
		fetch(`${BASE_URL}/csrf`, { credentials: "include" })
			.then(response => response.json())
			.then(data => Cookies.set("csrftoken", data.csrfToken))
	}, [])

	/* Submit email for access to Wandern MVP */
	const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		fetch(`${BASE_URL}/request-access`, {
			method: "POST",
			body: new FormData(formRef.current ?? undefined),
			// headers: { "X-CSRFToken": csrfToken },
			// credentials: "include",
		}).then(({ ok }: Response) =>
			ok ? window.location.assign("/map") : setInputError(true)
		)
	}

	return (
		<>
			<Box as="form" id="form-request-access" ref={formRef} onSubmit={onSubmit}>
				<input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
				<Box
					as="input"
					type="email"
					name="email"
					autoComplete="off"
					placeholder="Email me when it's ready"
					maxLength={100}
					className={inputError ? "shake" : ""}
					ref={inputRef}
					required
				/>
				<Box as="button" type="submit" className="btn-send">
					<IconSend color="white" size={24} />
				</Box>
			</Box>

			{inputError && (
				<p className="input-message">
					⚠️ Oops something went wrong, please try again!
				</p>
			)}
		</>
	)
}

export default Form
