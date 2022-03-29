import { useEffect, useState } from "react";

export default function UseLocalStorage(key, defaultValue) {
	const [value, setValue] = useState(() => {
		const jsonItem = localStorage.getItem(key);

		if (jsonItem !== null) return JSON.parse(jsonItem);

		if (typeof defaultValue === "function") {
			return defaultValue();
		} else {
			return defaultValue;
		}
	});
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

/*
init context
create method for consume context


create custom hooks for using local storage (key,defaultValue)
init value using state hook

initState => () => get item in localStorage
if item not equal null return parse item

if type defaultValue === func return defaultValue()
else return defaultValue

init lifecycle hooks to set item in localstorage(key,stringify(value))

return [value,setValue]
 */
