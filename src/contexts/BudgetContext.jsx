import React, { useContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";
import { v4 as uuidV4 } from "uuid";

const BudgetsContext = React.createContext();
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export function useBudgets() {
	return useContext(BudgetsContext);
}

export function BudgetsProvider({ children }) {
	const [budgets, setBudgets] = UseLocalStorage("budgets", []);
	const [expenses, setExpenses] = UseLocalStorage("expenses", []);

	function getBudgetExpenses(budgetId) {
		return expenses.filter((expense) => expense.budgetId === budgetId);
	}

	function addExpense({ description, amount, budgetId }) {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
		});
	}

	function addBudget({ name, max }) {
		setBudgets((prevBudgets) => {
			if (prevBudgets.find((budget) => budget.name === name)) {
				return prevBudgets;
			}
			return [...prevBudgets, { id: uuidV4(), name, max }];
		});
	}

	function deleteBudget({ id }) {
		setExpenses((prevExpenses) => {
			return prevExpenses.map((expense) => {
				if (expense.budgetId !== id) return expense;
				return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
			});
		});

		setBudgets((prevBudgets) => {
			return prevBudgets.filter((budget) => budget.id !== id);
		});
	}

	function deleteExpense({ id }) {
		setExpenses((prevExpenses) => {
			return prevExpenses.filter((expense) => expense.id !== id);
		});
	}

	return (
		<BudgetsContext.Provider
			value={{
				budgets,
				expenses,
				getBudgetExpenses,
				addExpense,
				addBudget,
				deleteBudget,
				deleteExpense,
			}}
		>
			{children}
		</BudgetsContext.Provider>
	);
}

/*
init context
method to consume context
export method BudgetsProvider
  init budgets and expenses with custom hooks
  init method to get budget expenses(id)
    return filter
  init method to add expense(desc,amount,budgetid)
    set expense
    return {
      id,
      desc,
      amount,
      budgetid
    }

  init method to add budget(name,max)
    set budget
      if budget name is exists
        return budget
      return {id,name,max}

  init method to delete budget(id)
    !set expense
      return map from expense
        if budgetid not equal return expense
      return {expense}
    set budget
      return filter budget id not equal id

return context.provider > childern
value={{  }}
*/
