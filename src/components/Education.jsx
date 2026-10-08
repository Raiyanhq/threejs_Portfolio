import { useState } from 'react';
import Icon from './Icon';
import { useDiscovery } from '../hooks/useDiscovery';
const coursework = [
  'Computing with Python',
  'Data Structures',
  'System Level Programming',
  'Software Development',
  'Computer Organization and Programming',
  'Data Science',
  'Big Data Programming',
  'Web Programming',
  'Programming Language Concepts',
  'Software Engineering',
  'App Development',
  'Design Analysis and Algorithms',
  'Robotics',
  'Database Systems',
];

export default function Education() {
  const { discover } = useDiscovery();
  const [open, setOpen] = useState(false);
  return (
    <div className={`education-disclosure ${open ? 'is-open' : ''}`}>
      <button
        className="education-trigger"
        id="education-trigger"
        aria-expanded={open}
        aria-controls="education-details"
        onClick={() => {
          setOpen(!open);
          if (!open) discover('education');
        }}
      >
        <span className="education-toggle">
          <Icon name={open ? 'minus' : 'plus'} size={18} />
        </span>
        <span>
          <strong>Georgia State University</strong>
          <span>B.S. Computer Science · Expected Dec 2026</span>
          <small>
            {open ? 'Close education details' : 'Explore my education'}
          </small>
        </span>
      </button>
      <div
        className="education-details"
        id="education-details"
        role="region"
        aria-labelledby="education-trigger"
        hidden={!open}
      >
        <div className="education-facts">
          <div>
            <span>DEGREE</span>
            <strong>Bachelor of Science</strong>
          </div>
          <div>
            <span>MAJOR</span>
            <strong>Computer Science</strong>
          </div>
          <div>
            <span>LOCATION</span>
            <strong>Atlanta, Georgia</strong>
          </div>
          <div>
            <span>EXPECTED GRADUATION</span>
            <strong>December 2026</strong>
          </div>
        </div>
        <div className="scholarship">
          <span aria-hidden="true">✦</span>
          <div>
            <small>ACADEMIC RECOGNITION</small>
            <strong>US Academic Presidential Scholarship</strong>
          </div>
        </div>
        <h4>
          Relevant coursework <span>{coursework.length}</span>
        </h4>
        <ul className="coursework-list">
          {coursework.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
