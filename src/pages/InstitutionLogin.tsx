
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const InstitutionLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Navigate to institution sign up when implemented
    console.log('Navigate to institution sign up');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex">
        {/* Left side - Sky background with DNA logo and running people */}
        <div className="flex-1 relative overflow-hidden">
          {/* Sky Background with running people */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('/lovable-uploads/a5059404-73f8-499d-8d54-6b8e153ebda1.png')`
            }}
          >
          </div>

          {/* DNA Helix Logo with "STEM FOR SOCIETY" text positioned as in the reference */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <img 
              src="/lovable-uploads/ceabc523-dba1-475b-b670-7ed6b88782a1.png" 
              alt="STEM for Society Logo" 
              className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50 mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold text-white mb-4">STEM FOR SOCIETY</h1>
            <p className="text-xl text-white">Partner with us to transform education!</p>
          </div>
        </div>

        {/* Right side - Institution Login Form with 50% opacity glass effect */}
        <div className="w-full max-w-lg bg-white/50 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col justify-center px-12 py-16 relative">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">
                Partner with us
              </h2>
              <p className="text-gray-600 text-base">
                Enter your credentials to proceed further
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl placeholder-gray-400 focus:bg-white/80 focus:ring-2 focus:ring-[#0389FF] focus:border-transparent text-base shadow-sm" 
                />
              </div>

              <div className="relative">
                <Input 
                  type="password" 
                  placeholder="Confirm Password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl placeholder-gray-400 focus:bg-white/80 focus:ring-2 focus:ring-[#0389FF] focus:border-transparent text-base shadow-sm" 
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox 
                    id="remember" 
                    checked={rememberPassword} 
                    onCheckedChange={checked => setRememberPassword(checked as boolean)} 
                    className="data-[state=checked]:bg-[#0389FF] data-[state=checked]:border-[#0389FF] bg-white/60 border-white/60" 
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600 font-medium">
                    Remember Password
                  </label>
                </div>
                <button type="button" className="text-sm text-[#0389FF] hover:text-[#0389FF]/80 font-medium">
                  Forget Password?
                </button>
              </div>

              <Button className="w-full bg-[#0389FF] hover:bg-[#0389FF]/90 text-white py-4 rounded-xl font-bold text-base tracking-wide transition-colors shadow-lg">
                LOGIN
              </Button>
            </form>

            {/* Divider */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/40 backdrop-blur-sm text-gray-500 rounded-full">or sign in with</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="w-14 h-14 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:bg-white/80 transition-colors shadow-lg">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>
                <button className="w-14 h-14 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:bg-white/80 transition-colors shadow-lg">
                  <Mail className="w-6 h-6 text-[#0389FF]" />
                </button>
                <button className="w-14 h-14 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:bg-white/80 transition-colors shadow-lg">
                  <User className="w-6 h-6 text-[#0389FF]" />
                </button>
              </div>
            </div>

            {/* Bottom text */}
            <div className="text-center">
              <span className="text-gray-600 text-sm">
                Want to partner with us?{' '}
                <button onClick={handleSignUp} className="text-[#0389FF] hover:text-[#0389FF]/80 font-medium underline">
                  Sign up
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstitutionLogin;
