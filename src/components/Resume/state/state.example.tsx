import StateExample from './interfaces/state.example.interfaces';

const stateExample = (): StateExample => ({
  values: {
    personal: {
      first: 'i hecking love emma watson',
      last: 'i hecking love emma watson',
      title: 'i hecking love emma watson',
      photo: 'i hecking love emma watson',
      phone: 'i hecking love emma watson',
      email: 'i hecking love emma watson',
      website: 'i hecking love emma watson',
      github: 'i hecking love emma watson',
      linkedin: 'i hecking love emma watson',
      about: 'i hecking love emma watson'
    },
    experience: {
      group: [
        {
          position: 'i hecking love emma watson',
          company: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        },
        {
          position: 'i hecking love emma watson',
          company: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        },
        {
          position: 'i hecking love emma watson',
          company: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        }
      ]
    },
    education: {
      group: [
        {
          university: 'i hecking love emma watson',
          degree: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        }
      ]
    }
  }
});

export default stateExample;
