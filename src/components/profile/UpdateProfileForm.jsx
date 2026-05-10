"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Image as ImageIcon,
  Save,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
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

const UpdateProfileForm = ({ user }) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(user.image || "");
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get user initials for fallback
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    setImageError(false);
    if (url) {
      setImageLoading(true);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const updateData = {
      name: formData.get("name"),
      image: formData.get("image"),
    };

    try {
      const { data, error } = await authClient.updateUser(updateData);

      if (error) {
        toast.error("Update Failed", {
          description:
            error.message || "Unable to update profile. Please try again.",
        });
      } else {
        toast.success("Profile Updated!", {
          description:
            "Your profile information has been updated successfully.",
        });
        // Redirect to profile page after short delay
        setTimeout(() => {
          router.push("/profile");
          router.refresh();
        }, 1000);
      }
    } catch (error) {
      toast.error("Update Failed", {
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push("/profile");
  };

  return (
    <div className="min-h-dvh bg-background pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="xl:container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted hover:text-primary
                       font-body font-medium transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Profile
          </Link>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border-2 border-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Decorative Header Bar */}
            <div className="h-2 bg-linear-to-r from-primary via-accent to-primary-hover" />

            <div className="p-6 sm:p-8 lg:p-12">
              {/* Form Header */}
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-heading mb-3">
                  Update Information
                </h1>
                <p className="text-sm sm:text-base text-muted font-body">
                  Update your display name and profile photo
                </p>
              </div>

              <Form className="space-y-8 sm:space-y-10" onSubmit={onSubmit}>
                {/* Profile Photo Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-heading font-bold text-heading">
                        Profile Photo
                      </h2>
                      <p className="text-xs sm:text-sm text-muted font-body">
                        Your photo will be visible to other users
                      </p>
                    </div>
                  </div>

                  {/* Photo Preview Card */}
                  <div className="bg-linear-to-br from-background to-surface border-2 border-border rounded-xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      {/* Preview */}
                      <div className="relative shrink-0">
                        {imageUrl && !imageError ? (
                          <div className="relative">
                            <Image
                              src={imageUrl}
                              alt="Profile preview"
                              width={128}
                              height={128}
                              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-surface shadow-xl ring-4 ring-accent/20"
                              onLoad={handleImageLoad}
                              onError={handleImageError}
                            />
                            {imageLoading && (
                              <div className="absolute inset-0 flex items-center justify-center bg-surface/80 rounded-full">
                                <Loader2 className="w-8 h-8 text-accent animate-spin" />
                              </div>
                            )}
                            {!imageLoading && !imageError && (
                              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-success rounded-full border-4 border-surface flex items-center justify-center shadow-lg">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-accent border-4 border-surface shadow-xl ring-4 ring-accent/20 flex items-center justify-center">
                              <span className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                                {getInitials(user.name)}
                              </span>
                            </div>
                            {imageError && imageUrl && (
                              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-danger rounded-full border-4 border-surface flex items-center justify-center shadow-lg">
                                <AlertCircle className="w-5 h-5 text-white" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Preview Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <p className="text-sm sm:text-base font-semibold text-heading font-body mb-2">
                          {imageLoading
                            ? "Loading image..."
                            : imageUrl && !imageError
                              ? "Image loaded successfully"
                              : imageError
                                ? "Failed to load image"
                                : "Showing initials fallback"}
                        </p>
                        <p className="text-xs sm:text-sm text-muted font-body">
                          {imageLoading
                            ? "Please wait while we load your image"
                            : imageUrl && !imageError
                              ? "Your profile photo looks great!"
                              : imageError
                                ? "Please check the URL and try again"
                                : "Enter a valid image URL to see preview"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Photo URL Input */}
                  <TextField
                    isRequired
                    name="image"
                    type="url"
                    defaultValue={user.image}
                    validate={(value) => {
                      if (!value) return "Photo URL is required";
                      if (
                        !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(
                          value,
                        )
                      )
                        return "Please enter a valid image URL (jpg, png, gif, webp, svg)";
                      return null;
                    }}
                  >
                    <Label className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body mb-2">
                      <ImageIcon className="w-4 h-4 text-accent" />
                      Photo URL
                    </Label>
                    <Input
                      placeholder="https://example.com/photo.jpg"
                      onChange={handleImageUrlChange}
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
                </div>

                {/* Divider */}
                <div className="border-t-2 border-border" />

                {/* Name Field Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-heading font-bold text-heading">
                        Display Name
                      </h2>
                      <p className="text-xs sm:text-sm text-muted font-body">
                        This is how others will see you
                      </p>
                    </div>
                  </div>

                  <TextField
                    isRequired
                    name="name"
                    type="text"
                    defaultValue={user.name}
                    minLength={3}
                    validate={(value) => {
                      if (!value.trim()) return "Name is required";
                      if (value.trim().length < 3)
                        return "Name must be at least 3 characters";
                      if (value.trim().length > 50)
                        return "Name must be less than 50 characters";
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
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 border-t-2 border-border">
                  {/* Cancel Button */}
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial px-6 py-3.5 sm:py-4 text-sm sm:text-base
                               bg-background border-2 border-border text-body rounded-lg font-semibold font-body
                               hover:bg-surface hover:border-muted hover:shadow-md
                               transition-all duration-200 active:scale-95
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
                               flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    Cancel
                  </button>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    isDisabled={isSubmitting}
                    className="flex-1 px-6 py-3.5 sm:py-4 text-sm sm:text-base
                               bg-gradient-accent text-primary rounded-lg font-bold font-body
                               shadow-md hover:shadow-xl
                               hover:brightness-110 hover:saturate-125
                               hover:-translate-y-0.5 hover:scale-[1.02]
                               transition-all duration-200 active:scale-95
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
                               flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        Update Information
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted font-body">
              Need help? Contact our{" "}
              <Link
                href="/support"
                className="text-accent hover:text-accent-hover hover:underline font-medium transition-colors"
              >
                support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
