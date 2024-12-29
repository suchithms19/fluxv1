import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from "../config";

export default function AnimatedSignUpForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        source: '',
        otherSource: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    const socialSources = [
        { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
        { id: 'instagram', label: 'Instagram', icon: '📷' },
        { id: 'twitter', label: 'Twitter', icon: '🐦' },
        { id: 'facebook', label: 'Facebook', icon: '👥' },
        { id: 'friend', label: 'Friend', icon: '👋' },
        { id: 'other', label: 'Other', icon: '✨' }
    ];
    
    const handleSubmitClick = async (event) => {
        event.preventDefault();
        
        // Validate form before submission
        const newErrors = {};
        
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.source) {
            newErrors.source = 'Please select how you heard about us';
        }

        if (formData.source === 'other' && !formData.otherSource.trim()) {
            newErrors.otherSource = 'Please specify how you heard about us';
        }

        setErrors(newErrors);

        // Only proceed with submission if there are no errors
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/api/submitform`, 
                    formData
                );
                console.log('Form submitted successfully:', response.data);
                navigate('/thankyou');
            } catch (error) {
                console.error('Error submitting form:', error.response ? error.response.data : error.message);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className={`w-full max-w-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <form onSubmit={handleSubmitClick} className="bg-white text-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                            aria-label="Go back"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black">Join the Waitlist</h2>
                        <div className="w-6"></div>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-black mb-2 font-semibold">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-100 text-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-customYellow`}
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-black mb-2 font-semibold">
                            How did you hear about us? <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                            {socialSources.map(source => (
                                <button
                                    key={source.id}
                                    type="button"
                                    onClick={() => handleChange({
                                        target: { name: 'source', value: source.id }
                                    })}
                                    className={`p-2 sm:p-3 rounded-lg text-left transition-all text-sm sm:text-base ${
                                        formData.source === source.id 
                                            ? 'bg-customYellow text-black' 
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    <span className="mr-1 sm:mr-2">{source.icon}</span>
                                    {source.label}
                                </button>
                            ))}
                        </div>
                        {errors.source && <p className="text-red-500 text-sm mt-1">{errors.source}</p>}
                    </div>

                    {formData.source === 'other' && (
                        <div className="mb-6">
                            <input
                                type="text"
                                name="otherSource"
                                required
                                placeholder="Please specify"
                                value={formData.otherSource}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-100 text-gray-800 border ${errors.otherSource ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-customYellow`}
                            />
                            {errors.otherSource && <p className="text-red-500 text-sm mt-1">{errors.otherSource}</p>}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-customYellow text-black py-2 sm:py-3 px-4 rounded-lg font-bold hover:scale-105 text-sm sm:text-base"
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}