export default function Tasks(props) {
    console.log(props);
    
    return (
        
        <ul className="space-y-4">
            {props.tasks.map((task) => (
                <li key={task.id} className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">{task.title}</h2>
                    <p className="text-gray-600">{task.description}</p>
                </li>
            ))}
        </ul>
        
    )
}