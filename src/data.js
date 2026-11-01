// All content comes from the resume. Edit here to update the site.
export const profile = {
  name: "Atiketi Sai Chandana",
  shortName: "Sai Chandana",
  title: "Computer Science Graduate | Java Developer | Web Development Enthusiast",
  email: "saichandanaatiketi@gmail.com",
  phone: "+91 9182342262",
  phoneHref: "tel:+919182342262",
  location: "Telangana, India",
  github: "https://github.com/Saichandana554646",
  githubLabel: "github.com/Saichandana554646",
  linkedin: "https://linkedin.com/in/sai-chandana-atiketi-687735294/",
  linkedinLabel: "linkedin.com/in/sai-chandana-atiketi-687735294",
};

export const navLinks = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"], ["experience", "Experience"],
  ["projects", "Projects"], ["education", "Education"], ["certifications", "Certifications"], ["contact", "Contact"],
];

export const skills = [
  { group: "Programming Languages", items: ["Java", "Python", "JavaScript"] },
  { group: "Java Technologies", featured: true, items: ["Core Java", "OOP", "Collections Framework", "Exception Handling", "File Handling", "Spring Boot"] },
  { group: "Database Management", items: ["MySQL", "SQL", "PostgreSQL"] },
  { group: "Web Technologies", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { group: "Tools", items: ["Eclipse", "VS Code", "Git", "GitHub", "Google Colab"] },
  { group: "Soft Skills", items: ["Problem-Solving", "Communication", "Teamwork", "Time Management", "Adaptability"] },
];

export const experience = [
  {
    role: "Full Stack Web Development Intern",
    org: "Geonixa",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    points: [
      "Gained practical exposure to full-stack web development and responsive web application development.",
      "Worked with frontend technologies to understand user interface development and improve problem-solving skills.",
    ],
  },
];

export const projects = [
  {
    title: "BookMyShow: Full-Stack Movie Ticket Booking Platform",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Razorpay", "JWT"],
    points: [
      "Developed a movie ticket booking platform with movie selection, seat booking, and online payment functionality.",
      "Implemented concurrency-safe seat booking using PostgreSQL FOR UPDATE row locking and transactions to prevent double-booking during simultaneous seat selection.",
      "Designed a 10-minute seat-hold mechanism with an automated expiry scheduler to release abandoned seats and maintain PENDING/BOOKED booking states.",
      "Integrated Razorpay payment confirmation using server-side HMAC signature verification to validate payment responses.",
    ],
    url: null, // add a real repository URL here to show a GitHub button
  },
  {
    title: "Library Book Management System",
    tech: ["Core Java", "JDK 21", "OOP", "Collections", "File Handling"],
    points: [
      "Developed a Core Java console application with separate Librarian and Member roles, member registration, and book management operations.",
      "Implemented book issue and return functionality with a maximum of two active books per member and one active loan per physical book.",
      "Used ArrayList, HashSet, enums, and custom exceptions for loan tracking, borrowing history, book availability, and distinct-author reports.",
      "Implemented text-file handling to persist member, book, loan, and report data across application runs.",
    ],
    url: null,
  },
  {
    title: "Brain Stroke Prediction Using Machine Learning",
    tech: ["Python", "Machine Learning"],
    points: [
      "Developed a machine learning application to predict stroke risk using patient health information.",
      "Used features such as age, glucose level, BMI, and medical history for risk prediction.",
    ],
    url: null,
  },
];

export const education = [
  { degree: "B.Tech, Computer Science and Engineering", school: "Malla Reddy Engineering College for Women", years: "2022 – 2026", cgpa: "9.00" },
  { degree: "Intermediate, MPC", school: "Alphores Junior College", years: "2020 – 2022", cgpa: "9.07" },
  { degree: "SSC", school: "Kerala Model High School", years: "2019 – 2020", cgpa: "10.00" },
];

export const certifications = [
  { name: "Programming Using Java", issuer: "Infosys", desc: "Core Java and object-oriented programming fundamentals." },
  { name: "HTML5, CSS3 & JavaScript", issuer: "Infosys", desc: "Web development and interactive webpage creation." },
  { name: "Generative AI", issuer: "Oracle", desc: "Fundamentals of Generative AI concepts and applications." },
  { name: "Cloud Computing", issuer: "Coursera", desc: "Cloud computing fundamentals, concepts, and service models." },
  { name: "English Empower", issuer: "Cambridge University", desc: "English language development and communication skills." },
];
