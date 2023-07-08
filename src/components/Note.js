import { MdDeleteForever} from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote}) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small className='date'>{date}</small>
				<div className='operations'>
					<MdDeleteForever
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.3em'
					/>
				</div>
			</div>
		</div>
	);
};

export default Note;