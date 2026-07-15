import React, { useState, useEffect } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Admin = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        link: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPortfolio();
    }, []);

    const fetchPortfolio = async () => {
        try {
            const res = await fetch('/api/portfolio');
            const data = await res.json();
            if (Array.isArray(data)) {
                setPortfolioItems(data);
            }
        } catch (error) {
            console.error('Failed to fetch portfolio:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/portfolio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({ title: '', category: '', image: '', link: '' });
                fetchPortfolio();
                alert('Item added successfully!');
            }
        } catch (error) {
            console.error('Failed to add item:', error);
            alert('Failed to add item.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
                <div className={`${styles.boxWidth} py-20`}>
                    <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] mb-10">
                        Portfolio Admin Pane
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-black-gradient p-8 rounded-2xl border border-gray-800">
                            <h2 className="text-2xl font-bold mb-6 text-secondary">Add New Project</h2>
                            <form onSubmit={handleSubmit} className="space-y-4 text-black">
                                <div>
                                    <label className="block text-sm font-medium text-dimWhite mb-1">Project Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                        placeholder="e.g., Case Management System"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dimWhite mb-1">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                        placeholder="e.g., Judicial Case Administration"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dimWhite mb-1">Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                        placeholder="e.g., https://..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dimWhite mb-1">Project Link</label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={formData.link}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                        placeholder="e.g., https://..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-blue-gradient text-primary font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {loading ? 'Adding...' : 'Add Project'}
                                </button>
                            </form>
                        </div>

                        <div className="bg-black-gradient p-8 rounded-2xl border border-gray-800">
                            <h2 className="text-2xl font-bold mb-6 text-secondary">Existing Projects</h2>
                            <div className="space-y-4">
                                {portfolioItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">{item.title}</h3>
                                                <p className="text-sm text-dimWhite">{item.category}</p>
                                            </div>
                                        </div>
                                        <a href={item.link} target="_blank" rel="noreferrer" className="text-secondary hover:underline text-sm font-medium">
                                            View Link
                                        </a>
                                    </div>
                                ))}
                                {portfolioItems.length === 0 && (
                                    <p className="text-dimWhite text-center py-4">No projects found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Admin;
