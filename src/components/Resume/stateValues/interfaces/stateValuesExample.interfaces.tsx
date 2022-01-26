interface StateValuesExample {
  education: {
    group: [
      {
        university: string;
        degree: string;
        date: string;
        description: string;
      }
    ];
  };
  experience: {
    group: [
      {
        position: string;
        company: string;
        date: string;
        description: string;
      },
      {
        position: string;
        company: string;
        date: string;
        description: string;
      },
      {
        position: string;
        company: string;
        date: string;
        description: string;
      }
    ];
  };
  personal: {
    first: string;
    last: string;
    title: string;
    photo: string;
    phone: string;
    email: string;
    website: string;
    github: string;
    linkedin: string;
    about: string;
    skills: string;
  };
}

export default StateValuesExample;
