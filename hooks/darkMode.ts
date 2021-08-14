import { useEffect, useState } from "react";

enum Theme {
	dark ='dark',
	light = 'light'
}
const useDarkMode = (): [string, (value: Theme) => void] => {
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? localStorage.theme : "dark"
	);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	return [colorTheme, setTheme];
}

export default useDarkMode;