import Timer from "./Timer";
import Pet from "./Pet";
import "../css/App.css";
import { useState } from "react";

const App = () => {
	return (
		<div>
			<div
				className="container"
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="col-sm-12">
					<p className="text-light text-center">Start feeding your pet!</p>
					<br />
					<Pet />
					<br />
					<Timer />
				</div>
			</div>
			<div className="row fixed-bottom">
				<div
					className="col-sm-12 btn-group"
					role="group"
					aria-label="Basic example"
				>
					<button type="button" className="btn btn-secondary w-100 navigation">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="currentColor"
							className="bi bi-alarm"
							viewBox="0 0 16 16"
						>
							<path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
							<path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
						</svg>
					</button>
					<button
						type="button"
						className="btn btn-secondary w-100 navigation navigationDivider"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="currentColor"
							className="bi bi-bar-chart-line"
							viewBox="0 0 16 16"
						>
							<path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
