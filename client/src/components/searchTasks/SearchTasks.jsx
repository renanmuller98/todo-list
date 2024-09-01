import './searchTasks.scss'

export const SearchTasks = () => {
    return (
        <div className='searchTasks'>
            <form>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" />
                <button>
                    Criar
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
        </div>
    )
}