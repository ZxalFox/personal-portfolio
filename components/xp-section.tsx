import React from "react";

const ExperiencesSection = () => {
  const timelineData = [
    {
      id: 1,
      title: "Bachelor of Information Systems",
      company: "Federal University of Lavras",
      date: "2022 - Present",
      description: "Currently pursuing a degree in Information Systems.",
      icon: "🎓",
    },
    {
      id: 2,
      title: "Development Intern",
      company: "Gooxxy",
      date: "2023 - 2024",
      description:
        "Gained hands-on experience in software development and team collaboration.",
      icon: "👨‍💻",
    },
    {
      id: 3,
      title: "Software Engineer Junior",
      company: "Gooxxy",
      date: "2025 - Present",
      description:
        "Working on full-stack development projects using modern technologies.",
      icon: "💻",
    },
  ];

  return (
    <section id="experiences" className="py-16 bg-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center ">
          Experiences & Education
        </h2>
        <div className="relative">
          <div className="absolute lg:left-1/2 w-1 bg-orange-300 h-full transform -translate-x-1/2 "></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id}>
                <div className={`flex lg:hidden flex-row items-center w-full`}>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-orange-100 flex items-center justify-center ms-2">
                    <span className="text-white text-sm flex items-center justify-center w-8 h-8 text-center">
                      {index + 1}
                    </span>
                  </div>

                  <div className="px-4">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-4">{item.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-orange-900">
                            {item.title}
                          </h3>
                          <p className="text-orange-600">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-orange-800">{item.description}</p>
                      <p className="text-sm text-orange-500 mt-2">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`hidden lg:flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center w-full`}
                >
                  <div className="w-1/2 px-4">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-4">{item.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-orange-900">
                            {item.title}
                          </h3>
                          <p className="text-orange-600">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-orange-800">{item.description}</p>
                      <p className="text-sm text-orange-500 mt-2">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-orange-100 flex items-center justify-center mx-2">
                    <span className="text-white text-sm">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
