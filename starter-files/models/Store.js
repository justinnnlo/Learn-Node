mongoose = require('mongoose');
// there are a few ways to wait for data to come back, built in callback, promise libaraies, we will use built in ES6 promise async await!!
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({ 
    name: {
        type: String, 
        trim: true, 
        required: 'Please enter a store name.'
    },
    // slug is auto generated! with a pre-saved hook
    slug: String,
    description: {
        type: String, 
        trim: true,
        required: 'Please enter a description.'
    },
    // an array of string -> [ ] + String inside as type
    tag: [String]
});

// it will happen everytime before we save a store
storeSchema.pre('save', (next) => {
    if (!this.isModified(name)) {
        next(); // skip it
        return; // return it and stop this function from running
    };
    this.slug = slug(this.name);
    next();
});

// main thing that we are exporting
module.export = mongoose.model('store', storeSchema);


