import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const BookBtn = ({ className, onClick }) => {
    const navigate = useNavigate()
    const handleClick = e => {
        if(onClick && typeof onClick == 'function'){
            onClick(e)
            return;
        }

        navigate('book')
    }
 
    return <button onClick={handleClick} className={twMerge('bg-primary-blue-grad px-12 py-3 w-fit text-white rounded-lg font-medium shadow-lg shadow-primary hover:scale-105 transition-transform', className)}>Book an Event</button>
}

export default BookBtn