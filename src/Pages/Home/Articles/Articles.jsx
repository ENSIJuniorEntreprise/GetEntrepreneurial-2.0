import React, { useState, useEffect } from "react";
import "./Articles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";

export default function Articles() {
  const [articleData, setArticleData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articlesToShow, setArticlesToShow] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";



  const fetchArticles = async () => {
    try {
      const response = await fetch(` ${baseURL}/api/article`);
      const data = await response.json();
      console.log("Article Data:", data); // Log the data
      setArticleData(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  
  useEffect(() => {
    fetchArticles();
  }, []); // Fetch articles when the component mounts

  const updateArticlesToShow = () => {
    if (window.innerWidth < 601) {
      setArticlesToShow(1);
    } else if (window.innerWidth < 901) {
      setArticlesToShow(2);
    } else {
      setArticlesToShow(3);
    }
  };

  useEffect(() => {
    updateArticlesToShow();
    window.addEventListener("resize", updateArticlesToShow);

    return () => {
      window.removeEventListener("resize", updateArticlesToShow);
    };
  }, [articlesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = (prevSlide + 1) % (articleData.length - (articlesToShow - 1));
      return nextSlide === 0 ? 0 : nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (articleData.length - (articlesToShow - 1))) % (articleData.length - (articlesToShow - 1)));
  };

  return (
    <div className="Article-container">
      {showModal && (
        <Modal
          article={selectedArticle}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="title1">ARTICLES DISTINGUÉS</div>
      <div className="subtitle1">
        <div className="line-sub"></div>
        <div>Explorez les Analyses Exclu­sives</div>
        <div className="line-sub"></div>
      </div>
      <div className="cont">
        <button className="prevBtn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="articles">
        {articleData.slice(currentSlide, currentSlide + articlesToShow).map((article, index) => (
  <div key={index} className="article">
    <img src={`${baseURL}/api/Article/ArticleImg/${article.img}`} alt="img" />
    <div className="date">
      {new Date(article.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      })}
    </div>
    <div className="title">{article.title}</div>
    <button className="checkbtn" onClick={() => {
      setShowModal(true);
      setSelectedArticle(article);
    }}>Consulter</button>
  </div>
))}

        </div>
        <button className="nextBtn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
