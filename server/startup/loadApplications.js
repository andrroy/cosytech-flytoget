Meteor.startup(function(){
    if(Applicatons.find().count() === 0){

        var applications = [
            {'name':'Flight',
                'description':'Gives you flight information' },
            {'name':'Entertainment',
                'description':'Gives you entertainment' },
            {'name':'Breaking',
                'description':'Gives you global news' },
            {'name':'Useful Info',
                'description':'Gives you useful information' }
        ];

        for(var i = 0; i<applications.length; i++){
            Applicatons.insert({name: applications[i].name, description: applications[i].description});
        }
    }
});