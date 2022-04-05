import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BudgetCard from "./Components/BudgetCard";
import TotalBudget from "./Components/TotalBudget";
import AddBudgetModal from "./Components/AddBudgetModal";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetContext";
import AddExpenseModal from "./Components/AddExpenseModal";
import UncategorizedBudgetCard from "./Components/UncategorizedBudgetCard";
import ViewExpensesModal from "./Components/ViewExpensesModal";

function App() {
	const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const [showViewExpensesModal, setShowViewExpensesModal] = useState(false);
	const [addExpenseBudgetId, setAddExpenseBudgetId] = useState();
	const [viewExpenesModalBudgetId, setViewExpensesModalBudgetId] = useState();
	const { budgets, getBudgetExpenses } = useBudgets();
	console.log(budgets);

	function openAddExpenseModal(budgetId) {
		setShowAddExpenseModal(true);
		setAddExpenseBudgetId(budgetId);
	}

	function openViewExpensesModal(budgetId) {
		setViewExpensesModalBudgetId(budgetId);
		setShowViewExpensesModal(true);
	}

	return (
		<>
			<div className="container mx-auto py-2 px-4 font-poppins">
				<Navbar
					handleAddBudgetModal={() => setShowAddBudgetModal(true)}
					handleAddExpenseModal={() => setShowAddExpenseModal(true)}
				/>
				<div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
					{budgets.map((budget) => {
						const amount = getBudgetExpenses(budget.id).reduce(
							(total, expense) => total + expense.amount,
							0
						);
						console.log(budget);
						return (
							<BudgetCard
								name={budget.name}
								amount={amount}
								max={budget.max}
								key={budget.id}
								buttons
								progressBar
								onAddExpenseClick={() => openAddExpenseModal(budget.id)}
								onViewExpensesClick={() => openViewExpensesModal(budget.id)}
							/>
						);
					})}
					<UncategorizedBudgetCard
						onAddExpenseClick={() => openAddExpenseModal()}
						onViewExpensesClick={() =>
							openViewExpensesModal(UNCATEGORIZED_BUDGET_ID)
						}
					/>
					<TotalBudget />
				</div>
			</div>
			<AddBudgetModal
				show={showAddBudgetModal}
				handleClose={() => setShowAddBudgetModal(false)}
			/>
			<AddExpenseModal
				defaultBudgetId={addExpenseBudgetId}
				show={showAddExpenseModal}
				handleClose={() => setShowAddExpenseModal(false)}
			/>
			<ViewExpensesModal
				budgetId={viewExpenesModalBudgetId}
				show={showViewExpensesModal}
				handleClose={() => setShowViewExpensesModal(false)}
			/>
		</>
	);
}

export default App;
