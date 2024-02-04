import { useState } from "react"

const TicketPage = () => {
    const [fromData, setFromData] = useState({
status: 'not started',
progress: 0,
timestamp: new Date().toISOString()

    })
    const editMode = false

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = () => {
        const value = e.target.value
        const name = e.target.name
    }

    setFromData((prevState) => ({
        ...prevState,
        [name]: value
        
    }))


    return (
<div className="ticket">

    <h1>{editMode ? 'Udate your Ticket' : 'Create your Ticket'}</h1>
    <div className="ticket-container">
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                require={true}
                value={fromData.title}
                />
            </section>
        </form>
    </div>
</div>
    )
}


export default TicketPage