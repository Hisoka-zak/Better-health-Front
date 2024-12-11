import React, { useState } from 'react';



export const CaloriesCalculator = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [calories, setCalories] = useState(0);
  
    const calculateCalories = () => {
      let bmr = 0;
  
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
  
      let caloriesNeeded = 0;
  
      switch (activityLevel) {
        case 'sedentary':
          caloriesNeeded = bmr * 1.2;
          break;
        case 'lightlyActive':
          caloriesNeeded = bmr * 1.375;
          break;
        case 'moderatelyActive':
          caloriesNeeded = bmr * 1.55;
          break;
        case 'veryActive':
          caloriesNeeded = bmr * 1.725;
          break;
        case 'superActive':
          caloriesNeeded = bmr * 1.9;
          break;
        default:
          caloriesNeeded = bmr;
      }
  
      setCalories(caloriesNeeded);
    };
  
    return (
      <>
      <div class='cal'>
        <div class='cal-gap'>
        <h1 class='titel-cal'>Calories Calculator <i class="bi bi-calculator"></i></h1>
        <label class='cal-label'>
          <input class='input' type="number" placeholder='Weight (in kg)' onChange={(e) => setWeight(e.target.value)}/>
        </label>
        </div>
        <div class='cal-gap'>
          <label class='cal-label'>  
            <input class='input' type="number" placeholder='Height (in cm)' onChange={(e) => setHeight(e.target.value)}/>
          </label>
        </div> 
        <div class='cal-gap'>
          <label class='cal-label'>
            <input class='input' type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)}/>
          </label>
        </div>
        <div class='cal-gap'> 
          <label class='cal-select'>
            <h3 style={{ letterSpacing:'3px'}}>Gender</h3> 
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div class='cal-gap'>
        <label class='cal-select'>
          <h3 style={{ letterSpacing:'3px'}}>Activity Level</h3>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="superActive">Super Active</option>
          </select>
        </label>
        </div>
        <div class='cal-gap'>
            <button onClick={calculateCalories} class="button-cal" data-text="Awesome">
              <span class="">&nbsp;Calculate&nbsp;</span>
              <span aria-hidden="true" class="hover-text">&nbsp;Calculate&nbsp;</span>
            </button>
            <h2 class='cal-out'>Calories Needed: {calories}</h2>
          </div>
          </div>
      </>
      
    );
  };