import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"

export const BasicDetails = [
    {
        title: 'Customer Number',
        type: 'text',
        placeholder: '',
        input: true,
        textarea: false,
        important: true,
    },
    {
        title: 'Customer Type',
        type: 'text',
        placeholder: 'User/Admin/Customer',
        input: true,
        textarea: false,
        important: true,
    },
    {
        title: 'Customer Name',
        type: 'text',
        placeholder: 'John Smith',
        input: true,
        textarea: false,
        important: true,
    },
    {
        title: 'Email',
        type: 'email',
        placeholder: 'john.smith@gmail.com',
        input: true,
        textarea: false,
        important: true,
    },
]

export const ApiDetails = [
    {
        DestinationName: 'Business Central',
        ApiType: 'Monthly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Expense',
        ApiType: 'Yearly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Expense',
        ApiType: 'Weekly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Business Central',
        ApiType: 'Yearly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Sale Order',
        ApiType: 'Weekly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Expense',
        ApiType: 'Monthly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Business Central',
        ApiType: 'Monthly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Expense',
        ApiType: 'Yearly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Expense',
        ApiType: 'Weekly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Business Central',
        ApiType: 'Yearly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Sale Order',
        ApiType: 'Weekly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
    {
        DestinationName: 'Expense',
        ApiType: 'Monthly Benifits',
        ApiUrl: 'sioudbosnonvonsdonvosinvosindvo',
        ClientId: 'baiucbiusbeuwbi',
        ClientSecret: 'siooaiwnic'
    },
]

export const AddCustomerDetails = [

    {
        title: 'Customer Type',
        type: 'text',
        selectData: [{
            label: "Admin",
            value: "admin",
        },
        {
            label: "Customer Admin",
            value: "customer_admin",
        }],
        input: false,
        textarea: false,
        important: true,
        customer: true,
        DropDown: true,
    },
    {
        title: 'First Name',
        type: 'text',
        placeholder: 'John ',
        input: true,
        textarea: false,
        important: true,
        customer: true,
    },
    {
        title: 'Last Name',
        type: 'text',
        placeholder: 'Smith',
        input: true,
        textarea: false,
        important: true,
        customer: true,
    },
    {
        title: 'Email',
        type: 'email',
        placeholder: 'john.smith@gmail.com',
        input: true,
        textarea: false,
        important: true,
        customer: true,
    },
    {
        title: 'Password',
        type: 'password',
        placeholder: '',
        input: false,
        textarea: false,
        important: true,
        customer: true,
        password : true,
    },
]