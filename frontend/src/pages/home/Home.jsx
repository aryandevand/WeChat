import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { Menu } from "lucide-react"; // For hamburger icon

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			{/* Sidebar */}
			<div
				className={`fixed md:static top-0 left-0 h-full bg-white border-r border-slate-500 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out w-64 z-50`}
			>
				<Sidebar />
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col w-full">
				{/* Header with Hamburger Menu (Mobile) */}
				<div className="md:hidden p-4 bg-white border-b border-slate-500 flex items-center">
					<button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
						<Menu size={28} />
					</button>
					<h1 className="ml-4 text-xl font-semibold">Messages</h1>
				</div>

				{/* Message Container */}
				<div className="flex-1 overflow-auto">
					<MessageContainer />
				</div>
			</div>

			{/* Overlay when Sidebar is open on Mobile */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black opacity-40 md:hidden z-40"
					onClick={() => setIsSidebarOpen(false)}
				></div>
			)}
		</div>
	);
};

export default Home;
