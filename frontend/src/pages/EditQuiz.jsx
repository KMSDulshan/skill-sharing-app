"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuizForm } from "../components/QuizForm";
import { quizzes as mockQuizzes } from "../utils/mockData";
import { Edit, AlertCircle, ArrowLeft, Loader2 } from "lucide-react";

export const EditQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch quiz by ID
    setTimeout(() => {
      const foundQuiz = mockQuizzes.find((q) => q.id === Number.parseInt(id));
      if (foundQuiz) {
        setQuiz(foundQuiz);
        setIsLoading(false);
      } else {
        setError("Quiz not found");
        setIsLoading(false);
      }
    }, 500);
  }, [id]);

  const handleSubmit = (quizData) => {
    // In a real app, this would be an API call to update the quiz
    console.log("Quiz updated:", quizData);
    // Redirect to home page
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6 flex justify-center items-center">
        <div className="text-center animate-fadeIn">
          <div className="relative mx-auto w-20 h-20 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-25"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
            <Loader2
              className="absolute inset-0 m-auto text-blue-500 animate-pulse"
              size={28}
            />
          </div>
          <p className="text-blue-600 font-medium">Loading quiz data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6 flex justify-center items-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center animate-slideUp">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <AlertCircle className="text-red-500" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-red-600 mb-2">{error}</h3>
          <p className="text-gray-600 mb-6">
            We couldn't find the quiz you're looking for.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform transition-all hover:-translate-y-1"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-3 mb-2">
            <Edit className="text-blue-600 h-7 w-7" />
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Edit Quiz
            </h1>
          </div>
          <p className="text-gray-600 mt-2 text-lg pl-10 border-l-4 border-blue-300 animate-pulse">
            Refine and perfect your quiz with our intuitive editor
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl animate-slideUp">
          <QuizForm initialData={quiz} onSubmit={handleSubmit} />
        </div>

        <div
          className="mt-6 flex justify-start animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => navigate("/home")}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default EditQuiz;
