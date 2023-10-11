import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

// ✅ 값이 비어있거나 && 5자 미만일 경우,,,
const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enterdName = nameInputRef.current.value;
    const enterdStreet = streetInputRef.current.value;
    const enterdPostal = postalInputRef.current.value;
    const enterdCity = cityInputRef.current.value;

    // ✅ 값이 있으면 !false => true 반환
    const enteredNameIsValid = !isEmpty(enterdName);
    const enteredStreetIsValid = !isEmpty(enterdStreet);
    const enteredPostalIsValid = !isNotFiveChars(enterdPostal);
    const enteredCityIsValid = !isEmpty(enterdCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
      city: enteredCityIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

    // ⭐ 값이 유효하지않다면...
    if(!formIsValid) {
      return;
    }

    // ⭐ 값이 유효하다면...
    console.log(enterdName);
    console.log(enterdStreet);
    console.log(enterdPostal);
    console.log(enterdCity);
    props.onConfirm({
      name: enterdName,
      street: enterdStreet,
      postalCode: enterdPostal,
      city: enterdCity
    });
  };

  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
  const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid postalCode!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;