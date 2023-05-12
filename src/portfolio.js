/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Raies's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Youssef RAIES Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Youssef Raies",
  logo_name: "Youssef Raies",
  nickname: "Depy12",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/12Fed2MxNaK3T-niFcnRh5R7rIvWZ0Rhh/view?usp=sharing",
  portfolio_repository: "https://github.com/YoussefRais12",
  githubProfile: "https://github.com/YoussefRais12",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/YoussefRais12",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/youssef-raies-691936254/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCq2rCSJJ6zstvWhxVfHpaqg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ssefy150@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Cobratate",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/depy.spootify/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/youssefraies_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing desktop apps to automate tasks such as files fetching and manipulation",
        "⚡ Experience of working with PowerBI",
        "⚡ Manipulation of data using Talend and Cloudera",
      ],
      softwareSkills: [
       
    
      
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front-end and back-end",
        "⚡ Developing QT application using C++",
        "⚡ Creating .NET application using C#",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
  
      ],
      softwareSkills: [
      
     
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "vscode-icons:file-type-photoshop",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "logos:adobe-after-effects",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "adobe-acrobat",
          fontAwesomeClassname: "file-icons:adobe-acrobat",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "École supérieure privée d'ingénierie et de technologie",
      subtitle: "Engineering Pre-course",
      logo_path: "iiitk_logo.png",
      alt_name: "ESPRIT",
      duration: "2020-2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        
      ],
      website_link: "https://esprit.tn",
    },
    {
      title: "Centre des études supérieures industrielles",
      subtitle: "Engineering course",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence, Developement, Big data",
        "⚡ Apart from this, I have also done multipule projects",
        "⚡ During my time at university, i've done an intership in big data",
      ],
      website_link: "https://www.cesi.fr",
    },
  ],
};

const certifications = {
  certifications: [
    
    
    
   
    
   
   
   
   
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
    
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data integrator",
          company: "Habiteo.",
          company_url: "https://www.habiteo.com",
          logo_path: "Habiteo.png",
          duration: "Jan 2023 - Apr 2023",
          location: "Paris, FRANCE",
          description:
            "Coding a .NET application to automate tasks",
          color: "#000000",
        },
        {
          title: "Junior web developer",
          company: "AMAZONA.",
          company_url: "https://www.delhivery.com/",
          logo_path: "AMAZONA.png",
          duration: "Jun 2022 - Aug 2022",
          location: "Sousse, TUNISIA",
          description:
            "I have worked along other developers to maintain the functionality of the website's back-end",
          color: "#ee3c26",
        },
      
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
       
       
       
       
        {
          title: "Drumming instructor",
          company: "Paradiddle Music School",
          company_url: "https://www.facebook.com/paradiddle.music.school?locale=fr_FR",
          logo_path: "para.jpg",
          duration: "Jan 2021 - Aug 2022",
          location: "Tunis, TUNISIA",
          description:
            "",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  
};

const publications = {
  data: [
    
      
   
  
 
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I am currently looking for a 4 month intership",
  },
  blogSection: {
    
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Paris, FRANCE",
  
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
