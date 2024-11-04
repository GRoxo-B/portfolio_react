import React, { useState, useEffect } from 'react';
import '../style/Tests.css';
import { startSnowEffect, stopSnowEffect } from '../components/effects/snowEffect';

const effects = [
  { name: 'Snow', description: 'A beautiful snow effect with falling snowflakes.', start: startSnowEffect, stop: stopSnowEffect },
  { name: 'Rain', description: 'A calming rain effect with raindrops falling.', start: () => {}, stop: () => {} },
  // Add more effects here...
];

const Tests: React.FC = () => {
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);

  useEffect(() => {
    const effect = effects.find(e => e.name === selectedEffect);
    if (effect) {
      effect.start();
    }
    return () => {
      if (effect) {
        effect.stop();
      }
    };
  }, [selectedEffect]);

  const handleEffectClick = (effectName: string) => {
    setSelectedEffect(prevEffect => (prevEffect === effectName ? null : effectName));
  };

  return (
    <div className="back-tests-container">
      <div className="tests-container">
        <div className="effects-list">
            {effects.map((effect) => (
              <div key={effect.name} className={`element-animation ${selectedEffect === effect.name ? 'selected' : ''}`} onClick={() => handleEffectClick(effect.name)}>
                <div className='effect-item'>
                  {effect.name}
                </div>
                {selectedEffect === effect.name && (
                  <div className="effect-description">
                    {effect.description}
                  </div>
                  )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;