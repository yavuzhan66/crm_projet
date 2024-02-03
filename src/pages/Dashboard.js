import TicketCard from '../components/TickeCard'


const Dashboard = () => {

    const tickets = [
{
    category: 'Q1 2024',
    color: 'red',
    title: 'CRM Yavuzhan',
    owner:'Yavuzhan Yoldaser',
    avatar: 'https://media.licdn.com/dms/image/D4E03AQG1gUOlWQJoWg/profile-displayphoto-shrink_200_200/0/1704262194383?e=1711584000&v=beta&t=GlOY9umVtxK5J9GmW-9fwWzUHSXBw476zQAuIAhHIsA',
status: 'done',
priority: 5,
progress:40,
description: 'Projet CRM pour faciliter l\'insertion d\'informations client ou prospects',
timestamp:'2024-01-23T07:36:17+0000'

},
{
    category: 'Q1 2024',
    color: 'red',
    title: 'CRM Yavuzhan',
    owner:'Yavuzhan Yoldaser',
    avatar: 'https://media.licdn.com/dms/image/D4E03AQG1gUOlWQJoWg/profile-displayphoto-shrink_200_200/0/1704262194383?e=1711584000&v=beta&t=GlOY9umVtxK5J9GmW-9fwWzUHSXBw476zQAuIAhHIsA',
status: 'done',
priority: 2,
progress:70,
description: 'Création de contenu réseaux sociaux',
timestamp:'2024-01-23T07:36:17+0000'
},
{
    category: 'Q2 2024',
    color: 'blue',
    title: 'Creation de video',
    owner:'Yavuzhan Yoldaser',
    avatar: 'https://media.licdn.com/dms/image/D4E03AQG1gUOlWQJoWg/profile-displayphoto-shrink_200_200/0/1704262194383?e=1711584000&v=beta&t=GlOY9umVtxK5J9GmW-9fwWzUHSXBw476zQAuIAhHIsA',
status: 'done',
priority: 3,
progress:10,
description: 'Création de video ',
timestamp:'2024-01-23T07:36:17+0000'
}
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]
    console.log(uniqueCategories)


    return (
<div className="dashboard">
    <h1>My projet crm</h1>
    <div className="ticket-container">
    { tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
    <div key={categoryIndex}>
    
        <h3>{uniqueCategory}</h3>
        
        {tickets.filter(ticket => ticket.category === uniqueCategory)           
        .map((filteredTicket, _index) => (
            <TicketCard
            id={_index}
            color={filteredTicket.color}
            ticket={filteredTicket}
            />
        ))
        }
    
    </div>
    ))}
    
     </div>
    
    </div>
    )
}

export default Dashboard