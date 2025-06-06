import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: "React", level: 90, color: "bg-blue-600" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "CSS/Tailwind", level: 88, color: "bg-green-500" }
  ];

  const toolsSkills = [
    { name: "Git", level: 80, color: "bg-purple-600" },
    { name: "Figma", level: 75, color: "bg-pink-500" },
    { name: "VS Code", level: 95, color: "bg-blue-500" }
  ];

  const SkillBar = ({ skill }) => (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{width: `${skill.level}%`}}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Habilidades
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Frontend</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Herramientas</h3>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;