import { Project, Research, Education, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Speed Bump Detection & Distance Estimation',
    category: 'Computer Vision',
    year: '2023-2024',
    description: 'Speed bump detection and distance estimation system using stereo vision for autonomous vehicles.',
    imageUrl: '../cv/cv1-10.png',
    contentImageUrls: ['../cv/cv1-6.png', '../cv/cv1-1.png', '../cv/cv1-2.png', '../cv/cv1-3.png', '../cv/cv1-4.png', '../cv/cv1-5.png', '../cv/cv1-7.png', '../cv/cv1-8.png', '../cv/cv1-9.png', '../cv/cv1-10.png', '../cv/cv1-11.png', '../cv/cv1-12.png', '../cv/cv1-13.png', '../cv/cv1-14.png', '../cv/cv1-15.png'],
    languages: ['Python'],
    frameworks: ['YOLOv8', 'YOLOv4 Tiny', 'YOLOv5', 'Mask R-CNN', 'Tensorflow', 'Pytorch', 'Darknet', 'ONNX Runtime', 'OpenCV', 'Deepstream', 'NVIDIA Jetson Nano', 'Intel RealSense D455',],
    goals: 'To enhance autonomous vehicle safety by accurately detecting speed bumps and estimating their distance.',
    achievements: [
      'Achieved 96% mAP with YOLOv4 Tiny and 92.5% mAP with YOLOv8.',
      'Maximum estimation distance of 20 meters using stereo vision concepts.',
      'Embedded the system into NVIDIA Jetson Nano.',
    ]
  },
  {
    id: '2',
    title: 'General Medicine Verification System',
    category: 'Computer Vision',
    year: '2024 - 2026',
    description: 'Developing real-time object detection model for general medicine products using YOLOv8, optimized with TensorRT and GStreamer for deployment on NVIDIA Jetson Orin Nano.',
    imageUrl: '../cv/cv2-1.jpeg',
    contentImageUrls: ['../cv/cv2-1.jpeg', '../cv/cv2-2.jpeg', '../cv/cv2-3.jpeg', '../cv/cv2-4.jpeg', '../cv/cv2-5.jpeg', '../cv/cv2-6.jpeg', '../cv/cv2-7.jpeg', '../cv/cv2-8.jpeg'],
    publicUrl: '',
    languages: ['Python'],
    frameworks: ['YOLOv8', 'Python', 'TensorRT', 'Pytorch', 'GStreamer', 'ONNX', 'NVIDIA Jetson Orin Nano'],
    goals: 'To create an automated real-time product verification system for general medicine products.',
    achievements: [
      'Embedded YOLOv8 on NVIDIA Jetson Orin Nano using TensorRT and GStreamer.',
      'Achieved 95% mAP in real-time detection of general medicine products.',
      'Achieve optimized inference speed of 30 FPS on NVIDIA Jetson Orin Nano.',
    ]
  },
  {
    id: '3',
    title: 'Inventory Management Website - Smart Medical Vending Machine',
    category: 'Software Development',
    year: '2025-2026',
    description: 'Full-stack web application for managing smart medical vending machines, featuring real-time inventory tracking, real-time video conferencing, and user management.',
    imageUrl: '../sd/sd1-1.png',
    contentImageUrls: ['../sd/sd1-1.png', '../sd/sd1-2.png', '../sd/sd1-3.png', '../sd/sd1-4.png', '../sd/sd1-5.png', '../sd/sd1-6.png', '../sd/sd1-7.png', '../sd/sd1-8.png'],
    publicUrl: '',
    languages: ['TypeScript', 'JavaScript'],
    frameworks: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'WebRTC', 'WebSocket'],
    goals: 'Build a robust management interface for vending machine operators.',
    achievements: [
      'Realtime inventory logging and monitoring system.',
      'Smooth real-time video conferencing.',  
    ]
  },
  {
    id: '4',
    title: 'Human Machine Interface (HMI) - Smart Medical Vending Machine',
    category: 'Software Development',
    year: '2025-2026',
    description: 'Developing backend and integrating with frontend desktop application for Human Machine Interface (HMI) of a smart medical vending machine using Electron.js, Node.js, and Express.js. Integrated real-time AI systems with PLC communication and IoT systems.',
    imageUrl: '../sd/sd2-1.jpeg',
    contentImageUrls: ['../sd/sd2-1.jpeg', '../sd/sd2-2.jpeg', '../sd/sd2-3.jpeg'],
    publicUrl: '',
    languages: ['TypeScript', 'JavaScript'],
    frameworks: ['Electron.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'WebSocket'],
    goals: 'Build a robust HMI for vending machine users.',
    achievements: [
      'Innovation recognized by national media (CNN Indonesia, Kompas.com, Liputan6.com).',
      'Successfully delivered a fully functional product for public utilization.'
    ]
  },
  {
    id: '5',
    title: 'HMI App - PLC Communication',
    category: 'IoT',
    year: '2026',
    description: 'IoT system establishing communication between HMI app and industrial PLC.',
    imageUrl: '../iot/iot1-2.jpeg',
    contentImageUrls: ['../iot/iot1-1.jpeg', '../iot/iot1-2.jpeg', '../iot/iot1-3.mp4'],
    languages: ['JavaScript'],
    frameworks: ['REST API'],
    goals: 'Controlling the PLC from the HMI app and receiving real-time sensor data for monitoring.',
    achievements: [
      'Innovation recognized by national media (CNN Indonesia, Kompas.com, Liputan6.com).',
      'Successfully delivered a fully functional product for public utilization.'
    ]
  },
  {
    id: '6',
    title: 'Maa Notes',
    category: 'Software Development',
    year: '2026',
    description: 'Full-stack web application for note-taking and task management based on priority.',
    imageUrl: '../sd/sd3-1.png',
    contentImageUrls: ['../sd/sd3-1.png', '../sd/sd3-2.png', '../sd/sd3-3.png', '../sd/sd3-4.png'],
    publicUrl: 'https://github.com/Jiamaa/maa-note',
    languages: ['TypeScript'],
    frameworks: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST API'],
    goals: 'Build a robust note-taking and task management application.',
    achievements: [
      
    ]
  },
  {
    id: '7',
    title: 'C# .NET Backend',
    category: 'Software Development',
    year: '2026',
    description: 'Simple REST API and WebSocket backend application using C# and .NET framework.',
    imageUrl: '../sd/sd4-1.png',
    contentImageUrls: ['../sd/sd4-2.png'],
    publicUrl: 'https://github.com/Jiamaa/csharp-backend',
    languages: ['C#'],
    frameworks: ['.NET', 'ASP.NET Core', 'REST API', 'WebSocket'],
    goals: 'Build a simple REST API and WebSocket backend application using C# and .NET framework.',
    achievements: [
      
    ]
  },

  // {
  //   id: '8',
  //   title: 'AI Medical Assistant Chatbot',
  //   category: 'LLM',
  //   year: '2024',
  //   description: 'Experimental LLM-based assistant for providing information about general medicine products in the vending machine.',
  //   imageUrl: 'https://picsum.photos/seed/llm/800/600',
  //   contentImageUrls: ['https://picsum.photos/seed/llm-content/1200/800'],
  //   publicUrl: 'https://ais-pre-mtugdstxcbcw47djmcon7p-567343579580.run.app',
  //   languages: ['Python'],
  //   frameworks: ['LangChain', 'OpenAI API', 'FastAPI'],
  //   goals: 'Enhance user experience by providing instant product information.',
  //   achievements: [
  //     'Integrated RAG for accurate product knowledge.',
  //     'Optimized prompt engineering for medical context.',
  //     'Deployed as a microservice integrated with the HMI.'
  //   ]
  // }
];

export const RESEARCH: Research[] = [
  {
    id: 'r1',
    title: 'Brain Stroke Classification using One Dimensional Convolutional Neural Network',
    year: '2021 - 2022',
    description: 'Advances in technology have now developed into various fields, one of which is the health sector. With the support of this technology, it can help the work of health workers in dealing with their patients. Not only acting as a curative and rehabilitative, but technology can also be used as a preventive medium for dangerous diseases; an example is a stroke. According to the World Health Organization (WHO), stroke is the second leading cause of death and the third leading cause of disability. Stroke can occur due to lifestyle factors (such as tobacco and alcohol use) and medical factors (such as a history of heart disease and hypertension). Data on patients who have factors that trigger stroke can be used to detect and predict the potential for the patient to have a stroke or not. The research was conducted using a Deep Learning algorithm, namely Convolutional Neural Network (CNN), to train the data to produce an architecture that can predict the possibility of brain stroke. The dataset used in this study was obtained from the Brain Stroke Detection public domain dataset, which has 11 attributes (including gender, age, hypertension, heart disease, ever married, work type, residence type, average glucose level, BMI, smoking status, and stroke). The architecture produced an excellent accuracy of 98%, an F1-Score of 98%, and a Loss of 0.1180. Besides, this architecture has a good fitting, which shows that the architecture made is robust enough to predict the potential for the occurrence of brain stroke.',
    imageUrl: 'https://www.stroke.org/-/media/Stroke-Images/About-Stroke/Types-of-Stroke/humanbrainPM656JQ.png?sc_lang=en&hash=CD96FFF230B52D78B2E59C182B5E52DE',
    paperUrl: 'https://doi.org/10.1109/APWiMob56856.2022.10014207',
    achievements: [
      'Achieved 98% final accuracy value.',
      'Presented in 2022 IEEE Asia Pacific Conference on Wireless and Mobile (APWiMob)',
      'Published in the 2022 IEEE Asia Pacific Conference on Wireless and Mobile (APWiMob) IEEE Xplore.',
    ]
  },
  {
    id: 'r2',
    title: 'Comparison of Machine Learning and Deep Learning Algorithms for Classification of Breast Cancer',
    year: '2022',
    description: 'Statistical data from the American Cancer Society which shows that breast cancer ranks first with the highest number of cases of all types of cases of malignant tumors (cancer) worldwide. Through a data mining process that is used to extract information and data analysis, a classification process can be carried out to carry out further analysis of the pattern of a data. The dataset used in this study is the Breast Cancer Wisconsin (Diagnostic) Dataset obtained from UCI Machine Learning. The purpose of this study is to compare five algorithms, namely Logistic Regression, K Neighbors Classifier (KNN), Decision Tree Classifier, Deep Neural Network, Genetic Algorithm. The results showed that deep neural network algorithms and multilayer perceptron-genetic algorithms get 96% accuracy, logistic regression algorithms have 96% accuracy, then KNN with 94%, and decision tree classifier with 92%.',
    imageUrl: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-breast-cancer-ribbon-vector-png-image_9236207.png',
    paperUrl: 'https://doi.org/10.17509/coelite.v2i2.59717',
    achievements: [
      'Achieved 96% accuracy by determining optimal DNN parameters.',
    ]
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Universitas Pendidikan Indonesia',
    year: '2020 - 2024',
    thesisTitle: 'Designing A Speed Bump Detection and Distance Estimation System Model for Autonomous Vehicles using Deep Learning Algorithms',
    expertise: 'Intelligent Device Development'
  }
];

export const SKILLS: Skill[] = [
  { name: 'YOLO', level: 95 },
  { name: 'CNN', level: 95 },
  { name: 'Mask R-CNN', level: 90 },
  { name: 'NVIDIA Jetson', level: 90 },
  { name: 'TensorRT', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'TypeScript', level: 85 },
  { name: 'Python', level: 90 },
  { name: 'C++', level: 80 },
  { name: 'MySQL', level: 80 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'WebSocket', level: 85 },
  { name: 'REST API', level: 90 },
  { name: 'Git', level: 80 },
  { name: 'CI/CD', level: 80 },
  { name: 'PLC Communication', level: 80 }
];
