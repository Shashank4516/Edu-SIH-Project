import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return setError("Please fill in all fields");
    }

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await login(email, password);
      setSuccess("Successfully signed in! Redirecting...");
      setTimeout(() => {
        navigate("/"); // Redirect to home page after successful login
      }, 1000);
    } catch (error: any) {
      console.error("Sign in error:", error);
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address format.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else {
        setError("Failed to sign in. Please check your credentials.");
      }
    }

    setLoading(false);
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }

    try {
      setError("");
      setSuccess("");
      setResetLoading(true);
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Check your inbox.");
    } catch (error: any) {
      console.error("Password reset error:", error);
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address format.");
      } else {
        setError("Failed to send password reset email. Please try again.");
      }
    }

    setResetLoading(false);
  };

  return (
    <>
      <section className="sign-in-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="sign-in-items">
                <div className="title text-center">
                  <h2 className="wow fadeInUp">Sign In to your Account</h2>
                </div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                <form onSubmit={handleSubmit} id="contact-form" method="POST">
                  <div className="row g-4">
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt style-2">
                        <span>Email Address *</span>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="form-clt">
                        <span>Password *</span>
                        <input
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <div className="icon">
                          <i className="far fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="from-cheak-items">
                        <div className="form-check d-flex gap-2 from-customradio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Remember Me
                          </label>
                        </div>
                        <span
                          onClick={handlePasswordReset}
                          style={{ cursor: "pointer", color: "#007bff" }}
                        >
                          {resetLoading ? "Sending..." : "Forgot Password?"}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={loading}
                      >
                        {loading ? "Signing In..." : "Sign In"}
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <p>
                        Don't have an account?{" "}
                        <Link to="/register">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInForm;
