import React, { useEffect } from "react";

export const useScrollTriggerClassName = (ref: React.RefObject<any>, cssClassNames: string| string[] = []): void => {
	useEffect(() => {
		const elementPosition = ref?.current.getBoundingClientRect().top ?? 0

		const trackingScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight
			if (elementPosition < scrollPosition) {
				if(Array.isArray(cssClassNames)) {
					cssClassNames?.forEach(className => {
						ref.current?.classList.add(className)
					})
				} else {
					ref.current?.classList.add(cssClassNames)
				}
			} else {
				if(Array.isArray(cssClassNames)) {
					cssClassNames?.forEach(className => {
						ref.current?.classList.remove(className)
					})
				} else {
					ref.current?.classList.add(cssClassNames)
				}
			}
		}
		document.addEventListener('scroll', trackingScroll)
		return () => {
			document.removeEventListener('scroll', trackingScroll)
		};
	}, [cssClassNames, ref]);
}


