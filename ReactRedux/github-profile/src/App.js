import UserProfileApp from './Apps/UserProfile/UserProfileApp';
import UserListApp from './Apps/UserList/UserListApp';

const userLogin = window.location.toString().split('?')[1];
const getApp = (login) => (login ? UserProfileApp : UserListApp);
const App = getApp(userLogin);

export default App;