"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const signInData = {
      email: formData.get("email"),
      password: formData.get("password"),
      rememberMe: rememberMe,
    };

    // BetterAuth sign-in logic
    const { data, error } = await authClient.signIn.email(signInData);

    if (error) {
      toast.error("Login Failed", {
        description:
          error.message || "Invalid email or password. Please try again.",
      });
    } else {
      toast.success("Welcome Back!", {
        description: "You have successfully signed in.",
      });

      router.push("/");
    }
  };

  return (
    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
      {/* Email Field */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!value) return "Email is required";
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
          <Mail className="w-4 h-4 text-accent" />
          Email Address
        </Label>
        <Input
          placeholder="Enter your email"
          autoComplete="email"
          className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base font-body
                     bg-background border-2 border-border rounded-lg
                     text-body placeholder:text-muted
                     focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
                     data-invalid:border-danger data-invalid:focus:border-danger data-invalid:focus:ring-danger/20
                     data-valid:border-success data-valid:focus:border-success data-valid:focus:ring-success/20
                     transition-all duration-200"
        />
        <FieldError className="text-sm text-danger font-body mt-2 animate-in fade-in slide-in-from-top-1 duration-200" />
      </TextField>

      {/* Password Field */}
      <TextField
        isRequired
        name="password"
        type={showPassword ? "text" : "password"}
        minLength={6}
        validate={(value) => {
          if (!value) return "Password is required";
          if (value.length < 6) return "Password must be at least 6 characters";
          return null;
        }}
      >
        <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
          <Lock className="w-4 h-4 text-accent" />
          Password
        </Label>
        <div className="relative">
          <Input
            placeholder="Enter your password"
            className="w-full px-4 py-3 sm:py-3.5 pr-12 text-sm sm:text-base font-body
                       bg-background border-2 border-border rounded-lg
                       text-body placeholder:text-muted
                       focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
                       data-invalid:border-danger data-invalid:focus:border-danger data-invalid:focus:ring-danger/20
                       data-valid:border-success data-valid:focus:border-success data-valid:focus:ring-success/20
                       transition-all duration-200"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-body transition-colors duration-200 z-10"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        <FieldError className="text-sm text-danger font-body mt-2 animate-in fade-in slide-in-from-top-1 duration-200" />
      </TextField>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-2 border-border text-accent 
                       focus:ring-2 focus:ring-accent/20 cursor-pointer
                       transition-all duration-200"
          />
          <span className="text-sm text-body font-body group-hover:text-primary transition-colors duration-200">
            Remember me
          </span>
        </label>

        <a
          href="/forgot-password"
          className="text-sm text-accent hover:text-accent-hover hover:underline font-body font-medium transition-colors duration-200"
        >
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <Button
        type="submit"
        className="w-full px-6 py-3.5 sm:py-4 text-sm sm:text-base
                   bg-gradient-accent text-primary rounded-lg font-bold font-body
                   shadow-md hover:shadow-xl
                   hover:brightness-110 hover:saturate-125
                   hover:-translate-y-0.5 hover:scale-[1.02]
                   transition-all duration-200 active:scale-95
                   flex items-center justify-center gap-2"
      >
        <LogIn className="w-5 h-5" />
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
