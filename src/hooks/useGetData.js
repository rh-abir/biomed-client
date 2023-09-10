import { useQuery } from "@tanstack/react-query";

const useGetData = (url) => {
  const { data: mydata = [], refetch } = useQuery({
    queryKey: ["data", url],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/${url}`);
      return res.json();
    },
  });

  return [mydata, refetch];
};

export default useGetData;
