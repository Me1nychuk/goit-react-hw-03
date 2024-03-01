import PropTypes from 'prop-types';
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css"


const Contact = ({id,username,number, handleDelete}) => {
  return (
      <div className={css.mainWrapper}>
          <div className={css.textWrapper}>
              <div> <FaUser /> {username}</div>
              <div> <FaPhone /> {number}</div>
          </div>

            <button type="button" onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

Contact.PropTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
export default Contact