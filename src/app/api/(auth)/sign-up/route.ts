import bcrypt from 'bcryptjs'
import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/UserModel'
import { NextResponse,NextRequest } from 'next/server'

export async function POST(request : NextRequest) {
    await dbConnect()

    try {

        const {username,}
        
    } catch (error) {
        console.log('Error registering user: ',error);
        return NextResponse.json({
            success : false,
            mesaage : "Error registering user"
        },
        {
            status : 500
        }
    )
        
    }
}