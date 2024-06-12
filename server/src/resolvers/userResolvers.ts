import type { IResolvers } from '@graphql-tools/utils';
import User, { type IUser } from '../models/User';

interface CreateUserArgs {
  name: string;
  email: string;
}

interface GetUserArgs {
  id: string;
}

const userResolvers: IResolvers = {
  Query: {
    getUser: async (_: unknown, { id }: GetUserArgs): Promise<IUser | null> => {
      return await User.findById(id);
    },
    getUsers: async (): Promise<IUser[]> => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_: unknown, { name, email }: CreateUserArgs): Promise<IUser> => {
      const user = new User({ name, email });
      await user.save();
      return user;
    },
  },
};

export default userResolvers;
