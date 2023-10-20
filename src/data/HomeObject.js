import Notesanimation from '../animations/Notesanimation';
import Courseanimation from '../animations/Courseanimation';
import Discussion from '../animations/Discussion'
const homedata=[
    {
        title: 'Courses', 
        link: '/courses',
        description:
        'Explore our wide range of carefully curated courses covering various subjects and exam preparation strategies. Whether you are preparing for a standardized test or need help with your coursework, we have you covered.',
        imageUrl: <Courseanimation/>,
        buttonText: 'Explore Courses', // Button text
      },
      {
        title: 'Notes',
        link: '/notes',
        description:
        'Access our comprehensive notes, summaries, and study guides. Designed to help you master key concepts quickly and effectively. Enhance your learning experience and excel in your exams with our expertly crafted materials.',
          imageUrl: <Notesanimation/>,
          buttonText: 'View Notes', // Button text
      },
      {
        title: 'Discussion Forum',
        link: '/discussionforum',
        description:
          'Join our thriving community of learners and experts on our discussion forum. Ask questions, engage in discussions, share knowledge, and collaborate with fellow students to enhance your understanding of challenging concepts.',
        imageUrl: <Discussion/>,
        buttonText: 'Join Forum', // Button text
      },
    ];
    
export default homedata