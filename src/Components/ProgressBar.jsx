export default function ProgressBar({ width, variant }) {
	const widthBar = width < 100 ? { width: `${width}%` } : { width: "100%" };
	return (
		<div className="my-3 w-full rounded-lg bg-gray-200 h-3">
			<div
				style={widthBar}
				className={`rounded-lg ${variant} h-3`}
				// className="rounded-lg  h-3"
			></div>
		</div>
	);
}
