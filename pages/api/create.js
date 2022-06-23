import { prisma } from "../../lib/prisma";

export default async function handler(req, res){
	const {id, firstName, lastName, email, avatar} = req.body

	try {
		await prisma.note.create({
			data: {
        id,
        firstName,
        lastName,
        email,
        avatar
			}
		})
		res.status(200).json({message: 'User Created'})
	} catch (error) {
		console.log("Failure");
	}
}