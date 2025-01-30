import React, { useState, useEffect } from "react";
import { FaUserCircle, FaUpload, FaBars } from "react-icons/fa";
import { MdOutlineWork, MdUpdate } from "react-icons/md";
import { AiOutlineProject, AiOutlineFileAdd } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";

function Dashboard() {
  const [userIp, setUserIp] = useState("Fetching IP...");
  const [selectedOption, setSelectedOption] = useState("Update Profile");
  const [isSliderOpen, setIsSliderOpen] = useState(true); // Controls slider visibility on mobile
  const [achievements, setAchievements] = useState([]); // Example state for achievements
  const [newAchievement, setNewAchievement] = useState(""); // Input for new achievement

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setUserIp(data.ip))
      .catch(() => setUserIp("Unknown IP"));
  }, []);

  const options = [
    { title: "Update Profile", icon: <BsFillPersonVcardFill size={24} /> },
    { title: "Manage Skills", icon: <MdUpdate size={24} /> },
    { title: "Work Experience", icon: <MdOutlineWork size={24} /> },
    { title: "Projects", icon: <AiOutlineProject size={24} /> },
    { title: "Upload Certificates", icon: <FaUpload size={24} /> },
    { title: "Achievements", icon: <AiOutlineFileAdd size={24} /> },
  ];

  // Add a new achievement
  const handleAddAchievement = () => {
    if (newAchievement.trim()) {
      setAchievements([...achievements, newAchievement]);
      setNewAchievement("");
    }
  };

  // Delete an achievement
  const handleDeleteAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Side Slider */}
      <div
        className={`${
          isSliderOpen ? "w-64" : "w-16"
        } bg-gray-800 p-4 transition-all duration-300 ease-in-out`}
      >
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsSliderOpen(!isSliderOpen)}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Slider Options */}
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={`flex items-center mb-4 p-2 rounded-lg cursor-pointer ${
                selectedOption === option.title ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedOption(option.title)}
            >
              <span className="mr-3">{option.icon}</span>
              {isSliderOpen && <span>{option.title}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <h1 className="text-3xl font-light mb-4">📂 {selectedOption}</h1>
        <p className="text-sm text-red-400 mb-6">
          ⚠️ Access Logged from IP: <span className="font-bold">{userIp}</span>
        </p>

        {/* Content based on selected option */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          {selectedOption === "Update Profile" && <UpdateProfileContent />}
          {selectedOption === "Manage Skills" && <ManageSkillsContent />}
          {selectedOption === "Work Experience" && <WorkExperienceContent />}
          {selectedOption === "Projects" && <ProjectsContent />}
          {selectedOption === "Upload Certificates" && <UploadCertificatesContent />}
          {selectedOption === "Achievements" && (
            <AchievementsContent
              achievements={achievements}
              newAchievement={newAchievement}
              setNewAchievement={setNewAchievement}
              onAdd={handleAddAchievement}
              onDelete={handleDeleteAchievement}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Placeholder components for each option
function UpdateProfileContent() {
  return <p>Update your profile information here.</p>;
}

function ManageSkillsContent() {
  return <p>Manage your skills here.</p>;
}

function WorkExperienceContent() {
  return <p>Add or update your work experience here.</p>;
}

function ProjectsContent() {
  return <p>View and manage your projects here.</p>;
}

function UploadCertificatesContent() {
  return <p>Upload your certificates here.</p>;
}

// Achievements Component
function AchievementsContent({
  achievements,
  newAchievement,
  setNewAchievement,
  onAdd,
  onDelete,
}) {
  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          value={newAchievement}
          onChange={(e) => setNewAchievement(e.target.value)}
          placeholder="Enter a new achievement"
          className="p-2 rounded-lg bg-gray-700 text-white w-full mb-2"
        />
        <button
          onClick={onAdd}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Add Achievement
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Achievements</h3>
        {achievements.length === 0 ? (
          <p>No achievements added yet.</p>
        ) : (
          <ul>
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 p-3 rounded-lg mb-2"
              >
                <span>{achievement}</span>
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;