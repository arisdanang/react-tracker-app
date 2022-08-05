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
								className="mb-3 sm:px-4 py-2 border-2 border-black rounded min-w-full"
								required
							/>
							<label htmlFor="amount" className="text-sm sm:text-base mb-2">
								Amount
							</label>
							<input
								ref={amountRef}
								type="number"
								className="mb-3 sm:px-4 py-2 border-2 border-black rounded min-w-full"
								step="100"
								required
							/>
							<label htmlFor="name" className="text-sm sm:text-base mb-2">
								Budget
							</label>
							<select
								defaultValue={defaultBudgetId}
								ref={budgetIdRef}
								name="categories"
								id=""
								className="mb-3 sm:px-4 py-2 border-2 border-black rounded min-w-full"
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
									className="relative px-4 py-2 group mr-2"
								>
									<span className="absolute inset-0 w-full h-full  transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
									<span className="absolute inset-0 w-full h-full bg-rose border-2 border-black group-active:bg-rose"></span>
									<span className="relative text-black group-active:text-black">
										Cancel
									</span>
								</button>
								<button type="submit" className="relative px-4 py-2 group">
									<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-active:-translate-x-0 group-active:-translate-y-0"></span>
									<span className="absolute inset-0 w-full h-full bg-green border-2 border-black group-active:bg-green"></span>
									<span className="relative text-black group-active:text-white">
										Add
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
