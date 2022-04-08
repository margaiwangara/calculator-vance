const items = [
  {
    title: 'Air Fryer',
  },
  {
    title: 'Air Purifier',
  },
  {
    title: 'Amazon Echo',
  },
  {
    title: 'Amazon Echo Show',
  },
  {
    title: 'Apple TV',
  },
  {
    title: 'Aquarium',
  },
  {
    title: 'AV Receiver',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const appliancesContainer = document.querySelector(
    '.appliances .appliances-container',
  );
  const playgroundAppliance = [];

  // append to appliance
  items.forEach((value) => {
    const applianceContainer = document.createElement('div');
    applianceContainer.className = 'appliance-container';
    const appliance = document.createElement('div');
    appliance.className = 'appliance';
    const applianceText = document.createElement('h5');
    applianceText.classList = 'text-sm';
    applianceText.innerText = value.title;
    applianceContainer.appendChild(appliance);
    applianceContainer.appendChild(applianceText);

    appliancesContainer.appendChild(applianceContainer);
  });

  const appl = document.querySelectorAll('.appliance-container');
});
