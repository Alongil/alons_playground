

import { AppDataSource } from '../data-source';
import { User } from './user.entity';
import { IResponse, PaginatedResponse } from '../shared/interfaces';
import { Entities } from '../db/enums';
import { UserFiltersDto } from './dto/user-filters.dto';
import { CreateUserDto } from './dto/create-user.dto';

const userRepository = AppDataSource.getRepository(User);
export const getAllUsers = async (): Promise<IResponse<User[]>> => {
    const users =  await userRepository.find();
    return {
        data: users,
        status: 200
    }
}

export const createUser = async (userData: CreateUserDto): Promise<User['id']> => {
    const user = userRepository.create(userData);
    const savedUser = await userRepository.save(user);
    return savedUser.id;
}

export const search = async (filters: UserFiltersDto): Promise<PaginatedResponse<User>> => {
    console.log('filters', filters);
    const {
        search,
        role,
        email,
        status,
        page = 1,
        pageSize = 10,
    } = filters ?? {};

    const query = userRepository.createQueryBuilder(Entities.USER);

    if (search) {
        query.andWhere(
            `(${Entities.USER}.name ILIKE :search OR ${Entities.USER}.email ILIKE :search)`,
            { search: `%${search}%` }
        );
    }
    if (role) {
        query.andWhere(`${Entities.USER}.role = :role`, { role });
    }
    if (email) {
        query.andWhere(`${Entities.USER}.email = :email`, { email });
    }
    if (status) {
        query.andWhere(`${Entities.USER}r.status = :status`, { status });
    }

    const [data, total] = await query
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getManyAndCount();

    return {
        data,
        total,
        page,
        pageSize,
    };
}