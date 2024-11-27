import React, { useState } from 'react';
import { Gamepad2, User, KeyRound, Github, Twitter } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Login container */}
        <div className="relative bg-black/40 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-600/30 p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-violet-500/20 p-3 rounded-full">
              <Gamepad2 className="w-8 h-8 text-violet-300" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300">
            Player Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium pl-1">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg py-3 px-12 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent placeholder-gray-500"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium pl-1">Password</label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600/50 rounded-lg py-3 px-12 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent placeholder-gray-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-600 text-violet-500 focus:ring-violet-500 bg-gray-900/50" />
                <span className="text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg py-3 font-medium hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            >
              Login to Continue
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">Don't have an account?{' '}
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
                Register now
              </a>
            </p>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-violet-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;