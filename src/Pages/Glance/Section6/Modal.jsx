import React from "react";
import "./Modal.css";

export default function Modal({ article, onClose }) {
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";

  const addLineBreaks = (text) => {
    const paragraphs = text.split('*');
    console.log(paragraphs)
    return paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {paragraph + (index === paragraphs.length - 1 ? '' : '.')}
        {<br></br>}
      </React.Fragment>
    ));
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img className="ModalImg" src={`${baseURL}/api/Article/ArticleImg/${article.img}`} alt={article.title} />
        <div className="date">
          {new Date(article.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </div>
        <div className="title">{article.title}</div>
        <div className="desc">{addLineBreaks(article.content)}</div>
      </div>
    </div>
  );
}
