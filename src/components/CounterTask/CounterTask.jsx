import './counterTask.scss'

export const CounterTask = () => {
    return (
        <section>
            <div className="task-counter">
                <p className='created-task'>Tarefas criadas <span>0</span></p>
                <p className='finished-task'>Concluídas <span>0</span></p>
            </div>
        </section>
    )
}