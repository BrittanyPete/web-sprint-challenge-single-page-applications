import React from 'react';


export default function CreatePizza (props) {
    const { values, change } = props;

    
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    
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
                        placeholder='Enter first & last name'
                        onChange={onChange}
                    />
                </label>
                <label>Size:
                    <select id='size-dropdown' value={values.size} name='size' onChange={onChange}>
                        <option value=''>--Select a Size!--</option>
                        <option value='personal'>Personal</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='Family'>Family</option>
                    </select>
                </label>
                <label>Cheese
                    <input 
                      type='checkbox'
                      name='cheese'
                      checked={values.cheese}
                      onChange={onChange}
                    />
                </label>
                <label>Pepperoni
                    <input 
                      type='checkbox'
                      name='pepperoni'
                      checked={values.pepperoni}
                      onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                      type='checkbox'
                      name='sausage'
                      checked={values.sausage}
                      onChange={onChange}
                    />
                </label>
                <label>Ham
                    <input 
                      type='checkbox'
                      name='ham'
                      checked={values.ham}
                      onChange={onChange}
                    />
                </label>
                <label>Black Olives
                    <input 
                      type='checkbox'
                      name='olives'
                      checked={values.olives}
                      onChange={onChange}
                    />
                </label>
                <label>Diced Tomatoes
                    <input 
                      type='checkbox'
                      name='tomatoes'
                      checked={values.tomatoes}
                      onChange={onChange}
                    />
                </label>
                <label>Grilled Chicken
                    <input 
                      type='checkbox'
                      name='chicken'
                      checked={values.chicken}
                      onChange={onChange}
                    />
                </label>
                <label>Extra Cheese
                    <input 
                      type='checkbox'
                      name='extraCheese'
                      checked={values.ExtraCheese}
                      onChange={onChange}
                    />
                </label>
                <label>Special Instructions:
                    <input 
                      type='text'
                      id='special-text'
                      placeholder='Any special instructions?'
                      maxLength='250'
                      onChange={onChange}
                    />
                </label>
                <button id='order-button'>Place Order</button>
            </form>
        </div>
    )
}