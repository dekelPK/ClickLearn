/* global use, db */
// MongoDB Playground

const database = 'mycourses';
const collection = 'Courses';

// Use the new database
use(database);

// Create a new collection
db.createCollection(collection);
