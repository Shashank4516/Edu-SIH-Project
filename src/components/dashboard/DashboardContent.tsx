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
  Calendar,
  CheckCircle,
  ArrowRight,
  Activity,
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
    <section className="dashboard-section section-padding fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Welcome Header */}
            <div className="bg-primary bg-opacity-10 rounded-3 p-4 mb-5">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h1 className="h2 fw-bold text-dark mb-2">
                    Welcome back,{" "}
                    {userStats?.data.user.name ||
                      currentUser.displayName ||
                      currentUser.email}
                    ! 👋
                  </h1>
                  <p className="text-muted mb-0">
                    {userStats
                      ? `Your ${userStats.data.personalityInsights.strongestTrait.toLowerCase()} personality shows great potential for ${
                          userStats.data.personalityInsights.suggestedCareerPath
                        }.`
                      : "Ready to continue your educational journey? Here are your personalized recommendations."}
                  </p>
                  {userStats && (
                    <div className="mt-2">
                      <span className="badge bg-success me-2">
                        <CheckCircle className="me-1" size={14} />
                        Profile Complete
                      </span>
                      <span className="badge bg-primary">
                        <TrendingUp className="me-1" size={14} />
                        {userStats.data.quizPerformance.quizzesTaken} Quizzes
                        Completed
                      </span>
                    </div>
                  )}
                </div>
                <div className="col-md-4 text-md-end">
                  <div className="d-flex gap-2 justify-content-md-end">
                    <Link
                      to="/quiz"
                      className="btn btn-primary px-4 py-2 rounded-3 fw-semibold"
                    >
                      <BookOpen className="me-2" size={18} />
                      {userStats ? "Take Quiz Again" : "Take Career Quiz"}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline-secondary px-4 py-2 rounded-3 fw-semibold"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* User Stats Section */}
            {userStats && (
              <div className="mb-5">
                <div className="row g-4 mb-4">
                  {/* Quiz Performance */}
                  <div className="col-md-6 col-lg-3">
                    <div className="bg-white rounded-3 p-4 shadow-sm border h-100">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                          <BarChart3 className="text-primary" size={24} />
                        </div>
                        <h6 className="fw-semibold text-dark mb-0">
                          Quiz Performance
                        </h6>
                      </div>
                      <div className="mb-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-muted">
                            Quizzes Taken
                          </span>
                          <span className="fw-bold text-primary">
                            {userStats.data.quizPerformance.quizzesTaken}
                          </span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-muted">
                            Average Score
                          </span>
                          <span className="fw-bold text-success">
                            {userStats.data.quizPerformance.averageScore}/10
                          </span>
                        </div>
                      </div>
                      <div className="small text-muted">
                        <Calendar size={14} className="me-1" />
                        Last:{" "}
                        {new Date(
                          userStats.data.quizPerformance.lastQuizDate
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Personality Insights */}
                  <div className="col-md-6 col-lg-3">
                    <div className="bg-white rounded-3 p-4 shadow-sm border h-100">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                          <Brain className="text-success" size={24} />
                        </div>
                        <h6 className="fw-semibold text-dark mb-0">
                          Personality
                        </h6>
                      </div>
                      <div className="mb-2">
                        <span className="badge bg-success bg-opacity-10 text-success fw-semibold">
                          {userStats.data.personalityInsights.strongestTrait}
                        </span>
                      </div>
                      <div className="small text-muted mb-2">
                        {userStats.data.personalityInsights.traitDescription}
                      </div>
                      <div className="d-flex align-items-center">
                        <div
                          className="progress flex-grow-1 me-2"
                          style={{ height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{
                              width: `${userStats.data.personalityInsights.confidenceLevel}%`,
                            }}
                          ></div>
                        </div>
                        <span className="small fw-bold text-success">
                          {userStats.data.personalityInsights.confidenceLevel}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Career Path */}
                  <div className="col-md-6 col-lg-3">
                    <div className="bg-white rounded-3 p-4 shadow-sm border h-100">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                          <Target className="text-warning" size={24} />
                        </div>
                        <h6 className="fw-semibold text-dark mb-0">
                          Career Path
                        </h6>
                      </div>
                      <div className="mb-2">
                        <span className="fw-semibold text-dark">
                          {
                            userStats.data.personalityInsights
                              .suggestedCareerPath
                          }
                        </span>
                      </div>
                      <div className="small text-muted">
                        {userStats.data.recommendations}
                      </div>
                    </div>
                  </div>

                  {/* Profile Status */}
                  <div className="col-md-6 col-lg-3">
                    <div className="bg-white rounded-3 p-4 shadow-sm border h-100">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-info bg-opacity-10 rounded-circle p-2 me-3">
                          <Activity className="text-info" size={24} />
                        </div>
                        <h6 className="fw-semibold text-dark mb-0">Profile</h6>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <CheckCircle className="text-success me-2" size={16} />
                        <span className="small text-success fw-semibold">
                          Profile Complete
                        </span>
                      </div>
                      <div className="small text-muted">
                        <strong>Name:</strong> {userStats.data.user.name}
                      </div>
                      <div className="small text-muted">
                        <strong>Email:</strong> {currentUser.email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Interests */}
                <div className="bg-white rounded-3 p-4 shadow-sm border mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h5 className="fw-bold text-dark mb-0">
                      <Zap className="text-primary me-2" size={24} />
                      Your Top Interests & Strengths
                    </h5>
                    <span className="badge bg-primary">Top 3</span>
                  </div>

                  <div className="row g-3">
                    {userStats.data.topInterests.map((interest, index) => (
                      <div key={index} className="col-md-4">
                        <div className="border rounded-3 p-3 h-100">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="fw-semibold text-dark mb-0">
                              {interest.interest}
                            </h6>
                            <span className="badge bg-primary bg-opacity-10 text-primary">
                              {interest.score}/10
                            </span>
                          </div>
                          <div className="mb-2">
                            <span
                              className={`badge ${
                                interest.strength === "Very Strong"
                                  ? "bg-success"
                                  : interest.strength === "Strong"
                                  ? "bg-warning"
                                  : "bg-secondary"
                              } bg-opacity-10 ${
                                interest.strength === "Very Strong"
                                  ? "text-success"
                                  : interest.strength === "Strong"
                                  ? "text-warning"
                                  : "text-secondary"
                              } fw-semibold`}
                            >
                              {interest.strength}
                            </span>
                          </div>
                          <div className="progress" style={{ height: "8px" }}>
                            <div
                              className={`progress-bar ${
                                interest.strength === "Very Strong"
                                  ? "bg-success"
                                  : interest.strength === "Strong"
                                  ? "bg-warning"
                                  : "bg-secondary"
                              }`}
                              style={{
                                width: `${(interest.score / 10) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-white rounded-3 p-4 shadow-sm border mb-4">
                  <h5 className="fw-bold text-dark mb-3">
                    <ArrowRight className="text-primary me-2" size={24} />
                    Recommended Next Steps
                  </h5>
                  <div className="row g-3">
                    {userStats.data.nextSteps.map((step, index) => (
                      <div key={index} className="col-md-6">
                        <div className="d-flex align-items-start">
                          <div
                            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                            style={{ width: "24px", height: "24px" }}
                          >
                            <span className="text-white small fw-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0 text-dark">{step}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-top">
                    <Link to="/quiz" className="btn btn-primary me-3">
                      <Brain className="me-2" size={16} />
                      Take Another Quiz
                    </Link>
                    <Link to="/courses" className="btn btn-outline-primary">
                      <BookOpen className="me-2" size={16} />
                      Explore Courses
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Quiz Results Section */}
            {quizResults && quizResults.collegeResults.length > 0 && (
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h4 fw-bold text-dark">
                    Your Personalized College Recommendations
                  </h3>
                  <span className="badge bg-success px-3 py-2">
                    <TrendingUp className="me-1" size={16} />
                    AI Matched
                  </span>
                </div>

                <div className="row g-4">
                  {quizResults.collegeResults.map((college, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="bg-white rounded-3 shadow-sm border overflow-hidden h-100">
                        <div className="row g-0">
                          <div className="col-4">
                            <img
                              src={college.image}
                              alt={college.name}
                              className="w-100 h-100 object-fit-cover"
                              style={{ minHeight: "200px" }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/300x200/6366f1/ffffff?text=${encodeURIComponent(
                                  college.name
                                )}`;
                              }}
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div className="flex-grow-1 me-2">
                                  <h5
                                    className="card-title fw-bold text-dark mb-1"
                                    style={{ fontSize: "1rem" }}
                                  >
                                    {college.name}
                                  </h5>
                                  <div className="d-flex align-items-center text-muted mb-2 small">
                                    <MapPin size={12} className="me-1" />
                                    <span>{college.location}</span>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Star
                                    size={14}
                                    className="text-warning me-1"
                                  />
                                  <span className="small fw-bold text-dark">
                                    {college.rating}
                                  </span>
                                </div>
                              </div>

                              <div className="small text-muted mb-2">
                                <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold mb-1">
                                  {college.type}
                                </span>
                              </div>

                              <div className="row g-2 mb-2 small">
                                <div className="col-6">
                                  <div className="d-flex align-items-center">
                                    <Users size={12} className="me-1" />
                                    <span>{college.students}</span>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="d-flex align-items-center">
                                    <Award size={12} className="me-1" />
                                    <span>{college.fees}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge bg-success small">
                                  {college.matchPercentage}% Match
                                </span>
                                <button
                                  onClick={() =>
                                    window.open(college.website, "_blank")
                                  }
                                  className="btn btn-sm btn-primary rounded-3 fw-semibold"
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <Link
                    to="/quiz"
                    className="btn btn-outline-primary px-4 py-2 rounded-3 fw-semibold"
                  >
                    Retake Quiz for Updated Recommendations
                  </Link>
                </div>
              </div>
            )}

            {/* No Quiz Results */}
            {!quizResults && (
              <div className="bg-white rounded-3 p-5 shadow-sm border text-center">
                <GraduationCap className="text-primary mb-3" size={64} />
                <h3 className="h4 fw-bold text-dark mb-3">
                  Ready to Find Your Perfect College?
                </h3>
                <p className="text-muted mb-4">
                  Take our AI-powered career guidance quiz to get personalized
                  college recommendations based on your interests, goals, and
                  preferences.
                </p>
                <Link
                  to="/quiz"
                  className="btn btn-primary btn-lg px-5 py-3 rounded-3 fw-semibold"
                >
                  Take Career Guidance Quiz
                </Link>
              </div>
            )}

            {/* Additional Resources */}
            <div className="mt-5">
              <h3 className="h4 fw-bold text-dark mb-4">Explore More</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="bg-white rounded-3 p-4 shadow-sm border text-center">
                    <BookOpen className="text-primary mb-3" size={48} />
                    <h5 className="fw-semibold text-dark mb-2">
                      Browse Courses
                    </h5>
                    <p className="text-muted small mb-3">
                      Explore our comprehensive course catalog
                    </p>
                    <Link
                      to="/courses"
                      className="btn btn-outline-primary btn-sm rounded-3 fw-semibold"
                    >
                      View Courses
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-3 p-4 shadow-sm border text-center">
                    <GraduationCap className="text-primary mb-3" size={48} />
                    <h5 className="fw-semibold text-dark mb-2">
                      About EduSpace
                    </h5>
                    <p className="text-muted small mb-3">
                      Learn more about our mission and values
                    </p>
                    <Link
                      to="/about"
                      className="btn btn-outline-primary btn-sm rounded-3 fw-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white rounded-3 p-4 shadow-sm border text-center">
                    <Award className="text-primary mb-3" size={48} />
                    <h5 className="fw-semibold text-dark mb-2">Get Support</h5>
                    <p className="text-muted small mb-3">
                      Need help? Contact our support team
                    </p>
                    <Link
                      to="/contact"
                      className="btn btn-outline-primary btn-sm rounded-3 fw-semibold"
                    >
                      Contact Us
                    </Link>
                  </div>
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
