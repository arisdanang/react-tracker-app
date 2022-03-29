import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/BudgetContext";
import { Transition, Dialog } from "@headlessui/react";
import { currencyFormatter } from "../utils";

export default function ViewExpensesModal({ budgetId, handleClose, show }) {
	const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
		useBudgets();
	const expenses = getBudgetExpenses(budgetId);
	const budget =
		UNCATEGORIZED_BUDGET_ID === budgetId
			? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
			: budgets.find((budget) => budget.id === budgetId);
	console.log(budget);
	return (
		<Transition
			show={show}
			enter="transition duration-100 ease-out"
			enterFrom="transform scale-95 opacity-100"
			enterTo="transform scale-100 opacity-100"
			leave="transition duration-75 ease-out"
			leaveFrom="transform scale-100 opacity-100"
			leaveTo="transform scale-95 opacity-0"
		>
			<Dialog
				open={show}
				onClose={handleClose}
				className="mt-5 fixed z-10 inset-0 overflow-y-auto font-poppins"
			>
				<div className="flex flex-wrap items-center justify-center">
					<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
					<div className="relative bg-white rounded sm:mx-auto max-w-lg px-10 mx-2 h-full">
						<div className="my-3 flex justify-between items-center">
							<div className="flex justify-between items-center">
								<Dialog.Title className="font-semibold text-lg sm:text-xl ">
									New Expense - {budget?.name}
								</Dialog.Title>
								{budgetId !== UNCATEGORIZED_BUDGET_ID && (
									<button
										onClick={() => {
											deleteBudget(budget);
											handleClose();
										}}
										className="px-2 py-1.5 mx-3  bg-white border-2 border-red-600 rounded-lg text-red-600 hover:text-white hover:bg-red-600 font-normal text-base shadow-lg cursor-pointer"
									>
										Delete
									</button>
								)}
							</div>
							<button
								onClick={handleClose}
								className="ml-4 text-4xl font-normal text-gray-500 hover:text-gray-700"
							>
								&times;
							</button>
						</div>
						<hr />
						{expenses.map((expense) => (
							<div
								className="flex justify-between items-center py-3"
								key={expense.id}
							>
								<h1 className="text-xl">{expense.description}</h1>
								<div className="flex justify-center items-center">
									<h1 className="text-xl">
										{currencyFormatter.format(expense.amount)}
									</h1>
									<button
										onClick={() => deleteExpense(expense)}
										className=" ml-4 px-1.5 text-xl font-normal text-red-500 border-2 rounded-lg border-red-500 hover:bg-red-500 hover:text-white"
									>
										&times;
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
