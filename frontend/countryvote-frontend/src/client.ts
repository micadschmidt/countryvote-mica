const API_URL = import.meta.env.VITE_API_URL as string;

async function request(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    let body: any = null;
    try {
      body = await res.json();
    } catch {
      // ignore
    }
    throw { status: res.status, body };
  }

  return res.json();
}

export const apiClient = {
  get(path: string) {
    return request(path);
  },
  post(path: string, body: unknown) {
    return request(path, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
};
