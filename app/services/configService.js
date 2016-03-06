angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG OSU Stillwater',
        'id'            : '109062818916703314473',
        'googleApi'     : 'AIzaSyDzC9q_Z3phIm0IjPlopNsMlimAuEt4bNM',
        'pwaId'         : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : '',
        'twitter'       : '',
        'facebook'      : '',
        'youtube'       : '',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Android Development for Beginners',
            subtitle: 'Google Developers Study Jams is a free series of global, community-run, in-person study groups.',
            button: {
                text: 'Learn More',
                url: 'http://developerstudyjams.com/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
