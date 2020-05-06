import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { getDifferenceYear,calculateBrand, getPlan } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({setSummary, setLoading}) => {

  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [ error, setError ] = useState(false);

  // Extract state values
  const { brand, year, plan } = data;

  // Read the form data and put it in the state
  const getInformation = e => {
      setData({
          ...data,
          [e.target.name] : e.target.value
      })
  }

  // When the user press submit
  const quoteInsurance = e => {
    e.preventDefault();

    if( brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    // Base of $2000
    let result = 2000;

    // Get the difference of years
    const difference = getDifferenceYear(year);
    // For each year substract the 3%
    result -= ((difference * 3) *result) / 100;
    // American 15% increment
    // Asiatic 5% ""
    // European 30% ""
    result = calculateBrand(brand) * result;

    // Basic increase 20%

    // Complete 50%
    const incrementPlan = getPlan(plan);
    result = parseFloat(incrementPlan * result).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      // Remove the spinner
      setLoading(false);
      // Pass the info to main component
      setSummary({
        quote: Number(result),
        data
      });
    },3000)

    
    // Total
  }

  return (
    <form
      onSubmit={quoteInsurance}
    >
      {error ? <Error> All fields are obligatories </Error> : null }
      <Field>
        <Label> Brand </Label>
        <Select
            name="brand"
            value={brand}
            onChange={getInformation}
        >
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asiatic">Asiatic</option>
        </Select>
      </Field>
      <Field>
        <Label> Year </Label>
        <Select
            name="year"
            value={year}
            onChange={getInformation}
        >
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label> Plan </Label>
        <InputRadio
            type="radio" 
            name="plan" 
            value="basic"
            checked={plan === "basic"}
            onChange={getInformation}
        /> Basic
        <InputRadio 
            type="radio" 
            name="plan" 
            value="complete" 
            checked={plan === "complete"}
            onChange={getInformation}
        /> Complete
      </Field>

      <Button type="submit"> Quote </Button>
    </form>
  );
}

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired

}

export default Form;
