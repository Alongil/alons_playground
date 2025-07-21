

import { AppDataSource } from '../data-source';
import { User } from './user.entity';
import { IResponse } from '../shared/interfaces';

const userRepository = AppDataSource.getRepository(User);
export const getAllUsers = async (): Promise<IResponse<User[]>> => {
    // return { data: [{ id: '1', name: 'John Doe', email: 'john.doe@example.com', password: 'password', createdAt: new Date(), updatedAt: new Date() }], status: 200 };
    const users =  await userRepository.find();
    return {
        data: users,
        status: 200
    }
}

export const createUser = async (userData: { name: string; email: string; password?: string }): Promise<User['id']> => {
    const user = userRepository.create(userData);
    const savedUser = await userRepository.save(user);
    return savedUser.id;
}