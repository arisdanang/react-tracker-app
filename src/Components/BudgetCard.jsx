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
			className={`mt-6 sm:mr-6 border-2 rounded-md border-black py-4 px-5 shadow-[8px_8px_0px_0px_rgb(34,34,34)] ${
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
						className="relative px-4 py-2 group mr-2"
					>
						<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
						<span className="absolute inset-0 w-full h-full bg-dark-blue border-2 border-black group-active:bg-dark-blue"></span>
						<span className="relative text-black group-active:text-black">
							Add Expense
						</span>
					</button>
					<button
						onClick={onViewExpensesClick}
						className="relative px-4 py-2 group"
					>
						<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
						<span className="absolute inset-0 w-full h-full bg-green border-2 border-black group-active:bg-green"></span>
						<span className="relative text-black group-active:text-black">
							View Expenses
						</span>
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
