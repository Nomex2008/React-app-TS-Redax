import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  const {users,isLoading,error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='App'>
      {/*
      {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {users.length > 0 ? (
            JSON.stringify(users, null, 2)
        ) : (
            <h1>No users found</h1>
        )}
      */}
      <PostContainer/>
    </div>
  );
}

export default App;
