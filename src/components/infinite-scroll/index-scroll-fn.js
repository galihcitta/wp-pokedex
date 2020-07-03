import { useEffect, useState } from "react";

const useIntersection = (ref, last, rootMargin = 0) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection, {
            root: null,
            rootMargin: `0px 0px ${rootMargin}px 0px`,
        });
        const refLast = last.current;
        if (refLast) {
            observer.observe(refLast);
        }
        return () => {
            observer.unobserve(refLast);
        };
    }, [last, rootMargin]);

    const onIntersection = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIntersecting(entry.isIntersecting);
            }
        });
    };

    return [isIntersecting, setIntersecting];
};

export default useIntersection;
