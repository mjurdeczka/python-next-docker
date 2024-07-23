const initialRequest = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchData = async (url: string | URL, init: RequestInit = {}) => {
  try {
    const response = await fetch(url, { ...initialRequest, ...init });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
