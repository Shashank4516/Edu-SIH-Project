import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Brain,
  GraduationCap,
  Star,
  MapPin,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { collegesData, College } from "../../data/colleges-data";

interface QuizAnswers {
  [key: string]: any;
}

const QuizForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [collegeResults, setCollegeResults] = useState<College[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const navigate = useNavigate();

  // Base questions that all streams will see
  const baseQuestions = [
    {
      id: 1,
      question: "What was your stream in 12th grade?",
      type: "single",
      options: [
        "Science (PCM)",
        "Science (PCB)",
        "Commerce",
        "Arts/Humanities",
      ],
    },
    {
      id: "location",
      question: "Which district in Jammu & Kashmir do you prefer?",
      type: "multiple",
      options: [
        "Srinagar",
        "Jammu",
        "Anantnag",
        "Baramulla",
        "Kupwara",
        "Budgam",
        "Pulwama",
        "Bandipora",
        "Ganderbal",
        "Kulgam",
        "Shopian",
        "No Preference",
      ],
    },
    {
      id: "management",
      question: "What type of college management do you prefer?",
      type: "single",
      options: ["Government College", "Private College", "No Preference"],
    },
    {
      id: "budget",
      question: "What is your budget range for annual fees?",
      type: "single",
      options: [
        "Under ₹25,000",
        "₹25,000 - ₹50,000",
        "₹50,000 - ₹1,00,000",
        "Above ₹1,00,000",
        "No Budget Constraints",
      ],
    },
  ];

  // Stream-specific questions
  const streamQuestions: { [key: string]: any[] } = {
    "Science (PCM)": [
      {
        id: "pcm_course",
        question: "Which engineering/technical course interests you most?",
        type: "single",
        options: [
          "B.Tech Computer Science",
          "B.Tech Mechanical",
          "B.Tech Civil",
          "B.Tech Electrical",
          "BCA (Computer Applications)",
          "B.Sc Mathematics",
          "B.Tech Electronics",
        ],
      },
      {
        id: "pcm_career",
        question: "What career path appeals to you?",
        type: "multiple",
        options: [
          "Software Development",
          "Core Engineering",
          "Research & Development",
          "Data Science",
          "Robotics",
          "Civil Services",
          "Teaching",
        ],
      },
    ],
    "Science (PCB)": [
      {
        id: "pcb_course",
        question: "Which medical/life sciences course interests you most?",
        type: "single",
        options: [
          "MBBS",
          "BDS (Dental)",
          "BAMS (Ayurveda)",
          "Nursing",
          "Pharmacy",
          "Physiotherapy",
          "B.Sc Biology/Botany/Zoology",
        ],
      },
      {
        id: "pcb_career",
        question: "What healthcare career interests you?",
        type: "multiple",
        options: [
          "Clinical Practice",
          "Medical Research",
          "Public Health",
          "Healthcare Management",
          "Medical Teaching",
          "Pharmaceutical Industry",
          "Alternative Medicine",
        ],
      },
    ],
    Commerce: [
      {
        id: "commerce_course",
        question: "Which business/commerce course interests you most?",
        type: "single",
        options: [
          "B.Com",
          "BBA (Business Administration)",
          "B.Com Honors",
          "CA Foundation",
          "CS (Company Secretary)",
          "Economics Honors",
          "Hotel Management",
        ],
      },
      {
        id: "commerce_career",
        question: "What business career appeals to you?",
        type: "multiple",
        options: [
          "Banking & Finance",
          "Entrepreneurship",
          "Accounting",
          "Marketing",
          "HR Management",
          "Business Analytics",
          "Economics Research",
        ],
      },
    ],
    "Arts/Humanities": [
      {
        id: "arts_course",
        question: "Which arts/humanities course interests you most?",
        type: "single",
        options: [
          "B.A. English",
          "B.A. Psychology",
          "B.A. Political Science",
          "Mass Communication",
          "Social Work",
          "B.Ed (Education)",
          "Law (LLB)",
        ],
      },
      {
        id: "arts_career",
        question: "What career path interests you?",
        type: "multiple",
        options: [
          "Teaching",
          "Civil Services",
          "Journalism",
          "Social Work",
          "Psychology Practice",
          "Legal Career",
          "Creative Writing",
          "Public Administration",
        ],
      },
    ],
  };

  // Generate dynamic questions based on stream selection
  const getDynamicQuestions = () => {
    const selectedStream = answers[1];
    if (!selectedStream) return baseQuestions;

    const streamSpecific = streamQuestions[selectedStream] || [];
    return [...baseQuestions, ...streamSpecific];
  };

  // const questions = getDynamicQuestions();

  const handleAnswerChange = (
    questionId: string | number,
    answer: string,
    isMultiple = false
  ) => {
    setAnswers((prev) => {
      if (isMultiple) {
        const currentAnswers = prev[questionId] || [];
        if (currentAnswers.includes(answer)) {
          return {
            ...prev,
            [questionId]: currentAnswers.filter((a: string) => a !== answer),
          };
        } else {
          return { ...prev, [questionId]: [...currentAnswers, answer] };
        }
      } else {
        return { ...prev, [questionId]: answer };
      }
    });
  };

  const nextQuestion = () => {
    const currentQuestions = getDynamicQuestions();
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateCollegeSuggestions();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateCollegeSuggestions = async () => {
    setLoading(true);

    try {
      // Add a small delay to show the loading animation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Get the selected stream from quiz answers
      const selectedStream = answers[1];

      // Get stream-based university suggestions
      const streamBasedUniversities =
        getStreamBasedUniversities(selectedStream);

      setCollegeResults(streamBasedUniversities);
      setShowResults(true);
    } catch (error) {
      console.error("Error getting suggestions:", error);
      // Fallback to general colleges if there's an error
      setCollegeResults(collegesData["Science (PCM)"].slice(0, 5));
      setShowResults(true);
    } finally {
      setLoading(false);
    }
  };

  const getStreamBasedUniversities = (stream: string): College[] => {
    const streamUniversities =
      collegesData[stream as keyof typeof collegesData] || [];

    // Return colleges for the selected stream
    return streamUniversities.slice(0, 5);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setCollegeResults([]);
    setQuizStarted(false);
  };

  const proceedToDashboard = () => {
    // Store quiz results in localStorage for dashboard access
    localStorage.setItem(
      "quizResults",
      JSON.stringify({
        answers,
        collegeResults,
        completedAt: new Date().toISOString(),
      })
    );

    // Navigate to dashboard
    navigate("/dashboard");
  };

  if (!quizStarted) {
    return (
      <section className="quiz-intro-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center mb-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Brain className="text-white" size={40} />
                </div>
                <h1 className="display-4 fw-bold text-dark mb-4">
                  AI Career Guidance Quiz
                </h1>
                <p className="lead text-muted mb-5">
                  Find the perfect college in Jammu & Kashmir based on your
                  preferences and career goals
                </p>

                <div className="bg-white rounded-3 p-5 shadow-lg border mb-5">
                  <h3 className="h4 fw-bold text-dark mb-4">
                    What You'll Get:
                  </h3>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="text-center">
                        <GraduationCap
                          className="text-primary mb-3"
                          size={48}
                        />
                        <h5 className="fw-semibold text-dark mb-2">
                          Personalized Suggestions
                        </h5>
                        <p className="text-muted">
                          Colleges matched to your interests and goals
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <Sparkles className="text-primary mb-3" size={48} />
                        <h5 className="fw-semibold text-dark mb-2">
                          AI-Powered Analysis
                        </h5>
                        <p className="text-muted">
                          Advanced algorithms to find your perfect match
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <Award className="text-primary mb-3" size={48} />
                        <h5 className="fw-semibold text-dark mb-2">
                          Detailed Information
                        </h5>
                        <p className="text-muted">
                          Complete details about fees, placements, and
                          facilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={startQuiz}
                  className="btn btn-primary btn-lg px-5 py-3 rounded-3 fw-semibold"
                >
                  Start Quiz
                  <ArrowRight className="ms-2" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="quiz-loading-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4 animate-pulse"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Sparkles className="text-white" size={40} />
                </div>
                <h2 className="h3 fw-bold text-dark mb-4">
                  AI is analyzing your preferences...
                </h2>
                <p className="lead text-muted">
                  Getting personalized college suggestions
                </p>
                <div className="spinner-border text-primary mt-4" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    return (
      <section className="quiz-results-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="text-center mb-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-success rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h1 className="display-5 fw-bold text-dark mb-4">
                  Your AI-Powered College Recommendations
                </h1>
                <p className="lead text-muted mb-4">
                  Based on your quiz responses, here are the best colleges for
                  you
                </p>
                <div className="d-flex justify-content-center gap-3 mb-5">
                  <button
                    onClick={resetQuiz}
                    className="btn btn-outline-primary px-4 py-2 rounded-3 fw-semibold"
                  >
                    Take Quiz Again
                    <ArrowRight className="ms-2" size={20} />
                  </button>
                  <button
                    onClick={proceedToDashboard}
                    className="btn btn-primary px-4 py-2 rounded-3 fw-semibold"
                  >
                    Go to Dashboard
                    <ArrowRight className="ms-2" size={20} />
                  </button>
                </div>
              </div>

              <div className="row g-4">
                {collegeResults.map((college, index) => (
                  <div key={index} className="col-lg-12">
                    <div className="bg-white rounded-3 shadow-lg border overflow-hidden h-100">
                      <div className="row g-0">
                        <div className="col-md-4 position-relative">
                          <img
                            src={college.image}
                            alt={college.name}
                            className="w-100 h-100 object-fit-cover"
                            style={{ minHeight: "300px" }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(
                                college.name
                              )}`;
                            }}
                          />
                          {college.matchPercentage && (
                            <div className="position-absolute top-0 start-0 m-3">
                              <span className="badge bg-success fs-6 px-3 py-2">
                                {college.matchPercentage}% Match
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div className="flex-grow-1">
                                <h3 className="h4 fw-bold text-dark mb-2">
                                  {college.name}
                                </h3>
                                <div className="d-flex align-items-center text-muted mb-2">
                                  <MapPin size={16} className="me-1" />
                                  <span>{college.location}</span>
                                  <span className="mx-2">•</span>
                                  <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold">
                                    {college.type}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <Star size={20} className="text-warning me-1" />
                                <span className="h5 fw-bold text-dark mb-0">
                                  {college.rating}
                                </span>
                              </div>
                            </div>

                            <p className="text-muted mb-4">
                              {college.description}
                            </p>

                            <div className="row g-4 mb-4">
                              <div className="col-sm-6">
                                <h6 className="fw-semibold text-dark mb-2">
                                  Key Information
                                </h6>
                                <div className="small text-muted">
                                  <div className="d-flex align-items-center mb-1">
                                    <Users size={16} className="me-2" />
                                    <span>{college.students} Students</span>
                                  </div>
                                  <div className="d-flex align-items-center mb-1">
                                    <Award size={16} className="me-2" />
                                    <span>Fees: {college.fees}</span>
                                  </div>
                                  <div className="small">
                                    <strong>Placement:</strong>{" "}
                                    {college.placement}
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <h6 className="fw-semibold text-dark mb-2">
                                  Popular Courses
                                </h6>
                                <div className="d-flex flex-wrap gap-1">
                                  {college.courses
                                    .slice(0, 4)
                                    .map((course, idx) => (
                                      <span
                                        key={idx}
                                        className="badge bg-light text-dark small"
                                      >
                                        {course}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="fw-semibold text-dark mb-1">
                                  Facilities
                                </h6>
                                <div className="d-flex flex-wrap gap-1">
                                  {college.facilities
                                    .slice(0, 3)
                                    .map((facility, idx) => (
                                      <span
                                        key={idx}
                                        className="badge bg-success bg-opacity-10 text-success small"
                                      >
                                        {facility}
                                      </span>
                                    ))}
                                </div>
                              </div>
                              <button
                                onClick={() =>
                                  window.open(college.website, "_blank")
                                }
                                className="btn btn-primary px-4 py-2 rounded-3 fw-semibold"
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

              {/* Navigation Buttons */}
              <div className="text-center mt-5">
                <button
                  onClick={proceedToDashboard}
                  className="btn btn-primary btn-lg px-5 py-3 rounded-3 fw-semibold me-3"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={resetQuiz}
                  className="btn btn-outline-primary btn-lg px-5 py-3 rounded-3 fw-semibold"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestions = getDynamicQuestions();
  const question = currentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  return (
    <section className="quiz-form-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="d-flex justify-content-between small text-muted mb-2">
                <span>
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3 shadow-lg border p-5 mb-4">
              <h2 className="h3 fw-bold text-dark mb-4">{question.question}</h2>

              {/* Single Choice */}
              {question.type === "single" && (
                <div className="d-grid gap-3">
                  {question.options.map((option: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerChange(question.id, option)}
                      className={`btn text-start p-3 border-2 rounded-3 ${
                        answers[question.id] === option
                          ? "border-primary bg-primary bg-opacity-10 text-primary"
                          : "border-light bg-light text-dark"
                      }`}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className={`rounded-circle border-2 me-3 ${
                            answers[question.id] === option
                              ? "border-primary bg-primary"
                              : "border-secondary"
                          }`}
                          style={{ width: "16px", height: "16px" }}
                        >
                          {answers[question.id] === option && (
                            <div
                              className="bg-white rounded-circle m-1"
                              style={{ width: "8px", height: "8px" }}
                            ></div>
                          )}
                        </div>
                        {option}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Multiple Choice */}
              {question.type === "multiple" && (
                <div className="d-grid gap-3">
                  <p className="text-muted mb-3">Select all that apply:</p>
                  {question.options.map((option: string, index: number) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerChange(question.id, option, true)
                      }
                      className={`btn text-start p-3 border-2 rounded-3 ${
                        (answers[question.id] || []).includes(option)
                          ? "border-primary bg-primary bg-opacity-10 text-primary"
                          : "border-light bg-light text-dark"
                      }`}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className={`border-2 me-3 ${
                            (answers[question.id] || []).includes(option)
                              ? "border-primary bg-primary"
                              : "border-secondary"
                          }`}
                          style={{ width: "16px", height: "16px" }}
                        >
                          {(answers[question.id] || []).includes(option) && (
                            <CheckCircle className="text-white" size={12} />
                          )}
                        </div>
                        {option}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between align-items-center">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`btn px-4 py-2 rounded-3 fw-semibold ${
                  currentQuestion === 0
                    ? "btn-light text-muted"
                    : "btn-outline-primary"
                }`}
              >
                <ChevronLeft className="me-2" size={20} />
                Previous
              </button>

              <button
                onClick={nextQuestion}
                disabled={
                  !answers[question.id] ||
                  (question.type === "multiple" &&
                    (!answers[question.id] ||
                      answers[question.id].length === 0))
                }
                className={`btn px-4 py-2 rounded-3 fw-semibold ${
                  !answers[question.id] ||
                  (question.type === "multiple" &&
                    (!answers[question.id] ||
                      answers[question.id].length === 0))
                    ? "btn-secondary"
                    : "btn-primary"
                }`}
              >
                {currentQuestion === currentQuestions.length - 1
                  ? "Get Suggestions"
                  : "Next"}
                <ChevronRight className="ms-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizForm;
