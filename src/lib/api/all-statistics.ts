import getTokenFromCookies from "../utils/get-cookies-token";

// Fetch All statistics
export async function getAllStatistics() {
  try {
    // get user token
    const token = await getTokenFromCookies();
    if (!token) throw new Error("You should signin");

    // Response
    const response = await fetch(`${process.env.API}/statistics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgzNjM2MWJhOGJjYTMwN2Y5YzU1MTc1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQyODY3NDh9.yCyvrOCIyx31BVaRqmWJu1tAF5SZlt0M-GDRnwm_WSg`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Server Error");

    // payload
    const payload: APIResponse<AllStatisticsResponse> = await response.json();
    if ("error" in payload) throw new Error(payload.error || "Can't fetch data");

    return payload;
  } catch (error) {
    console.log(error);
    return { message: error instanceof Error ? error.message : "Can't get data" };
  }
}
