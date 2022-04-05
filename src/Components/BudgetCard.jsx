import React from "react";
import { currencyFormatter } from "../utils";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({
	name,
	amount,
	max,
	gray,
	buttons,
	progressBar,
	onAddExpenseClick,
	onViewExpensesClick,
}) {
	const percent = (amount / max) * 100;

	return (
		<div
			className={`mt-6 mr-6 border-2 rounded-lg border-gray py-4 px-5 shadow-lg ${
				gray && "bg-slate-100"
			}`}
		>
			<div className="flex flex-wrap justify-between">
				<h1 className="font-normal text-2xl mr-3">{name}</h1>
				<h1 className="font-normal text-2xl">
					{currencyFormatter.format(amount)}
					{max && (
						<span className="text-gray-500">
							/{currencyFormatter.format(max)}
						</span>
					)}
				</h1>
			</div>
			{progressBar && (
				<ProgressBar width={percent} variant={getProgressBar(amount, max)} />
			)}
			{buttons && (
				<div className="flex justify-end flex-row">
					<button
						onClick={onAddExpenseClick}
						className="py-2 px-4 border-2 border-primary rounded-lg text-primary hover:text-white hover:bg-primary mr-2 sm:mr-3 font-normal text-sm sm:text-base"
					>
						Add Expense
					</button>
					<button
						onClick={onViewExpensesClick}
						className="py-2 px-4 text-dark rounded-lg border-dark hover:text-white hover:bg-dark border-2 font-normal text-sm sm:text-base"
					>
						View Expenses
					</button>
				</div>
			)}
		</div>
	);
}

function getProgressBar(start, max) {
	let ratio = start / max;

	if (ratio < 0.5) return "bg-sky-500";
	if (ratio < 0.75) return "bg-yellow-500";

	return "bg-red-500";
}
