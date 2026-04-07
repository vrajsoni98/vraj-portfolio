//Aboutme image
import AboutImg from "../../assets/myavatar/vraj2.svg";

//project images
import Work1 from "../../assets/project-images/readit-blogs.svg";
import Work2 from "../../assets/project-images/smart-data-card.svg";
import Work3 from "../../assets/project-images/mar-div.svg";
import Work4 from "../../assets/project-images/mapty.svg";
import Work5 from "../../assets/project-images/ai-manager-365.svg";
import Work6 from "../../assets/project-images/medical-coding-agent.svg";

//blog images
import Blog1 from "../../assets/blog-images/async.svg";
import Blog2 from "../../assets/blog-images/function.svg";
import Blog3 from "../../assets/blog-images/all-js.svg";

//Home Images
import Me from "../../assets/myavatar/vraj.svg";

//Testimonial Images
import Image1 from "../../assets/reviewavatar/mikhail.svg";
import Image2 from "../../assets/reviewavatar/brad.svg";
import Image3 from "../../assets/reviewavatar/kunj.svg";

//sidebar
import Logo from "../../assets/logo/V.svg";

const AboutData = {
  title: "About Me",
  aboutImg: AboutImg,
  desc: [
    `I build full-stack products, AI-assisted workflows, and internal platforms that reduce operational drag and make complex systems easier to run.`,
    `My recent work has focused on product ownership across automation, analytics, partner portals, and operator tooling, with hands-on delivery from backend services to frontend interfaces.`,
    `I enjoy turning messy business processes into clear software systems using Python, Flask, SQL, LangGraph, observability tooling, and pragmatic product thinking.`,
  ],
  resumeIcon: "fa-solid fa-file",
  highlights: [
    {
      value: "10+",
      label: "Internal Platforms",
      text: "Owned end-to-end across enrollment, reporting, workforce analytics, and operations tooling.",
    },
    {
      value: "25+ hrs/wk",
      label: "Automation Saved",
      text: "Enrollment workflows dropped from roughly five minutes per record to under ten seconds.",
    },
    {
      value: "100+",
      label: "Vendor Companies Served",
      text: "Built portals and reporting dashboards used by lead vendors and affiliate organizations.",
    },
    {
      value: "100K+",
      label: "Calls/Day Platform",
      text: "Built the agent-facing UI for a Readymode-integrated call center running at this scale.",
    },
  ],
  button: "Download Resume",
};

const BlogData = {
  title: "Writing Archive",
  blogs: [
    {
      category: "JavaScript",
      img: Blog1,
      url: `https://vrajsoni.notion.site/Asynchronous-JavaScript-Promises-AsyncAwait-and-AJAX-7ddcb771059b45988a1d64e0f08ebd1b?pvs=4`,
      title: "Asynchronous JavaScript Promises & AsyncAwait",
      date: "11 May, 2021",
      author: "Vraj",
    },
    {
      category: "JavaScript",
      img: Blog2,
      url: `https://vrajsoni.notion.site/A-closer-look-at-Function-e58b67d849cb40ef9d6b154bc8d4e427?pvs=4`,
      title: "JavaScript - A Closer Look at Functions",
      date: "15 February, 2021",
      author: "Vraj",
    },
    {
      category: "JavaScript",
      img: Blog3,
      url: `https://vrajsoni.notion.site/dc7c647c0af8403799e7692869c85244?v=4dd633cb4a854e4abb966c0e0aa3e641&pvs=4`,
      title: "Everything you need to know about JavaScript",
      date: "29 January, 2021",
      author: "Vraj",
    },
  ],
};

const ContactData = {
  title: "Get In Touch",
  subtitle: "Open to useful conversations.",
  details:
    "Reach out about full-stack engineering, AI workflows, internal tooling, or product consulting.",
  namePlaceholder: "Insert your name",
  emailPlaceholder: "Insert your email",
  subjectPlaceholder: "Insert your subject",
  textPlaceholder: "Write your message",
  button: "Send Message",
  successMessage: "Message sent successfully!",
};

const HomeData = {
  name: "Vraj Soni",
  intro: "Full-Stack & AI Software Developer",
  summary:
    "I build internal platforms, automation systems, and LLM-enabled products that make teams faster, more observable, and easier to support.",
  location: "Waterloo, ON",
  badges: [
    "Internal Platforms",
    "Automation",
    "LLM Systems",
    "Analytics",
  ],
  button: "Let's Talk",
  avatar: Me,
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vrajsoni98/",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      name: "Email",
      url: `mailto:vrajsoni727@gmail.com`,
      icon: "fa-solid fa-envelope",
    },
    {
      name: "GitHub",
      url: "https://github.com/vrajsoni98",
      icon: "fa-brands fa-github",
    },
  ],
};

const WorkExperienceData = {
  title: "Experience & Education",
  experience: [
    {
      id: 1,
      category: "experience",
      icon: "icon-briefcase",
      year: "Apr 2024 - Present",
      title: "Full-Stack Software Developer",
      name: "Park West Professional Services · Waterloo, ON",
      desc: [
        "Serve as the sole developer and product consultant across 10+ internal platforms spanning full-stack delivery, QA, automation, and reporting.",
        "Automated the New Enrollment suite with Python, Flask, and Forth APIs, cutting per-record processing from roughly five minutes to under ten seconds.",
        "Built vendor and affiliate portals used by over 100 external companies, cutting report generation from 3–5 hours down to under 30 seconds through SQL rollup tables.",
        "Delivered the telemarketer agent UI powering a Readymode-integrated call center, plus executive dashboards and workforce analytics tooling.",
      ],
    },
    {
      id: 2,
      category: "education",
      icon: "icon-graduation",
      year: "Sep 2021 - Apr 2023",
      title: "Master of Applied Computing",
      name: "University of Windsor · Windsor, ON",
      desc: [
        "Graduated with a GPA of 87.78/100.",
        "Focused on software engineering, AI, and practical applied computing work.",
      ],
    },
    {
      id: 3,
      category: "experience",
      icon: "icon-briefcase",
      year: "Sep 2022 - Jul 2023",
      title: "Software Developer",
      name: "SOTI · Waterloo, ON",
      desc: [
        "Led a high-priority audit logging initiative for enterprise clients using Angular, RxJS, and NgRx to improve compliance and traceability.",
        "Removed 50% of redundant REST API calls and improved load performance by 25% through frontend optimization.",
        "Proposed and shipped a Highcharts-based visualization overhaul that improved customer data interpretation by 40%.",
        "Worked closely with product, design, and engineering teams in Agile delivery cycles to ship features on schedule.",
      ],
    },
    {
      id: 4,
      category: "education",
      icon: "icon-graduation",
      year: "Aug 2016 - Aug 2020",
      title: "Bachelor of Engineering in Computer Engineering",
      name: "Gujarat Technological University · Ahmedabad, India",
      desc: [
        "Graduated with a GPA of 8.86/10.",
        "Built a strong foundation in algorithms, operating systems, object-oriented programming, and databases.",
      ],
    },
    {
      id: 5,
      category: "experience",
      icon: "icon-briefcase",
      year: "May 2019 - Apr 2020",
      title: "Software Developer",
      name: "TopWebLogic · India",
      desc: [
        "Built full-stack product features with React, Java, Python, and Firebase-backed workflows.",
        "Improved vehicle price prediction accuracy through multi-linear regression modeling.",
        "Accelerated database operations by roughly 2x and contributed UI mockups for product delivery.",
      ],
    },
  ],
};

const ProjectsData = {
  title: "Selected Projects",
  projects: [
    {
      id: 1,
      image: Work5,
      title: "AI Manager 365",
      summary:
        "LLM observability and governance platform with proxy-level logging, policy enforcement, and real-time monitoring.",
      tech: "Python, FastAPI, Redis, MySQL, Supabase, OpenAI API",
      url: null,
      category: "AI",
    },
    {
      id: 2,
      image: Work6,
      title: "Medical Coding AI Agent",
      summary:
        "LangGraph-based ICD and CPT coding workflow with retrieval, confidence checks, and human-in-the-loop review.",
      tech: "Python, LangGraph, Pinecone, OpenAI API, RAG",
      url: null,
      category: "AI",
    },
    {
      id: 3,
      image: Work1,
      title: "Readit Blogs",
      summary:
        "Multi-user blogging platform with authenticated publishing and database-backed content delivery.",
      tech: "Python, Flask, SQL, JavaScript, Bootstrap, HTML, CSS",
      url: "https://readitblog.pythonanywhere.com/",
      category: "Fullstack",
    },
    {
      id: 4,
      image: Work2,
      title: "QR Code Card",
      summary:
        "Smart business card workflow that generates QR-driven profile cards backed by SQL Server data.",
      tech: "Java, Servlet, JDBC, SQLServer, JavaScript, HTML, CSS",
      url: "https://github.com/vrajsoni98/Smart-Data-Card-QR-code-card-/tree/master",
      category: "Fullstack",
    },
    {
      id: 5,
      image: Work3,
      title: "MarDiv: Marriage Registration WebApp",
      summary:
        "Administrative workflow for registration, approvals, and record handling in a structured web interface.",
      tech: "ASP.Net, ADO.Net, C#, JavaScript, HTML, CSS",
      url: "https://github.com/vrajsoni98/Marriage-Registration-Web-App-MarDiv-/tree/master",
      category: "Backend",
    },
    {
      id: 6,
      image: Work4,
      title: "Mapty",
      summary:
        "Workout mapping interface using geolocation, Leaflet, and client-side state management.",
      tech: "JavaScript, Geolocation API, Leaflet Library",
      url: "https://vrajsoni98.github.io/mapty/",
      category: "Frontend",
    },
  ],
};
const ReviewData = {
  title: "Testimonials",
  testimonials: [
    {
      id: 1,
      image: Image1,
      title: "Mikail Brel",
      subtitle: "Principal Software Developer at SOTI",
      comment: `As a Team-lead at SOTI, I had pleasure working with Vraj. His exceptional collaboration skills, 
    attention to detail, and dedication to excellence make him an invaluable asset to any team. Good luck! 👍`,
    },
    {
      id: 2,
      image: Image2,
      title: "Brad Wang",
      subtitle: "Software Developer at SOTI",
      comment: `Working with Vraj at SOTI has been a blast! I had the pleasure of mentoring him, and let me tell you, 
      his work was top-notch, especially when it came to nailing down audit logging. Super impressive! 😄`,
    },
    {
      id: 3,
      image: Image3,
      title: "Kunj Shah",
      subtitle: "Database Administrator at 1199SEIU United Workers East",
      comment: `I'm thrilled to talk about my awesome colleague, Vraj at TopWebLogic! He absolutely rocked the project with his fantastic leadership skills, 
      seamlessly managing the entire workflow. And his coding skills? Simply exceptional! 🚀`,
    },
  ],
};

const SideBarData = {
  logo: Logo,
  logoUrl: "#home",
  data: [
    {
      name: "Home",
      url: "#home",
      icon: "icon-home",
    },
    {
      name: "About Me",
      url: "#about",
      icon: "icon-user-following",
    },
    {
      name: "Experience",
      url: "#resume",
      icon: "icon-briefcase",
    },
    {
      name: "Projects",
      url: "#work",
      icon: "icon-layers",
    },

    {
      name: "Testimonials",
      url: "#testimonials",
      icon: "icon-heart",
    },
    {
      name: "Writing",
      url: "#blog",
      icon: "icon-note",
    },
    {
      name: "Contact",
      url: "#contact",
      icon: "icon-bubble",
    },
  ],
  copyright: `2022 - ${new Date().getFullYear()}.`,
};

// export default Menu;

export {
  AboutData,
  BlogData,
  ContactData,
  HomeData,
  WorkExperienceData,
  ProjectsData,
  ReviewData,
  SideBarData,
};
