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
										className="ml-2 relative px-4 py-2 group"
									>
										<span className="absolute inset-0 w-full h-full  transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
										<span className="absolute inset-0 w-full h-full bg-rose border-2 border-black group-active:bg-rose"></span>
										<span className="relative text-black group-active:text-black">
											Delete
										</span>
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
										className="ml-2 relative px-3 py-2 group"
									>
										<span className="absolute inset-0 w-full h-full  transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
										<span className="absolute inset-0 w-full h-full bg-rose border-2 border-black group-active:bg-rose"></span>
										<span className="relative text-black group-active:text-black">
											&times;
										</span>
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
