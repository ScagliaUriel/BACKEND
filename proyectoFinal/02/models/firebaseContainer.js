import admin from "firebase-admin";
import fs from "fs";
const serviceAccount = JSON.parse(
  fs.readFileSync(
    "../firebaseDbConfig/backend-26b3f-firebase-adminsdk-4u4qa-f061fceb08.json"
  )
);

class firebaseContainer {
  constructor(collection, serviceAccount) {
    this.collection = collection;
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    this.db = admin.firestore();
  }

  async save(object) {
    // WHEN ERROR, UNDEFINED IS RETURNED
    try {
      const query = this.db.collection(this.collection);
      return (await query.add(object)).id;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  async getById(id) {
    // WHEN NO ROW IS FOUND RETURNS EMPTY ARRAY
    try {
      const doc = this.db.collection(this.collection).doc(id);
      return (await doc.get()).data();
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  async update(id, newObject) {
    // WHEN ERROR, UNDEFINED IS RETURNED
    try {
      const query = this.db.collection(this.collection).doc(id);
      return await query.update(newObject);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  async getAll() {
    // WHEN NO ROW IS FOUND RETURNS EMPTY ARRAY
    try {
      const doc = this.db.collection(this.collection);
      const docs = [];
      const response = await doc.get();
      response.forEach(doc => {
        docs.push(doc.data())
      })
      return docs;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  async deleteById(id) {
    try {
        const doc = this.db.collection(this.collection).doc(id);
        return await doc.delete();
      } catch (error) {
        console.log(error);
      } finally {
      }
  }

  async deleteAll() {
    try {
        const docs = await this.db.collection(this.collection).get();
        docs.forEach (doc => {
            doc.ref.delete();
        })
        return docs.length;
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
}
//TEST INFO
/* 
const productosContainer = new firebaseContainer("carts", serviceAccount);

const testObj = {
  timestamp: Date.now(),
  productos: [{productId: "BBDKmOsCDljKCJ7TeIyU"}, {productId: "CCDKmOsCDljKCJ7TeIyU"}],
};
const carts = await productosContainer.deleteAll();
console.log(carts);
*/