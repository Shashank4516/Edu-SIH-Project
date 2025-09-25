import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      return setError("Please enter both first and last name");
    }

    if (!formData.email.trim()) {
      return setError("Please enter your email address");
    }

    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return setError("Please enter a valid email address");
    }

    try {
      setLoading(true);
      await signup(
        formData.email,
        formData.password,
        `${formData.firstName} ${formData.lastName}`
      );
      setSuccess(
        "Account created successfully! Taking you to the career guidance quiz..."
      );
      setTimeout(() => {
        navigate("/quiz"); // Redirect to quiz after successful registration
      }, 1500);
    } catch (error: any) {
      console.error("Registration error:", error);
      if (error.code === "auth/email-already-in-use") {
        setError(
          "An account with this email already exists. Please sign in instead."
        );
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address format.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak. Please choose a stronger password.");
      } else {
        setError("Failed to create an account. Please try again.");
      }
    }

    setLoading(false);
  };

  return (
    <>
      <section className="sign-in-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="sign-in-items">
                <div className="title text-center">
                  <h2>Create An Account</h2>
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
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt style-2">
                        <span>First Name *</span>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Last Name *</span>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Email Address *</span>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Create Password *</span>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <div className="icon">
                          <i className="far fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Confirm Password *</span>
                        <input
                          id="confirmPassword"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        <div className="icon">
                          <i className="far fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="from-cheak-items style-2">
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
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={loading}
                      >
                        {loading ? "Creating Account..." : "Sign Up"}
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <p>
                        Already have an account?{" "}
                        <Link to="/sign-in">Sign In</Link>
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

export default RegisterForm;
