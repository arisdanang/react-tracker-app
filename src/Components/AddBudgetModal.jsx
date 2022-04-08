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
								className="mb-3 sm:px-4 py-2 border-2 border-black rounded min-w-full"
								required
							/>
							<label htmlFor="name" className="text-sm sm:text-base">
								Max Expense
							</label>
							<input
								ref={maxRef}
								type="number"
								className="mb-3 sm:px-4 py-2 border-2 border-black rounded min-w-full"
								required
								step={100}
							/>
							<div className="flex justify-end">
								<button
									onClick={handleClose}
									type="button"
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
									<span className="relative text-black group-active:text-black">
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
