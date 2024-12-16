// import { PropTypes } from 'prop-types';
// import { Component } from 'react';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   hendlChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form
//         autoComplete="off"
//         onSubmit={this.handleSubmit}
//         style={{
//           display: 'block',
//           width: '400px',
//           padding: '20px 10px',
//           border: '2px solid black',
//         }}
//       >
//         <label style={{ display: 'block' }}>Name</label>
//         <input
//           style={{
//             display: 'block',
//             marginTop: '10px',
//             marginBottom: '20px',
//           }}
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.hendlChange}
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label style={{ display: 'block' }}>Number</label>
//         <input
//           style={{
//             display: 'block',
//             marginTop: '10px',
//             marginBottom: '20px',
//           }}
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.hendlChange}
//           // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit">add contact</button>
//       </form>
//     );
//   }
// }

// ContactForm.protoTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

//==================================================================

// import { PropTypes } from 'prop-types';
// import { Component } from 'react';

// export class ContactForm extends Component {
//   handleSubmit = event => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     console.log(name, number);

//     this.props.onSubmit({ name, number });

//     form.reset();
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         autoComplete="off"
//         style={{
//           display: 'block',
//           width: '400px',
//           padding: '20px 10px',
//           border: '2px solid black',
//         }}
//       >
//         <label style={{ display: 'block' }}>Name</label>
//         <input
//           style={{
//             display: 'block',
//             marginTop: '10px',
//             marginBottom: '20px',
//           }}
//           type="text"
//           name="name"
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label style={{ display: 'block' }}>Number</label>
//         <input
//           style={{
//             display: 'block',
//             marginTop: '10px',
//             marginBottom: '20px',
//           }}
//           type="tel"
//           name="number"
//           // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit">add contact</button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

//==================================================================

// import { PropTypes } from 'prop-types';

// export const ContactForm = ({ onSubmit }) => {
//   const handleSubmit = event => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     console.log(name, number);

//     onSubmit({ name, number });

//     form.reset();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       autoComplete="off"
//       style={{
//         display: 'block',
//         width: '400px',
//         padding: '20px 10px',
//         border: '2px solid black',
//       }}
//     >
//       <label style={{ display: 'block' }}>Name</label>
//       <input
//         style={{
//           display: 'block',
//           marginTop: '10px',
//           marginBottom: '20px',
//         }}
//         type="text"
//         name="name"
//         // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />

//       <label style={{ display: 'block' }}>Number</label>
//       <input
//         style={{
//           display: 'block',
//           marginTop: '10px',
//           marginBottom: '20px',
//         }}
//         type="tel"
//         name="number"
//         // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />

//       <button type="submit">add contact</button>
//     </form>
//   );
// };

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

//==================================================================

import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { object, string } from 'yup';
import {
  FormEl,
  InputEl,
  Label,
  SubmitButton,
  Error,
} from './ContactFofm.styled';

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: string()
    .min(4)
    .max(10)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
      <FormEl autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <InputEl type="text" name="name" placeholder="Enter name" />
        <Error name="name" component="div" />

        <Label htmlFor="number">Number</Label>
        <InputEl type="tel" name="number" placeholder="Enter phone number" />
        <Error name="number" component="div" />

        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormEl>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//==================================================================
