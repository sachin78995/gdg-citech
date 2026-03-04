import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './Team.css';

/* ── 7 Domains with SVG icon paths ── */
export const DOMAINS = [
  {
    id: 'web',
    name: 'Web Development',
    shortName: 'WEB DEV',
    color: '#22d3ee',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16L8 32L20 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 16L56 32L44 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 12L28 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    members: [
      { name: 'Sneha Reddy', role: 'Web Dev Lead', bio: 'Full-stack developer specializing in React & Node.js. Built 15+ production applications for startups.', skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'] },
      { name: 'Arjun Mehta', role: 'Frontend Engineer', bio: 'UI/UX focused developer with a passion for pixel-perfect interfaces and smooth animations.', skills: ['React', 'CSS', 'Framer Motion', 'Figma'] },
      { name: 'Diya Kapoor', role: 'Backend Engineer', bio: 'API architect and database specialist. Loves building scalable, secure server-side systems.', skills: ['Express', 'PostgreSQL', 'Redis', 'Docker'] },
      { name: 'Kiran Joshi', role: 'Full Stack Dev', bio: 'Passionate about building end-to-end solutions. Contributor to multiple open-source projects.', skills: ['Next.js', 'GraphQL', 'Prisma', 'AWS'] },
    ],
  },
  {
    id: 'flutter',
    name: 'Flutter Development',
    shortName: 'FLUTTER',
    color: '#4285f4',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 8L14 32L22 40L54 8H38Z" fill="currentColor"/>
        <path d="M38 34L22 50L30 58L54 34H38Z" fill="currentColor"/>
        <path d="M22 40L30 32L38 40L30 48L22 40Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    members: [
      { name: 'Arjun Nair', role: 'Flutter Lead', bio: 'Cross-platform mobile expert with 3+ years of Flutter experience. Firebase enthusiast.', skills: ['Flutter', 'Dart', 'Firebase', 'Riverpod'] },
      { name: 'Meera Sinha', role: 'Mobile Developer', bio: 'Builds beautiful, performant mobile apps. Winner of Google Solution Challenge 2025.', skills: ['Flutter', 'GetX', 'Hive', 'REST APIs'] },
      { name: 'Rahul Verma', role: 'UI Developer', bio: 'Design-to-code specialist. Creates stunning mobile interfaces with smooth transitions.', skills: ['Flutter', 'Animations', 'Material 3', 'Figma'] },
      { name: 'Anita Desai', role: 'App Developer', bio: 'Published 5 apps on Play Store. Expert in state management and clean architecture.', skills: ['Flutter', 'BLoC', 'Clean Arch', 'CI/CD'] },
    ],
  },
  {
    id: 'ml',
    name: 'ML / AI',
    shortName: 'ML / AI',
    color: '#a855f7',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="20" r="4" fill="currentColor"/>
        <circle cx="18" cy="44" r="4" fill="currentColor"/>
        <circle cx="46" cy="44" r="4" fill="currentColor"/>
        <circle cx="32" cy="44" r="3" fill="currentColor" opacity="0.5"/>
        <path d="M32 24V41M20 42L29 37M44 42L35 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 20L18 44M32 20L46 44M18 44H46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4"/>
      </svg>
    ),
    members: [
      { name: 'Vikram Singh', role: 'ML/AI Lead', bio: 'Deep learning researcher focused on NLP and computer vision. Published 2 papers at top conferences.', skills: ['PyTorch', 'TensorFlow', 'NLP', 'OpenCV'] },
      { name: 'Priya Sharma', role: 'Data Scientist', bio: 'Transforms raw data into actionable insights. Kaggle Expert with expertise in predictive modeling.', skills: ['Python', 'Pandas', 'Scikit-learn', 'SQL'] },
      { name: 'Nikhil Rajan', role: 'ML Engineer', bio: 'Builds and deploys ML models at scale. Focused on MLOps and production-ready AI systems.', skills: ['MLflow', 'Docker', 'FastAPI', 'GCP AI'] },
      { name: 'Kavya Iyer', role: 'AI Researcher', bio: 'Exploring generative AI and LLMs. Active contributor to Hugging Face open-source models.', skills: ['Transformers', 'LangChain', 'GANs', 'CUDA'] },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    shortName: 'CLOUD',
    color: '#34a853',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 42C11.6 42 8 38.4 8 34C8 29.6 11.6 26 16 26C16 26 16 26 16 26C16 18.3 22.3 12 30 12C36.4 12 41.8 16.4 43.4 22.2C44.2 22.1 45.1 22 46 22C51.5 22 56 26.5 56 32C56 37.5 51.5 42 46 42H16Z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    members: [
      { name: 'Ananya Gupta', role: 'Cloud Lead', bio: 'Google Cloud certified architect. Designs cloud-native architectures for scalable applications.', skills: ['GCP', 'Kubernetes', 'Terraform', 'CI/CD'] },
      { name: 'Siddharth Rao', role: 'DevOps Engineer', bio: 'Infrastructure automation expert. Builds reliable CI/CD pipelines and monitoring systems.', skills: ['Docker', 'Jenkins', 'Prometheus', 'Linux'] },
      { name: 'Roshni Menon', role: 'Cloud Developer', bio: 'Serverless and microservices specialist. Reduced cloud costs by 40% through optimization.', skills: ['Cloud Run', 'Cloud Functions', 'BigQuery', 'Pub/Sub'] },
      { name: 'Dev Mehta', role: 'SRE Engineer', bio: 'Site reliability engineering focused. Ensures 99.99% uptime for production workloads.', skills: ['SRE', 'Monitoring', 'Incident Mgmt', 'Go'] },
    ],
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    shortName: 'DESIGN',
    color: '#fbbc04',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8C18.7 8 8 18.7 8 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M32 8C45.3 8 56 18.7 56 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M56 32C56 45.3 45.3 56 32 56" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.15"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
      </svg>
    ),
    members: [
      { name: 'Rohan Kumar', role: 'Design Lead', bio: 'Award-winning UI/UX designer with a keen eye for detail. Designed interfaces used by 50K+ users.', skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'] },
      { name: 'Aisha Khan', role: 'Visual Designer', bio: 'Creative visual storyteller. Specializes in branding, illustrations, and motion graphics.', skills: ['Illustrator', 'After Effects', 'Branding', 'Typography'] },
      { name: 'Tanvi Bhatt', role: 'UX Researcher', bio: 'User-centered design advocate. Conducts research to create intuitive, accessible experiences.', skills: ['User Research', 'Wireframing', 'A/B Testing', 'Accessibility'] },
      { name: 'Karthik Rao', role: 'Product Designer', bio: 'End-to-end product design thinker. Bridges the gap between design vision and engineering reality.', skills: ['Product Design', 'Design Thinking', 'Interaction', 'Figma'] },
    ],
  },
  {
    id: 'cyber',
    name: 'Cybersecurity',
    shortName: 'CYBER SEC',
    color: '#ea4335',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L12 18V30C12 44 20.5 53.5 32 56C43.5 53.5 52 44 52 30V18L32 8Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round"/>
        <path d="M26 32L30 36L38 28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    members: [
      { name: 'Aarav Sharma', role: 'Security Lead', bio: 'Ethical hacker and CTF champion. Identified vulnerabilities in 20+ enterprise applications.', skills: ['Pen Testing', 'OWASP', 'Burp Suite', 'Wireshark'] },
      { name: 'Neha Patil', role: 'Security Analyst', bio: 'Threat intelligence and incident response specialist. Blue team defender with SOC experience.', skills: ['SIEM', 'Threat Intel', 'Forensics', 'Splunk'] },
      { name: 'Aditya Rao', role: 'AppSec Engineer', bio: 'Application security expert. Integrates security into CI/CD pipelines for secure development.', skills: ['SAST', 'DAST', 'DevSecOps', 'Code Review'] },
      { name: 'Ishita Joshi', role: 'Network Security', bio: 'Network defense and cryptography enthusiast. Builds secure network architectures and firewalls.', skills: ['Firewalls', 'VPN', 'IDS/IPS', 'Cryptography'] },
    ],
  },
  {
    id: 'community',
    name: 'Community & Outreach',
    shortName: 'COMMUNITY',
    color: '#ff6d00',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="3"/>
        <circle cx="14" cy="30" r="5" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="50" cy="30" r="5" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M20 52C20 44.3 25.4 38 32 38C38.6 38 44 44.3 44 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M8 48C8 43 10.7 39 14 39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M56 48C56 43 53.3 39 50 39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    members: [
      { name: 'Priya Patel', role: 'Community Manager', bio: 'Builds and nurtures developer communities. Organized 30+ tech events with 5000+ attendees.', skills: ['Event Mgmt', 'Public Speaking', 'Social Media', 'Marketing'] },
      { name: 'Sameer Kulkarni', role: 'Outreach Lead', bio: 'Connects GDG-CITech with industry partners and sponsors. Corporate relations specialist.', skills: ['Partnerships', 'Sponsorships', 'PR', 'Networking'] },
      { name: 'Meera Verma', role: 'Content Lead', bio: 'Creates engaging technical content across blogs, videos, and social media platforms.', skills: ['Tech Writing', 'Video Editing', 'SEO', 'Canva'] },
      { name: 'Lakshmi Nair', role: 'Events Coordinator', bio: 'Logistics and event planning wizard. Ensures every hackathon and workshop runs flawlessly.', skills: ['Logistics', 'Planning', 'Budgeting', 'Coordination'] },
    ],
  },
];

/* ── Domain Icon Card ── */
function DomainIcon({ domain, index, onSelect }) {
  return (
    <motion.div
      className="domain-icon"
      style={{ '--domain-color': domain.color }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelect(domain.id)}
    >
      <div className="domain-icon__circle">
        <div className="domain-icon__ring" />
        <div className="domain-icon__svg">{domain.icon}</div>
        <div className="domain-icon__glow" />
      </div>
      <h4 className="domain-icon__name">{domain.shortName}</h4>
    </motion.div>
  );
}

export default function Team({ onDomainSelect }) {
  return (
    <section id="team" className="team section">
      <div className="container">
        <SectionHeading
          title="Our Domains"
          subtitle="Explore our specialized domains — click on any to meet the team behind it."
        />

        <motion.div
          className="team__domains"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {DOMAINS.map((domain, i) => (
            <DomainIcon
              key={domain.id}
              domain={domain}
              index={i}
              onSelect={onDomainSelect}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
