import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    date: '2024 - Present',
    icon: '💼',
    points: [
      'Led migration from Vue 2 to React 18 with TypeScript',
      'Reduced bundle size by 40% using Vite & code splitting',
      'Implemented design system with Tailwind & Storybook'
    ]
  },
  {
    title: 'Fullstack Developer',
    company: 'Startup Inc',
    date: '2022 - 2024',
    icon: '🚀',
    points: [
      'Built REST API with Node.js + PostgreSQL',
      'Developed admin dashboard using React & Redux',
      'Integrated Stripe payment & JWT authentication'
    ]
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Agency',
    date: '2020 - 2022',
    icon: '🎨',
    points: [
      'Created responsive landing pages with HTML/CSS/JS',
      'Collaborated with designers on Figma prototypes',
      'Maintained WordPress sites & custom themes'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3 text-center">Experience</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-16 text-center">Work history.</h2>
        
        <VerticalTimeline lineColor="rgba(99, 102, 241, 0.2)">
          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              date={exp.date}
              iconStyle={{ background: '#6366f1', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={<span className="text-2xl">{exp.icon}</span>}
              contentStyle={{ background: 'rgba(15, 23, 42, 0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.5)' }}
              dateClassName="font-mono text-sm opacity-70"
            >
              <h3 className="font-heading font-bold text-xl text-heading mb-1">{exp.title}</h3>
              <h4 className="font-semibold text-indigo mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside space-y-1.5 text-sm opacity-80">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
