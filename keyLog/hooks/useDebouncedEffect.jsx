import { useCallback,useEffect} from "react";
export const useDebouncedEffect = (func,delay, deps) => {
    const callback = useCallback(func,deps)
    useEffect(()=>{
      const timer = setTimeout(()=>{
        callback()
      },delay);
    return () => {
      clearTimeout(timer);
    }
    },[callback,delay])
  }