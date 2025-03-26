import { useState, useEffect } from "react";

const UpdateItem = ({ item, onUpdate }) => {
 
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

   
    useEffect(() => {
        if (item) {
            setFormData(item);
        }
    }, [item]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(formData);
            setMessage("Item updated successfully!");
        }
    };

    if (!item) return <p>Loading item...</p>;

    return (
        <div className="update-form">
            <h2>Update Door</h2>
            {message && <p className="success-message">{message}</p>}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Update Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;

