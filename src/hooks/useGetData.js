  import { useQuery } from "@tanstack/react-query";

const useGetData = (url) => {
  const { data: mydata = [], refetch } = useQuery({
    queryKey: ["data", url],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${url}`);
      return res.json();
    },
  });

  return [mydata, refetch];
};

export default useGetData;
