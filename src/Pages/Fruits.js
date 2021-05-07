import React, { useState, useEffect } from "react";
import ItemList from "../Components/ItemList";

const axios = require("axios");

export default function Fruits(props) {
  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")

      .then((response) => {
        let data = response.data;

        setApiContent(
        //  console.log(data.message)
          
        data.filter(
            (item) => (console.log(item.message)) 
            // & (item.isVerified === true)
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <ItemList apiData={apiContent}></ItemList> */}
    </div>
  );
}
