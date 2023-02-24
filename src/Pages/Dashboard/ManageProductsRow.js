import React, { useState } from "react";
import ManageProductsModal from "./ManageProductsModal";

const ManageProductsRow = ({ tool, index, refetch }) => {
  const [modalTool, setModalTool] = useState(null);
  const { image, name } = tool || "";

  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="w-16 rounded">
              <img className="object-contain" src={image} alt="Tool" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>
          <div
            className="tooltip tooltip-warning"
            data-tip="Delete product form database"
          >
            <label
              htmlFor="delete-product-modal"
              className="btn modal-button btn-sm btn-warning"
              onClick={() => setModalTool(tool)}
            >
              Delete
            </label>
          </div>
          {modalTool && (
            <ManageProductsModal modalTool={modalTool} refetch={refetch} />
          )}
        </td>
      </tr>
    </>
  );
};

export default ManageProductsRow;
