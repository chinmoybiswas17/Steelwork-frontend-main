import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://alpha-steelwork-backend.onrender.com/tools", {
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
        Manage Products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <ManageProductsRow
                key={tool._id}
                index={index}
                tool={tool}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;
