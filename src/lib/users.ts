import type { User } from "@/types";

// Authentication
const baseUrl = 'https://interviews-accounts.elevateapp.com/api/ui/users';
const reqParams = `?authentication_user_id=${process.env.USER_ID}&authentication_token=${process.env.AUTH_TOKEN}`

type UserIdsRes = {
    user_ids: number[];
}

export async function fetchUserIds(): Promise<number[]> {
    // First, fetch user ids
    let data;
    try {
        const response = await fetch(`${baseUrl}${reqParams}`,
            {
                method: 'GET',
                headers: {  'Content-Type': 'application/json' },

            });
        data = (await response.json()) as UserIdsRes;


    } catch (error) {
        throw new Error("There was an error fetching user ids");
        console.log('Error: ', error);
    }

    return data?.user_ids || [];
}

export async function fetchUser(userId: number | string): Promise<User | undefined> {

    let data;
    try {
        const response = await fetch(`${baseUrl}/${userId}${reqParams}`,
            {
                method: 'GET',
                headers: {  'Content-Type': 'application/json' },

            });
        data = (await response.json()) as User;


    } catch (error) {
        throw new Error("There was an error fetching user data");
        console.log('Error: ', error);
    }

    return data;
}

export async function fetchUsers(): Promise<User[]> {
    const userIds = await fetchUserIds();
    const users: User[] = [];
    for (const userId of userIds) {
        const user = await fetchUser(userId) as User;
        users.push(user);
    }

    return users;
}


