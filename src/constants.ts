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
  // {
  //   id: '6',
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
    title: 'Breast Cancer Classification Comparison',
    year: '2022',
    description: 'Research based on the Breast Cancer Wisconsin (Diagnostic) Dataset comparing Machine Learning and Deep Learning algorithms.',
    imageUrl: 'https://picsum.photos/seed/cancer/800/600',
    paperUrl: 'https://example.com/breast-cancer-paper',
    achievements: [
      'Created and tested Deep Learning models with Deep Neural Network algorithms.',
      'Achieved 96% accuracy by determining optimal DNN parameters.',
      'Contributed 70% in writing the scientific article.'
    ]
  },
  {
    id: 'r2',
    title: 'Stroke Classification using 1D-CNN',
    year: '2021 - 2022',
    description: 'Classification research using One-Dimensional CNN algorithm based on the Brain Stroke Dataset.',
    imageUrl: 'https://picsum.photos/seed/stroke/800/600',
    paperUrl: 'https://example.com/stroke-paper',
    achievements: [
      'Performed EDA, Data Cleansing, and Pre-processing.',
      'Overcame data imbalance using the SMOTE function.',
      'Achieved 98% final accuracy value.',
      'Contributed 40% in writing the scientific article.'
    ]
  }
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
