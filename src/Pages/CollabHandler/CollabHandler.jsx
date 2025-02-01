
import React, { useState, useEffect } from 'react';
import './CollabHandler.css';

const CollabHandler = () => {
    const [collabs, setCollabs] = useState([]);
    const [editingCollabId, setEditingCollabId] = useState(null);
    const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";

    const initialNewCollabState = {
        partenaire: '',
        type: '',
        website: '',
        offer: '',
        postuleForm: '',
        imgFile: null,
    };

    const [newCollab, setNewCollab] = useState({ ...initialNewCollabState });

    useEffect(() => {
        // Fetch collabs when the component mounts
        fetch(`${baseURL}/api/collab`)
            .then(response => response.json())
            .then(data => setCollabs(data))
            .catch(error => console.error('Error fetching collabs:', error));
    }, []);

    const handleEditClick = (collabId) => {
        // Enable editing for the selected collab
        setEditingCollabId(collabId);

        // Pre-fill the newCollab state with the current collab's data
        const selectedCollab = collabs.find(collab => collab._id === collabId);
        if (selectedCollab) {
            setNewCollab(selectedCollab);
        }
    };

    const handleDeleteCollab = (collabId) => {
        // Delete the collab from the server and update the state
        fetch(`${baseURL}/api/collab/${collabId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(deletedCollab => {
                setCollabs(collabs.filter(collab => collab._id !== deletedCollab._id));
            })
            .catch(error => console.error('Error deleting collab:', error));
    };

    const handleSaveEdit = (collabId, updatedData) => {
        // Format the date before sending it to the server (if applicable)
        // Add any additional formatting needed for your Collab data

        // Save the edited data to the server and update the state
        fetch(`${baseURL}/api/collab/${collabId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => response.json())
            .then(updatedCollab => {
                setCollabs(collabs.map(collab => (collab._id === collabId ? updatedCollab : collab)));
                setEditingCollabId(null); // Disable editing mode
                setNewCollab({ ...initialNewCollabState }); // Reset the newCollab state
            })
            .catch(error => console.error('Error updating collab:', error));
    };

    const handleAddCollab = () => {
        const formData = new FormData();
        formData.append('partenaire', newCollab.partenaire);
        formData.append('type', newCollab.type);
        formData.append('website', newCollab.website);
        formData.append('offer', newCollab.offer);
        formData.append('postuleForm', newCollab.postuleForm);
        formData.append('img', newCollab.imgFile);

        // Add a new collab to the server and update the state
        fetch(`${baseURL}/api/collab`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                setCollabs([...collabs, data]);
                setNewCollab({ ...initialNewCollabState }); // Reset the newCollab state
            })
            .catch(error => console.error('Error adding collab:', error));
    };

    return (
        <div className="collab-container">
            <h1>Collab Dashboard</h1>
            <table className="collab-table">
                {/* Table Header */}
                <thead>
                    <tr>
                        <th>Partenaire</th>
                        <th>Type</th>
                        <th>Website</th>
                        <th>Offer</th>
                        <th>Postule Form</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {collabs.map(collab => (
                        <tr key={collab._id}>
                            {/* Conditionally render input fields for editing */}
                            {editingCollabId === collab._id ? (
                                <>
                                    <td><input type="text" value={newCollab.partenaire} onChange={(e) => setNewCollab({ ...newCollab, partenaire: e.target.value })} /></td>
                                    <td><input type="text" value={newCollab.type} onChange={(e) => setNewCollab({ ...newCollab, type: e.target.value })} /></td>
                                    <td><input type="text" value={newCollab.website} onChange={(e) => setNewCollab({ ...newCollab, website: e.target.value })} /></td>
                                    <td><input type="text" value={newCollab.offer} onChange={(e) => setNewCollab({ ...newCollab, offer: e.target.value })} /></td>
                                    <td><input type="text" value={newCollab.postuleForm} onChange={(e) => setNewCollab({ ...newCollab, postuleForm: e.target.value })} /></td>
                                    <td><input type="text" value={newCollab.img} onChange={(e) => setNewCollab({ ...newCollab, img: e.target.value })} /></td>
                                    <td><button onClick={() => handleSaveEdit(collab._id, newCollab)} className="submit-button">Save</button></td>
                                </>
                            ) : (
                                <>
                                    <td className='CollabPartenaire'>{collab.partenaire}</td>
                                    <td>{collab.type}</td>
                                    <td><a href={`${collab.website}`} target="_blank" rel="noopener noreferrer">{collab.website}</a></td>
                                    <td><a href={`${collab.offer}`} target="_blank" rel="noopener noreferrer">{collab.offer}</a></td>
                                    <td><a href={`${collab.postuleForm}`} target="_blank" rel="noopener noreferrer">{collab.postuleForm}</a></td>
                                    <td>
                                        <a href={`${baseURL}/api/Collab/CollabImg/${collab.img}`} target="_blank" rel="noopener noreferrer">{collab.img}</a>
                                    </td>
                                    <td><button onClick={() => handleEditClick(collab._id)} className="submit-button">Edit</button></td>
                                </>
                            )}
                            {/* Delete button */}
                            <td><button onClick={() => handleDeleteCollab(collab._id)} className="submit-button">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Add Collab Form */}
            <div className="form-container">
                <h2>Add New Collab</h2>
                <input
                    type="text"
                    placeholder="Partenaire"
                    className="input-field"
                    value={newCollab.partenaire}
                    onChange={(e) => setNewCollab({ ...newCollab, partenaire: e.target.value })}
                />
               <select
    className="input-field"
    value={newCollab.type}
    onChange={(e) => setNewCollab({ ...newCollab, type: e.target.value })}
>
    <option value="" disabled>Select a Type</option>
    <option value="Ally">Ally</option>
    <option value="Exposant">Exposant</option>
    <option value="Sponsor">Sponsor</option>


</select>

                <input
                    type="text"
                    placeholder="Website"
                    className="input-field"
                    value={newCollab.website}
                    onChange={(e) => setNewCollab({ ...newCollab, website: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Offer"
                    className="input-field"
                    value={newCollab.offer}
                    onChange={(e) => setNewCollab({ ...newCollab, offer: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Postule Form"
                    className="input-field"
                    value={newCollab.postuleForm}
                    onChange={(e) => setNewCollab({ ...newCollab, postuleForm: e.target.value })}
                />
                <label className="custom-file" htmlFor="fileInput">
                    <input
                        type="file"
                        className="input-field"
                        id="fileInput"
                        onChange={(e) => setNewCollab({ ...newCollab, imgFile: e.target.files[0] })}
                    />
                    Choose a file...
                </label>
                {newCollab.imgFile && (
                    <div className="valid-feedback">
                        {newCollab.imgFile.name}
                    </div>
                )}

                <button onClick={handleAddCollab} className="submit-button">Add Collab</button>
            </div>
        </div>
    );
};

export default CollabHandler;
