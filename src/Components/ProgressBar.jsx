export default function ProgressBar({ width, variant }) {
	const widthBar = width < 100 ? { width: `${width}%` } : { width: "100%" };
	const border = width > 0 && "border border-black";
	return (
		<div className="my-3 w-full bg-gray-200 h-3">
			<div
				style={widthBar}
				className={`${border}  ${variant} h-3`}
				// className="rounded-lg  h-3"v
			></div>
		</div>
	);
}
