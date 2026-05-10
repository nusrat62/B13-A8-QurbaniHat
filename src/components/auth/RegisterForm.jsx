"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
  UserPlus,
} from "lucide-react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Description,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const signUpData = {
      name: formData.get("name"),
      email: formData.get("email"),
      image: formData.get("image"),
      password: formData.get("password"),
    };

    // BetterAuth sign-up logic
    const { data, error } = await authClient.signUp.email(signUpData);

    if (error) {
      toast.error("Registration Failed", {
        description:
          error.message || "Unable to create account. Please try again.",
      });
    } else {
      toast.success("Account Created!", {
        description: "Welcome to QurbaniHat! You can now sign in.",
      });

      router.push("/login");
    }
  };

  return (
    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
      {/* Name Field */}
      <TextField
        isRequired
        name="name"
        type="text"
        minLength={3}
        validate={(value) => {
          if (!value.trim()) return "Name is required";
          if (value.trim().length < 3)
            return "Name must be at least 3 characters";
          return null;
        }}
      >
        <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
          <User className="w-4 h-4 text-accent" />
          Full Name
        </Label>
        <Input
          placeholder="Enter your full name"
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

      {/* Photo URL Field */}
      <TextField
        isRequired
        name="image"
        type="url"
        validate={(value) => {
          if (!value) return "Photo URL is required";
          if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(value))
            return "Please enter a valid image URL";
          return null;
        }}
      >
        <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
          <ImageIcon className="w-4 h-4 text-accent" />
          Photo URL
        </Label>
        <Input
          placeholder="Enter your photo URL"
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
          if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value))
            return "Must contain uppercase and lowercase letters";
          return null;
        }}
      >
        <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
          <Lock className="w-4 h-4 text-accent" />
          Password
        </Label>
        <div className="relative">
          <Input
            placeholder="Create a password"
            onChange={(e) => setPasswordValue(e.target.value)}
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
        <Description className="text-xs sm:text-sm text-muted font-body mt-1.5">
          Must be at least 6 characters with uppercase and lowercase letters
        </Description>
        <FieldError className="text-sm text-danger font-body mt-2 animate-in fade-in slide-in-from-top-1 duration-200" />
      </TextField>

      {/* Confirm Password Field */}
      <TextField
        isRequired
        name="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        validate={(value) => {
          if (!value) return "Please confirm your password";
          if (value !== passwordValue) return "Passwords do not match";
          return null;
        }}
      >
        <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
          <Lock className="w-4 h-4 text-accent" />
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            placeholder="Confirm your password"
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
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-body transition-colors duration-200 z-10"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        <FieldError className="text-sm text-danger font-body mt-2 animate-in fade-in slide-in-from-top-1 duration-200" />
      </TextField>

      {/* Register Button */}
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
        <UserPlus className="w-5 h-5" />
        Create Account
      </Button>

      {/* Terms & Privacy */}
      <p className="text-xs sm:text-sm text-muted font-body text-center">
        By registering, you agree to our{" "}
        <a
          href="/terms"
          className="text-accent hover:underline transition-colors duration-200"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          className="text-accent hover:underline transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </p>
    </Form>
  );
};

export default RegisterForm;
