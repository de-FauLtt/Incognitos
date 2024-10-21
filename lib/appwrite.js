import { Account, Client, ID } from 'react-native-appwrite';

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

export const createUser = async (email, password, username) => {
    try{
        const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                username
        )

        if (!newAccount) throw Error;


    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}