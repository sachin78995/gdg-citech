import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './Resources.css';

const techSkills = [
  { name: 'React', desc: 'Build blazing-fast UIs with the most popular JavaScript library.', color: '#61dafb', size: 'lg' },
  { name: 'TensorFlow', desc: 'Create and deploy machine learning models at scale.', color: '#ff6f00', size: 'lg' },
  { name: 'Flutter', desc: 'Craft beautiful natively compiled apps from a single codebase.', color: '#02569b', size: 'md' },
  { name: 'Firebase', desc: 'Backend-as-a-service for web and mobile applications.', color: '#ffca28', size: 'md' },
  { name: 'Kotlin', desc: 'Modern, concise, and safe programming language for Android.', color: '#7f52ff', size: 'md' },
  { name: 'Go', desc: 'Simple, reliable, and efficient systems programming language.', color: '#00add8', size: 'sm' },
  { name: 'Docker', desc: 'Containerize your apps for consistent deployment everywhere.', color: '#2496ed', size: 'md' },
  { name: 'Kubernetes', desc: 'Orchestrate containers at scale with Google-born technology.', color: '#326ce5', size: 'lg' },
  { name: 'Python', desc: 'Versatile language for AI, web, automation, and data science.', color: '#3776ab', size: 'lg' },
  { name: 'TypeScript', desc: 'JavaScript that scales — with types and better tooling.', color: '#3178c6', size: 'md' },
  { name: 'GraphQL', desc: 'Query exactly the data you need with flexible API design.', color: '#e535ab', size: 'sm' },
  { name: 'Angular', desc: 'Enterprise-grade web application framework by Google.', color: '#dd0031', size: 'md' },
  { name: 'GCP', desc: 'Google Cloud Platform — build, deploy, and scale with ease.', color: '#4285f4', size: 'lg' },
  { name: 'Figma', desc: 'Collaborative interface design and prototyping tool.', color: '#a259ff', size: 'sm' },
  { name: 'Rust', desc: 'Performance-critical systems with memory safety guarantees.', color: '#dea584', size: 'sm' },
  { name: 'Node.js', desc: 'JavaScript runtime for building scalable server applications.', color: '#339933', size: 'md' },
];

function SkillBubble({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  const sizeMap = { sm: 80, md: 100, lg: 120 };
  const size = sizeMap[skill.size] || 100;

  return (
    <motion.div
      className="skill-bubble"
      style={{
        '--skill-color': skill.color,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 200,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: [0, -8, 0],
      }}
      // @ts-ignore
      transition2={{
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 2,
        },
      }}
    >
      <span className="skill-bubble__name">{skill.name}</span>
      <div className="skill-bubble__ring" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="skill-bubble__tooltip"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <strong>{skill.name}</strong>
            <p>{skill.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="resources section">
      <div className="container">
        <SectionHeading
          title="DevSpace"
          subtitle="Explore the technologies and skills we teach, practice, and master across our community."
        />
        <div className="resources__cloud">
          {techSkills.map((skill, i) => (
            <SkillBubble key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
