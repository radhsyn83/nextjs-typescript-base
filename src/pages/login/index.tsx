import { useAppDispatch } from '@/data/hook';
import { login } from '@/data/slicer/userSlicer';

export default function Login() {
  const dispatch = useAppDispatch();

  const doLogin = async () => {
    const body = {
      username: 'admin',
      password: '123',
      extras: {},
    };

    dispatch(login(body));
  };

  return (
    <div>
      <button onClick={doLogin}>Logins</button>
    </div>
  );
}
