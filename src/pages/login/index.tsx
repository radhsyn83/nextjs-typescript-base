import { useAppDispatch } from '@/data/hook';
import { login } from '@/data/slicer/authSlicer';

export default function Login() {
  const dispatch = useAppDispatch();

  const doLogin = async () => {
    const body = {
      username: 'kminchelle',
      password: '0lelplR',
    };
    dispatch(login(body));
  };

  return (
    <div>
      <button onClick={doLogin}>Logins</button>
    </div>
  );
}
