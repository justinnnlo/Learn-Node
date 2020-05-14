exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};

exports.addStore = (req, res) => {
    console.log('in add store');
    // render out a store template 
    res.render('editStore', {
        title: 'Add Store'
    });
};
