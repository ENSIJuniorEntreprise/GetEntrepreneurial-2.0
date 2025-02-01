import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';
import { Alert } from 'react-bootstrap';
import axios from "axios";
import b from './../../Assets/back.png';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
import './Exposant.css'
import { faEnvelope, faPhone, faBuildingColumns, faGraduationCap, faBriefcase, faStar, faFile } from '@fortawesome/free-solid-svg-icons'; // Ajout de faFile

function Exposant() {
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app/api/inscription";
  const [loading, setLoading] = useState(false);
  const [ShowFail, setShowFail] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const [submitStatus, setSubmitStatus] = useState(null);

  const [Organisation, setOrganisation] = useState('');
  const [Email, setEmail] = useState('');
  
  const handleOrganisationChange = (e) => setOrganisation(e.target.value);
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birthday, setBirthday] = useState(new Date());
  const [Genre, setGenre] = useState('');
  const [Region, setRegion] = useState('');
  const [Status, setStatus] = useState('');
  const [Universite, setUniversite] = useState('');
  const [Classe, setClasse] = useState('');
  const [DomaineExpertise, setDomaineExpertise] = useState('');
  const [NiveauExperience, setNiveauExperience] = useState('');
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{8}$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phoneRegex.test(phone);
  };



  const handleDomaineExpertiseChange = (event) => {
    setDomaineExpertise(event.target.value);
  };

  const handleNiveauExperienceChange = (event) => {
    setNiveauExperience(event.target.value);
  };

  const [Partage, setPartage] = useState(false);

  const [CV, setCV] = useState('');

  console.log(CV)
  const [ResponseMessage, setResponseMessage] = useState({})

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleUniversiteChange = (event) => {
    setUniversite(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setClasse('')
    setUniversite('')
  };
  const handleClasseChange = (event) => {
    setClasse(event.target.value);
  };


  const handleCVChange = (event) => {
    setCV(event.target.files);
  };

  const handleSubmit = async (event) => {
    // setFormSubmitted(true); 

    event.preventDefault();

    if (
      !validateEmail(Email) ||
      !validatePhone(Phone) ||
      !Nom ||
      !Prenom ||
      !Email ||
      !Phone ||
      !Birthday ||
      !Genre ||
      !Region ||
      !Status ||
      (Status === "Etudiant" && (!Universite || !Classe)) ||
      ((Status === "Diplome" || Status === "Employé") && (!DomaineExpertise || !NiveauExperience))
    ) {
      setSubmitStatus({ message: 'Please fill in all mandatory fields carefully.', type: 'error' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    

    const data = new FormData();
    data.append('CV', CV[0]);
    data.append('Nom', Nom)
    data.append('Prenom', Prenom)
    data.append('Email', Email)
    data.append('Phone', Phone)
    data.append('Birthday', Birthday)
    data.append('Genre', Genre)
    data.append('Region', Region)
    data.append('Status', Status)
    data.append('Universite', Universite)
    data.append('Classe', Classe)
    data.append('DomaineExpertise', DomaineExpertise)
    data.append('NiveauExperience', NiveauExperience)
    data.append('Partage', Partage)
    setLoading(true)
    try{
      const response = await axios.post(baseURL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status === 200) {
        setLoading(false)
        setNom('')
        setPrenom('')
        setBirthday('')
        setCV('')
        setClasse('')
        setDomaineExpertise('')
        setNiveauExperience('')
        setEmail('')
        setGenre('')
        setPartage(false)
        setPhone('')
        setRegion('')
        setStatus('')
        setUniversite('')
        setPartage(false);
        {
          Swal.fire({
            text: "You have successfully registered.",
            icon: 'success',
            confirmButtonColor: '#2ea3dd',

          })
        }
        setSubmitStatus(null);
        
    }
  } catch (error) {
    setLoading(false);
  
    if (error.response && error.response.status === 422) {
      Swal.fire({
        text: "You are already registered.",
        icon: 'success',
        confirmButtonColor: '#2ea3dd',

      })
      setSubmitStatus(null);
      setNom('')
      setPrenom('')
      setBirthday('')
      setCV('')
      setClasse('')
      setDomaineExpertise('')
      setNiveauExperience('')
      setEmail('')
      setGenre('')
      setPartage(false)
      setPhone('')
      setRegion('')
      setStatus('')
      setUniversite('')
      setPartage(false);
    } else {
      // For other errors
      console.error(error);
      setSubmitStatus({ message: 'Error', type: 'error' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

  return (
    <div ref={myRef}>
      <div className="containerparticipant">
        <div className="containerparticipant1">
        <div className="buttonbackrightparticipant1">
              <button id='backrightparticipant'><Link to="/" id='backrightparticipant'>
                <img src={b} alt="" />
                <p>Retour</p>
                </Link>
              </button>
            </div>
          <div className="formContainerparticipant">
            <div className='formleft'>
            <div className="buttonbackrightparticipant">
              <button id='backrightparticipant'><Link to="/" id='backrightparticipant'>
                <img src={b} alt="" />
                <p>Back</p>
                </Link>
              </button>
            </div>
            <div className="formleftt">
            <div className="Bienleft"><span className="Bienorange">B</span>ienvenue</div>
            <div className="formleftEvent"><div><span className="get">Get</span></div><div className="formleftEvent11">Entrepreneurial 2.0</div></div>
            <div className="sous-titre">#Forge_The_Future</div>
            </div>
            </div>
            <div className="formBoxparticipant">
              <div className="sous-titre">PARTICIPEZ DÈS À PRÉSENT</div>

              <form onSubmit={handleSubmit}  ref={myRef} noValidate>

                <Alert show={ShowFail} variant='danger'>Vous êtes déjà inscrit</Alert>
                {submitStatus && <div className={`alert ${submitStatus.type}`}>{submitStatus.message}</div>}
                <div className="NomPrenom">
  <div className="form-group">
    <label htmlFor="organisation">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
        </span>
      </div>
      Nom de l'organisation
    </label>
    <div className="input-group">
      <input
        required
        id="organisation"
        type="text"
        className={`form-control ${Organisation ? 'is-valid' : 'is-invalid'}`}
        value={Organisation}
        onChange={handleOrganisationChange}
        placeholder="Nom de votre organisation"
      />
      {Organisation && <div className="valid-feedback"></div>}
      {!Organisation && <div className="invalid-feedback"></div>}
    </div>
  </div>
</div>
<div className="NomPrenom">
  <div className="form-group">
    <label htmlFor="email">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </span>
      </div>
      Adresse Email
    </label>
    <div className="input-group">
      <input
        required
        id="email"
        type="email"
        className={`form-control ${Email ? 'is-valid' : 'is-invalid'}`}
        value={Email}
        onChange={handleEmailChange}
        placeholder="Entrez votre email"
      />
      {Email && <div className="valid-feedback"></div>}
      {!Email && <div className="invalid-feedback"></div>}
    </div>
  </div>
</div>

                <div className="NomPrenom">
              <div className="form-group">
                <label htmlFor="phone">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faPhone} className="icon" />
                    </span>
                  </div>
                  Numéro de téléphone
                </label>
                <div className="input-group">
                  <input
                    required
                    id="phone"
                    type="tel"
                    className={`form-control ${Phone ? 'is-valid' : 'is-invalid'}`}
                    value={Phone}
                    onChange={handlePhoneChange}
                    placeholder="Exemple : +216 11 111 111"
                  />
                  {Phone && <div className="valid-feedback"></div>}
                  {!Phone && <div className="invalid-feedback"></div>}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
                  </span>
                </div>
                Description de l'entreprise
              </label>
              <div className="input-group">
                <input
                  required
                  id="description"
                  type="text"
                  className={`form-control ${Phone ? 'is-valid' : 'is-invalid'}`}
                  value={Phone}
                  onChange={handlePhoneChange}
                  placeholder="Décrivez votre entreprise"
                />
                {Phone && <div className="valid-feedback"></div>}
                {!Phone && <div className="invalid-feedback"></div>}
              </div>
            </div>

            {Status === "Etudiant" && (
              <div className="form-group">
                <label htmlFor="university">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
                    </span>
                  </div>
                  Université
                </label>
                <div className="input-group">
                  <input
                    required
                    id="university"
                    type="text"
                    className={`form-control ${Universite ? 'is-valid' : 'is-invalid'}`}
                    value={Universite}
                    onChange={handleUniversiteChange}
                    placeholder="Entrez votre université"
                  />
                  {Universite && <div className="valid-feedback"></div>}
                  {!Universite && <div className="invalid-feedback"></div>}
                </div>
              </div>
            )}

            {Status === "Etudiant" && (
              <div className="form-group">
                <label htmlFor="classe">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                    </span>
                  </div>
                  Niveau d'étude
                </label>
                <div className="input-group">
                  <select
                    required
                    id="classe"
                    className={`form-control ${Classe ? 'is-valid' : 'is-invalid'}`}
                    value={Classe}
                    onChange={handleClasseChange}
                  >
                    <option value="" disabled>Sélectionner votre niveau d'étude</option>
                    <option value={1}>1ère année</option>
                    <option value={2}>2ème année</option>
                    <option value={3}>3ème année</option>
                    <option value={4}>4ème année</option>
                    <option value={5}>5ème année</option>
                  </select>
                  {Classe && <div className="valid-feedback"></div>}
                  {!Classe && <div className="invalid-feedback"></div>}
                </div>
              </div>
            )}

            {Status === "" && (
              <div className="form-group11">
                <div className="form-group">
                  <label htmlFor="domaineExpertise">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faBriefcase} className="icon" />
                      </span>
                    </div>
                    Domaine d'expertise
                  </label>
                  <div className="input-group">
                    <select
                      required
                      id="domaineExpertise"
                      className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                      value={DomaineExpertise}
                      onChange={handleDomaineExpertiseChange}
                    >
                      <option value="" disabled>Sélectionner votre domaine d'expertise</option>
                      <option value="Agronomie">Agronomie</option>
                      <option value="Business">Business</option>
                      <option value="Civil">Civil</option>
                      <option value="Economie">Economie</option>
                      <option value="Electrique">Electrique</option>
                      <option value="Electromécanique">Electromécanique</option>
                      <option value="Embarqués">Embarqués</option>
                      <option value="Finance">Finance</option>
                      <option value="Gestion">Gestion</option>
                      <option value="Hydrolique">Hydrolique</option>
                      <option value="Industriel">Industriel</option>
                      <option value="Infotronique">Infotronique</option>
                      <option value="IT">Technologies de l'information</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Mécanique">Mécanique</option>
                    </select>
                    {DomaineExpertise && <div className="valid-feedback"></div>}
                    {!DomaineExpertise && <div className="invalid-feedback"></div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="niveauExperience">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                      </span>
                    </div>
                    Niveau d'expérience
                  </label>
                  <div className="input-group">
                    <select
                      required
                      id="niveauExperience"
                      className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                      value={NiveauExperience}
                      onChange={handleNiveauExperienceChange}
                    >
                      <option value="" disabled>Sélectionner votre niveau d'expérience</option>
                      <option value="Débutant">Débutant</option>
                      <option value="Intermédiaire">Intermédiaire</option>
                      <option value="Avancé">Avancé</option>
                      <option value="Expert">Expert</option>
                    </select>
                    {NiveauExperience && <div className="valid-feedback"></div>}
                    {!NiveauExperience && <div className="invalid-feedback"></div>}
                  </div>
                </div>
              </div>
            )}

                <div className="custom-control custom-checkbox">
                  <input
                    required
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultUnchecked2"
                    onChange={() => setPartage(!Partage)}
                    checked={Partage}
                  ></input>
                  <label className="custom-control-label" htmlFor="defaultUnchecked2">
                  J'accepte de partager mes informations avec les entreprises participantes.
                  </label>
                </div>

            <div className="text-center buttonIns">
                <Button
            
            
                    type="submit"
                    disabled={!(true || loading)}
                    variant="contained"
                    sx={{
                      backgroundColor: "#FE9900",
                        "&:focus": {
                            backgroundColor: "#FE9900"
                          },
                        "&:hover": {
                            backgroundColor: "#FE9900"
                          },
                        }}
                >
            
                                {loading ? (
                                  <ReactLoading
                                    height={"20px"}
                                    width={"24px"}
                                    className="loading1"
                                    type="spin"
                                  />
                                ) : (
                                  "Envoyer"
                                )}
            
                              </Button>
                            </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exposant;




