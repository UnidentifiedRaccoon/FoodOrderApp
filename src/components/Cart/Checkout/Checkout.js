import styles from "./Checkout.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const confirmHandler = (event) => {
    event.preventDefault();
    const isNameValid = !isEmpty(nameRef.current.value);
    const isStreetValid = !isEmpty(streetRef.current.value);
    const isCityValid = !isEmpty(cityRef.current.value);
    const isPostalCodeValid = isSixChars(postalCodeRef.current.value);

    const isFormValid =
      isNameValid && isStreetValid && isPostalCodeValid && isCityValid;

    setFormValidity({
      name: isNameValid,
      street: isStreetValid,
      postalCode: isPostalCodeValid,
      city: isCityValid,
    });

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: nameRef.current.value,
      street: streetRef.current.value,
      postal: cityRef.current.value,
      city: postalCodeRef.current.value,
    });
  };

  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <Input
        classes={styles["checkout-control"]}
        input={{
          id: "confirm-name",
          type: "text",
        }}
        label="Your Name"
        ref={nameRef}
        errorMessage="This field should be filled"
        invalid={!formValidity.name}
      />
      <Input
        classes={styles["checkout-control"]}
        input={{
          id: "confirm-street",
          type: "text",
        }}
        label="Street"
        ref={streetRef}
        errorMessage="This field should be filled"
        invalid={!formValidity.street}
      />
      <Input
        classes={styles["checkout-control"]}
        input={{
          id: "confirm-postalCode",
          type: "text",
        }}
        label="Postal Code"
        ref={postalCodeRef}
        errorMessage="Enter valid Postal Code (6 characters)"
        invalid={!formValidity.postalCode}
      />
      <Input
        classes={styles["checkout-control"]}
        input={{
          id: "confirm-city",
          type: "text",
        }}
        label="City"
        ref={cityRef}
        errorMessage="This field should be filled"
        invalid={!formValidity.city}
      />
      <div className={styles.actions}>
        <Button alt={true} type="button" onClick={props.onCartHide}>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default Checkout;
