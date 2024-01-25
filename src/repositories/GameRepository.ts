import prismaClient from '../../prisma/prismaClient';
import { IGameDTO } from '../entities/Game';
import { IGameRepository } from './IGameRepository';

class GameRepository implements IGameRepository {
  async register({ releaseData, platform, name, designer, developer, genre, mode }: IGameDTO): Promise<void> {
    await prismaClient.game.create({
      data: {
        releaseData,
        platform,
        name,
        designer,
        developer,
        genre,
        mode
      }
    });
  }
}

export { GameRepository };
