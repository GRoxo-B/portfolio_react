export const startSnowEffect = () => {
  if (!document.querySelector('link[href="/components/effects/snowEffect.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/components/effects/snowEffect.css';
    document.head.appendChild(link);
  }

  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-container';
  document.body.appendChild(snowContainer);

  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowContainer.appendChild(snowflake);
  }
};

export const stopSnowEffect = () => {
  const snowContainer = document.querySelector('.snow-container');
  if (snowContainer) {
    snowContainer.remove();
  }

  const link = document.querySelector('link[href="/components/effects/snowEffect.css"]');
  if (link) {
    link.remove();
  }
};