import { NextResponse } from "next/server";

export async function GET(req, {params}){
   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
   const result = await response.json();
   return NextResponse.json(result) 
}