const stateReset = {
  values: {
    personal: {
      first: '',
      last: '',
      title: '',
      photo: '',
      address: '',
      phone: '',
      email: '',
      about: ''
    },
    experience: {
      group: [
        {
          position: '',
          company: '',
          date: '',
          description: ''
        }
      ]
    },
    education: {
      group: [
        {
          university: '',
          degree: '',
          date: '',
          description: ''
        }
      ]
    }
  }
};

export default stateReset;
