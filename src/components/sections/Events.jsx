import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './Events.css';

import globeIcon from '../../assets/Zenyex/globeicon.jpg';
import realWorldIcon from '../../assets/Zenyex/realworld.jpg';
import opportunityIcon from '../../assets/Zenyex/Oppurtiunity.jpg';
import collaborationIcon from '../../assets/Zenyex/Collaboration.jpg';
import industryIcon from '../../assets/Zenyex/Industry.jpg';
import handsOnIcon from '../../assets/Zenyex/Hands-on icon.jpg';

export const events = [
  {
    id: 1,
    title: 'ZYNEX',
    type: 'Hackathon',
    date: 'May 22-23, 2026',
    time: '24–30 Hour Offline Finale',
    venue: 'Cambridge Institute of Technology',
    capacity: 'Top 25 shortlisted teams for the finale',
    description: 'A flagship hackathon to solve real-world challenges through technology.',
    fullDescription:
      'ZYNEX 2026 is a flagship hackathon organized by the GDG on Campus - Cambridge Institute of Technology, created to bring together passionate student innovators from across India to solve real-world challenges through technology.\n\nFocused on both software and hardware innovation, the hackathon provides a platform for participants to transform ideas into practical solutions through collaboration, creativity, and rapid development.\n\nThe event follows a hybrid format beginning with an online ideation round and concluding with an offline grand finale at Cambridge Institute of Technology. Teams will move from idea validation to prototype building and finally to developing a working Minimum Viable Product (MVP).',
    tagline: 'Velocity with Vision',
    icon: '⚡',
    status: 'upcoming',
    color: '#ea4335',
    whatYouLearn: [
      { icon: <img src={globeIcon} alt="Globe" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />, text: <strong>National-level exposure</strong> },
      { icon: <img src={realWorldIcon} alt="Brain" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />, text: <strong>Real-world problem solving experience</strong> },
      { icon: <img src={opportunityIcon} alt="Rocket" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />, text: <strong>Opportunity to build impactful projects</strong> },
      { icon: <img src={collaborationIcon} alt="Handshake" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />, text: <strong>Collaboration with innovative minds</strong> },
      { icon: <img src={industryIcon} alt="Briefcase" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />, text: <strong>Industry mentorship and networking</strong> },
      { icon: <img src={handsOnIcon} alt="Laptop" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />, text: <strong>Hands-on development experience</strong> },
    ],
    speakers: [
      { name: 'R.Vikranth', initials: '', role: 'Event Coordinator — ZYNEX 2026' },
      { name: ' Subedi Deeksha', initials: '', role: 'Event Coordinator — ZYNEX 2026' },
    ],
    sectionTitle: 'Event Details',
    highlightsIntro: 'ZYNEX 2026 is designed for students who love building, experimenting, and solving problems that matter. Participants will work together in a fast-paced environment to design, develop, and present impactful solutions.',
    highlights: [
      { title: 'Round 1 — Best Deployed Project', description: 'Instead of starting from scratch, submit your best built and deployed project! Requirements: GitHub repo, deployed link, setup steps (Windows OS), and proper README/PPT. Open Innovation Format—any domain, idea, or tech stack. Deadline extended to 12th of May 2026.' },
      { title: 'Round 2 — Offline Grand Finale', description: 'The best projects will be shortlisted for Round 2 commencing on 22nd May 2026 at CIT Bengaluru. Shortlisted teams will receive the official Round 2 problem statements 5 days before the hackathon.' },
      { title: '💻 Software Tracks', description: 'Artificial Intelligence & Machine Learning, Web Development, Application Development, Cybersecurity, Blockchain, Operating Systems.' },
      { title: '⚙️ Hardware Tracks', description: 'Embedded Systems, Robotics, IoT & Smart Automation, Electronics Innovation.' },
      { title: '🏆 Prize Pool', description: '₹60,000+ Prize Pool. Exciting rewards, recognition, certificates, and opportunities await the top-performing teams.' },
    ],
    agenda: [],
    prerequisites: [
      'Open to undergraduate students across India',
      'Teams must consist of students from the same institution',
      'Interdisciplinary collaboration is encouraged',
    ],
    technologies: ['AI/ML', 'Web Dev', 'App Dev', 'Cybersecurity', 'Embedded Systems', 'IoT', 'Robotics'],
  },
  {
    id: 2,
    title: 'Cloud Study Jam',
    type: 'Workshop',
    date: 'March 22, 2026',
    time: '10:00 AM — 4:00 PM',
    venue: 'CITech Seminar Hall, 2nd Floor',
    capacity: '120 Seats',
    description: 'Hands-on workshop covering Google Cloud Platform fundamentals, BigQuery, and serverless architecture.',
    fullDescription:
      'Dive deep into Google Cloud Platform with hands-on labs and real-world projects. This full-day workshop starts from the basics — understanding cloud architecture, IAM, and compute services — and builds up to deploying serverless applications with Cloud Functions and Cloud Run. You\'ll work with BigQuery to analyze large datasets and build a complete data pipeline. Every participant gets free Google Cloud credits and a pathway to earn the Google Cloud Digital Leader certification.',
    tagline: 'Master the cloud. Build without limits.',
    icon: '☁️',
     status: 'coming soon',
    color: '#4285f4',
    whatYouLearn: [
      { icon: '☁️', text: 'GCP Console & Cloud Shell basics' },
      { icon: '📊', text: 'BigQuery for large-scale analytics' },
      { icon: '⚡', text: 'Serverless with Cloud Functions' },
      { icon: '🐳', text: 'Containerization with Cloud Run' },
      { icon: '🔒', text: 'IAM & Security best practices' },
      { icon: '📈', text: 'Monitoring & Logging setup' },
    ],
    speakers: [
      { name: 'Kavitha Rajan', initials: 'KR', role: 'GCP Solutions Architect' },
      { name: 'Dhruv Patel', initials: 'DP', role: 'Cloud DevOps Lead' },
    ],
    agenda: [
      { time: '10:00 AM', topic: 'Welcome & GCP Overview', speaker: 'Kavitha Rajan' },
      { time: '10:30 AM', topic: 'Lab 1: Console, Compute Engine, Cloud Shell', speaker: 'Kavitha Rajan' },
      { time: '11:30 AM', topic: 'Lab 2: Cloud Storage & IAM Policies', speaker: 'Dhruv Patel' },
      { time: '12:30 PM', topic: 'Lunch Break & Networking', speaker: null },
      { time: '1:15 PM', topic: 'Lab 3: BigQuery — Querying Public Datasets', speaker: 'Kavitha Rajan' },
      { time: '2:15 PM', topic: 'Lab 4: Deploying a Cloud Function', speaker: 'Dhruv Patel' },
      { time: '3:15 PM', topic: 'Lab 5: Cloud Run & CI/CD Pipeline', speaker: 'Dhruv Patel' },
      { time: '3:50 PM', topic: 'Q&A, Certification Path & Wrap-up', speaker: 'All Speakers' },
    ],
    prerequisites: [
      'Basic understanding of web technologies',
      'Google account for GCP access',
      'Laptop with Chrome browser',
      'No prior cloud experience needed',
    ],
    technologies: ['Google Cloud', 'BigQuery', 'Cloud Functions', 'Cloud Run', 'Cloud Storage', 'IAM'],
  },
  {
    id: 3,
    title: 'Flutter Forward',
    type: 'Workshop',
    date: 'April 5, 2026',
    time: '10:00 AM — 5:00 PM',
    venue: 'CITech Computer Lab 3, Block B',
    capacity: '80 Seats',
    description: 'Build beautiful cross-platform apps with Flutter and Dart. From basics to advanced animations.',
    fullDescription:
      'Flutter Forward is an intensive hands-on workshop that takes you from zero to hero in cross-platform development. Start with Dart fundamentals and Flutter\'s widget tree, then progressively build a complete social media app with real-time features. You\'ll master state management with Riverpod, build stunning custom animations using Flutter\'s animation framework, and deploy your app to both Android and iOS from a single codebase. By the end, you\'ll have a portfolio-ready app and the skills to build anything.',
    tagline: 'One codebase. Every platform. Infinite possibilities.',
    icon: '🦋',
    status: 'coming soon',
    color: '#34a853',
    whatYouLearn: [
      { icon: '🎯', text: 'Dart language fundamentals' },
      { icon: '🧩', text: 'Widget composition & layouts' },
      { icon: '🔄', text: 'State management with Riverpod' },
      { icon: '🎨', text: 'Custom animations & transitions' },
      { icon: '🔥', text: 'Firebase Auth & Firestore' },
      { icon: '📱', text: 'Building & deploying to devices' },
    ],
    speakers: [
      { name: 'Sneha Kulkarni', initials: 'SK', role: 'Flutter GDE, Bengaluru' },
      { name: 'Rahul Verma', initials: 'RV', role: 'Mobile Lead, AppForge' },
      { name: 'Anita Das', initials: 'AD', role: 'UI/UX Designer & Flutter Dev' },
    ],
    agenda: [
      { time: '10:00 AM', topic: 'Intro to Dart & Flutter Setup', speaker: 'Sneha Kulkarni' },
      { time: '10:45 AM', topic: 'Widgets Deep Dive — Stateless vs Stateful', speaker: 'Sneha Kulkarni' },
      { time: '11:30 AM', topic: 'Building Layouts: Row, Column, Stack', speaker: 'Rahul Verma' },
      { time: '12:15 PM', topic: 'Lunch Break', speaker: null },
      { time: '1:00 PM', topic: 'State Management with Riverpod', speaker: 'Rahul Verma' },
      { time: '2:00 PM', topic: 'Firebase Integration: Auth & Firestore', speaker: 'Sneha Kulkarni' },
      { time: '3:00 PM', topic: 'Custom Animations & Hero Transitions', speaker: 'Anita Das' },
      { time: '4:00 PM', topic: 'Build & Deploy: APK & TestFlight', speaker: 'Rahul Verma' },
      { time: '4:45 PM', topic: 'Showcase & Next Steps', speaker: 'All Speakers' },
    ],
    prerequisites: [
      'Basic programming knowledge (any language)',
      'Android Studio or VS Code installed',
      'Flutter SDK installed (guide will be shared)',
      'USB cable for device testing (optional)',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Material 3', 'Android Studio'],
  },
  {
    id: 4,
    title: 'Kubernetes Workshop by KubeAce',
    type: 'Workshop',
    date: '7th April 2026',
    time: '1:00pm onwards',
    venue: 'Auditorium, 5th floor , SMV Block',
    capacity: 'Open to All',
    description: 'Basics of Kubernetes, DevOps & Cloud, along with building and deploying an AI-based application.',
    fullDescription: 'Mastering the Cloud: Kubernetes & AI Deployment Workshop\n\nHave you ever wondered what it takes to transition from building a local application to deploying a resilient, scalable system like a seasoned DevOps professional? The gap between "it works on my machine" and "it works at scale" is bridged by Kubernetes—the industry standard for container orchestration.\n\nWe are thrilled to host an intensive, hands-on Kubernetes Workshop led by Mr. Harish Rajendran. This session is designed to strip away the complexity of cloud-native technologies and provide you with a clear, actionable roadmap for modern software deployment.\n\n📌 Note:\n* Bringing your laptop is recommended for a better experience.\n* Attendance will be provided.',
    tagline: 'Ever thought of building your own app and actually deploying it like a pro on Kubernetes? 👀',
    icon: <img src="/Kubernettes/logo.webp" alt="Kubernetes Logo" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />,
    status: 'past',
    color: '#326ce5',
    whatYouLearn: [
      { icon: '🔄', text: "The DevOps Ecosystem: Understand the synergy between development and operations and why cloud-native architecture is a non-negotiable skill in today's job market." },
      { icon: '📦', text: 'Core Kubernetes Concepts: From Pods and Services to Deployments and Scaling—get a firm grip on how K8s manages containerized workloads.' },
      { icon: '🧠', text: 'AI Integration: Learn the nuances of building and containerizing an AI-based application, ensuring it is ready for the cloud.' },
      { icon: '🚀', text: 'Deployment Workflows: Watch a live demonstration of a professional CI/CD pipeline, taking an app from source code to a live production environment.' },
    ],
    speakers: [
      { 
        name: 'Mr. Harish Rajendran', 
        initials: 'HR', 
        role: 'Co-Founder & CTO of KubeAce, certified Kubernetes administrator with 10 years of experience in Kubernetes, DevOps, and Cloud Architecture.',
        image: '/Kubernettes/pic2.jpeg' 
      },
    ],
    registrationLink: 'https://docs.google.com/forms/d/1Z9udZWN-bUsippcDYkwKo1M8mw4THSQjiRfuaUy7xBM/edit',
    stayConnected: 'https://linktr.ee/GDG_CITECH',
    sectionTitle: 'Why You Should Join',
    highlightsIntro: "In an era where efficiency and scalability define a product's success, understanding Kubernetes is a superpower. Whether you are an aspiring software engineer, a data scientist looking to deploy models, or a tech enthusiast, this workshop offers:",
    highlights: [
      { title: 'Industry-Relevant Insights', description: 'Move beyond tutorials with real-world strategies used by top-tier tech companies.' },
      { title: 'Live Technical Demonstration', description: 'Witness a full deployment workflow in real-time, giving you a front-row seat to professional DevOps practices.' },
      { title: 'Future-Ready Skills', description: 'Gain the confidence to architect and manage applications that can handle real-world traffic and complexity.' }
    ],
    agenda: [],
    prerequisites: [
      'Bringing your laptop is recommended for a better experience.',
      'Basic programming knowledge (helpful)',
    ],
    technologies: ['Kubernetes', 'Docker', 'Cloud Architecture', 'DevOps', 'AI Deployment'],
  },
  {
    id: 5,
    title: 'PulseX – Leveraging the Power of AI',
    type: 'Hackathon',
    date: 'Dec 22, 2025 — Jan 16, 2026',
    time: '3-Stage Innovation Challenge',
    venue: 'CHOSS Space, CIT Bengaluru',
    capacity: '31 Teams (100+ Participants)',
    description: 'An open-innovation hackathon to solve real-world and social challenges using AI and Google tools.',
    fullDescription:
      'PulseX – Leveraging the Power of AI was a dynamic open-innovation hackathon designed to inspire students to solve real-world and social challenges using modern technology and Google tools. The event emphasized practical implementation, feasibility, and meaningful impact rather than just technical complexity.\n\nParticipants progressed through a structured innovation journey — from identifying problem statements to developing complete working prototypes. This phased format allowed teams to refine ideas, strengthen technical execution, and continuously improve their solutions through evaluation and feedback at every stage.',
    tagline: 'Innovate with Intelligence. Build for Impact.',
    icon: '🧠',
    status: 'past',
    color: '#a855f7',
    images: [
      '/event2/img-1.jpg',
      '/event2/img-2.jpg',
      '/event2/img-3.jpg',
      '/event2/img-4.jpg',
      '/event2/img-5.jpg',
    ],
    whatYouLearn: [
      { icon: '💡', text: 'Real-World Problem Solving Approach' },
      { icon: '🤖', text: 'AI-Driven Solution Building' },
      { icon: '📊', text: 'Structured Evaluation & Feedback' },
      { icon: '🛠', text: 'Prototype Development Workflow' },
      { icon: '🚀', text: 'Innovation-Focused Judging Criteria' },
      { icon: '🤝', text: 'Collaborative Team Environment' },
    ],
    speakers: [],
    highlights: [
      {
        title: 'Phase 1 — Idea Pitching (Ideathon)',
        description: 'Date: 22 December 2025 — This round focused on innovation and feasibility without requiring a prototype. With 31 teams registered, participants presented ideas through standardized presentations. Evaluation criteria included relevance, innovation, technical design, and long-term impact. 10 teams advanced to the next stage.',
      },
      {
        title: 'Phase 2 — Partial Prototype',
        description: 'Date: 8 January 2026 — Teams showcased partially functional prototypes and explained system architecture, core features, and Google technology integration. Judges evaluated implementation progress, technical depth, and completion readiness. 6 teams qualified for the final round.',
      },
      {
        title: 'Phase 3 — Full Working Prototype',
        description: 'Date: 16 January 2026 — Shortlisted teams demonstrated fully functional end-to-end solutions. Judging focused on scalability, usability, UI/UX, integration quality, and real-world applicability. After final evaluation, 3 teams emerged as winners.',
      },
      {
        title: 'Structured Innovation Journey',
        description: 'The three-phase format guided participants from idea conceptualization to full deployment readiness, building skills incrementally.',
      },
      {
        title: 'Hands-On Technical Development',
        description: 'Participants built real solutions rather than theoretical models, gaining practical experience with AI tools and Google technologies.',
      },
      {
        title: 'Impact-Driven Mindset',
        description: 'Solutions were evaluated on how effectively they addressed real problems and social needs, fostering purpose-driven innovation.',
      },
    ],
    overallImpact:
      'PulseX successfully created an environment where creativity met technology and ideas evolved into real solutions. Participants strengthened their problem-solving mindset, gained hands-on development experience, and learned how to transform concepts into impactful innovations. The hackathon demonstrated how AI-driven thinking combined with structured mentorship can empower students to build scalable, real-world solutions.',
    agenda: [],
    prerequisites: [
      'Open to all students',
      'Basic programming and problem-solving skills',
      'Interest in AI/ML and innovation',
      'Laptop with development environment',
    ],
    technologies: ['Google AI', 'Gemini API', 'TensorFlow', 'Google Cloud', 'Firebase', 'Flutter', 'Python'],
  },
  {
    id: 6,
    title: 'GDG x Ad Astra Collaborative Workshop on Embedded Systems',
    type: 'Workshop',
    date: 'December 27, 2025',
    time: '10:00 AM — 4:00 PM',
    venue: 'CITech Campus, Collaboration Hall',
    capacity: '80+ Participants',
    description: 'An immersive, hands-on workshop on Robotics and Embedded Systems — Shaping the Future of Automation and Intelligence.',
    fullDescription:
      'The GDG x Ad Astra Collaborative Workshop on Robotics and Embedded Systems was an immersive, hands-on learning experience designed to introduce participants to the fundamentals of embedded technology and its real-world applications. Organized jointly by GDGOC and Ad Astra, the session blended strong theoretical foundations with practical demonstrations — from circuit design principles to building and programming robotic cars.\n\nParticipants explored embedded system architecture, real-life use cases, hardware–software integration, and system design principles. Attendees got hands-on experience building Arduino-based robotic vehicles, understanding sensor integration, and working with circuit design tools. The workshop created a dynamic, collaborative learning environment that encouraged curiosity, experimentation, and innovation.',
    tagline: 'Build Intelligent Systems. Power Real-World Innovation.',
    icon: '🔌',
    status: 'past',
    color: '#22d3ee',
    images: [
      '/eventsimg/img-1.jpg',
      '/eventsimg/img-2.jpg',
      '/eventsimg/img-3.jpg',
      '/eventsimg/img-4.jpg',
    ],
    whatYouLearn: [
      { icon: '⚙️', text: 'Embedded System Architecture & Components' },
      { icon: '🧠', text: 'Real-World Applications & Use Cases' },
      { icon: '💻', text: 'Simulation Tools for System Design' },
      { icon: '🔌', text: 'Hardware–Software Integration Concepts' },
      { icon: '🚀', text: 'Practical Implementation Strategies' },
      { icon: '🤝', text: 'Collaborative Problem-Solving Approach' },
    ],
    speakers: [
      { name: 'Shreya Upadhyay', initials: 'SU', role: 'GDG Lead' },
      { name: 'S Nishaath', initials: 'SN', role: 'Ad Astra Lead' },
      { name: 'Sankarshan V Sastry', initials: 'SS', role: 'GDG Embedded Systems Lead' },
      { name: 'Yashas Mahesh', initials: 'YM', role: 'Ad Astra Circuit Design Lead' },
    ],
    highlights: [
      {
        title: 'Strong Conceptual Foundation',
        description: 'A clear and structured introduction to embedded systems fundamentals helped participants connect theory with real implementations.',
      },
      {
        title: 'Expert Leadership & Interactive Learning',
        description: 'Led by club leaders and embedded systems specialists, the session fostered active participation, discussion, and idea sharing.',
      },
      {
        title: 'Hands-On Practical Exposure',
        description: 'Participants worked with simulation tools to visualize system behavior and experiment with designs, reinforcing concepts through practice.',
      },
      {
        title: 'Engaged Participation',
        description: 'The workshop atmosphere was energetic and collaborative, with attendees actively exploring emerging technologies and innovative solutions.',
      },
    ],
    overallImpact:
      'The workshop successfully strengthened participants\' technical understanding while inspiring them to think creatively about how embedded systems can drive innovation. Attendees left with practical exposure, deeper conceptual clarity, and motivation to explore advanced embedded technologies for real-world problem solving.',
    agenda: [],
    prerequisites: [
      'Basic programming knowledge (recommended)',
      'Interest in electronics or embedded technology',
      'Laptop with development tools installed',
    ],
    technologies: ['Arduino', 'Microcontrollers', 'Circuit Design', 'Robotics', 'Embedded C', 'Sensors & Actuators'],
  },
];

function EventCard({ event, index, onSelect }) {
  return (
    <motion.div
      className="event-card"
      style={{ '--event-color': event.color }}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onSelect(event)}
    >
      <div className="event-card__inner">
        <div className="event-card__header">
          <span className="event-card__type">{event.type}</span>
          <span className={`event-card__status event-card__status--${event.status}`}>
            {event.status === 'upcoming' ? '● Live Soon' : event.status === 'coming soon' ? '● Coming Soon' : '● Completed'}
          </span>
        </div>
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__date">{event.date}</p>
        <p className="event-card__desc">{event.description}</p>
        <button className="event-card__btn">
          {event.status === 'upcoming' ? 'View Details →' : 'View Recap →'}
        </button>
      </div>
      <div className="event-card__glow" />
    </motion.div>
  );
}

export default function Events({ onEventSelect }) {
  return (
    <section id="events" className="events section">
      <div className="container">
        <SectionHeading
          title="Events"
          subtitle="Immerse yourself in workshops, hackathons, and developer conferences that push boundaries."
        />
        <div className="events__grid">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} onSelect={onEventSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
