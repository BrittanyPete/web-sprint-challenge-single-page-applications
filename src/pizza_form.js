import React from 'react';


export default function CreatePizza (props) {
    const { values } = props;
    
    return (
        <div>
        <h1>Create Your Pizza</h1>
            <form id='pizza-form'>
                <label>Name:
                    <input 
                        id='name-input'
                        value={values.name}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Size:
                    <select id='size-dropdown' value={values.size} name='size'>
                        <option value=''>--Select a Size!--</option>
                        <option value='personal'>Personal</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='Family'>Family</option>
                    </select>

                </label>

            </form>
        </div>
    )
}