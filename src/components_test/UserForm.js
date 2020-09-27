import React, { Component } from 'react';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

export class UserForm extends Component {
  state = {
    step: 1,
    workSector: '',
    age: '',
    gender: '',
    race: '',
    q1_1: false,
    q1_2: false,
    q1_3: false,
    q1_4: false,
    q1_5: false,
    hasTested: false,
    testResult: '',
    testDate: new Date(),
    hadEpisode: false,
    requiredHospitalization: '',
    symptomsDate: new Date(),
    q2_1: '',
    q2_2: '',
    q2_3: '',
    q2_4: '',
    q2_5: '',
    q2_6: '',
    q2_7: '',
    q2_8: '',
    q2_9: '',
    q2_10: '',
    q2_11: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    console.log(this.state);
    // Different measures for changing checkboxes, dates, and other fields
    switch (e.target.type) {
      case 'checkbox':
        this.setState({ [input]: !this.state[input]})
        break;
      default:
        this.setState({ [input]: e.target.value });
    }
    // console.log(this.state);
  };

  render() {
    const { step } = this.state;
    const { workSector, age, gender, race, q1_1, q1_2, q1_3, q1_4, q1_5, hasTested, testResult, testDate, hadEpisode, requiredHospitalization, symptomsDate, q2_1, q2_2, q2_3, q2_4, q2_5, q2_6, q2_7, q2_8, q2_9, q2_10, q2_11 } = this.state;
    const f1Values = { workSector, age, gender, race };
    const f2Values = { q1_1, q1_2, q1_3, q1_4, q1_5, hasTested, testResult, testDate };
    const f3Values = { hadEpisode, requiredHospitalization, symptomsDate, q2_1, q2_2, q2_3, q2_4, q2_5, q2_6, q2_7, q2_8, q2_9, q2_10, q2_11 };

    switch (step) {
      case 1:
        return (
          <FirstForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={f1Values}
          />
        );
      case 2:
        return (
          <SecondForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={f2Values}
          />
        );
      case 3:
        return (
          <ThirdForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={f3Values}
          />
        );
      // case 4:
      //   return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;