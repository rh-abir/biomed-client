import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useMessageShow from "../../../../hooks/useMessageShow";
import MessageSend from "../../MessageSend/MessageSend";

const Demo = () => {
  const { user, setGetid } = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {
    setGetid(id);
  }, [id, setGetid]);
  // const data = useLoaderData();

  // console.log(data);

  //  const { data: allmessage = [], refetch } = useQuery({
  //     queryKey: ["appliedtask", id],
  //     queryFn: async () => {
  //       const res = await fetch(`https://biomed-server.vercel.app/getAppliedById/${id}`);
  //       return res.json();
  //     },
  //   });

  const [allmessage, refetch] = useMessageShow(id);

  console.log(allmessage);
  // // console.log(id);

  const messagess = allmessage?.appliedjobdata?.message;
  // console.log(data.appliedjobdata.message);

  // const messagess = allmessage?.appliedjobdata?.message;

  return (
    <div className="flex flex-col h-full">
      <div className="h-[700px] overflow-y-scroll">
        {messagess?.map((msg, ind) => (
          <>
            <div>
              <h2 className="bg-gray-400 my-5 px-4 py-2 mx-6 border rounded-2xl text-sm inline-block">
                {msg.message}
              </h2>
            </div>
          </>
        ))}
      </div>
      <div className="mt-auto">
        <MessageSend />
      </div>
    </div>
  );
};

export default Demo;
