import { useState, useEffect } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	// Automatically collapse/expand based on screen size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsCollapsed(true); // Collapse on small screens
			} else {
				setIsCollapsed(false); // Expand on larger screens
			}
		};

		// Initial check
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			className={`border-r border-slate-500 p-4 flex flex-col h-screen ${
				isCollapsed ? "w-16" : "w-full md:w-64"
			} transition-all duration-300`}
		>
			{/* Collapse/Expand Button */}
			<button
				className="btn btn-sm btn-ghost mb-4"
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed ? "➔" : "⬅"}
			</button>

			{/* Conditionally Render Full or Collapsed View */}
			{!isCollapsed && (
				<>
					<SearchInput />
					<div className="divider px-3"></div>
					<div className="flex-1 overflow-y-auto">
						<Conversations />
					</div>
					<div className="mt-auto">
						<LogoutButton />
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
