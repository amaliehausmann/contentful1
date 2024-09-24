import { useEffect, useState } from "react";
import "./App.scss";
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function App() {
  const [productData, setProductData] = useState("");

  const client = contentful.createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
    .getEntries({
      content_type: "product_id",
    })
    .then((res) => setProductData(res))
    .catch((err) => console.error(err))
  }, [])

  console.log(productData)


  return (
    <>
      <h2>Telefon</h2>
      {productData?.items?.map((item) => 
        <div>
          <h1>{item.fields.title}</h1>
          <img src={item.fields.image.fields.file.url} alt="" />
          {documentToReactComponents(item.fields.description)}
        </div>
      )}
    </>
  );
}

export default App;
