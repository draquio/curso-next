import { NextResponse } from "next/server";

export async function GET(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json()
    return NextResponse.json(result)
}
export function POST(){
    return NextResponse.json({msg: "creando datos"})
}
export function PUT(){
    return NextResponse.json({msg: "Actualizando datos"})
}
export function DELETE(){
    return NextResponse.json({msg: "Eliminando datos"})
}