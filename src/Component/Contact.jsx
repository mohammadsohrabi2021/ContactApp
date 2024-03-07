import React, { useState } from "react";
import { v4 } from "uuid";
import dataInputs from "../Data/DataInput";
import ContactsList from "./ContactsList";
import styles from './Contacts.module.css'
function Contact() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const chnageHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data !");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deleteHandler=(id)=>{
    const newContacts =contacts.filter(contact=> contact.id !== id)
    setContacts(newContacts)
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {dataInputs.map((input) => (
          <input
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={chnageHandler}
            name={input.name}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contact;
