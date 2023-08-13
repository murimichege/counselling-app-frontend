import { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";

function VerificationDoc(props) {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		let instance;

		PSPDFKit.load({
			container,
			document: props.document,
			baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
		}).then((loadedInstance) => {
			instance = loadedInstance;
		});

		return () => instance && instance.unload(container);
	}, [props.document]);

	return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}

export default VerificationDoc;
