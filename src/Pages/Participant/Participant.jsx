import React, { useState, useRef } from "react";
import Swal from 'sweetalert2';
import { Button } from '@mui/material';
import { Alert } from 'react-bootstrap';
import axios from "axios";
import b from './../../Assets/back.png';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
import './Participant.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEnvelope, faPhone, faCalendarDays, faFileAlt, faUpload, faVenusMars, faLocationDot, faUser, faBriefcase, faStar, faBuildingColumns, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Participant() {
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app/api/inscription";
  const [loading, setLoading] = useState(false);
  const [ShowFail, setShowFail] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const [submitStatus, setSubmitStatus] = useState(null);


  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
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
      <div className="containerexposant">
        <div className="containerexposant1">
          <div className="buttonbackrightexposant1">
                        <button id='backright'><Link to="/" id='backright'>
                          <img src={b} alt="" />
                          <p>RETOUR</p>
                          </Link>
                        </button>
                      </div>
          <div className="formContainerexposant">
            <div className="formBoxexposant">
              <div className="sous-titreexp">PARTICIPEZ DÈS À PRÉSENT</div>

              <form onSubmit={handleSubmit}  ref={myRef} noValidate>

                <Alert show={ShowFail} variant='danger'>Vous êtes déjà inscrit</Alert>
                {submitStatus && <div className={`alert ${submitStatus.type}`}>{submitStatus.message}</div>}

                <div className="NomPrenom">


                <div className="form-group">
                    <label htmlFor="prenom"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />                                </span>
                    </div>Prénom</label>
                    <div className="input-group">

                      <input
                        required
                        id="prenom"
                        type="text"
                        className={`form-control ${Prenom ? 'is-valid' : 'is-invalid'}`}
                        value={Prenom}
                        onChange={handlePrenomChange}
                        placeholder="Veuillez entrer votre prénom"

                      />
                      {Prenom && (
                        <div className="valid-feedback">
                        </div>
                      )}
                      {!Prenom && (
                        <div className="invalid-feedback">
                        </div>
                      )}
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="nom"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />                                </span>
                    </div>Nom</label>
                    <div className="input-group">

                      <input
                        required
                        id="nom"
                        type="text"
                        className={`form-control ${Nom ? 'is-valid' : 'is-invalid'}`}
                        value={Nom}
                        onChange={handleNomChange}
                        placeholder="Veuillez entrer votre nom"
                        onInvalid={(e) => e.target.setCustomValidity('Veuillez saisir votre nom')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />

                      {Nom && (
                        <div className="valid-feedback">

                        </div>
                      )}
                      {!Nom && (
                        <div className="invalid-feedback">

                        </div>
                      )}
                    </div>
                  </div>


                </div>

                <div className="NomPrenomexp">
                  <div className="form-group">
                    <label htmlFor="email"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />                                </span>
                    </div>Adresse e-mail</label>
                    <div className="input-group">

                      <input
                        required
                        id="email"
                        type="email"
                        className={`form-control ${Email ? 'is-valid' : 'is-invalid'}`}
                        value={Email}
                        onChange={handleEmailChange}
                        placeholder="Veuillez entrer votre adresse e-mail"

                      />
                      {Email && (
                        <div className="valid-feedback">

                        </div>
                      )}
                      {!Email && (
                        <div className="invalid-feedback">

                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faPhone} className="icon" />                                </span>
                    </div>Numéro de téléphone</label>
                    <div className="input-group">

                      <input
                        required
                        id="phone"
                        type="tel"  // "tel" type is suitable for phone numbers
                        className={`form-control ${Phone ? 'is-valid' : 'is-invalid'}`}
                        value={Phone}
                        onChange={handlePhoneChange}
                        placeholder="Veuillez entrer votre numéro de téléphone"

                      />
                      {Phone && (
                        <div className="valid-feedback">

                        </div>
                      )}
                      {!Phone && (
                        <div className="invalid-feedback">

                        </div>
                      )}
                    </div>
                  </div>



                </div>

                <div className="NomPrenomexp">
                  <div className="form-group">
                    <label htmlFor="birthday"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                      </span>
                    </div>Date de naissance</label>
                    <div className="input-group">

                      <input
                        required
                        id="birthday"
                        type="date"
                        className={`form-control ${Birthday ? 'is-valid' : 'is-invalid'}`}
                        value={Birthday}
                        onChange={handleBirthdayChange}
                        onBlur={handleBirthdayChange}
                      />
                      {Birthday && (
                        <div className="valid-feedback">

                        </div>
                      )}
                      {!Birthday && (
                        <div className="invalid-feedback">

                        </div>
                      )}
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="genre"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faVenusMars} className="icon" />
                      </span>
                    </div>Sexe</label>
                    <div className="input-group">

                      <select
                        required
                        id="genre"
                        className={`form-control ${Genre ? 'is-valid' : 'is-invalid'}`}
                        value={Genre}
                        onChange={handleGenreChange}
                      >
                        <option value="" disabled>Select Gender</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                        <option value="autre">autre...</option>
                      </select>
                      {Genre && (
                        <div className="valid-feedback">

                        </div>
                      )}
                      {!Genre && (
                        <div className="invalid-feedback">

                        </div>
                      )}
                    </div>


                  </div>

                  <div className="form-group">
                    <label htmlFor="region"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                      </span>
                    </div>Région</label>
                    <div className="input-group">

                      <select
                        required
                        id="region"
                        className={`form-control ${Region ? 'is-valid' : 'is-invalid'}`}
                        value={Region}
                        onChange={handleRegionChange}
                      >
                        <option value="" disabled>Sélectionner la Région</option>
                        <option value="Ariana">Ariana</option>
                        <option value="Béja">Béja</option>
                        <option value="Ben Arous">Ben Arous</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="Gabès">Gabès</option>
                        <option value="Gafsa">Gafsa</option>
                        <option value="Jendouba">Jendouba</option>
                        <option value="Kairouan">Kairouan</option>
                        <option value="Kasserine">Kasserine</option>
                        <option value="Kébili">Kébili</option>
                        <option value="Le Kef">Le Kef</option>
                        <option value="Mahdia">Mahdia</option>
                        <option value="Manouba">Manouba</option>
                        <option value="Médenine">Médenine</option>
                        <option value="Monastir">Monastir</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Sfax">Sfax</option>
                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                        <option value="Siliana">Siliana</option>
                        <option value="Sousse">Sousse</option>
                        <option value="Tataouine">Tataouine</option>
                        <option value="Tozeur">Tozeur</option>
                        <option value="Tunis">Tunis</option>
                        <option value="Zaghouan">Zaghouan</option>
                      </select>
                      {Region && (
                        <div className="valid-feedback">
                        </div>
                      )}
                      {!Region && (
                        <div className="invalid-feedback">
                        </div>
                      )}
                    </div>

                  </div>

                </div>

                <div className="NomPrenomexp">

                  <div className="form-group">
                    <label htmlFor="status"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUserTie} className="icon" />
                      </span>
                    </div>Statut</label>
                    <div className="input-group">

                      <select
                        required
                        id="status"
                        className={`form-control ${Status ? 'is-valid' : 'is-invalid'}`}
                        value={Status}
                        onChange={handleStatusChange}
                      >
                        <option value="" disabled>Sélectionner le Statut</option>
                        <option value="Etudiant">Étudiant(e)</option>
                        <option value="Diplomé">Jeune diplômé(e)</option>
                        <option value="Employé">Salarié(e)</option>
                      </select>
                      {Status && (
                        <div className="valid-feedback">
                        </div>
                      )}
                      {!Status && (
                        <div className="invalid-feedback">
                        </div>
                      )}
                    </div>
                  </div>


                  {Status === "Etudiant" && (
                    <div className="form-group">
                      <label htmlFor="university"><div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
                        </span>
                      </div>Université</label>
                      <div className="input-group">

                        <input
                          required
                          id="university"
                          type="text"
                          className={`form-control ${Universite ? 'is-valid' : 'is-invalid'}`}
                          value={Universite}
                          onChange={handleUniversiteChange}
                          placeholder="Veuillez entrer votre université"

                        />
                        {Universite && (
                          <div className="valid-feedback">
                          </div>
                        )}
                        {!Universite && (
                          <div className="invalid-feedback">
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {Status === "Etudiant" && (
                    <div className="form-group">
                      <label htmlFor="classe"><div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faGraduationCap} className="icon" />                                  </span>
                      </div>Niveau</label>
                      <div className="input-group">

                        <select
                          required
                          id="classe"
                          className={`form-control ${Classe ? 'is-valid' : 'is-invalid'}`}
                          value={Classe}
                          onChange={handleClasseChange}
                        >
                          <option value="" disabled>Sélectionner le Niveau</option>
                          <option value={1}>1ère année</option>
                          <option value={2}>2ème année</option>
                          <option value={3}>3ème année</option>
                          <option value={4}>4ème année</option>
                          <option value={5}>5ème année</option>
                        </select>
                        {Classe && (
                          <div className="valid-feedback">
                          </div>
                        )}
                        {!Classe && (
                          <div className="invalid-feedback">
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {Status === "" && (
                    <>
                      <div className="form-group">
                        <label htmlFor="domaineExpertise"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faBriefcase} className="icon" />                                    </span>
                        </div>Expertise</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Sélectionner le champ d'expertise</option>
                            <option value="Agronomie">Agronomie</option>
                            <option value="Business">Affaires</option>
                            <option value="Civil">Génie civil</option>
                            <option value="Economie">Économie</option>
                            <option value="Electrique">Électrique</option>
                            <option value="Electromécanique">Électromécanique</option>
                            <option value="Embarqués">Systèmes embarqués</option>
                            <option value="Finance">Finance</option>
                            <option value="Gestion">Gestion</option>
                            <option value="Hydrolique">Hydraulique</option>
                            <option value="Industriel">Industriel</option>
                            <option value="Infotronique">Infotronique</option>
                            <option value="IT">Informatique</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Mécatronique">Mécatronique</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Télécom">Télécommunications</option>
                            <option value="Science">Sciences</option>
                            <option value="Art">Art</option>
                            <option value="Autre">Autre</option>

                          </select>
                          {DomaineExpertise && (
                            <div className="valid-feedback">
                            </div>
                          )}
                          {!DomaineExpertise && (
                            <div className="invalid-feedback">
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="niveauExperience"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} className="icon" />                                    </span>
                        </div>Expérience</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Sélectionner le niveau d'expérience</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Senior">Senior</option>

                          </select>
                          {NiveauExperience && (
                            <div className="valid-feedback">
                            </div>
                          )}
                          {!NiveauExperience && (
                            <div className="invalid-feedback">
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {Status === "Employé" && (
                    <>
                      <div className="form-group">
                        <label htmlFor="domaineExpertise"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faBriefcase} className="icon" />                                    </span>
                        </div>Expertise</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Sélectionner le champ d'expertise</option>
                              <option value="Agronomie">Agronomie</option>
                              <option value="Business">Affaires</option>
                              <option value="Civil">Génie civil</option>
                              <option value="Economie">Économie</option>
                              <option value="Electrique">Électrique</option>
                              <option value="Electromécanique">Électromécanique</option>
                              <option value="Embarqués">Systèmes embarqués</option>
                              <option value="Finance">Finance</option>
                              <option value="Gestion">Gestion</option>
                              <option value="Hydrolique">Hydraulique</option>
                              <option value="Industriel">Industriel</option>
                              <option value="Infotronique">Infotronique</option>
                              <option value="IT">Informatique</option>
                              <option value="Marketing">Marketing</option>
                              <option value="Mécanique">Mécanique</option>
                              <option value="Mécatronique">Mécatronique</option>
                              <option value="Réseaux">Réseaux</option>
                              <option value="Télécom">Télécommunications</option>
                              <option value="Science">Sciences</option>
                              <option value="Art">Art</option>
                              <option value="Autre">Autre</option>

                          </select>
                          {DomaineExpertise && (
                            <div className="valid-feedback">
                            </div>
                          )}
                          {!DomaineExpertise && (
                            <div className="invalid-feedback">
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="niveauExperience"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} className="icon" />                                    </span>
                        </div>Expérience</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Sélectionner le niveau d'expérience</option>
<option value="Junior">Débutant</option>
<option value="Intermédiaire">Intermédiaire</option>
<option value="Senior">Senior</option>

                          </select>
                          {NiveauExperience && (
                            <div className="valid-feedback">
                            </div>
                          )}
                          {!NiveauExperience && (
                            <div className="invalid-feedback">
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {Status === "Diplomé" && (
                    <>
                      <div className="form-group">
                        <label htmlFor="domaineExpertise"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faBriefcase} className="icon" />                                    </span>
                        </div>Expertise</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Sélectionner le champ d'expertise</option>
                            <option value="Agronomie">Agronomie</option>
                            <option value="Business">Affaires</option>
                            <option value="Civil">Génie civil</option>
                            <option value="Economie">Économie</option>
                            <option value="Electrique">Électrique</option>
                            <option value="Electromécanique">Électromécanique</option>
                            <option value="Embarqués">Systèmes embarqués</option>
                            <option value="Finance">Finance</option>
                            <option value="Gestion">Gestion</option>
                            <option value="Hydrolique">Hydraulique</option>
                            <option value="Industriel">Industriel</option>
                            <option value="Infotronique">Infotronique</option>
                            <option value="IT">Informatique</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Mécatronique">Mécatronique</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Télécom">Télécommunications</option>
                            <option value="Science">Sciences</option>
                            <option value="Art">Art</option>
                            <option value="Autre">Autre</option>

                          </select>
                          {DomaineExpertise && (
                            <div className="valid-feedback">
                            </div>
                          )}
                          {!DomaineExpertise && (
                            <div className="invalid-feedback">
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="niveauExperience"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} className="icon" />                                    </span>
                        </div>Niveau d'Expérience</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Sélectionner le niveau d'expérience</option>
                            <option value="Junior">Débutant</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Senior">Confirmé</option>

                          </select>
                          {NiveauExperience && (
                            <div className="valid-feedback">
                            </div>
                          )}
                          {!NiveauExperience && (
                            <div className="invalid-feedback">
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}


                </div>


                <div className="form-group cv">
           
                  <div className="input-group">

                      <input
                        id="cv"
                        type="file"
                        className={`form-control ${CV ? 'is-valid' : 'is-invalid'}`}
                        onChange={handleCVChange}
                      />
                  
                    {CV && (
                      <div className="valid-feedback">
                        {CV[0].name}
                      </div>
                    )}
                    {!CV && (
                      <div className="invalid-feedback">
                      </div>
                    )}
                  </div>
                </div>



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
            <div className='formright'>
              <div className="buttonbackright">
                        <button id='backright'>
                              <Link to="/" id='backright'>
                                  <img src={b} alt="" />
                                  <p>Retour</p>
                              </Link>
                        </button>
              </div>
              <div>
            <div className="Bienright"><span className="Bienorange">B</span>ienvenue</div>
            <div className="formrightEvent"><div><span className="get">Get</span></div><div className="formrightEvent11">Entrepreneurial 2.0</div></div>
            <div className="sous-titre">#Forge_The_Future</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participant;



