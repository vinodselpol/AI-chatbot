import {
	SunIcon,
	BoltIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import NewChat from "../components/NewChat";

function Homepage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-white">
			<div className="mb-20">
				<h1 className=" justify-center text-5xl font-bold mb-4 ">
					AI Chat
				</h1>
				<p className=" text-4xl justify-center">Your Personal Assistant</p>
			</div>
			<div className="mb-8 sm:hidden">
				<NewChat />
			</div>
			<div className="flex space-x-2 text-center mx-4">
				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						<SunIcon className="h-8 w-8" />
						<h2>Examples</h2>
					</div>
					<div className="space-y-2">
						<p className="infoText">
							Explain quantum computing in simple terms
						</p>
						<p className="infoText">
							What is the difference between a dog and a cat?
						</p>
						<p className="infoText">
							How do I make an HTTP request in Javascript?
						</p>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						<BoltIcon className="h-8 w-8" />
						<h2>Capabilities</h2>
					</div>
					<div className="space-y-2">
						<p className="infoText">
							Remembers what user said earlier in the conversation
						</p>
						<p className="infoText">
							Allows user to provide follow-up corrections
						</p>
						<p className="infoText">
							Trained to decline inappropriate requests
						</p>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						<ExclamationTriangleIcon className="h-8 w-8" />
						<h2>Limitations</h2>
					</div>
					<div className="space-y-2">
						<p className="infoText">
							May occasionally generate incorrect information
						</p>
						<p className="infoText">
							May occasionally produce harmful instructions or
							biased content
						</p>
						<p className="infoText">
							Limited knowledge of world and events after 2021
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
