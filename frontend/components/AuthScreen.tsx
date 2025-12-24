
import React, { useState } from 'react';
import Snackbar from './Snackbar';

interface AuthScreenProps {
    onAuthSuccess: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
        const body = isLogin
            ? { email: formData.email, password: formData.password }
            : { name: formData.name, email: formData.email, password: formData.password };

        try {
            const response = await fetch(`${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Something went wrong');
                setSnackbarOpen(true);
                return;
            }

            if (isLogin) {
                localStorage.setItem('authToken', data.token);
                onAuthSuccess();
            } else {
                setSuccessMessage('Account created successfully! Please log in.');
                setSnackbarOpen(true);
                setFormData({ name: '', email: '', password: '' });
                setTimeout(() => {
                    setIsLogin(true);
                    setSuccessMessage('');
                    setSnackbarOpen(false);
                }, 2000);
            }
        } catch (err: any) {
            setError(`Failed to connect to server: ${err.message}`);
            setSnackbarOpen(true);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--bg-main)]">
            <div className="max-w-md w-full animate-fade-in">
                <header className="mb-12 text-center">
                    <div className="w-20 h-20 bg-[var(--primary)] rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold shadow-xl">S</div>
                    <h1 className="text-5xl font-bold text-[var(--primary)] mb-3 tracking-tight">SereneStudy</h1>
                    <p className="text-slate-400 font-light text-lg">Your AI-powered personalized academic partner.</p>
                </header>

                <div className="bg-white p-10 border border-[var(--sage-border)] rounded-[40px] shadow-sm">
                    {/* Toggle between Login and Signup */}
                    <div className="flex gap-2 mb-10 p-2 bg-[#F1F5F1] rounded-[28px]">
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(true);
                                setError('');
                                setSuccessMessage('');
                            }}
                            className={`flex-1 py-4 rounded-[22px] text-base font-bold transition-all ${isLogin ? 'bg-white text-[var(--sage-primary)] shadow-md' : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(false);
                                setError('');
                                setSuccessMessage('');
                            }}
                            className={`flex-1 py-4 rounded-[22px] text-base font-bold transition-all ${!isLogin ? 'bg-white text-[var(--sage-primary)] shadow-md' : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div>
                                <label className="block text-xs font-bold text-[var(--sage-primary)] uppercase tracking-[0.2em] mb-3 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full p-5 border border-[var(--sage-border)] rounded-[24px] bg-white focus:outline-none focus:ring-4 focus:ring-[var(--sage-primary)]/10 focus:border-[var(--sage-primary)] transition-all text-slate-700 placeholder:text-slate-300 text-lg"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-bold text-[var(--sage-primary)] uppercase tracking-[0.2em] mb-3 ml-1">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full p-5 border border-[var(--sage-border)] rounded-[24px] bg-white focus:outline-none focus:ring-4 focus:ring-[var(--sage-primary)]/10 focus:border-[var(--sage-primary)] transition-all text-slate-700 placeholder:text-slate-300 text-lg"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[var(--sage-primary)] uppercase tracking-[0.2em] mb-3 ml-1">Password</label>
                            <input
                                required
                                type="password"
                                className="w-full p-5 border border-[var(--sage-border)] rounded-[24px] bg-white focus:outline-none focus:ring-4 focus:ring-[var(--sage-primary)]/10 focus:border-[var(--sage-primary)] transition-all text-slate-700 placeholder:text-slate-300 text-lg"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-[var(--sage-primary)] text-white py-6 rounded-[28px] font-bold text-lg hover:bg-[#65a880] transition-all shadow-xl active:scale-[0.98] mt-6"
                        >
                            {isLogin ? 'Login to Space' : 'Create My Account'}
                        </button>
                    </form>
                </div>

            </div>

            <Snackbar
                isOpen={snackbarOpen}
                message={error || successMessage}
                type={error ? 'error' : 'success'}
                onClose={() => setSnackbarOpen(false)}
            />
        </div>
    );
};

export default AuthScreen;
