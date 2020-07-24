import React from 'react'

export default function Form(props) {
    const { form, handleChange, handleSubmit, disable } = props
    return(
        <form onSubmit={handleSubmit}>
            <h2>Build Your Own Pizza</h2>

            <label>
                Choice of Size
                <select name="choice" value={form.choice} onChange={handleChange}>
                    <option disabled value="">Choose</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>
            </label>

            <h2>Add Toppings</h2>
                <label>
                    Olives    
                    <input type='checkbox' name='olives' checked={form.olives} onChange={handleChange} />
                </label>

                <label>
                    Pineapples    
                    <input type='checkbox' name='pineapples' checked={form.pineapples} onChange={handleChange} />
                </label>

                <label>
                      Three Cheese  
                    <input type='checkbox' name='cheese' checked={form.cheese} onChange={handleChange} />
                </label>

                <label>
                    Green Pepper    
                    <input type='checkbox' name='pepper' checked={form.pepper} onChange={handleChange} />
                </label>
                
                <label>
                    Special Instructions
                    <input type="textarea" name='instructions' value={form.instructions} onChange={handleChange} />
                </label>
            
            <button disabled={disable} type='submit' >Add to Order</button>
        </form>
    )
}