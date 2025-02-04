import React, { useState, useEffect } from "react";
import "./Articles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";
import tunisie from "./../../../Assets/tunisie.jpg"

export default function Articles() {
  const [articleData, setArticleData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articlesToShow, setArticlesToShow] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";

  const firstData = [
    {
      title: "Tunisie : Les Sociétés Communautaires, Nouvelles Héroïnes de l'Économie Locale",
      date: "2025-12-05T00:00:00.000Z",
      img: tunisie,
      content: `Nous ne créons pas seulement des entreprises, nous construisons l'avenir de nos villages", confie Amira Benali, fondatrice d'une coopérative agricole dans la région de Béja. À l'image de son initiative, une nouvelle génération d'entrepreneurs tunisiens réinvente l'économie locale à travers les sociétés communautaires. Ces organisations, qui allient profit et impact social, émergent comme une réponse innovante aux défis économiques du pays. De Bizerte à Tataouine, ces entreprises d'un nouveau genre transforment le paysage économique tunisien. Elles prouvent qu'une autre voie est possible : celle d'un développement économique ancré dans les réalités locales, porté par les communautés elles-mêmes. Malgré des lois souvent jugées dépassées, les sociétés communautaires, ces organisations dédiées à répondre aux besoins économiques, sociaux et environnementaux des communautés locales, jouent un rôle essentiel dans le développement régional. Elles incarnent un modèle unique de croissance économique inclusif, durable et participatif*  Les sociétés communautaires se distinguent par leur impact significatif sur l'économie locale. Elles contribuent à la redistribution des ressources, leurs revenus étant souvent réinvestis dans des projets communautaires visant à améliorer le bien-être collectif. De plus, l’adoption de pratiques durables témoigne de leur engagement environnemental, participant ainsi à la préservation des ressources naturelles. Par ailleurs, elles promeuvent l’entrepreneuriat, favorisent l’émergence de solutions innovantes adaptées aux besoins locaux et participent à la réduction du chômage par la création d’emplois.* En Tunisie, les sociétés communautaires se positionnent comme des acteurs stratégiques dans un contexte marqué par des défis économiques persistants. Divers secteurs tels que l’agriculture, la technologie, le tourisme durable ou l’artisanat bénéficient de leur intervention. Les réformes engagées en 2024 et 2025, notamment l’introduction de la loi sur l’économie sociale et solidaire (ESS) et les incitations fiscales, ont favorisé leur développement. Ces mesures, combinées au rôle clé de la Banque Tunisienne de Solidarité (BTS), ont permis de financer 15 entreprises en 2023 avec une enveloppe de 20 millions de dinars, accompagnée de conditions avantageuses, comme des taux d’intérêt préférentiels à 5 %.* Cependant, le potentiel des sociétés communautaires reste encore en grande partie inexploité. Sur les 140 entreprises identifiées, seules 21 sont pleinement opérationnelles. Cette situation s’explique par plusieurs défis. La dépendance aux subventions, par exemple, limite leur capacité à innover et à se développer durablement. De plus, l’accès aux marchés locaux et nationaux reste compliqué, freiné par des barrières logistiques et un manque de mécanismes de promotion efficaces. Ces difficultés réduisent leur rentabilité à long terme. Enfin, la complexité des démarches administratives et la rigidité du cadre législatif découragent de nombreuses initiatives, ralentissant la création de nouvelles entreprises.* Pour maximiser l’impact des sociétés communautaires en Tunisie, des efforts supplémentaires sont nécessaires. Il est primordial de simplifier les procédures administratives, notamment par la digitalisation des démarches et l’utilisation de plateformes en ligne. Par ailleurs, le renforcement des capacités des acteurs locaux, grâce à des formations en gestion, en innovation et en marketing, apparaît indispensable. De même, la création de réseaux de mentorat et de pôles régionaux pourrait encourager des collaborations plus efficaces entre les parties prenantes. Enfin, des partenariats avec des coopératives et des circuits de distribution locaux doivent être mis en place pour assurer une meilleure visibilité des produits communautaires et garantir leur commercialisation.* En résumé, les sociétés communautaires en Tunisie offrent une opportunité précieuse pour promouvoir un développement économique local inclusif et durable. Bien que des avancées significatives aient été réalisées, des défis majeurs subsistent, notamment la dépendance aux subventions, l’accès limité aux marchés et la lourdeur administrative. Des efforts concertés pour simplifier les procédures, diversifier les financements et renforcer les compétences locales permettront à ces organisations de déployer pleinement leur potentiel au service des communautés et de contribuer durablement à l’économie nationale.* Plus qu'un modèle économique, c'est une philosophie de développement. Les sociétés communautaires promettent une Tunisie plus résiliente, inclusive et dynamique`,
    }
  ];

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${baseURL}/api/article`);
      const data = await response.json();
      console.log("Article Data:", data); // Log the data
      // Combine firstData with fetched data
      setArticleData([...firstData, ...data]);
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
              {article.img===tunisie ? ( <img src={tunisie} alt="img" width={100} height={100} />):

              (<img src={article.img.startsWith('http') ? article.img : `${baseURL}/api/Article/ArticleImg/${article.img}`} alt="img" />)}
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