  import { useQuery } from "@tanstack/react-query";

const useGetData = (url) => {
  const { data: mydata = [], refetch } = useQuery({
    queryKey: ["data", url],
    queryFn: async () => {
      const res = await fetch(`https://biomed-server.vercel.app/${url}`);
      return res.json();
    },
  });

  return [mydata, refetch];
};

export default useGetData;
