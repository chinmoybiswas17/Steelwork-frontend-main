import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrdersRow from "./ManageOrdersRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://alpha-steelwork-backend.onrender.com/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        Manage All Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Status</th>
              <th>update status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrdersRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageOrders;
