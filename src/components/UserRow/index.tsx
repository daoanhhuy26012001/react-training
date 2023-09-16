import { TableHTMLAttributes } from 'react';

// Styles
import './userRow.css';

// Models
import { IUser } from '../../models/user';

interface UserRowProps extends TableHTMLAttributes<HTMLTableElement> {
  user?: IUser;
}

const UserRow = ({ user }: UserRowProps) => {
  const { name, email, age } = user || {};
  return (
    <tr className="information">
      <td>{name}</td>
      <td>{email}</td>
      <td>{age}</td>
    </tr>
  );
};

UserRow.defaultProps = {
  user: {
    id: '',
    name: '',
    email: '',
    age: ''
  }
};

export default UserRow;
