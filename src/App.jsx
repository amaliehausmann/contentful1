import { useEffect, useState } from "react";
import { client } from "./lib/contentful";
import { Gallery } from "./components/Gallery/Gallery";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { SiteDescription } from "./components/SiteDescription/SiteDescription";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [galleryData, setGalleryData] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [siteDescription, setSiteDescription] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "gallery",
      })
      .then((res) => setGalleryData(res))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    client
      .getEntries({
        content_type: "hero",
      })
      .then((res) => setHeaderImage(res))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    client
      .getEntries({
        content_type: "siteDescription",
      })
      .then((res) => setSiteDescription(res))
      .catch((err) => console.error(err));
  }, []);
  console.log(headerImage);

  return (
    <>
      {headerImage && (
        <Header
          title="Snacks med en historie"
          imageURL={headerImage?.items[0]?.fields?.image.fields.file.url}
        ></Header>
      )}
      {siteDescription && (
        <SiteDescription
          description={documentToReactComponents(
            siteDescription?.items[0]?.fields.description
          )}
        ></SiteDescription>
      )}
      <img src="../src/assets/KasperCertifiedbg.png" alt="Dette er Kasper Certified" className="KasperCertified" />
      <section className="gallery">
      {galleryData?.items?.map((item) => (
        <Gallery
          imageURL={item.fields.image.fields.file.url}
          imageALT={item.fields.image.fields.title}
          description={item.fields.description.content[0].content[0].value}
        ></Gallery>
      ))}
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
