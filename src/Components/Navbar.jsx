import React from "react";

export default function Navbar({
	handleAddBudgetModal,
	handleAddExpenseModal,
}) {
	return (
		<div className="flex flex-wrap justify-between mb-6">
			<h1 className="text-2xl font-normal border-b-sky-400 border-b-2 mt-4 mr-10">
				Tracker App
			</h1>
			<div className="flex flex-wrap justify-center sm:justify-between  mt-4">
				<button
					className="px-4 py-2 mr-3 bg-sky-400 rounded-lg text-sm sm:text-base text-white font-normal shadow-lg cursor-pointer"
					onClick={handleAddBudgetModal}
				>
					Add Budget
				</button>
				<button
					className="px-4 py-2 rounded-lg text-sm sm:text-base text-sky-400 border-sky-400 font-normal border-2 shadow-lg cursor-pointer"
					onClick={handleAddExpenseModal}
				>
					Add Expense
				</button>
			</div>
		</div>
	);
}
