import { useBudgets } from "../contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudget() {
	const { budgets, expenses } = useBudgets();
	const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
	const max = budgets.reduce((total, budget) => total + budget.max, 0);
	if (max === 0) return null;
	console.log(typeof max);

	return <BudgetCard name="total" amount={amount} max={max} gray progressBar />;
}
