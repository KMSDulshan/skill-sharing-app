"use client";
import { useNavigate } from "react-router-dom";
import { QuizForm } from "../components/QuizForm";
import { Sparkles } from "lucide-react";

export const CreateQuiz = () => {
  const navigate = useNavigate();

  const handleSubmit = (quizData) => {
    // In a real app, this would be an API call
    const newQuiz = {
      ...quizData,
      id: Date.now(),
    };
    // For demo purposes, we're just logging the new quiz
    console.log("New quiz created:", newQuiz);
    // Redirect to home page
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-blue-600 h-7 w-7" />
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Create New Quiz
            </h1>
          </div>
          <p className="text-gray-600 mt-2 text-lg pl-10 border-l-4 border-blue-300 animate-pulse">
            Craft your perfect quiz with our intuitive form
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl animate-slideUp">
          <QuizForm onSubmit={handleSubmit} />
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CreateQuiz;
