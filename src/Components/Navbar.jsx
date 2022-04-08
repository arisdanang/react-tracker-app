import React from "react";

export default function Navbar({
	handleAddBudgetModal,
	handleAddExpenseModal,
}) {
	return (
		<div className="flex flex-wrap justify-between mb-6">
			<h1 className="text-2xl font-normal border-b-black border-b-2 mt-4 mr-10">
				Tracker App
			</h1>
			<div className="flex flex-wrap justify-center sm:justify-between mt-4">
				{/* <button
					className="px-4 py-2 mr-3 text-white bg-primary rounded-lg text-sm sm:text-base font-normal shadow-lg cursor-pointer"
					onClick={handleAddBudgetModal}
				>
					Add Budget
				</button>
				<button
					className="px-4 py-2 rounded-lg text-sm sm:text-base text-primary border-primary font-normal border-2 shadow-lg cursor-pointer"
					onClick={handleAddExpenseModal}
				>
					Add Expense
				</button> */}
				<button
					className="relative px-4 py-2 group mr-2"
					onClick={handleAddBudgetModal}
				>
					<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
					<span className="absolute inset-0 w-full h-full bg-orange border-2 border-black group-active:bg-orange"></span>
					<span className="relative text-black group-active:text-black">
						Add Budget
					</span>
				</button>
				<button
					className="relative px-4 py-2 group"
					onClick={handleAddExpenseModal}
				>
					<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
					<span className="absolute inset-0 w-full h-full bg-dark-blue border-2 border-black group-active:bg-dark-blue"></span>
					<span className="relative text-black group-active:text-black">
						Add Expense
					</span>
				</button>
				{/* <button class="relative px-6 py-2 gsroup">
					<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
					<span class="absolute inset-0 w-full h-full bg-[#FAAE2B] border-2 border-black group-active:bg-[#FAAE2B]"></span>
					<span class="relative text-black group-active:text-white">tes</span>
				</button> */}
			</div>
		</div>
	);
}
