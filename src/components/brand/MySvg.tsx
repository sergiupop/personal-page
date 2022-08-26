import "./MySvg.css";

const MySvg = () => {
	return (
	<svg viewBox="0 0 960 300">
		<symbol id="s-text">
			<text text-anchor="middle" x="50%" y="80%">SP.</text>
			<text text-anchor="middle" x="52%" y="80%">SP.</text>
		</symbol>

		<g className="g-ants">
			<use xlinkHref="#s-text" className="text-copy"></use>
			<use xlinkHref="#s-text" className="text-copy"></use>
			<use xlinkHref="#s-text" className="text-copy"></use>
			<use xlinkHref="#s-text" className="text-copy"></use>
			<use xlinkHref="#s-text" className="text-copy"></use>
		</g>
	</svg>
	);
};

export default MySvg;
