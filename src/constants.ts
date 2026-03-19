import { Project, Research, Education, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Medical Vending Machine',
    category: 'Computer Vision',
    year: '2024 - Now',
    description: 'Developing real-time object detection model for general medicine products and Human Machine Interface (HMI). Integrated AI systems with PLC communication and IoT systems.',
    imageUrl: 'https://picsum.photos/seed/vending/800/600',
    contentImageUrl: 'https://picsum.photos/seed/vending-content/1200/800',
    publicUrl: 'https://ais-pre-mtugdstxcbcw47djmcon7p-567343579580.run.app', // Example public link
    languages: ['Python', 'JavaScript', 'C++'],
    frameworks: ['YOLOv8', 'TensorRT', 'React', 'Next.js', 'Node.js', 'Express.js'],
    goals: 'To create an automated medical product dispensing system with real-time product recognition and seamless IoT integration.',
    achievements: [
      'Embedded YOLOv8 on NVIDIA Jetson Orin Nano using TensorRT and GStreamer.',
      'Developed full-stack web application and backend desktop application.',
      'Innovation recognized by national media (CNN Indonesia, Kompas.com, Liputan6.com).',
      'Successfully delivered a fully functional product for public utilization.'
    ]
  },
  {
    id: '2',
    title: 'Speed Bump Detection & Distance Estimation',
    category: 'Computer Vision',
    year: '2023',
    description: 'Integrated a distance estimation system into a speed bump detection model using stereo vision for autonomous vehicles.',
    imageUrl: 'https://picsum.photos/seed/speedbump/800/600',
    contentImageUrl: 'https://picsum.photos/seed/speedbump-content/1200/800',
    languages: ['Python'],
    frameworks: ['YOLOv8', 'Mask R-CNN', 'Tensorflow', 'Pytorch', 'Darknet'],
    goals: 'To enhance autonomous vehicle safety by accurately detecting speed bumps and estimating their distance.',
    achievements: [
      'Achieved 96% mAP with YOLOv4 Tiny and 92.5% mAP with YOLOv8.',
      'Maximum estimation distance of 20 meters using stereo vision concepts.',
      'Embedded the system into NVIDIA Jetson Nano.',
      'Annotated 6000+ images using VGG Image Annotator (VIA).'
    ]
  },
  {
    id: '4',
    title: 'Medical Vending HMI & Dashboard',
    category: 'Software Development',
    year: '2024',
    description: 'Full-stack web application for managing medical vending machines, featuring real-time inventory tracking and user management.',
    imageUrl: 'https://picsum.photos/seed/dashboard/800/600',
    contentImageUrl: 'https://picsum.photos/seed/dashboard-content/1200/800',
    publicUrl: 'https://ais-pre-mtugdstxcbcw47djmcon7p-567343579580.run.app',
    languages: ['TypeScript', 'JavaScript'],
    frameworks: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    goals: 'Build a robust management interface for vending machine operators.',
    achievements: [
      'Implemented real-time updates using WebSocket.',
      'Designed a responsive HMI for various screen sizes.',
      'Integrated with a secure REST API backend.'
    ]
  },
  {
    id: '5',
    title: 'PLC-to-Cloud Bridge',
    category: 'IoT',
    year: '2024',
    description: 'IoT system establishing communication between industrial PLCs and cloud servers for remote monitoring and control.',
    imageUrl: 'https://picsum.photos/seed/iot/800/600',
    contentImageUrl: 'https://picsum.photos/seed/iot-content/1200/800',
    languages: ['Python', 'C++'],
    frameworks: ['WebSocket', 'REST API', 'MQTT', 'Node.js'],
    goals: 'Enable remote data acquisition from industrial hardware.',
    achievements: [
      'Reduced latency in PLC-to-Server communication.',
      'Implemented secure data transmission protocols.',
      'Built a monitoring dashboard for real-time sensor data.'
    ]
  },
  {
    id: '6',
    title: 'AI Medical Assistant Chatbot',
    category: 'LLM',
    year: '2024',
    description: 'Experimental LLM-based assistant for providing information about general medicine products in the vending machine.',
    imageUrl: 'https://picsum.photos/seed/llm/800/600',
    contentImageUrl: 'https://picsum.photos/seed/llm-content/1200/800',
    publicUrl: 'https://ais-pre-mtugdstxcbcw47djmcon7p-567343579580.run.app',
    languages: ['Python'],
    frameworks: ['LangChain', 'OpenAI API', 'FastAPI'],
    goals: 'Enhance user experience by providing instant product information.',
    achievements: [
      'Integrated RAG for accurate product knowledge.',
      'Optimized prompt engineering for medical context.',
      'Deployed as a microservice integrated with the HMI.'
    ]
  }
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
  { name: 'PLC Communication', level: 80 }
];
