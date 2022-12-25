import Footer from "./Footer"

// import "./stylesheets/style.css"

export default () => (
	<>
		<header className="bg-hero">
			<div className="container">
				<img src="/images/logo/logo.svg" className="center-logo" />
				<h1 className="tagline">Plan your trail accommodation</h1>
				<p className="description">
					An easy way to find and book mountain huts and campsites on popular
					hiking trails.
				</p>
				<form
					id="form-request-access"
					className="hide-submit"
					// method="POST"
					// action="/"
				>
					{/* csrf_token */}
					<input
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
					<label className="btn-send">
						<input type="submit" />
						<i className="ti ti-send"></i>
					</label>
				</form>
				{/* {% if inputMessage == "success" %}
        <p className="input-message">
          🎉 Thanks for your interest in becoming a founding user!
        </p>
      {% elif inputMessage == "userExists" %}
        <p className="input-message">👋 We already have this email on our list!</p>
      {% elif inputMessage == "error" %}
        <p className="input-message">⚠️ Oops something went wrong, please try again!</p>
      {% endif %} */}
				<i className="ti ti-arrow-narrow-down"></i>
			</div>
		</header>

		<main>
			{/* STEP 1 */}
			<section className="bg-gray">
				<div className="container wrapper-step">
					<div className="text">
						<p className="number">1</p>
						<div>
							<h2>Explore your trail</h2>
							<p>
								Explore mountain huts and campsites along on your trail. See the
								trail's stages, water sources, and resupply points.
							</p>
							<p className="request-access">Request access</p>
						</div>
					</div>
					<div className="step-1-image">
						<img
							src="/images/step/1.svg"
							alt="Preview of adding an accommodation to your itinerary and checking availability"
						/>
					</div>
				</div>
			</section>
			{/* STEP 2 */}
			<section className="bg-white">
				<div className="container wrapper-step">
					<img
						src="/images/step/2.svg"
						alt="Preview of adding an accommodation to your itinerary and checking availability"
					/>
					<div className="text">
						<p className="number">2</p>
						<div>
							<h2>Build your itinerary</h2>
							<p>
								Check availability and add the campsite or hut you'd like to
								stay at to your itinerary. See your trip unfold on the map.
							</p>
							<p className="request-access">Request access</p>
						</div>
					</div>
				</div>
			</section>
			{/* STEP 3 */}
			<section className="bg-gray">
				<div className="container wrapper-step">
					<div className="text">
						<p className="number">3</p>
						<div>
							<h2>Confirm and book</h2>
							<p>
								Book and pay for all the accommodation in your itinerary in one
								go without leaving the site.
							</p>
							<p className="request-access">Request access</p>
						</div>
					</div>
					<img
						src="/images/step/3.svg"
						alt="Preview of adding an accommodation to your itinerary and checking availability"
					/>
				</div>
			</section>
			{/* FEATURES */}
			<section className="bg-dark">
				<div className="container">
					<div className="features">
						<div className="feature">
							<img src="/images/features/bookings.svg" alt="Bookings icon" />
							<p className="title">Manage Bookings</p>
							<p className="description">
								Message the host or add, amend, and cancel any bookings in your
								itinerary.
							</p>
						</div>
						<div className="feature">
							<img src="/images/features/reviews.svg" alt="Reviews icon" />
							<p className="title">Check Hikers Reviews</p>
							<p className="description">
								Read previous experiences at campsites and mountain huts from
								hikers.
							</p>
						</div>
						<div className="feature">
							<img src="/images/features/export.svg" alt="Export icon" />
							<p className="title">Export Itinerary</p>
							<p className="description">
								Export your itinerary's waypoints and route for use on any
								offline map app.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer />
	</>
)
