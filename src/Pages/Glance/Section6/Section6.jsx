import "./Section6.css";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";

export default function Section6() {
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
        <div className="Article-container1">
          {showModal && (
            <Modal
              article={selectedArticle}
              onClose={() => setShowModal(false)}
            />
          )}
          <div className="title11">ARTICLES PHARES</div>
          <div className="subtitle11">
            <div className="line-sub1"></div>
            <div>Découvrez nos Perspectives Clés</div>
            <div className="line-sub1"></div>
          </div>
          <div className="cont1">
            <button className="prevBtn1" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <div className="articles1">
            {articleData.slice(currentSlide, currentSlide + articlesToShow).map((article, index) => (
      <div key={index} className="article1">
        <img src={`${baseURL}/api/Article/ArticleImg/${article.img}`} alt="img" />
        <div className="date1">
          {new Date(article.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </div>
        <div className="title1">{article.title}</div>
        <button className="checkbtn1" onClick={() => {
          setShowModal(true);
          setSelectedArticle(article);
        }}>Consulter</button>
      </div>
    ))}
    
            </div>
            <button className="nextBtn1" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      );
};