import { useState } from "react";

// import css from "./App.module.css";
import { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { getPhotos } from "./apiService";
import LoadMoreBtm from "./LoadMoreBtm/LoadMoreBtm";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  //modal
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getPhotos(query, page);
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prevArticles) => [...prevArticles, ...data]);
        }
        setIsVisible(page < Math.ceil(data.results.length / data.total_pages));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== "") {
      fetchData();
    }
  }, [query, page]);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    // setIsEmpty(false);
    setIsVisible(false);
  };

  const onLoadMoreBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  //modal
  const openModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {isVisible && (
        <LoadMoreBtm onClick={onLoadMoreBtn} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load more"}
        </LoadMoreBtm>
      )}

      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        modalUrl={modalUrl}
        modalAlt={modalAlt}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
