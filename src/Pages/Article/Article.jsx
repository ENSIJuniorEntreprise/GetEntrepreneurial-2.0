import React, { useState, useEffect } from 'react';
import './Article.css';

const Article = () => {
    const [articles, setArticles] = useState([]);
    const [editingArticleId, setEditingArticleId] = useState(null);
    const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";
//
    const initialNewArticleState = {
        title: '',
        content: '',
        date: '',
        img: '',
    };

    const [newArticle, setNewArticle] = useState({ ...initialNewArticleState });

    useEffect(() => {
        // Fetch articles when the component mounts
        fetch(`${baseURL}/api/article`)
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    const handleEditClick = (articleId) => {
        // Enable editing for the selected article
        setEditingArticleId(articleId);

        // Pre-fill the newArticle state with the current article's data
        const selectedArticle = articles.find(article => article._id === articleId);
        if (selectedArticle) {
            setNewArticle(selectedArticle);
        }
    };



    const handleDeleteArticle = (articleId) => {
        // Delete the article from the server and update the state
        fetch(`${baseURL}/api/article/${articleId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(deletedArticle => {
                setArticles(articles.filter(article => article._id !== deletedArticle._id));
            })
            .catch(error => console.error('Error deleting article:', error));
    };

    const handleSaveEdit = (articleId, updatedData) => {
        // Format the date before sending it to the server
        updatedData.date = new Date(updatedData.date).toISOString().split('T')[0];

        // Save the edited data to the server and update the state
        fetch(`${baseURL}/api/article/${articleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => response.json())
            .then(updatedArticle => {
                setArticles(articles.map(article => (article._id === articleId ? updatedArticle : article)));
                setEditingArticleId(null); // Disable editing mode
                setNewArticle({ ...initialNewArticleState }); // Reset the newArticle state
            })
            .catch(error => console.error('Error updating article:', error));
    };

    const handleAddArticle = () => {
        const formData = new FormData();
        formData.append('title', newArticle.title);
        formData.append('content', newArticle.content);
        formData.append('date', newArticle.date);
        formData.append('img', newArticle.imgFile); 

        fetch(`${baseURL}/api/article`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                setArticles([...articles, data]);
                setNewArticle({ ...initialNewArticleState }); 
            })
            .catch(error => console.error('Error adding article:', error));
    };

    return (
        <div>
            <h1>Article Handler</h1>
            <table className="article-table">
                <thead>
                    <tr>
                        <th className='th1'>Title</th>
                        <th>Content</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article._id}>
                            {editingArticleId === article._id ? (
                                <>
                                    <td><input type="text" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} /></td>
                                    <td><input type="text" value={newArticle.content} onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })} /></td>
                                    <td><input type="date" value={newArticle.date} onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })} /></td>
                                    <td><input type="text" value={newArticle.img} onChange={(e) => setNewArticle({ ...newArticle, img: e.target.value })} /></td>
                                    <td><button onClick={() => handleSaveEdit(article._id, newArticle)} className="submit-button">Save</button></td>
                                </>
                            ) : (
                                <>
                                    <td>{article.title}</td>
                                    <td>{article.content}</td>
                                    <td>{article.date}</td>
                                    <td>
                                        <a href={`${baseURL}/api/Article/ArticleImg/${article.img}`} target="_blank" rel="noopener noreferrer">{article.img}</a>
                                    </td>
                                    <td><button onClick={() => handleEditClick(article._id)} className="submit-button">Edit</button></td>
                                </>
                            )}
                            <td><button onClick={() => handleDeleteArticle(article._id)} className="submit-button">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="form-container">
                <h2>Add New Article</h2>
                <input
                    type="text"
                    placeholder="Title"
                    className="input-field"
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Content"
                    className="input-field"
                    value={newArticle.content}
                    onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Date"
                    className="input-field"
                    value={newArticle.date}
                    onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
                />
                <label className="custom-file">

                    <input
                        type="file"
                        className="input-field"
                        onChange={(e) => setNewArticle({ ...newArticle, imgFile: e.target.files[0] })}
                    />
                    Choose a file...
                </label>
                {newArticle.imgFile && (
                    <div className="valid-feedback">
                        {newArticle.imgFile.name}
                    </div>
                )}

                <button onClick={handleAddArticle} className="submit-button">Add Article</button>
            </div>
        </div>
    );
};

export default Article;


