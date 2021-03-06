import React, { Component } from 'react';
import {firestore, firebase} from '../firebase.js';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import Certificate from './Certificate';
import { v4  as uuidv4 } from 'uuid';

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
    cert_uuid: '',
  };

  // Proceed to beginning of form
  startNewForm = () => {
    this.setState({
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
      cert_uuid: '',
    });
  }

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

  generate = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    // Different measures for changing checkboxes, dates, and other fields
    switch (e.target.type) {
      case 'checkbox':
        this.setState({ [input]: !this.state[input]})
        break;
      default:
        this.setState({ [input]: e.target.value });
    }
  };

  handleCertUuid = () => {
    // After the cert_uuid state is set, run the following function
    this.setState({
      cert_uuid: uuidv4()
    }, () => {
      //write to document
      firestore.collection("users").doc(firebase.auth().currentUser.uid).set({
        step: this.state.step,
        workSector: this.state.workSector,
        age: this.state.age,
        gender: this.state.gender,
        race: this.state.race,
        q1_1: this.state.q1_1,
        q1_2: this.state.q1_2,
        q1_3: this.state.q1_3,
        q1_4: this.state.q1_4,
        q1_5: this.state.q1_5,
        hasTested: this.state.hasTested,
        testResult: this.state.testResult,
        testDate: this.state.testDate,
        hadEpisode: this.state.hadEpisode,
        requiredHospitalization: this.state.requiredHospitalization,
        symptomsDate: this.state.symptomsDate,
        q2_1: this.state.q2_1,
        q2_2: this.state.q2_2,
        q2_3: this.state.q2_3,
        q2_4: this.state.q2_4,
        q2_5: this.state.q2_5,
        q2_6: this.state.q2_6,
        q2_7: this.state.q2_7,
        q2_8: this.state.q2_8,
        q2_9: this.state.q2_9,
        q2_10: this.state.q2_10,
        q2_11: this.state.q2_11,
        cert_uuid: this.state.cert_uuid,
      })
      .then(() => {
        console.log("Document successfully written!");
        this.nextStep();
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    });  
  };

  render() {
    const { step } = this.state;
    const { workSector, age, gender, race, q1_1, q1_2, q1_3, q1_4, q1_5, hasTested, testResult, testDate, hadEpisode, requiredHospitalization, symptomsDate, q2_1, q2_2, q2_3, q2_4, q2_5, q2_6, q2_7, q2_8, q2_9, q2_10, q2_11, cert_uuid } = this.state;
    const f1Values = { workSector, age, gender, race };
    const f2Values = { q1_1, q1_2, q1_3, q1_4, q1_5, hasTested, testResult, testDate };
    const f3Values = { hadEpisode, requiredHospitalization, symptomsDate, q2_1, q2_2, q2_3, q2_4, q2_5, q2_6, q2_7, q2_8, q2_9, q2_10, q2_11, cert_uuid };
    const certValues = { cert_uuid };

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
            handleCertUuid={this.handleCertUuid}
            values={f3Values}
          />
        );
      case 4:
        return (
        <Certificate 
          nextStep={this.startNewForm}
          values={certValues}
        />
        );
      default:
        (console.log('This is a multi-step form built with React.'))
        return <h1>This is a multi-step form built with React</h1>
    }
  }
}

export default UserForm;