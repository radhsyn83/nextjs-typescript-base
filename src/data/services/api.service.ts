import Cookies from 'js-cookie';

export class ApiService implements BaseApiService {
  async POST(url: string, body: any): Promise<any> {
    let header: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token = Cookies.get('token');
    if (token) {
      header['token'] = token;
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(body),
    });
    return await res.json();
  }
}
