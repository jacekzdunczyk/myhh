"use client";

import { useState } from "react";
import { useWizard } from "@/lib/wizard-context";
import TextInput from "@/components/ui/TextInput";

export default function Step1SignUp() {
  const { data, updateData, nextStep } = useWizard();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!data.firstName.trim()) errs.firstName = "First name is required";
    if (!data.lastName.trim()) errs.lastName = "Last name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Invalid email address";
    if (!data.password) errs.password = "Password is required";
    else if (data.password.length < 8)
      errs.password = "Password must be at least 8 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) nextStep();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - image */}
      <div className="hidden lg:block lg:w-[40%] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-sky-200 to-sky-400 flex items-end justify-center overflow-hidden">
              <div className="w-3/4 h-3/4 bg-gradient-to-t from-amber-100 to-amber-200 rounded-t-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-12">
        <div className="mb-8">
          <h2 className="text-lg font-light tracking-wide">
            <span className="font-normal">My</span>
            <span className="italic">headhunter</span>
          </h2>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          Join us for free
        </h1>
        <p className="text-muted text-sm mb-8">
          Create an account to contact headhunters, see job opportunities, buy
          exclusive leads, update membership and many more.
        </p>

        {/* Social sign-up buttons */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-3 bg-[#0077B5] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#006399] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Sign Up with LinkedIn
          </button>
          <button
            type="button"
            className="w-14 h-14 flex items-center justify-center border border-border rounded-lg hover:bg-surface transition-colors shrink-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="w-14 h-14 flex items-center justify-center border border-border rounded-lg hover:bg-surface transition-colors shrink-0"
          >
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <TextInput
                placeholder="First name"
                value={data.firstName}
                onChange={(e) => updateData({ firstName: e.target.value })}
              />
              {errors.firstName && (
                <p className="text-xs text-accent mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <TextInput
                placeholder="Last name"
                value={data.lastName}
                onChange={(e) => updateData({ lastName: e.target.value })}
              />
              {errors.lastName && (
                <p className="text-xs text-accent mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <TextInput
              type="email"
              placeholder="Email address"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
            />
            {errors.email && (
              <p className="text-xs text-accent mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <TextInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              onChange={(e) => updateData({ password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {showPassword ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </>
                )}
              </svg>
            </button>
            {errors.password && (
              <p className="text-xs text-accent mt-1">{errors.password}</p>
            )}
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <span className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
              <input
                type="checkbox"
                checked={data.newsletter}
                onChange={(e) => updateData({ newsletter: e.target.checked })}
                className="sr-only"
              />
              <span
                className={`w-5 h-5 rounded border-2 transition-colors ${
                  data.newsletter ? "border-primary bg-primary" : "border-border"
                }`}
              />
              {data.newsletter && (
                <svg
                  className="absolute w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <span className="text-sm text-foreground">
              I would like to receive newsletter about My Headhunter news,
              announcements, and product updates
            </span>
          </label>

          <p className="text-xs text-muted">
            By continuing, you agree to{" "}
            <a href="#" className="font-semibold text-foreground hover:underline">
              MYHH Terms of Service
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-muted">
            Already a member?{" "}
            <a href="#" className="text-accent font-medium hover:underline">
              Log In here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
