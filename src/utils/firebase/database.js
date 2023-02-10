import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
//access to database
export const db = getFirestore();

//////////////////////////// create/get user doc from db ///////////////////////////////////////
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  // try to get user's doc ref
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef); //get back real data

  //creat reference for new user
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user: ", error);
    }
  }
  return userSnapShot;
};

//////////////////////////// add collection to db ///////////////////////////////////////
/*
collectionKey: collectionName
objectsToAdd: data
*/
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db); // batch allows transaction

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object); //set object to document
  });
  await batch.commit();
};

//////////////////////////// get categories document from db ///////////////////////////////////////
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    // console.log("docSnapshot.data()", docSnapshot.data());
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
