var dataModule = (function(){
    function User(username, password){
        this.username = username;
        this.password = password;
    }

    function Database(){
        this.database = [];
    }

    Database.prototype.checkUsernameAndPassword = function(username){
        var userExist = false;

        this.database.forEach(function(user){
            if(user.username == username && user.password ==password){
                userExist = true;
                return;
            }
        });

        return userExist;
    }

    Database.prototype.addUser = function(username, password){
        var user = new User(username,password);
        //TODO provera jedinstvenosti korisnickog imena
        this.database.push(user);
    }

    //pravimo bazu podataka
    var database = new Database();
    
    //pravimo korisnike
    var pera = new User('Pera', 'pera123');
    var zika = new User('Zika', 'Zika123');

    


})();