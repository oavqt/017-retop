interface StateExample {
  values: {
    personal: {
      first: string;
      last: string;
      title: string;
      photo: string;
      address: string;
      phone: string;
      email: string;
      about: string;
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
  };
}

export default StateExample;
