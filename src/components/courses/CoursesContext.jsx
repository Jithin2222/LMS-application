import React, { createContext, useContext } from 'react'

const CourseContext = createContext();

const courses = [
    {  id: 1,  Image:"https://th.bing.com/th/id/OIP.ZOpxFwpe8_937_hHLFMqzgHaD1?w=295&h=179&c=7&r=0&o=7&pid=1.7&rm=3",  name: "Python",  description: "Learn Python programming from basics to advanced concepts.",  instructor: "John Doe",  rating: "⭐ 4.5",  price: "$9.99", },
    {  id: 2,  Image:"https://tse3.mm.bing.net/th/id/OIP.1ixR62jPxrVMJAO8XwfSwAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "HTML",  description: "Master the structure of the web with HTML essentials.",  instructor: "Jane Smith",  rating: "⭐ 4.2",  price: "$7.99",  },
    {  id: 3,  Image: "https://www.codespot.org/assets/css.jpg",  name: "CSS",  description: "Style your web pages with modern CSS techniques.",  instructor: "Mark Wilson", rating: "⭐ 4.4",  price: "$8.99",  },
    {  id: 4,  Image:"https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png",  name: "JavaScript",  description: "The language of the web — from basics to advanced JS.",  instructor: "Emily Clark",  rating: "⭐ 4.7",  price: "$12.99", },
    {  id: 5,  Image:"https://tse2.mm.bing.net/th/id/OIP.AbJZmXqL_5cpWfglqDwUnwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "Java",  description: "Build strong foundations with Java programming.",  instructor: "Alex Lee",  rating: "⭐ 4.3",  price: "$10.99",  },
    {  id: 6,  Image:"https://tse2.mm.bing.net/th/id/OIP.OXuG2p9lrGCr4uRFAGuhAQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "React",  description: "Learn to build dynamic UIs with React library.",  instructor: "Sophia Brown",  rating: "⭐ 4.8",  price: "$14.99",  },
    {  id: 7,  Image:"https://th.bing.com/th/id/OIP.67v832T4JgVZN0u-rp1BHwHaEo?w=279&h=180&c=7&r=0&o=7&pid=1.7&rm=3",  name: "Node",  description: "Backend development with Node.js and Express.",  instructor: "Michael Scott",  rating: "⭐ 4.6",  price: "$11.99",  },
    {  id: 8,  Image: "https://gajux29.github.io/bootstrap_lp_challenge_1st/img/background2.png",  name: "Bootstrap",  description: "Responsive UI design with Bootstrap framework.",  instructor: "Rachel Green",  rating: "⭐ 4.1",  price: "$6.99",  },
    {  id: 9,  Image: "https://th.bing.com/th/id/OIP.k6ZiH79vvkFLYY_rUH-sdQHaEK?w=318&h=180&c=7&r=0&o=7&pid=1.7&rm=3",  name: "MongoDB",  description: "Learn NoSQL database design and queries with MongoDB.",  instructor: "David Kim",  rating: "⭐ 4.4",  price: "$13.99",  },
    {  id: 10, Image: "https://th.bing.com/th/id/OIP.ebV_M0RC7JigjhyIkAzjrgHaEK?w=273&h=180&c=7&r=0&o=5&pid=1.7",  name: "Data Science",  description: "Data analysis, visualization, and ML basics.",  instructor: "Laura White",  rating: "⭐ 4.9",  price: "$19.99", },
    {  id: 11, Image: "https://tse3.mm.bing.net/th/id/OIP.e9Ef8qyxPSJN9R9P9szVPgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "Machine Learning",  description: "Learn supervised and unsupervised ML with hands-on projects.",  instructor: "Daniel Green",  rating: "⭐ 4.7",  price: "$24.99",  },
    {  id: 12, Image: "https://tse3.mm.bing.net/th/id/OIP.y5vfZ_A0zygi3edIqjKLDAHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "Deep Learning",  description: "Neural networks, CNNs, and AI basics.",  instructor: "Hannah Lee",  rating: "⭐ 4.8",  price: "$29.99",  },
    {  id: 13, Image: "https://tse1.mm.bing.net/th/id/OIP.bamXU9P1F5Y-kaPCxxIELwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "Angular",  description: "Learn Angular framework for modern web apps.",  instructor: "Chris Johnson",  rating: "⭐ 4.3", price: "$15.99",  },
    {  id: 14, Image: "https://www.cdmi.in/courses@2x/React-Native.webp",  name: "React Native",  description: "Build mobile apps for iOS and Android with React Native.",  instructor: "Olivia Davis",  rating: "⭐ 4.6",  price: "$18.99",  },
    {  id: 15, Image: "https://tse4.mm.bing.net/th/id/OIP.9oPCRTjC1ktcClRM2f6dvwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "Flutter",  description: "Cross-platform mobile development with Flutter & Dart.",  instructor: "Robert Miller",  rating: "⭐ 4.5",  price: "$17.99",  },
    {  id: 16, Image: "https://tse3.mm.bing.net/th/id/OIP.tVDx9HFTf6yvCThuo-z-7QHaEe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "DevOps",  description: "CI/CD pipelines, Docker, and Kubernetes essentials.",  instructor: "Sophia Carter",  rating: "⭐ 4.7",  price: "$21.99",  },
    {  id: 17, Image: "https://cdn.wallpapersafari.com/30/59/JigpBb.jpg",  name: "AWS Cloud",  description: "Amazon Web Services cloud fundamentals & solutions.",  instructor: "James King",  rating: "⭐ 4.9",  price: "$25.99",  },
    {  id: 18, Image: "https://th.bing.com/th/id/OIP.aTRL4G06B_9NGnApWx22ogHaD1?w=330&h=179&c=7&r=0&o=7&pid=1.7&rm=3",  name: "C Programming",  description: "Master the fundamentals of C programming language.",  instructor: "William Brown",  rating: "⭐ 4.2",  price: "$8.99",  },
    {  id: 19, Image: "https://tse2.mm.bing.net/th/id/OIP.cnxFSMy0VnwbT4C-_M5MoAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",  name: "C++",  description: "Object-oriented programming and advanced concepts in C++.",  instructor: "Mia Johnson",  rating: "⭐ 4.4",  price: "$9.99",  },
    {  id: 20, Image: "https://wallpapers.com/images/hd/4k-programming-php-logo-gjcd29zs6ly7sgbn.jpg",  name: "PHP",  description: "Learn backend development with PHP and MySQL.",  instructor: "Ethan Martinez",  rating: "⭐ 4.1",  price: "$7.99",  },
  ];

export const CoursesProvider = ({children}) => {
  return (
    <>
        <CourseContext.Provider value={{courses}}>
            {children}
        </CourseContext.Provider>
    </>
  );
}

export const useCourses = () => useContext(CourseContext);