import React, { FC } from 'react';

interface UserData {
    id: number;
    name: string;
    email: string;
    pairs: string[];
}
interface UserFormProps {
    data: UserData;
    return: Function
}

const InnerUsers: FC<UserFormProps> = (props) => {
    const formFields = [
        { label: 'Name', value: props.data.name, id: 'name' },
        { label: 'Email', value: props.data.email, id: 'email' },
        ...props.data.pairs
            .filter(pair => pair.trim() !== '')
            .map((pair, index) => ({
                label: `Pair ${index + 1}`,
                value: pair,
                id: `pair${index}`,
            })),
    ];

    return (
        <div className='rounded-[20px] shadow-[5px_10px_10px]'
            style={{
                width: "75vw",
                backgroundColor: 'white',
                margin: 'auto',
                padding: '20px 20px 20px 20px',
                border: "1px black solid",
            }}>

            <div className='cursor-pointer' onClick={() => props.return({
                id: NaN,
                name: "",
                email: "",
                pairs: [],
                lastSeenOnline: ""
            })}>
                ←
            </div>

            <form style={formStyle}>
                {formFields.map((field, index) => (
                    <div key={index} style={inputContainerStyle}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input type="text" id={field.id} value={field.value} />
                    </div>
                ))}
            </form>
        </div>
    );
};

const formStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
};

const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

export default InnerUsers;