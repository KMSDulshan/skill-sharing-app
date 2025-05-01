import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpenIcon } from 'lucide-react'
export const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpenIcon size={28} />
          <span className="text-xl font-bold">QuizMaster</span>
        </Link>
        <nav>
          <Link
            to="/create"
            className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            Create Quiz
          </Link>
        </nav>
      </div>
    </header>
  )
}
