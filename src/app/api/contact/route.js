import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";


export async function POST(req,res){

    try {
        const body = await req.json()
        console.log("bodyValue-->",body);
        await dbConnect()

        await Contact.create(body)

        return NextResponse.json({
            message : "Sumbitted sucessfully"
        },{
            status: 200 
        }
        )
         
    } catch (error) {

        console.log(error);

        return NextResponse.json({
            message : "Error in submitting"
        },{
            status: 500
        }
        )
        
    }
}