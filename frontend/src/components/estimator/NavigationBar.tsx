'use client';

type NavigationBarProps = {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function NavigationBar({ activeSection, setActiveSection }: NavigationBarProps) {
  const sections = [
    { id: 'dataEntry', label: 'Data Entry' },
    { id: 'plots', label: 'Visual Analysis' },
    { id: 'prediction', label: 'Prediction' }
  ];
  
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 p-1 flex">
      {sections.map(section => (
        <button
          key={section.id}
          className={`px-6 py-3 rounded-full transition-all ${
            activeSection === section.id
              ? 'bg-orange-500 text-white font-medium'
              : 'hover:bg-orange-100 text-gray-700'
          }`}
          onClick={() => setActiveSection(section.id)}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}