import { useQuery } from "@tanstack/react-query";

const useMessageShow = (id) => {
  const { data: allmessage = [], refetch } = useQuery({
    queryKey: ["appliedtask", id],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/getAppliedById/${id}`);
      return res.json();
    },
  });

  return [allmessage, refetch];
};

export default useMessageShow;
