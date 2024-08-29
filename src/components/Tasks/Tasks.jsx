import './tasks.scss'

export const Tasks = () => {
    return (
        <section>
            <div className='no-tasks'>
                <i className="fa-solid fa-list-check"></i>
                <p style={{fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </section>
    )
}