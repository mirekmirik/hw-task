import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useUrlParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location.search]);

  const updateParams = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      navigate(`?${newParams.toString()}`);
    },
    [navigate, searchParams]
  );

  return { searchParams, updateParams };
};

export default useUrlParams;
