import React from 'react';

function About() {
  return (
    <>
      <div className="h-auto bg-gray-50 py-8 px-4 md:px-16">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">**Who I Am!**</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              I am Rishabh Shukla, graduated from Dr. APJ Abdul Kalam Technical University (AKTU) in 2025 with a degree
              in Computer Science and Engineering (CSE). I have a strong foundation in{' '}
              <span className="text-xl font-semibold text-blue-600">MERN</span> stack, building user-friendly
              applications and exploring innovative technologies. I enjoy creating meaningful solutions that combine
              functionality with a seamless user experience. My journey includes working on diverse projects,
              contributing to open-source, and continuously refining my skills as the tech industry evolves.
            </p>
            <p className="mt-4 text-gray-700">
              Beyond programming, I express my creativity through hobbies such as exploring new things and gaming. I
              also meet new people to widen my network and share ideas with them. On different platforms, you can find
              me sharing my learning journey and tips for beginners on how to make programming more accessible to
              anyone.
            </p>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold underline mb-2">Skills:</h2>
              <p className="text-gray-800 text-lg">
                JavaScript, React.js, Node.js, MongoDB, SQL, Express.js, React Native, C/C++, Python, Tailwind CSS,
                Bootstrap, Power BI, Firebase
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/3">
            <img
              src="https://i.pinimg.com/736x/84/d1/fb/84d1fb8bfbe8b1ea2b12ab9e7ad9890b.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
