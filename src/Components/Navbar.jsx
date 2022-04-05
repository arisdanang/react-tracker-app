import React from "react";

export default function Navbar({
	handleAddBudgetModal,
	handleAddExpenseModal,
}) {
	return (
		<div className="flex flex-wrap justify-between mb-6">
			<h1 className="text-2xl font-normal border-b-primary border-b-2 mt-4 mr-10">
				Tracker App
			</h1>
			<div className="flex flex-wrap justify-center sm:justify-between mt-4">
				<button
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
				</button>
			</div>
		</div>
	);
}
