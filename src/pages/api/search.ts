import firebase from '../../lib/firebase';

const database = firebase.database();

export default async (req, res) => {
    const snapshot = await database.ref('/products').once('value');

    res.json(snapshot.val());
}
