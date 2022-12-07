import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error. {error}</h1>
    }

    return (
        <div>
            {
                users.length == 0
                ?
                <button onClick={fetchUsers}> GET USERS </button>
                :
                <h4>USERS: </h4>
            }
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;