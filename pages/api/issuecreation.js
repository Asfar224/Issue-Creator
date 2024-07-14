// /pages/api/issuecreation.js

import { firestore } from '../../firebase-config';
import { collection, addDoc , getDocs} from 'firebase/firestore';

const userCollection = collection(firestore, 'issue tracker');

const addIssue = async (issueObj) => {
    const querysnapshot = await getDocs(userCollection);
    const serialNumber =  querysnapshot.size + 1 ;
    issueObj.id = serialNumber;
    issueObj.createdAt = new Date().toISOString();
    await addDoc(userCollection, issueObj);
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const issue = req.body;
        await addIssue(issue);

        res.status(200).json({ message: 'Issue created' });
    } catch (error) {
        console.error('Error storing issue:', error); 
        res.status(500).json({ message: 'Error storing issue', error: error.message });
    }
}
