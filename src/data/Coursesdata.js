
import aws from '../assests/aws.png'
import native from '../assests/Reactnative.png'
import web from '../assests/webdev.png'
import machine from '../assests/machine.jpg'
import  fullstack from '../assests/fullstack.jpg'
import  java from '../assests/java.png'
import python from '../assests/Python.png'
import cyber from '../assests/cybersecurity.jpg'
import devops from '../assests/devops.png'


const softwareCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description:
        'A comprehensive bootcamp covering HTML, CSS, JavaScript, and popular front-end and back-end frameworks. Learn to build modern web applications from scratch.',
      duration: '12 weeks',
      videos: [
        {
          id: 101,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://youtu.be/EFUD2MulXY0?feature=shared',
        },
        {
          id: 102,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://youtu.be/sXu7PBJRTFM?feature=shared',
        },
        // Add more video objects for this course
      ],
      level: 'Beginner to Advanced',
      imageUrl: web,
    },
    {
      id: 2,
      title: 'Mobile App Development with React Native',
      description:
        'Master the art of mobile app development using React Native. Create cross-platform apps for iOS and Android with a single codebase.',
      duration: '10 weeks',
      level: 'Intermediate',
      imageUrl: native,
      videos: [
        {
          id: 103,
          title: 'Intro to Mobile',
          duration: '30 minutes',
          videoUrl: 'https://youtu.be/sXu7PBJRTFM?feature=shared',
        },
        {
          id: 104,
          title: 'mobile',
          duration: '45 minutes',
          videoUrl: '',
        },
        // Add more video objects for this course
      ],
    },
    {
      id: 3,
      title: 'Data Science and Machine Learning',
      description:
        'Dive into the world of data science and machine learning. Learn to analyze data, build predictive models, and make data-driven decisions.',
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      imageUrl: machine,
      videos: [
        {
          id: 105,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://www.example.com/html_intro.mp4',
        },
        {
          id: 106,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://www.example.com/css_basics.mp4',
        },
        // Add more video objects for this course
      ],
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      description:
        'Become a full-stack developer and build dynamic web applications. Cover both front-end and back-end technologies.',
      duration: '14 weeks',
      level: 'Intermediate',
      imageUrl: fullstack,
      videos: [
        {
          id: 107,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://www.example.com/html_intro.mp4',
        },
        {
          id: 108,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://www.example.com/css_basics.mp4',
        },
        // Add more video objects for this course
      ],
    },
    {
      id: 5,
      title: 'Java Programming Mastery',
      description:
        'Master the Java programming language and become proficient in software development with Java.',
      duration: '10 weeks',
      level: 'Intermediate',
      imageUrl: java,
      videos: [
        {
          id: 101,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://www.example.com/html_intro.mp4',
        },
        {
          id: 102,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://www.example.com/css_basics.mp4',
        },
        // Add more video objects for this course
      ],
    },
    {
      id: 6,
      title: 'Python for Data Analysis',
      description:
        'Learn Python for data analysis and data manipulation. Use popular libraries like Pandas and NumPy.',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      imageUrl: python,
      videos: [
        {
          id: 101,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://www.example.com/html_intro.mp4',
        },
        {
          id: 102,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://www.example.com/css_basics.mp4',
        },
        // Add more video objects for this course
      ],
    },
    {
      id: 7,
      title: 'Cloud Computing Essentials',
      description:
        'Understand cloud computing concepts and platforms like AWS, Azure, and Google Cloud.',
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      imageUrl: aws,
    },
    {
      id: 8,
      title: 'Cybersecurity Fundamentals',
      description:
        'Get started with cybersecurity and learn about common threats, security measures, and best practices.',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      imageUrl: cyber,
      videos: [
        {
          id: 101,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://www.example.com/html_intro.mp4',
        },
        {
          id: 102,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://www.example.com/css_basics.mp4',
        },
        // Add more video objects for this course
      ],
    },
    {
      id: 9,
      title: 'DevOps and Continuous Integration',
      description:
        'Explore DevOps principles and practices for seamless software development and deployment.',
      duration: '8 weeks',
      level: 'Intermediate',
      imageUrl: devops,
      videos: [
        {
          id: 101,
          title: 'Intro to HTML',
          duration: '30 minutes',
          videoUrl: 'https://www.example.com/html_intro.mp4',
        },
        {
          id: 102,
          title: 'CSS Basics',
          duration: '45 minutes',
          videoUrl: 'https://www.example.com/css_basics.mp4',
        },
        // Add more video objects for this course
      ],
    },
  ];
  
  export default softwareCourses;
  