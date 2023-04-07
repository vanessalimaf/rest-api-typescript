import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";

export class VideoController{
    async create(req: Request, res: Response) {
        const { title, url } = req.body
        const { idRoom } = req.params

        try {
            const room = await roomRepository.findOneBy({id: Number(idRoom)})

            if (!room){
                return res.status(404).json({mensage: 'Aula não existe'})
            }

            const newVideo = videoRepository.create({
                title,
                url,
                room
            })
            await videoRepository.save(newVideo)

            return res.status(201).json(newVideo)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}