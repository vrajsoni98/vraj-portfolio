//Aboutme image
import AboutImg from "../../assets/myavatar/vraj2.svg";

//project images
import Work1 from "../../assets/project-images/readit-blogs.svg";
import Work2 from "../../assets/project-images/smart-data-card.svg";
import Work3 from "../../assets/project-images/mar-div.svg";
import Work4 from "../../assets/project-images/mapty.svg";

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
    `✨ Tech Alchemist | 🚀 Code Creator & Art Maven 🎨 | 🌌 Master of
  Imagination 📚`,
    ` Beyond the lines of code, I don the cloak of a professional
    artist, painting masterpieces on the canvas of dreams 🎨. As I
    dance in the technicolor world of pixels, I also find solace in
    the silver screen, savoring captivating movies, and embarking on
    epic journeys through thrilling TV series and anime 🎬.`,
    `But the realm of adventure doesn't end there! Lost amidst the
    pages of fantastical novels, I wander through worlds beyond
    reality 📚. When not lost in literary magic, I embark on heroic
    quests in the realm of video games, battling dragons and
    unraveling mysteries 🎮.`,
    `Join me in this mystical quest to merge technology and art, where
    code and creativity converge in a dazzling dance of innovation!
    Together, we shall forge an extraordinary tale of possibilities
    and turn imagination into reality ✨.`,
    `  🌌 Let's Embark on a Journey | 📚 Storyteller of 💻 Code & 🎨 Art
    | 🎬 Cinematic Adventurer`,
  ],
  resumeIcon: "fa-solid fa-file",
  skillIcons: [
    "fa-brands fa-js",
    "fa-brands fa-react",
    "fa-brands fa-angular",
    "fa-brands fa-python",
    "fa-brands fa-java",
    "fa-brands fa-html5",
    "fa-brands fa-css3-alt",
    "fa-brands fa-github",
  ],
  button: "Download Résumé",
};

const BlogData = {
  title: "Latest Posts",
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
      title: "JavaScript: A Closer look at Functions",
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
  subtitle: "Feel free to say Hi! 👋",
  details: "Let's talk about everything!",
  namePlaceholder: "Insert your name",
  emailPlaceholder: "Insert your email",
  subjectPlaceholder: "Insert your subject",
  textPlaceholder: "Write your message",
  button: "Send Message",
  successMessage: "Message sent successfully!",
};

const HomeData = {
  name: "Vraj Soni",
  intro: "I'm a Full-Stack Software Developer",
  button: "Hire Me",
  avatar: Me,
  socials: [
    {
      name: "Linkedln",
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
    {
      name: "Facebook",
      url: "https://www.facebook.com/vraj.soni.374",
      icon: "fa-brands fa-facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/itsvrajsoni/",
      icon: "fa-brands fa-instagram",
    },
  ],
};

const WorkExperienceData = {
  title: "Experience",
  experience: [
    {
      id: 1,
      category: "education",
      icon: "icon-graduation",
      year: "Sept 2021 - April 2023",
      title: "Master of Applied Computing",
      name: "🎓 University of Windsor (Windsor, ON)",
      desc: [
        "• A journey of exploration! ",
        "• Ignited a passion for AI, and software engineering.",
        "• Dived into research, revealing innovative solutions. ",
        "• Achieved a remarkable GPA of 87.78/100 - committed to excellence!",
      ],
    },
    {
      id: 2,
      category: "experience",
      icon: "icon-briefcase",
      year: "Sept 2022 - July 2023",
      title: "Software Developer",
      name: "🚀 SOTI (Waterloo, ON)",
      desc: [
        "• Developed awesome features with Angular and MVC.Net.",
        "• Launched Audit Logging system - 80% customer satisfaction!",
        "• Optimized code - 50% fewer API calls, 25% faster!",
        "• Enhanced data visualization - making data sparkle! ",
        "• Collaborated with cross-functional teams - on-time deliveries! ",
      ],
    },
    {
      id: 3,
      category: "education",
      icon: "icon-graduation",
      year: "Sept 2016 - Sept 2020",
      title: "Bachelor of Engineering in Computer Engineering",
      name: "🎓 Gujarat Technological University (India)",
      desc: [
        "• The beginning of my tech adventure.",
        "• Laying the bedrock of CSE world with DSA, OS, OOPS & datbases",
        "• Unleashed algorithms for smarter business decisions.",
        "• Graduated with flying colors - a stellar GPA of 8.86/10!",
        "• Developed a fiery passion for software development ",
      ],
    },
    {
      id: 4,
      category: "experience",
      icon: "icon-briefcase",
      year: "May 2019 - April 2020",
      title: "Software Developer",
      name: "🌟 TopWebLogic (India)",
      desc: [
        "• Full-stack app with React.js, Java, Python - a blast! ",
        "• Multi Linear Regression - 70% accurate vehicle price predictions!  ",
        "• Unleashed profit-making algorithms - genius status achieved! ",
        "• Firebase rocket - 2x faster database operations - stellar! ",
        "• Top-notch mock-ups - Picasso would be proud!",
      ],
    },
  ],
};

const ProjectsData = {
  title: "Recent Works",
  projects: [
    {
      id: 1,
      image: Work1,
      title: "Readit Blogs",
      tech: "Python, Flask, SQL, JavaScript, Bootsrap, HTML, CSS",
      url: "https://readitblog.pythonanywhere.com/",
      category: "Fullstack",
    },
    {
      id: 2,
      image: Work2,
      title: "QR Code Card",
      tech: "Java, Servlet, JDBC, SQLServer, JavaScript, HTML, CSS",
      url: "https://github.com/vrajsoni98/Smart-Data-Card-QR-code-card-/tree/master",
      category: "Fullstack",
    },
    {
      id: 3,
      image: Work3,
      title: "MarDiv: Marriage Registration WebApp",
      tech: "ASP.Net, ADO.Net, C#, JavaScript, HTML, CSS",
      url: "https://github.com/vrajsoni98/Marriage-Registration-Web-App-MarDiv-/tree/master",
      category: "Backend",
    },
    {
      id: 4,
      image: Work4,
      title: "Mapty",
      tech: "JavaScript, Geolocation API, Leaflet Library",
      url: "https://vrajsoni98.github.io/mapty/",
      category: "Frontend",
    },
  ],
};
const ReviewData = {
  title: "Reviews",
  testimonials: [
    {
      id: 1,
      image: Image1,
      title: "Mikail Brel",
      subtitle: "Principle Software Developer at SOTI",
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
      subtitle: "Databse Administrator at 1199SEIU United Workers East",
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
      name: "Work Experience",
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
      name: "Blogs",
      url: "#blog",
      icon: "icon-note",
    },
    {
      name: "Contact",
      url: "#contact",
      icon: "icon-bubble",
    },
  ],
  copyright: "2022 - 2023.",
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
