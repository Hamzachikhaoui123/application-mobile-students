import react from "react";
export default function usePrevious(value) {
	const [first, setfirst] = react.useState(value);
	react.useEffect(() => {
		setfirst(value);
	});
	return first;
}
