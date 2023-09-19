import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

import { useAxiosSecure } from "../../../components/hook/useAxiosSecure";
import NoUserClient from "../../../components/Shared/NoUserClient/NoUserClient";
import { useQuery } from "@tanstack/react-query";

// Function to format a date string as "YYYY-MM-DD"
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account"];

const TABLE_ROWS = [
  {
    img: "/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const PaymentShow = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: paidUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["paidUsers"],
    queryFn: async () => {
      const res = await axiosSecure(`/payment`);
      return res.data;
    },
  });


  console.log(paidUsers)
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
      {" "}
      {/* Title Section */}
      <DashboardTitle title={"Paid user"} slogan={"Ready to jump back in?"} />
      {paidUsers.length === 0 ? (
        <NoUserClient text={"No paid users here"} />
      ) : (
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Recent Transactions
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  These are details about the last transactions
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  (
                    {
                      image,
                      name,
                      amount,
                      date,
                      status,
                      account,
                      transactionId,
                      accountNumber,
                      expiry,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={image}
                              alt={name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {amount}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={status}
                              color={
                                status === "paid"
                                  ? "green"
                                  : status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                              <Avatar
                                src={
                                  account === "visa"
                                    ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                    : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                }
                                size="sm"
                                alt={account}
                                variant="square"
                                className="h-full w-full object-contain p-1"
                              />
                            </div>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal capitalize"
                              >
                                {account.split("-").join(" ")} {accountNumber}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {expiry}
                              </Typography>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton variant="outlined" size="sm">
                1
              </IconButton>
              <IconButton variant="text" size="sm">
                2
              </IconButton>
              <IconButton variant="text" size="sm">
                3
              </IconButton>
              <IconButton variant="text" size="sm">
                ...
              </IconButton>
              <IconButton variant="text" size="sm">
                8
              </IconButton>
              <IconButton variant="text" size="sm">
                9
              </IconButton>
              <IconButton variant="text" size="sm">
                10
              </IconButton>
            </div>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default PaymentShow;

// import { useQuery } from "@tanstack/react-query";
// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
// import NoUserClient from "../../../components/Shared/NoUserClient/NoUserClient";

// const PaymentShow = () => {

//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const endIndex = startIndex + rowsPerPage;

//   return (
//     <>
//       <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
//         {/* Title Section */}
//         <DashboardTitle title={"Paid user"} slogan={"Ready to jump back in?"} />

//         {paidUsers.length === 0 ? (
//           <NoUserClient text={"No paid Users Here"} />
//         ) : (
//           <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
//             <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">
//               Paid User
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50 text-green-400">
//                   <tr>
//                     <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
//                       Image
//                     </th>
//                     <th className="py-3 md:py-5 text-left text-base md:text-lg">
//                       Name
//                     </th>
//                     <th className="py-3 md:py-5 text-left text-base md:text-lg">
//                       Email
//                     </th>
//                     <th className="py-3 md:py-5 text-left text-base md:text-lg">
//                       Payment Date
//                     </th>
//                     <th className="py-3 md:py-5 text-left text-base md:text-lg">
//                       Payment Method
//                     </th>
//                     <th className="py-3 md:py-5 text-left text-base md:text-lg">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {paidUsers?.slice(startIndex, endIndex)?.map((user) => (
//                     <tr key={user._id}>
//                       <td className="py-2 md:py-4">
//                         <img
//                           src={user.image}
//                           alt="Job"
//                           className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
//                         />
//                       </td>
//                       <td>
//                         <p className="font-semibold xl:text-lg md:text-xs text-xs px-3">
//                           {user.name}
//                         </p>
//                       </td>
//                       <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4">
//                         {user.email}
//                       </td>
//                       <td className="py-2 md:py-4">
//                         {formatDate(user?.date)} {/* Format the date */}
//                       </td>
//                       <td className="py-2 md:py-4 text-primary">Paid</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {!paidUsers.length === 0 ? (
//           <div className="flex justify-center mt-7">
//             <button
//               className={`mr-5 ${
//                 currentPage === 1 ? "cursor-not-allowed" : ""
//               }`}
//               onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
//               disabled={currentPage === 1}
//             >
//               <FaArrowLeft />
//             </button>
//             <div className="flex">
//               {Array.from({
//                 length: Math.ceil(paidUsers.length / rowsPerPage),
//               }).map((_, index) => (
//                 <button
//                   key={index}
//                   className={`mx-3 py-3 px-4 rounded-lg ${
//                     currentPage === index + 1
//                       ? "bg-green-400 text-white"
//                       : "bg-gray-200 text-gray-600 hover:bg-green-400 hover:text-white"
//                   } `}
//                   onClick={() => setCurrentPage(index + 1)}
//                   disabled={currentPage === index + 1}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//             <button
//               className={`ml-2 ${
//                 endIndex >= paidUsers.length ? "cursor-not-allowed" : ""
//               }`}
//               onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
//               disabled={endIndex >= paidUsers.length}
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         ) : (
//           ""
//         )}

//         <div className="my-10 md:my-20 text-center text-gray-600 text-xs md:text-base">
//           © 2023 Biomed LTD. All Rights Reserved.
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentShow;
