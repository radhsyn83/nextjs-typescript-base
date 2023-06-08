import Cookies from 'js-cookie';

export class ApiService implements BaseApiService {
  HEADER(): HeadersInit {
    let header: HeadersInit = {
      'Content-Type': 'application/json',
      'X-App-Key': process.env.NEXT_PUBLIC_API_KEY ?? '',
    };
    const token = Cookies.get('token');
    if (token) {
      header['Authorization'] = token;
    }
    return header;
  }

  async GET(url: string, query?: object): Promise<any> {
    var objString = '';
    //convert string to url parameter
    if (query) {
      objString =
        '?' +
        Object.keys(query)
          .map((key) => {
            return `${key}=${encodeURIComponent(query[key as keyof object])}`;
          })
          .join('&');
    }
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + url + objString, {
      method: 'GET',
      headers: this.HEADER(),
    });
    return await res.json();
  }

  async POST(url: string, body: any): Promise<any> {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + url, {
      method: 'POST',
      headers: this.HEADER(),
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async PUT(url: string, body: any): Promise<any> {
    const res = await fetch(url, {
      method: 'PUT',
      headers: this.HEADER(),
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async DELETE(url: string, query?: object, body?: any): Promise<any> {
    var objString = '';
    //convert string to url parameter
    if (query) {
      objString =
        '?' +
        Object.keys(query)
          .map((key) => {
            return `${key}=${encodeURIComponent(query[key as keyof object])}`;
          })
          .join('&');
    }
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + url + objString, {
      method: 'DELETE',
      headers: this.HEADER(),
      body: JSON.stringify(body),
    });
    return await res.json();
  }
}
