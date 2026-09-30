
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [dashboardTab, setDashboardTab] = useState("overview");

  const courses = [
    {
      name: "React",
      description: "Learn React from fundamentals to advanced concepts."
    },
    {
      name: "JavaScript",
      description: "Master modern JavaScript programming."
    },
    {
      name: "Python",
      description: "Learn Python programming from scratch."
    },
    {
      name: "Java",
      description: "Learn Java and object-oriented programming."
    }
  ];

  function openCourse(courseName) {
    setSelectedCourse(courseName);
    setPage("courseDetails");
  }

  function handleLogin(e) {
    e.preventDefault();

    setLoggedIn(true);
    setPage("dashboard");
  }

  function handleLogout() {
    setLoggedIn(false);
    setPage("home");
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          Student Portal
        </div>

        <nav>

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("courses")}>
            Courses
          </button>

          {!loggedIn && (
            <button onClick={() => setPage("login")}>
              Login
            </button>
          )}

          {loggedIn && (
            <>
              <button onClick={() => setPage("dashboard")}>
                Dashboard
              </button>

              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}

        </nav>

      </header>


      {/* HOME PAGE */}
      {page === "home" && (

        <main className="home-page">

          <div className="welcome-box">

            <h1>
              Welcome to Student Portal
            </h1>

            <p>
              Learn programming, explore courses,
              and manage your student profile.
            </p>

            <button
              className="primary-button"
              onClick={() => setPage("courses")}
            >
              Explore Courses
            </button>

          </div>

        </main>

      )}


      {/* COURSES PAGE */}
      {page === "courses" && (

        <main className="page">

          <h1 className="page-title">
            Available Courses
          </h1>

          <div className="courses-container">

            {courses.map((course) => (

              <div
                className="course-card"
                key={course.name}
              >

                <h2>
                  {course.name}
                </h2>

                <p>
                  {course.description}
                </p>

                <button
                  className="primary-button"
                  onClick={() =>
                    openCourse(course.name)
                  }
                >
                  View Course
                </button>

              </div>

            ))}

          </div>

        </main>

      )}


      {/* COURSE DETAILS */}
      {page === "courseDetails" && (

        <main className="page">

          <div className="details-box">

            <h1>
              Course Details
            </h1>

            <h2>
              {selectedCourse}
            </h2>

            <p>
              You selected the {selectedCourse} course.
            </p>

            <h3>
              Topics
            </h3>

            <ul>

              <li>Fundamentals</li>

              <li>Practical Coding</li>

              <li>Projects</li>

              <li>Advanced Concepts</li>

              <li>Interview Preparation</li>

            </ul>

            <button
              className="primary-button"
              onClick={() => setPage("courses")}
            >
              Back to Courses
            </button>

          </div>

        </main>

      )}


      {/* LOGIN PAGE */}
      {page === "login" && (

        <main className="page">

          <div className="login-box">

            <h1>
              Student Login
            </h1>

            <form onSubmit={handleLogin}>

              <input
                type="email"
                placeholder="Enter Email"
                required
              />

              <input
                type="password"
                placeholder="Enter Password"
                required
              />

              <button
                type="submit"
                className="primary-button"
              >
                Login
              </button>

            </form>

          </div>

        </main>

      )}


      {/* DASHBOARD */}
      {page === "dashboard" && loggedIn && (

        <main className="page">

          <div className="dashboard">

            <h1>
              Student Dashboard
            </h1>

            <p>
              Manage your student account.
            </p>


            {/* DASHBOARD TABS */}

            <div className="tabs">

              <button
                onClick={() =>
                  setDashboardTab("overview")
                }
              >
                Overview
              </button>

              <button
                onClick={() =>
                  setDashboardTab("profile")
                }
              >
                Profile
              </button>

              <button
                onClick={() =>
                  setDashboardTab("settings")
                }
              >
                Settings
              </button>

            </div>


            {/* OVERVIEW */}

            {dashboardTab === "overview" && (

              <div className="tab-content">

                <h2>
                  Dashboard Overview
                </h2>

                <div className="stats">

                  <div className="stat-card">

                    <h3>4</h3>

                    <p>
                      Enrolled Courses
                    </p>

                  </div>


                  <div className="stat-card">

                    <h3>82%</h3>

                    <p>
                      Average Progress
                    </p>

                  </div>


                  <div className="stat-card">

                    <h3>12</h3>

                    <p>
                      Assignments
                    </p>

                  </div>

                </div>

              </div>

            )}


            {/* PROFILE */}

            {dashboardTab === "profile" && (

              <div className="tab-content">

                <h2>
                  My Profile
                </h2>

                <p>
                  <b>Name:</b> Student
                </p>

                <p>
                  <b>Email:</b> student@gmail.com
                </p>

                <p>
                  <b>Course:</b> Computer Science
                </p>

                <p>
                  <b>Year:</b> 4th Year
                </p>

              </div>

            )}


            {/* SETTINGS */}

            {dashboardTab === "settings" && (

              <div className="tab-content">

                <h2>
                  Settings
                </h2>

                <label>

                  <input type="checkbox" />

                  Enable Email Notifications

                </label>

                <br />
                <br />

                <label>

                  <input type="checkbox" />

                  Enable Course Reminders

                </label>

              </div>

            )}

          </div>

        </main>

      )}

    </div>
  );
}

export default App;