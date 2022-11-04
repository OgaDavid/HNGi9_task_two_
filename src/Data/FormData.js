const FormData = [
    {
        key: 1,
        id: 'first_name',
        htmlFor: 'firstName',
        label: 'First Name',
        inputType: 'text',
        placeholder: 'Enter your first name.',
        errorMsg: 'Enter valid first name.',
        required: true,
        pattern: "[A-Za-z ',.-]{2,16}"
    },
    {
        key: 2,
        id: 'last_name',
        htmlFor: 'lastName',
        label: 'Last Name',
        inputType: 'text',
        placeholder: 'Enter your Last name.',
        errorMsg: 'Enter valid last name.',
        required: true,
        pattern: "[A-Za-z ',.-]{2,16}"
    },
    {
        key: 3,
        id: 'email',
        htmlFor: 'email',
        label: 'Email',
        inputType: 'email',
        placeholder: 'yourname@gmail.com',
        errorMsg: 'Enter a valid Email.',
        required: true
    }
]

export default FormData;