import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Star,
  MapPin,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Brain,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { College } from "../../data/colleges-data";

interface QuizResults {
  answers: any;
  collegeResults: College[];
  completedAt: string;
}

interface UserStats {
  statusCode: number;
  data: {
    user: {
      name: string;
      profileCompleted: boolean;
      avatar: string;
    };
    quizPerformance: {
      quizzesTaken: number;
      averageScore: number;
      lastQuizDate: string;
    };
    topInterests: Array<{
      interest: string;
      strength: string;
      score: number;
    }>;
    personalityInsights: {
      strongestTrait: string;
      traitDescription: string;
      suggestedCareerPath: string;
      confidenceLevel: number;
    };
    recommendations: string;
    nextSteps: string[];
  };
  message: string;
}

const DashboardContent = () => {
  const { currentUser, logout } = useAuth();
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);

  useEffect(() => {
    // Load quiz results from localStorage
    const savedResults = localStorage.getItem("quizResults");
    if (savedResults) {
      try {
        const results = JSON.parse(savedResults);
        setQuizResults(results);

        // Mock user stats based on quiz completion
        const mockUserStats: UserStats = {
          statusCode: 200,
          data: {
            user: {
              name:
                currentUser?.displayName ||
                currentUser?.email?.split("@")[0] ||
                "John Doe",
              profileCompleted: true,
              avatar:
                currentUser?.photoURL ||
                "https://via.placeholder.com/100x100/6366f1/ffffff?text=User",
            },
            quizPerformance: {
              quizzesTaken: 2,
              averageScore: 8.1,
              lastQuizDate: results.completedAt,
            },
            topInterests: [
              {
                interest: "Technical",
                strength: "Very Strong",
                score: 9.2,
              },
              {
                interest: "Analytical",
                strength: "Strong",
                score: 7.8,
              },
              {
                interest: "Practical",
                strength: "Strong",
                score: 8.1,
              },
            ],
            personalityInsights: {
              strongestTrait: "Technical",
              traitDescription:
                "Your technical side shows very strong potential",
              suggestedCareerPath: "Engineering & Technology",
              confidenceLevel: 95,
            },
            recommendations:
              "Consider exploring engineering or computer science courses",
            nextSteps: [
              "Take another assessment to refine your career insights",
              "Explore courses in technical field",
            ],
          },
          message: "User stats retrieved successfully",
        };

        setUserStats(mockUserStats);
      } catch (error) {
        console.error("Error parsing quiz results:", error);
      }
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <section
      className="dashboard-section fix"
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 p-0">
            <div
              className="sidebar"
              style={{
                background: "#ffffff",
                minHeight: "100vh",
                boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
                borderRight: "1px solid #e2e8f0",
              }}
            >
              <div className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="bg-primary rounded-3 p-2 me-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                    }}
                  >
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h5 className="fw-bold text-dark mb-0">eduमार्ग</h5>
                </div>

                <nav className="nav flex-column">
                  <a
                    className="nav-link active d-flex align-items-center py-3 px-3 mb-2 rounded-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Brain className="me-3" size={20} />
                    Dashboard
                  </a>
                  <Link
                    to="/quiz"
                    className="nav-link d-flex align-items-center py-3 px-3 mb-2 rounded-3 text-muted"
                    style={{
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f1f5f9";
                      e.currentTarget.style.color = "#4f46e5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    <BookOpen className="me-3" size={20} />
                    Take Quiz
                  </Link>
                  <Link
                    to="/courses"
                    className="nav-link d-flex align-items-center py-3 px-3 mb-2 rounded-3 text-muted"
                    style={{
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f1f5f9";
                      e.currentTarget.style.color = "#4f46e5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    <GraduationCap className="me-3" size={20} />
                    Courses
                  </Link>
                  <Link
                    to="/about"
                    className="nav-link d-flex align-items-center py-3 px-3 mb-2 rounded-3 text-muted"
                    style={{
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f1f5f9";
                      e.currentTarget.style.color = "#4f46e5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    <Users className="me-3" size={20} />
                    About
                  </Link>
                </nav>

                <div className="mt-auto pt-4">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-secondary w-100 py-2 rounded-3"
                    style={{
                      border: "1px solid #e2e8f0",
                      color: "#64748b",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#ef4444";
                      e.currentTarget.style.color = "#ef4444";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-10 col-md-9 p-4">
            {/* Welcome Header */}
            <div
              className="rounded-4 p-5 mb-4 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                color: "white",
              }}
            >
              {/* Background Illustration */}
              <div
                className="position-absolute top-0 end-0 h-100 d-flex align-items-center"
                style={{ opacity: 0.1 }}
              >
                <div className="d-flex gap-4">
                  <BookOpen size={120} />
                  <GraduationCap size={100} />
                  <Brain size={110} />
                </div>
              </div>

              <div className="row align-items-center position-relative">
                <div className="col-md-8">
                  <h1 className="display-6 fw-bold mb-2">
                    Hello,{" "}
                    {userStats?.data.user.name ||
                      currentUser.displayName ||
                      currentUser.email?.split("@")[0] ||
                      "Student"}
                    ! 👋
                  </h1>
                  <p className="fs-5 mb-4 opacity-90">
                    {userStats
                      ? "Let's continue your learning journey today"
                      : "Ready to discover your perfect college match?"}
                  </p>
                  <p className="mb-4 opacity-80">
                    {userStats
                      ? `Your ${userStats.data.personalityInsights.strongestTrait.toLowerCase()} personality shows great potential for ${
                          userStats.data.personalityInsights.suggestedCareerPath
                        }.`
                      : "Set your study plan and growth with our AI-powered recommendations"}
                  </p>

                  {userStats && (
                    <div className="d-flex gap-3">
                      <div className="d-flex align-items-center bg-white bg-opacity-20 rounded-pill px-3 py-2">
                        <CheckCircle className="me-2" size={16} />
                        <span className="small fw-semibold">
                          Profile Complete
                        </span>
                      </div>
                      <div className="d-flex align-items-center bg-white bg-opacity-20 rounded-pill px-3 py-2">
                        <TrendingUp className="me-2" size={16} />
                        <span className="small fw-semibold">
                          {userStats.data.quizPerformance.quizzesTaken} Quizzes
                          Completed
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-4 text-md-end mt-4 mt-md-0">
                  <Link
                    to="/quiz"
                    className="btn btn-light btn-lg px-4 py-3 rounded-4 fw-semibold"
                    style={{
                      color: "#4f46e5",
                      boxShadow: "0 8px 32px rgba(255,255,255,0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 40px rgba(255,255,255,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(255,255,255,0.3)";
                    }}
                  >
                    <BookOpen className="me-2" size={20} />
                    {userStats ? "Take Quiz Again" : "Start Learning"}
                  </Link>
                </div>
              </div>
            </div>

            {/* Quiz Results Display */}
            {quizResults ? (
              <div className="row g-4 mb-5">
                {/* Quiz Summary */}
                <div className="col-12">
                  <div
                    className="bg-white rounded-4 shadow-lg p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <div
                          className="bg-primary rounded-circle p-3 me-3"
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                          }}
                        >
                          <Brain className="text-white" size={28} />
                        </div>
                        <div>
                          <h3
                            className="h4 fw-bold text-dark mb-1"
                            style={{
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            Your Quiz Results
                          </h3>
                          <p className="text-muted mb-0 fs-6">
                            Completed on{" "}
                            {new Date(
                              quizResults.completedAt
                            ).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <Link
                        to="/quiz"
                        className="btn px-4 py-3 rounded-4 fw-semibold text-white border-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                          boxShadow: "0 8px 32px rgba(16, 185, 129, 0.4)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow =
                            "0 12px 40px rgba(16, 185, 129, 0.6)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 32px rgba(16, 185, 129, 0.4)";
                        }}
                      >
                        <ArrowRight className="me-2" size={18} />
                        Retake Quiz
                      </Link>
                    </div>

                    {/* Quiz Answers Summary */}
                    <div className="row g-4">
                      <div className="col-lg-3 col-md-6">
                        <div
                          className="bg-white rounded-4 p-4 text-center shadow-sm border-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-5px)";
                            e.currentTarget.style.boxShadow =
                              "0 16px 48px rgba(102, 126, 234, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(102, 126, 234, 0.3)";
                          }}
                        >
                          <Target className="mb-3" size={40} />
                          <h6 className="fw-bold mb-2 fs-5">Stream</h6>
                          <p className="mb-0 opacity-90">
                            {quizResults.answers[1] || "Not specified"}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div
                          className="bg-white rounded-4 p-4 text-center shadow-sm border-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                            color: "white",
                            boxShadow: "0 8px 32px rgba(16, 185, 129, 0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-5px)";
                            e.currentTarget.style.boxShadow =
                              "0 16px 48px rgba(16, 185, 129, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(16, 185, 129, 0.3)";
                          }}
                        >
                          <MapPin className="mb-3" size={40} />
                          <h6 className="fw-bold mb-2 fs-5">Location</h6>
                          <p className="mb-0 opacity-90">
                            {Array.isArray(quizResults.answers.location)
                              ? quizResults.answers.location
                                  .slice(0, 2)
                                  .join(", ")
                              : quizResults.answers.location || "Any"}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div
                          className="bg-white rounded-4 p-4 text-center shadow-sm border-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                            color: "white",
                            boxShadow: "0 8px 32px rgba(245, 158, 11, 0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-5px)";
                            e.currentTarget.style.boxShadow =
                              "0 16px 48px rgba(245, 158, 11, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(245, 158, 11, 0.3)";
                          }}
                        >
                          <Award className="mb-3" size={40} />
                          <h6 className="fw-bold mb-2 fs-5">Management</h6>
                          <p className="mb-0 opacity-90">
                            {quizResults.answers.management || "Any"}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div
                          className="bg-white rounded-4 p-4 text-center shadow-sm border-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                            color: "white",
                            boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-5px)";
                            e.currentTarget.style.boxShadow =
                              "0 16px 48px rgba(59, 130, 246, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 32px rgba(59, 130, 246, 0.3)";
                          }}
                        >
                          <BarChart3 className="mb-3" size={40} />
                          <h6 className="fw-bold mb-2 fs-5">Budget</h6>
                          <p className="mb-0 opacity-90">
                            {quizResults.answers.budget || "Not specified"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Colleges */}
                <div className="col-12">
                  <div
                    className="bg-white rounded-4 shadow-lg p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <div
                          className="bg-primary rounded-circle p-3 me-3"
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                          }}
                        >
                          <GraduationCap className="text-white" size={28} />
                        </div>
                        <div>
                          <h3
                            className="h4 fw-bold text-dark mb-1"
                            style={{
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            Your Recommended Colleges
                          </h3>
                          <p className="text-muted mb-0 fs-6">
                            {quizResults.collegeResults.length} colleges matched
                            to your preferences
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row g-4">
                      {quizResults.collegeResults.map((college, index) => (
                        <div key={index} className="col-lg-6">
                          <div
                            className="bg-white rounded-4 shadow-lg border-0 overflow-hidden h-100"
                            style={{
                              transition: "all 0.3s ease",
                              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-8px)";
                              e.currentTarget.style.boxShadow =
                                "0 16px 48px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow =
                                "0 8px 32px rgba(0,0,0,0.1)";
                            }}
                          >
                            <div className="row g-0">
                              <div className="col-md-5 position-relative">
                                <img
                                  src={college.image}
                                  alt={college.name}
                                  className="w-100 h-100 object-fit-cover"
                                  style={{ minHeight: "220px" }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://via.placeholder.com/300x220/6366f1/ffffff?text=${encodeURIComponent(
                                      college.name
                                    )}`;
                                  }}
                                />
                                {college.matchPercentage && (
                                  <div className="position-absolute top-0 start-0 m-3">
                                    <span
                                      className="badge px-3 py-2 rounded-pill fs-6"
                                      style={{
                                        background:
                                          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                                        color: "white",
                                        boxShadow:
                                          "0 4px 16px rgba(16, 185, 129, 0.4)",
                                      }}
                                    >
                                      {college.matchPercentage}% Match
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="col-md-7">
                                <div className="card-body p-4">
                                  <h5 className="fw-bold text-dark mb-3 fs-5">
                                    {college.name}
                                  </h5>
                                  <div className="d-flex align-items-center text-muted mb-3">
                                    <MapPin
                                      size={16}
                                      className="me-2 text-primary"
                                    />
                                    <span className="small">
                                      {college.location}
                                    </span>
                                    <span className="mx-3">•</span>
                                    <span
                                      className="badge px-3 py-1 rounded-pill small"
                                      style={{
                                        background:
                                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        color: "white",
                                      }}
                                    >
                                      {college.type}
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center me-4">
                                      <Star
                                        size={18}
                                        className="text-warning me-1"
                                      />
                                      <span className="fw-bold fs-5">
                                        {college.rating}
                                      </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <Users
                                        size={16}
                                        className="text-primary me-1"
                                      />
                                      <span className="small text-muted">
                                        {college.students} Students
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-4">
                                    <Award
                                      size={16}
                                      className="text-success me-2"
                                    />
                                    <span className="small text-muted">
                                      <strong>Fees:</strong> {college.fees}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() =>
                                      window.open(college.website, "_blank")
                                    }
                                    className="btn px-4 py-2 rounded-4 fw-semibold text-white border-0 w-100"
                                    style={{
                                      background:
                                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                      boxShadow:
                                        "0 4px 16px rgba(102, 126, 234, 0.3)",
                                      transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform =
                                        "translateY(-2px)";
                                      e.currentTarget.style.boxShadow =
                                        "0 8px 24px rgba(102, 126, 234, 0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform =
                                        "translateY(0)";
                                      e.currentTarget.style.boxShadow =
                                        "0 4px 16px rgba(102, 126, 234, 0.3)";
                                    }}
                                  >
                                    Learn More
                                    <ArrowRight className="ms-2" size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Insights */}
                {userStats && (
                  <div className="col-12">
                    <div
                      className="bg-white rounded-4 shadow-lg p-5"
                      style={{
                        background:
                          "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="bg-primary rounded-circle p-3 me-3"
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                          }}
                        >
                          <Zap className="text-white" size={28} />
                        </div>
                        <div>
                          <h3
                            className="h4 fw-bold text-dark mb-1"
                            style={{
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            Your Career Insights
                          </h3>
                          <p className="text-muted mb-0 fs-6">
                            AI-powered analysis of your personality and
                            interests
                          </p>
                        </div>
                      </div>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div
                            className="bg-white rounded-4 p-4 shadow-sm border-0"
                            style={{
                              background:
                                "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                            }}
                          >
                            <h6 className="fw-bold text-dark mb-4 fs-5">
                              <BarChart3
                                className="text-primary me-2"
                                size={20}
                              />
                              Top Interests
                            </h6>
                            {userStats.data.topInterests.map(
                              (interest, idx) => (
                                <div key={idx} className="mb-4">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="text-dark fw-semibold">
                                      {interest.interest}
                                    </span>
                                    <span
                                      className="badge px-3 py-1 rounded-pill"
                                      style={{
                                        background:
                                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        color: "white",
                                      }}
                                    >
                                      {interest.score}/10
                                    </span>
                                  </div>
                                  <div
                                    className="progress mb-2"
                                    style={{
                                      height: "8px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <div
                                      className="progress-bar"
                                      style={{
                                        width: `${
                                          (interest.score / 10) * 100
                                        }%`,
                                        background:
                                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        borderRadius: "10px",
                                      }}
                                    ></div>
                                  </div>
                                  <p className="small text-muted mb-0">
                                    {interest.strength}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="bg-white rounded-4 p-4 shadow-sm border-0"
                            style={{
                              background:
                                "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                            }}
                          >
                            <h6 className="fw-bold text-dark mb-4 fs-5">
                              <Brain className="text-primary me-2" size={20} />
                              Personality Insights
                            </h6>
                            <div
                              className="bg-white rounded-4 p-4 shadow-sm border-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                              }}
                            >
                              <h6 className="fw-bold mb-3 fs-5">
                                {
                                  userStats.data.personalityInsights
                                    .strongestTrait
                                }{" "}
                                Personality
                              </h6>
                              <p className="small mb-3 opacity-90">
                                {
                                  userStats.data.personalityInsights
                                    .traitDescription
                                }
                              </p>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="small">
                                  <strong>Suggested Path:</strong>
                                </span>
                                <span
                                  className="badge px-3 py-1 rounded-pill"
                                  style={{
                                    background: "rgba(255,255,255,0.2)",
                                    color: "white",
                                  }}
                                >
                                  {
                                    userStats.data.personalityInsights
                                      .suggestedCareerPath
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {/* No Quiz Results - Statistics Cards */}
                <div className="row g-4 mb-4">
                  {/* Statistics Cards */}
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                        color: "white",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="h2 fw-bold mb-1">500+</h3>
                          <p className="mb-0 opacity-90">Colleges Available</p>
                        </div>
                        <GraduationCap size={40} className="opacity-80" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        color: "white",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="h2 fw-bold mb-1">25k+</h3>
                          <p className="mb-0 opacity-90">Students Guided</p>
                        </div>
                        <Users size={40} className="opacity-80" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                        color: "white",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="h2 fw-bold mb-1">95%</h3>
                          <p className="mb-0 opacity-90">Success Rate</p>
                        </div>
                        <TrendingUp size={40} className="opacity-80" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                        color: "white",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="h2 fw-bold mb-1">4.8</h3>
                          <p className="mb-0 opacity-90">Average Rating</p>
                        </div>
                        <Star size={40} className="opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main CTA Card */}
                <div className="bg-white rounded-4 p-5 shadow-sm border text-center mb-4">
                  <div className="mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        background:
                          "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      }}
                    >
                      <Brain className="text-white" size={40} />
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">
                    Ready to Find Your Perfect College?
                  </h3>
                  <p className="text-muted mb-4 fs-6">
                    Take our AI-powered career guidance quiz to get personalized
                    college recommendations based on your interests, goals, and
                    preferences.
                  </p>
                  <Link
                    to="/quiz"
                    className="btn btn-lg px-5 py-3 rounded-4 fw-semibold text-white border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      boxShadow: "0 8px 32px rgba(79, 70, 229, 0.4)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 40px rgba(79, 70, 229, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(79, 70, 229, 0.4)";
                    }}
                  >
                    <BookOpen className="me-2" size={20} />
                    Start Career Guidance Quiz
                  </Link>
                </div>
              </div>
            )}

            {/* Additional Resources */}
            <div className="mt-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h3 className="h5 fw-bold text-dark mb-0">Quick Actions</h3>
                <span className="text-muted small">Explore more features</span>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <Link to="/courses" className="text-decoration-none">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0 text-center h-100"
                      style={{
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 32px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(0,0,0,0.1)";
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                        }}
                      >
                        <BookOpen className="text-white" size={28} />
                      </div>
                      <h6 className="fw-bold text-dark mb-2">Browse Courses</h6>
                      <p className="text-muted small mb-0">
                        Explore our comprehensive course catalog
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/about" className="text-decoration-none">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0 text-center h-100"
                      style={{
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 32px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(0,0,0,0.1)";
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        }}
                      >
                        <GraduationCap className="text-white" size={28} />
                      </div>
                      <h6 className="fw-bold text-dark mb-2">About eduमार्ग</h6>
                      <p className="text-muted small mb-0">
                        Learn more about our mission and values
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/contact" className="text-decoration-none">
                    <div
                      className="bg-white rounded-4 p-4 shadow-sm border-0 text-center h-100"
                      style={{
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 32px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(0,0,0,0.1)";
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                        }}
                      >
                        <Award className="text-white" size={28} />
                      </div>
                      <h6 className="fw-bold text-dark mb-2">Get Support</h6>
                      <p className="text-muted small mb-0">
                        Need help? Contact our support team
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardContent;
