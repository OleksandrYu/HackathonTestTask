import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './OperationForm.module.css';
import Input from "../../ui/Input";
import DropDown from "../../ui/DropDown";
import TextArea from "../../ui/TextArea";

const operationType = [
    'Food',
    'Clothes',
    'Medicine',
    'Bills',
    'Petrol etc'
]
const OperationForm = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const operation = {
            id: Math.random(),
            title: title,
            date: date.toISOString().substring(0, 10),
            amount: amount,
            description: description,
        };
        await fetch("http://localhost:8000/api/operations", {
            method: "POST",
            body: JSON.stringify(operation),
            headers: {
                "Content-Type": "application/json",
            },
        });
        navigate("/operations");
    };

    return <form className={styles.form} onSubmit={formSubmitHandler}>
        <h1 style = {{color: "white"}}> Add your spending</h1>
        <Input type = "text" placeholder="Title" onChange = {(e) => {setTitle(e.target.value)}}/>
        <Input type = "number" placeholder="Amount" onChange = {(e) => {setAmount(e.target.value)}}/>
        <DropDown options = {operationType}/>
        <input type = "date" className={styles.dateInput} onChange={(e) => {setDate(new Date(e.target.value))}}/>
        <TextArea placeholder = "Description" onChange = {(e) => {setDescription(e.target.value)}}/>
    </form>
};

export default OperationForm;

//   <div className={classes["form-field-container"]}>
//           <label htmlFor="title">Title</label>
//           <input
//             id="title"
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//             required
//           ></input>
//         </div>
//         <div className={classes["form-field-container"]}>
//           <label htmlFor="date">Title</label>
//           <input
//             id="date"
//             type="date"
//             value={date.toISOString().substring(0, 10)}
//             onChange={(e) => {
//               setDate(new Date(e.target.value));
//             }}
//             required
//           ></input>
//         </div>
//         <div className={classes["form-field-container"]}>
//           <label htmlFor="amount">Amount</label>
//           <input
//             id="amount"
//             type="number"
//             value={amount}
//             onChange={(e) => {
//               setAmount(e.target.value);
//             }}
//             required
//           ></input>
//         </div>
//         <div className={classes["form-field-container"]}>
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}
//             required
//           ></textarea>
//         </div>
//
//         <div>
//           <button type="submit">Submit</button>
//         </div>
