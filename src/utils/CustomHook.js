import { useEffect } from "react";


export function useDetectClickOutside(ref, callback) {
    useEffect(() => {
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
