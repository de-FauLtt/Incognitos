import { Account, Client, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ys.incognitos',
    projectId: '67163cc4001d6c643fb1',
    databaseId: '67163f610032a3aacf05',
    userCollectionId: '67163f93003a6153d2bf',
    reportCollectionId: '67163fe800329a05f9ce',
    storageId: '6716485b00048a1dce78'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try{
        const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                username
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl

            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error){
        console.log(error);
    }
}