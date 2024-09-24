import { useEffect, useState } from "react";
import { client } from "./lib/contentful";
import { Gallery } from "./components/Gallery/Gallery";
import "./App.scss";
import { Header } from "./components/Header/Header";

function App() {
  const [galleryData, setGalleryData] = useState("");

  useEffect(() => {
    client
      .getEntries({
        content_type: "gallery",
      })
      .then((res) => setGalleryData(res))
      .catch((err) => console.error(err));
  }, []);

  console.log(galleryData);

  return (
    <>
          {galleryData?.items?.map((item) => (
        <Gallery
          imageURL={item.fields.image.fields.file.url}
          imageALT={item.fields.image.fields.title}
          description={item.fields.description.content[0].content[0].value}
        ></Gallery>
      ))}
    </>
  );
}

export default App;
