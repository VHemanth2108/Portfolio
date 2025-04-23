import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, GraduationCap, Award } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Hemanth Vasireddi</h1>
          <p className="text-xl text-gray-600 mb-8">Data Analyst</p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hemanthvasireddi2@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="text-gray-600 mb-8">
            <p>📍 Hyderabad, Telangana | 📞 +91 9640818616</p>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-600" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Detail-oriented and analytical Data Analyst with internship experience in data validation, quality checks, and 
            reporting. Proficient in Excel, SQL, Power BI, and data processing, with a strong attention to detail and a problem-solving mindset. 
            Quick learner with excellent communication and collaboration skills, eager to contribute to data analytics and process improvement. 
            Available for immediate joining and open to relocation.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Data Analyst Intern</h3>
            <p className="text-gray-600 mb-4">Advertmotive, Hyderabad | Sep 2024 – Jan 2025</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Data Collection & Cleaning: Gathered and cleaned data from various sources to ensure accuracy and consistency for analysis.</li>
              <li>Data Validation: Performed regular data validation and quality checks to identify and resolve discrepancies or anomalies</li>
              <li>Dashboard Development: Assisted in designing and updating interactive dashboards using Power BI/Tableau for real-time data monitoring.</li>
              <li>SQL Querying: Wrote and optimized SQL queries to extract insights from relational databases.</li>
              <li>Excel Reporting: Generated weekly and monthly reports using Advanced Excel functions like PivotTables, VLOOKUP, and conditional formatting.</li>
              <li>Trend Analysis: Analyzed key business metrics to identify patterns, trends, and potential growth opportunities.</li>
              <li>Collaboration: Worked with cross-functional teams (marketing, sales, product) to understand data needs and deliver actionable insights</li>
              <li>Documentation: Documented data workflows, queries, and dashboards for knowledge sharing and future use.</li>
              <li>Presentation: Presented findings and visualizations to mentors and team leads to support data-driven decision-making.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Sales Forecasting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Forecasting & Trend Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Developed a predictive model using Python and SQL to forecast sales trends. Created interactive Power BI dashboards, 
                  increasing forecast accuracy by 35%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'SQL', 'Power BI'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Customer Segmentation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Segmentation & Retention Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Implemented clustering techniques for customer segmentation, improving engagement by 20%. Built Power BI dashboard 
                  for real-time insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['SQL', 'Power BI', 'Machine Learning'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
                alt="Master's Degree"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Master of Science in Computer Science</h3>
                <p className="text-gray-600">Andhra University | 2022 – 2024</p>
                <p className="text-gray-600 mt-2">Relevant Coursework: Data Analytics, AI & Machine Learning, Business Intelligence</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" 
                alt="Bachelor's Degree"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Chemistry</h3>
                <p className="text-gray-600">Andhra University | 2017 – 2020</p>
                <p className="text-gray-600 mt-2">Relevant Coursework: Analytical Chemistry, Problem Solving, Research Methodology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
                alt="Excel Certification"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-800">Advanced Microsoft Excel for Data Analysis</h3>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" 
                alt="TCS ION Certification"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-800">TCS ION Career Edge - IT for Non-IT Professionals</h3>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Google Analytics Certification"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-800">Google Data Analytics Professional Certificate</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="space-y-2">
                {['Excel (Advanced)', 'SQL', 'Python (Pandas, NumPy)', 'Power BI'].map((skill) => (
                  <div key={skill} className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-800">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Soft Skills</h3>
              <div className="space-y-2">
                {['Problem-Solving', 'Team Collaboration', 'Strong Communication'].map((skill) => (
                  <div key={skill} className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-800">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Operating Systems</h3>
              <div className="space-y-2">
                {['Windows', 'Linux'].map((skill) => (
                  <div key={skill} className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-800">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            Available for immediate joining and open to relocation.
          </p>
          <a 
            href="mailto:hemanthvasireddi2@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Hemanth Vasireddi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;