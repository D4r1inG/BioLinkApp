import React from "react";
import { useLocation } from "react-router-dom";


export function useDetectClickOutside(ref, callback) {
    React.useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && ref.current === e.target) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}

export function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}