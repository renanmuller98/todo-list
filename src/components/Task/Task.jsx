import './task.scss'

export const Task = () => {
    return (
        <section>
            <div className='task'>
                <input type="checkbox" id='checkbox'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </section>
    )
}