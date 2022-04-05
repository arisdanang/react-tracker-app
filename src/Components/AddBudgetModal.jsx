import { useRef, useState } from "react";
import { useBudgets } from "../contexts/BudgetContext";
import { Dialog, Transition } from "@headlessui/react";

export default function AddBudgetModal({ show, handleClose }) {
	const nameRef = useRef();
	const maxRef = useRef();
	const { addBudget } = useBudgets();

	function handleSubmit(e) {
		e.preventDefault();

		addBudget({
			name: nameRef.current.value,
			max: parseFloat(maxRef.current.value),
		});

		handleClose();
	}

	return (
		<Transition
			show={show}
			enter="transition duration-100 ease-out"
			enterFrom="transform scale-95 opacity-0"
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
					<div className="relative bg-white rounded sm:mx-auto max-w-lg px-5 mx-2 h-full">
						<Dialog.Title className="font-semibold text-lg sm:text-xl mt-5">
							New Budget
						</Dialog.Title>
						<hr />
						<form onSubmit={handleSubmit} className="my-4">
							<label htmlFor="name" className="text-sm sm:text-base mb-2">
								Name
							</label>
							<input
								ref={nameRef}
								type="text"
								className="mb-3 sm:px-4 py-2 border-2 border-primary rounded min-w-full"
							/>
							<label htmlFor="name" className="text-sm sm:text-base">
								Max Expense
							</label>
							<input
								ref={maxRef}
								type="number"
								className="mb-3 sm:px-4 py-2 border-2 border-primary rounded min-w-full"
								step={100}
							/>
							<div className="flex justify-end">
								<button
									onClick={handleClose}
									type="button"
									className="my-4 px-4 py-2 mr-3 text-primary border-primary border-2 rounded-lg text-sm sm:text-base font-normal shadow-lg cursor-pointer"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="my-4 px-4 py-2 bg-primary rounded-lg text-sm sm:text-base text-white font-normal shadow-lg cursor-pointer"
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
