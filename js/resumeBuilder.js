(function() {
  var model = {
    bio: {
      name: 'Kevin Huang',
      role: 'Web Developer',
      contacts: {
        mobile: '415-555-5555',
        email: 'kev@kev.com',
        github: 'kevhuang',
        twitter: '@kevhuang',
        location: 'San Francisco'
      },
      welcomeMessage: 'Aye yo!',
      skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'jQuery'],
      biopic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/1d8/19c/092273c.jpg',
      display: function() {}
    },

    education: {
      schools: [
        {
          name: 'Hack Reactor',
          location: 'San Francisco, CA',
          degree: 'Hacker',
          majors: ['Web Development'],
          dates: 2015,
          url: 'http://www.hackreactor.com/'
        }
      ],
      onlineCourses: [],
      display: function() {}
    },

    work: {
      jobs: [
        {
          employer: 'Google',
          title: 'Sr. Janitor',
          location: 'San Francisco, CA',
          dates: 'Jan 2012 - Dec 2014',
          description: 'Provided clean toilets'
        }
      ],
      display: function() {}
    },

    projects: {
      projects: [
        {
          title: 'Twittler',
          dates: 'Feb 2015',
          description: 'Built a Twitter clone from scratch',
          images: ['http://cdn.socialmediaexaminer.com/wp-content/uploads/2013/04/ck-list-timeline.png']
        }
      ],
      display: function() {}
    }
  };

  var controller = {
    init: function() {}
  };

  var view = {};

  controller.init();
})();