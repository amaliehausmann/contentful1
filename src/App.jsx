import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "@/lib/contentful";
import "./App.scss";
import { Header } from "./components/Header/Header";

function App() {
  const [productData, setProductData] = useState("");

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
      <Header imageURL="/header.jpg" title={"Hjem"} />
      <h2>Telefon</h2>
      {productData?.items?.map((item) => 
        <div key={item.sys.id}>
          <h1>{item.fields.title}</h1>
          <img src={item.fields.image.fields.file.url} alt="" />
          {documentToReactComponents(item.fields.description)}
        </div>
      )}
    </>
  );
}

export default App;
