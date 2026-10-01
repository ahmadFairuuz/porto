import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: 'Head of Tech Division',
    company: 'Kopma Unila',
    date: 'Feb 2025 - Feb 2026',
    logo: 'https://kopmaunilaofficial.com/wp-content/uploads/2025/04/de71f7d3-2c86-4815-a2d7-34ad8ebd6fbc_removalai_preview.png',
    points: [
      'Supervised and trained 16 division staff members in web development, information management, and organizational technology workflows.',
      'Engineered and maintained kopmaunila.com, developing 7 custom web pages, integrating Google SMTP domain emails, and publishing 30 articles.',
      'Led major SiJuko application v7.1.0 & v7.2.0 releases and successfully achieved 71.8% adoption across 1,040+ active devices.',
      'Managed centralized databases for monthly activity logs, official correspondence, surveys, and alumni/demisioner records.'
    ]
  },
  {
    title: 'Back End Developer (Intern)',
    company: 'Kejaksaan Tinggi Lampung',
    date: 'Jul 2025 - Aug 2025',
    logo: 'https://www.kejaksaan.go.id/assets/img/webphada.png',
    points: [
      'Developed backend asset management website for legal case routing and confiscated goods management using Laravel and PHP.',
      'Managed and compiled seized-asset data from 17 District Prosecutor\'s Offices and branch offices across Lampung Province.',
      'Implemented Role-Based Access Control via custom middleware and built RESTful APIs secured with Laravel Sanctum.',
      'Integrated features for asset tracking, including automated QR Code generation for item tags and Excel report exports.'
    ]
  },
  {
    title: 'Full Stack Engineer (Intern)',
    company: 'PT. Stechoq Robotika Indonesia',
    date: 'Sep 2024 - Dec 2024',
    logo: 'https://stechoq.com/wp-content/uploads/2022/06/stechoq-logo.png',
    points: [
      'Served as Lead Frontend Developer for a Supply Chain & Warehouse Management System web application.',
      'Completed 14 fullstack modules covering frontend architecture, backend development, and deployment within 4 months.',
      'Awarded "The Best Mentee in Time Management" out of 20+ participants for exceptional productivity and project execution.'
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
              iconStyle={{ background: 'transparent', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-12 h-12 object-contain rounded-full border-2 border-indigo/30 bg-white/10 p-1"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span className="text-2xl font-bold">${exp.company.charAt(0)}</span>`;
                  }}
                />
              }
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
