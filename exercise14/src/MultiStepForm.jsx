import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Multi-Step Registration</h1>
       
      {state.step === 1 && (
        <>
          <h3>Step 1: Profile</h3>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
          />
          <br />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={handleChange}
          />
          <br />
          <br />

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {state.step === 2 && (
        <>
          <h2> Step 2: Contact</h2>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={state.phone}
            onChange={handleChange}
          />
          <br />
          <br />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* Step 3 */}
      {state.step === 3 && (
        <>
          <h2>Review</h2>

          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>

          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone}
          </p>

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Edit
          </button>

          <button
            onClick={() => {
              dispatch({ type: "RESET_FORM" });
            }}
          >
            Confirm
          </button>

          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;