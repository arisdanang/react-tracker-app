import { useRef } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useBudgets } from "../contexts/BudgetContext";

export default function AddExpenseModal({
	handleClose,
	show,
	defaultBudgetId,
}) {
	const { budgets, addExpense } = useBudgets();
	const descriptionRef = useRef();
	const amountRef = useRef();
	const budgetIdRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		addExpense({
			description: descriptionRef.current.value,
			amount: parseFloat(amountRef.current.value),
			budgetId: budgetIdRef.current.value,
		});

		handleClose();
	}

	console.log(defaultBudgetId);
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
						<div className="mt-3 flex justify-between items-center">
							<Dialog.Title className="font-semibold text-lg sm:text-xl ">
								New Expense
							</Dialog.Title>
							<button onClick={handleClose} className="text-4xl font-normal">
								&times;
							</button>
						</div>
						<hr />
						<form onSubmit={handleSubmit} className="my-4">
							<label
								htmlFor="description"
								className="text-sm sm:text-base mb-2"
							>
								Description
							</label>
							<input
								ref={descriptionRef}
								type="text"
								className="mb-3 sm:px-4 py-2 border-2 border-primary rounded min-w-full"
							/>
							<label htmlFor="amount" className="text-sm sm:text-base mb-2">
								Amount
							</label>
							<input
								ref={amountRef}
								type="number"
								className="mb-3 sm:px-4 py-2 border-2 border-primary rounded min-w-full"
								step="100"
							/>
							<label htmlFor="name" className="text-sm sm:text-base mb-2">
								Budget
							</label>
							<select
								defaultValue={defaultBudgetId}
								ref={budgetIdRef}
								name="categories"
								id=""
								className="mb-3 sm:px-4 py-2 border-2 border-primary rounded min-w-full"
							>
								<option id="Uncategorized">Uncategorized</option>
								{budgets.map((budget) => (
									<option key={budget.id} value={budget.id}>
										{budget.name}
									</option>
								))}
							</select>
							<div className="flex justify-end">
								<button
									type="button"
									onClick={handleClose}
									className="px-4 py-2 my-4 mr-3 text-primary border-primary border-2 rounded-lg text-sm font-normal shadow-lg cursor-pointer"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 my-4  bg-primary border-2 rounded-lg text-white font-normal text-sm shadow-lg cursor-pointer"
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
