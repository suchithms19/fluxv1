import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="mx-auto mb-6 text-green-500" size={64} />
          <h2 className="text-3xl font-bold mb-4 text-black">Thank You for Joining!</h2>
          <p className="text-lg mb-6 text-gray-600">
            We're thrilled to have you on our waitlist. We'll be in touch via email with updates and exciting news about Flux.
          </p>
          <p className="text-md mb-8 text-gray-500">
            In the meantime, feel free to explore more about what we're building and how it can help you.
          </p>
          <div className="flex justify-center">
            <button onClick={handleBackToHome} className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-colors">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}