import { Server } from "https://deno.land/std@0.198.0/http/mod.ts";
import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

const port = 8080;
const handler = (request: Request) => {
  const body = `
  <svg width="99" height="99" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="1" height="1" fill="#${
    randomNumber({ min: 0, max: 0xffffff }).toString(16)
  }"/><!--左上-->
    <rect x="1" y="0" width="1" height="1" fill="#${
    randomNumber({ min: 0, max: 0xffffff }).toString(16)
  }"/><!--右上-->
    <rect x="0" y="1" width="1" height="1" fill="#${
    randomNumber({ min: 0, max: 0xffffff }).toString(16)
  }"/><!--左下-->
    <rect x="1" y="1" width="1" height="1" fill="#${
    randomNumber({ min: 0, max: 0xffffff }).toString(16)
  }"/><!--右下-->
    </svg>
  `;

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": " image/svg+xml",
      "cache-control": "max-age=0, stale-while-revalidate=86400",
    },
  });
};

const server = new Server({ port, handler });
await server.listenAndServe();
