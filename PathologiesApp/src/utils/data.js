export const data = [
  {
    pathology_name: 'P. broncho-pulmonaires, pleurale',
    pathology_types: [
      {
        name: 'AFFECTIONS DES VOIES AERIENNES',
        agents: [
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
          },
          {
            name: 'Acide chromique, chromates et bichromates alcalins',
            path: '1119BIS.pdf',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'P. cardio-vasculaire',
    pathology_types: [
      {
        name: 'ANGINE DE POITRINE',
        agents: [
          {
            name: 'Dérivés nitrés des glycols et du glycérol ',
            path: '../utils/files/127.pdf',
          },
        ],
      },
    ],
  },
  // {
  //     "pathology_name": "P. cutanéo-muqueuse"
  // },
  // {
  //     "pathology_name": "P. hépatho-gastro-intestinale"
  // },
  // {
  //     "pathology_name": "Mal. Infectieuse et parasitaire"
  // },
  // {
  //     "pathology_name": "Intoxications aiguës"
  // },
  // {
  //     "pathology_name": "P. neuromusculaire et psychiatrique"
  // },
  // {
  //     "pathology_name": "P. neuromusculaire et psychiatrique"
  // },
  // {
  //     "pathology_name": "P. oeil et vision / P. ORL et stomato"
  // },
  // {
  //     "pathology_name": "P. os et articulaire"
  // },
  // {
  //     "pathology_name": "P. rénale, vésicale, génitale"
  // },
  // {
  //     "pathology_name": "P. sang et hémopathie"
  // }
];

export const pathologies = data.map(pathology => ({
  label: pathology.pathology_name,
  value: pathology.pathology_name,
}));

export const getPathologyTypes = selectedPathology => {
  return (
    selectedPathology &&
    data
      .find(pathology => pathology.pathology_name === selectedPathology)
      .pathology_types.map(pathologyType => ({
        label: pathologyType.name,
        value: pathologyType.name,
      }))
  );
};

export const getPathologyTypeAgents = (
  selectedPathology,
  selectedPathologyType,
) => {
  return (
    selectedPathology &&
    selectedPathologyType &&
    data
      .find(pathology => pathology.pathology_name === selectedPathology)
      .pathology_types.find(
        pathologyType => pathologyType.name === selectedPathologyType,
      )?.agents
  );
};
