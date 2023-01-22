import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ResultSHow = () => {
  const id = useParams();

  console.log(id);

  useEffect(() => {
    async function getItem() {
      try {
        const { data: item } = await axios.get(
          `http://localhost:4000/submitedData/${id}`
        );
        console.log(item);
      } catch (error) {
        console.error(error);
      }
    }
    getItem();
  }, [submitID]);

  return (
    <div>
      <button>Update Form</button>
    </div>
  );
};

export default ResultSHow;
